import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './bottomNav.css'
import homeIcon from '../../assets/icons/home.svg'
import bookIcon from '../../assets/icons/book.svg'
import searchIcon from '../../assets/icons/search 1.svg'
import profileIcon from '../../assets/icons/profile.svg'

export default function BottomNav() {
    const navigate = useNavigate()
    const location = useLocation()
    const [active, setActive] = useState('')

    // keep active tab in sync with current route
    useEffect(() => {
        if (location.pathname.startsWith('/courses')) setActive('course')
        else if (location.pathname === '/profile') setActive('profile')
        else if (location.pathname === '/dashboard' || location.pathname === '/') setActive('home')
        else setActive('')
    }, [location.pathname])

    function go(tab, path) {
        setActive(tab)
        if (path) navigate(path)
    }

    return (
        <nav className="bottom-nav">
            <button className={`nav-btn ${active === 'home' ? 'active' : ''}`} onClick={() => go('home', '/')}
                aria-pressed={active === 'home'}>
                <span className="icon-box"><img src={homeIcon} alt="home" /></span>
                <span>Home</span>
            </button>
            <button className={`nav-btn ${active === 'course' ? 'active' : ''}`} onClick={() => go('course', '/courses')}
                aria-pressed={active === 'course'}>
                <span className="icon-box"><img src={bookIcon} alt="course" /></span>
                <span>Course</span>
            </button>
            <button className={`nav-btn ${active === 'search' ? 'active' : ''}`} onClick={() => go('search', '/courses')} aria-pressed={active === 'search'}>
                <span className="icon-box"><img src={searchIcon} alt="search" /></span>
                <span>Search</span>
            </button>
            <button className={`nav-btn ${active === 'profile' ? 'active' : ''}`} onClick={() => go('profile', '/profile')} aria-pressed={active === 'profile'}>
                <span className="icon-box"><img src={profileIcon} alt="profile" /></span>
                <span>Profile</span>
            </button>
        </nav>
    )
}

import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainLayout from '../../layouts/MainLayout'
import './ComboCourses.css'
import img1 from '../../assets/images/Data Science 1.svg'
import img2 from '../../assets/images/Data Science 2.svg'
import img3 from '../../assets/images/Data Science 3.svg'
import img4 from '../../assets/images/Data Science 4.svg'
import img5 from '../../assets/images/Data Science 5.svg'
// import arrowIcon from '../../assets/icons/left-arrow.svg'
// nav icons removed - using shared BottomNav instead
import menuIcon from '../../assets/icons/menu 1.svg'
import siteLogo from '../../assets/logo.svg'
import right_arrow from '../../assets/icons/right_arrow.svg'
import LearnOval from '../../assets/images/LearnOval.png'
import oval from '../../assets/images/oval.png'
const cards = [
  {
    id: 1,
    title: 'Excel in French',
    subtitle: 'Course about Learning Excel in French',
    img: img1,
    videoId: '822984570',
    language: 'french'
  },
  {
    id: 2,
    title: 'Microsoft Access in French',
    subtitle: 'Course about Learning Microsoft Access in French',
    img: img1,
    videoId: '827518045',
    language: 'french'
  },
  {
    id: 3,
    title: 'PowerBI in French',
    subtitle: 'Course about Learning PowerBI in French',
    img: img1,
    videoId: '844144537',
    language: 'french'
  },
  {
    id: 4,
    title: 'Python in French',
    subtitle: 'Course about Learning Python in French',
    img: img1,
    videoId: '850162199',
    language: 'french'
  },
  {
    id: 5,
    title: 'Tableau in French',
    subtitle: 'Course about Learning Tableau in French',
    img: img1,
    videoId: '833282671',
    language: 'french'
  },
  {
    id: 6,
    title: 'Web Designing (HTML,PHP)',
    subtitle: 'Course about Learning Web Designing (HTML, PHP)',
    img: img1,
    videoId: '456976628',
    language: 'english'
  },
  {
    id: 7,
    title: 'Digital Marketing',
    subtitle: 'Course about Learning Digital Marketing',
    img: img2,
    videoId: '495108312',
    language: 'english'
  },
  {
    id: 8,
    title: 'Excel ',
    subtitle: 'Course about Learning Excel',
    img: img3,
    videoId: '485421306',
    language: 'english'
  },
  {
    id: 9,
    title: 'Access',
    subtitle: 'Course about Learning Access',
    img: img4,
    videoId: '487149845',
    language: 'english'
  },
  {
    id: 10,
    title: 'Web Designing (Wordpress)',
    subtitle: 'Course about Learning Web-designing Wordpress',
    img: img5,
    videoId: '490166994',
    language: 'english'
  },
  {
    id: 11,
    title: 'Presentation Skills',
    subtitle: 'Course about Learning Presentation Skills',
    img: img2,
    videoId: '468564213',
    language: 'english'
  },
  {
    id: 12,
    title: 'Android',
    subtitle: 'Course about Learning Android',
    img: img3,
    videoId: '566065887',
    language: 'english'
  },
  {
    id: 13,
    title: 'Python',
    subtitle: 'Course about Learning Python',
    img: img4,
    videoId: '574519074',
    language: 'english'
  },
  {
    id: 14,
    title: 'Tableau',
    subtitle: 'Course about Learning Tableau',
    img: img5,
    videoId: '586725732',
    language: 'english'
  },
  {
    id: 15,
    title: 'Power BI',
    subtitle: 'Course about Learning Power BI',
    img: img2,
    videoId: '591622308',
    language: 'english'
  },
  {
    id: 16,
    title: 'MySQL Server',
    subtitle: 'Course about Learning MySQL Server',
    img: img3,
    videoId: '603795531',
    language: 'english'
  },
  {
    id: 17,
    title: 'Adobe Photoshop',
    subtitle: 'Course about Learning Adobe Photoshop',
    img: img4,
    videoId: '627351298',
    language: 'english'
  },
  {
    id: 18,
    title: 'JavaScript',
    subtitle: 'Course about Learning JavaScript',
    img: img5,
    videoId: '648548828',
    language: 'english'
  },
  {
    id: 19,
    title: 'CloudComputingGit',
    subtitle: 'Course about Learning Cloud Computing & Git',
    img: img2,
    videoId: '805436391',
    language: 'english'
  },
  {
    id: 20,
    title: 'MachineLearning',
    subtitle: 'Course about Learning Machine Learning',
    img: img3,
    videoId: '854338568',
    language: 'english'
  },
  {
    id: 21,
    title: 'Data Automation (ETL)',
    subtitle: 'Course about Learning Data Automation (ETL)',
    img: img4,
    videoId: '901832444',
    language: 'english'
  },
  {
    id: 22,
    title: 'Business Email Writing',
    subtitle: 'Course about Learning Business Email Writing',
    img: img4,
    videoId: '640666933',
    language: 'english'
  },
 
]

export default function ComboCourses() {
  const wrapperRef = useRef(null)
  const navigate = useNavigate()
  const [languageFilter, setLanguageFilter] = useState('all') // 'all', 'english', 'french'

  // Sort and filter cards: English first, then French
  const getFilteredCards = () => {
    let filtered = cards
    
    // Apply language filter
    if (languageFilter === 'english') {
      filtered = cards.filter(card => card.language === 'english')
    } else if (languageFilter === 'french') {
      filtered = cards.filter(card => card.language === 'french')
    } else {
      // Show all but sort: English first, then French
      filtered = [...cards].sort((a, b) => {
        if (a.language === 'english' && b.language === 'french') return -1
        if (a.language === 'french' && b.language === 'english') return 1
        return 0
      })
    }
    
    return filtered
  }

  // useEffect(() => {
  //   // function fitCard() {
  //   //   if (!wrapperRef.current) return
  //   //   const vw = window.innerWidth
  //   //   const vh = window.innerHeight
  //   //   // scale so the 393x1850 design covers the screen (no side gaps)
  //   //   const scale = Math.max(vw / 393, vh / 1850)
  //   //   wrapperRef.current.style.setProperty('--scale', String(scale))
  //   // }

  //   fitCard()
  //   window.addEventListener('resize', fitCard)
  //   return () => window.removeEventListener('resize', fitCard)
  // }, [])
  return (
    <MainLayout>
      <div className="combo-courses-container" ref={wrapperRef}>
        <div className="combo-courses-page" style={{ transform: 'scale(var(--scale,1))' }}>
          <header className="top-rectangle">
            <div className="top-bar">
              <img src={menuIcon} alt="menu" className="menu-icon" />
              <img src={oval} alt="logo" className="site-logo" />
            </div>
          </header>

          <h2 className="combo-title">Active Courses</h2>
          
          <div className="language-filters">
            <button 
              className={`filter-btn ${languageFilter === 'all' ? 'active' : ''}`}
              onClick={() => setLanguageFilter('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${languageFilter === 'english' ? 'active' : ''}`}
              onClick={() => setLanguageFilter('english')}
            >
              English
            </button>
            <button 
              className={`filter-btn ${languageFilter === 'french' ? 'active' : ''}`}
              onClick={() => setLanguageFilter('french')}
            >
              French
            </button>
          </div>

          <div className="combo-list">
            {getFilteredCards().map(card => (
              <div className="combo-card" key={card.id}>
                <div className="combo-card-inner">
                  <div className="card-header">
                    <h3 className="card-title">{card.title}</h3>
                    <img src={card.img} alt={card.title} className="card-thumb" />
                  </div>

                  {/* <div className="card-divider" /> */}

                  <p className="card-desc">{card.subtitle}</p>

                  <div className="card-footer">
                    <button className="course-cta" onClick={() => navigate(`/courses/${card.id}`)}>
                      <span>Course Details</span>
                      <span className="cta-circle"><img src={right_arrow} alt="right_arrow" className="cta-arrow" /></span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

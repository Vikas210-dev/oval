import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import BottomNav from '../components/BottomNav/BottomNav'
import './MainLayout.css'

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <BottomNav />
    </div>
  )
}

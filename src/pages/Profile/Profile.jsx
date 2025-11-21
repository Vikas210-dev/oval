import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import './Profile.css'
import menuIcon from '../../assets/icons/menu 1.svg'
import siteLogo from '../../assets/logo.svg'
import bookIcon from '../../assets/icons/book.svg'
import graphIcon from '../../assets/icons/graph_logo.svg'
import subscriptionIcon from '../../assets/icons/subscription.svg'
import starIcon from '../../assets/icons/star.svg'
import tickIcon from '../../assets/icons/tick_icon.svg'
import oval from '../../assets/images/oval.png'
export default function Profile() {
  return (
    <MainLayout>
      <div className="profile-page">
        <div className="header-top">
          <img src={menuIcon} alt="menu" className="menu-icon" />
        </div>
        <div className="logo-badge"><img src={oval} alt="logo" /></div>

        <main className="profile-main">
          {/* Hero banner with centered title and overlaid user pill */}
          <section className="profile-hero">
            <h1 className="profile-title">Profile</h1>
            <div className="profile-banner" aria-hidden="true" />
            <div className="user-pill">
              <div className="user-avatar">AJ</div>
              <div className="user-info">
                <div className="user-name">Alex Johnson</div>
                <div className="user-email">alex.johnson@example.com</div>
              </div>
            </div>
          </section>

          {/* One big card (340x795) containing all sections */}
          <section className="profile-big-card card">
            <div className="sub-row">
              <div className="sub-left">
                <div className="sub-title-row">
                  <img src={subscriptionIcon} alt="" aria-hidden className="sub-icon" />
                  <div className="sub-title">Subscription Detail</div>


                </div>
                <div className="sub-pill-wrap">
                  <div className="sub-pill">Premium</div>
                  <div className="sub-pill outline">Active</div>
                </div>
              </div>
            </div>

            {/* Start Plan box */}
            <div className="start-plan">
              <div className="start-plan-head">
                <div className="plan-title">Start Plan</div>
                <div className="plan-sub">$19.99 / 30 days</div>
              </div>
              <div className="renewal-box">
                <div className="renewal-item">
                  <div className="renewal-label">Last Renewal</div>
                  <div className="renewal-date">Aug 05, 2025</div>
                </div>
                <div className="renewal-item">
                  <div className="renewal-label">Next Renewal</div>
                  <div className="renewal-date">Sep 04, 2025</div>
                </div>
              </div>
            </div>

            {/* Icon stats row, as per Figma (book + graph) */}
            <div className="stats-row">
              <div className="stat">
                <div className="icon-badge"><img src={bookIcon} alt="courses" /></div>
                <div className="stat-num">8</div>
                <div className="stat-label">Course Completed</div>
              </div>
              <div className="v-sep" aria-hidden />
              <div className="stat">
                <div className="icon-badge"><img src={graphIcon} alt="hours" /></div>
                <div className="stat-num">127</div>
                <div className="stat-label">Hours Learned</div>
              </div>
            </div>

            {/* Progress - same as Courses */}
            {/* <div className="progress-wrap">
              <div className="progress-head">
                <div className="progress-label">Overall Progress</div>
                <div className="progress-count">8/16 courses</div>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: '50%' }} />
              </div>
            </div> */}


            <div className="progress-wrap">
              <div className="progress-head">
                <div className="progress-label">Overall Progress</div>
                <div className="progress-count">8/16 lessons</div>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: '50%' }} />
              </div>
              {/* <p>50% complete</p> */}
              {/* <div className="progress-note">50% complete</div> */}
            </div>

            {/* Streak row */}
            <div className="streak-row">
              <div className="streak-left">
                <img src={starIcon} alt="" className="streak-icon" />
                <div className="streak-num">12</div>
                <div className="streak-label">Day Learning Streak</div>
              </div>
              <div className="streak-ind" aria-hidden />
            </div>

            <button className="manage-sub">Manage Subscription</button>

            <div className="divider" />

            <div className="plan-includes">
              <h4>Your Plan Includes:</h4>
              <ul>
                <li className="plan-item"><img src={tickIcon} alt="" />Day Learning Streak</li>
                <li className="plan-item"><img src={tickIcon} alt="" />HD video quality</li>
                <li className="plan-item"><img src={tickIcon} alt="" />Certificates of completion</li>
                <li className="plan-item"><img src={tickIcon} alt="" />Offline downloads</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </MainLayout>
  )
}

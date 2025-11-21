import React, { useEffect, useRef } from 'react'
import AuthLayout from '../../layouts/AuthLayout'
import './OtpVerification.css'
import illustration from '../../assets/banner1.svg'
import back_arrow from '../../assets/back_arrow.svg'
import { useNavigate } from 'react-router-dom'

function OtpVerification() {
  const wrapperRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    function fitCard() {
      if (!wrapperRef.current) return
      const vw = window.innerWidth
      const vh = window.innerHeight
      // ✅ Use min instead of max so card always fits
      const scale = Math.min(vw / 323, vh / 672)
      wrapperRef.current.style.setProperty('--scale', String(scale))
    }

    fitCard()
    window.addEventListener('resize', fitCard)
    return () => window.removeEventListener('resize', fitCard)
  }, [])

  return (
    <AuthLayout>
      <div className="otp-wrapper" ref={wrapperRef}>
        <div className="otp-card">
          {/* Back button */}
          <div className="otp-back">
            <img
              src={back_arrow}
              alt="Back"
              className="back-arrow"
              onClick={() => navigate('/')}
            />
          </div>

          {/* Main section */}
          <div className="otp-main">
            <div className="otp-content">
              <div className="otp-title">Verification</div>
              <div className="otp-desc">
                We've sent you the verification code on +91 9999999999
              </div>
            </div>

            {/* OTP inputs */}
            <div className="otp-inputs">
              <div className="otp-box">
                <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1} placeholder="-" />
              </div>
              <div className="otp-box">
                <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1} placeholder="-" />
              </div>
              <div className="otp-box">
                <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1} placeholder="-" />
              </div>
              <div className="otp-box">
                <input type="text" inputMode="numeric" pattern="[0-9]*" maxLength={1} placeholder="-" />
              </div>
            </div>

            {/* Resend */}
            <div className="otp-resend">
              Re-send code in <span className="timing">0:20</span>
            </div>

            {/* Continue button */}
            <button
              className="otp-continue"
              onClick={() => navigate('/courses/active-courses')}
            >
              Continue
            </button>
          </div>

          {/* Illustration */}
          <img src={illustration} alt="Verification Illustration" className="otp-illustration" />
        </div>
      </div>
    </AuthLayout>
  )
}

export default OtpVerification

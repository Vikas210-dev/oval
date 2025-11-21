import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthLayout from '../../layouts/AuthLayout'
import './Login.css'
import logo from '../../assets/logo.svg'
import illustration from '../../assets/banner1.svg'
import LearnOval from '../../assets/images/LearnOval.png'
import oval from '../../assets/images/oval.png'
function Login() {
  const navigate = useNavigate()

  function handleLogin(e){
    e.preventDefault()
    navigate('/login')
  }

  return (
    <AuthLayout>
      <div className="login-card">
        <div className="login-inner">
          <img src={oval} alt="logo" className="login-logo" />

          <h4 className="login-title">Enter Mobile Number</h4>

          <div className="phone-row">
            <div className="country-pill">+91</div>
            <input className="phone-input" type="tel" placeholder="9999999999" maxLength={10} />
          </div>

          <button className="login-btn" onClick={handleLogin}>LOGIN</button>
        </div>

        <img src={illustration} alt="illustration" className="login-illustration" />
      </div>
    </AuthLayout>
  )
}

export default Login

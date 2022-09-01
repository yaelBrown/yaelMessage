import React from 'react'
import { useNavigate } from "react-router-dom"
import '../assets/css/landing.css'
import AppleBadge from '../assets/img/apple-app-badge.png'
import GoogleBadge from '../assets/img/google-play-badge.png'

export default function Landing() {
  const navigate = useNavigate()
  const handleClick = rte => navigate(`${rte}`)
  return (
    <section id="landing-wrapper">
      <h1>YM</h1>
      <small>Tab-based Messaging App</small>
      <div id="landing-button-row">
        <img src={AppleBadge} id="landing-apple" alt="Apple App Store" />
        <img src={GoogleBadge} id="landing-google" alt="Google Play Store" />
      </div>
      <div>
        <button className="btn btn-outline-primary login-register-btns" onClick={() => handleClick("login")}>Login</button>
        <button className="btn btn-outline-primary login-register-btns" onClick={() => handleClick("register")}>Register</button>
      </div>
    </section>
  )
}
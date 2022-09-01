import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/login.css'
import LoadingPug from '../assets/img/running-pug.gif'

export default function Login() {
  const initialState = {
    username: "",
    password: "",
    error: "",
    isLoading: false
  }
  const navigate = useNavigate()

  const [loginForm, setLoginForm] = useState(initialState)

  const handleNavigate = rte => navigate(`${rte}`)
  const handleSubmit = () => console.log(loginForm)
  const handleChange = e => {
    const newLoginForm = loginForm
    newLoginForm[e.name] = e.value
    setLoginForm(newLoginForm)
  }

  const renderLoader = () => (loginForm.isLoading) ? "block" : "none"
  const renderError = () => (loginForm.error === "") ? "none" : "block"

  return (
    <section id="login-wrapper">
      <h2>Login</h2>
      <div id="login-input-row">
        <input className="form-control form-control-sm register-inputs" type="text" placeholder="Username" name="username" onChange={(evt) => handleChange(evt.target)} />
        <input className="form-control form-control-sm register-inputs" type="password" placeholder="Password" name="password" onChange={(evt) => handleChange(evt.target)} />
      </div>
      <div id="login-button-row">
        <button type="button" className="btn btn-primary btn-sm" onClick={() => handleSubmit()}>Login</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => handleNavigate("/register")}>Register</button>
      </div>
      <div id="login-info-row">
        <img id="login-loading-pug" src={LoadingPug} alt="loading pug" style={{ display: renderLoader() }} />
        <small id="login-error" style={{ display: renderError() }}>{loginForm.error}</small>
      </div>
    </section>
  )
}

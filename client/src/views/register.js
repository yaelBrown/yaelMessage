import React, { useState } from 'react';
import { useNavigate } from "react-router-dom"
import '../assets/css/register.css'
import LoadingPug from '../assets/img/running-pug.gif'

export default function Register() {
  const initialState = {
    username: "",
    password: "",
    email: "",
    error: "",
    isLoading: false
  }
  const navigate = useNavigate()

  const [registerForm, setRegisterForm] = useState(initialState)

  const handleNavigate = rte => navigate(`${rte}`)
  const handleSubmit = () => console.log(registerForm)
  const handleChange = e => {
    const newRegisterForm = registerForm
    newRegisterForm[e.name] = e.value
    setRegisterForm(newRegisterForm)
  }

  const renderLoader = () => (registerForm.isLoading) ? "block" : "none"
  const renderError = () => (registerForm.error === "") ? "none" : "block"

  return (
    <section id="register-wrapper">
      <h2>Register</h2>
      <div id="register-input-row">
        <input className="form-control form-control-sm register-inputs" type="text" placeholder="Username" name="username" onChange={(evt) => handleChange(evt.target)} />
        <input className="form-control form-control-sm register-inputs" type="password" placeholder="Password" name="password" onChange={(evt) => handleChange(evt.target)} />
        <input className="form-control form-control-sm register-inputs" type="text" placeholder="Email" name="email" onChange={(evt) => handleChange(evt.target)} />
      </div>
      <div id="register-button-row">
        <button type="button" className="btn btn-primary btn-sm" name={registerForm.username} onClick={() => handleSubmit()} >Register</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => handleNavigate("/login")}>Login</button>
      </div>
      <div id="register-info-row">
        <img id="register-loading-pug" src={LoadingPug} alt="loading pug" style={{ display: renderLoader() }} />
        <small id="register-error" style={{ display: renderError() }}>{registerForm.error}</small>
      </div>
    </section>
  )
}
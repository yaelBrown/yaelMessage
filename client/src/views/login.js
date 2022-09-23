import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/login.css'
import LoadingPug from '../assets/img/running-pug.gif'
import { EMAIL_REGEX } from '../utils/constants'

export default function Login() {
  const initialState = {
    username: "",
    password: "",
    error: "",
    message: "",
    isLoading: false
  }
  const navigate = useNavigate()

  const [loginForm, setLoginForm] = useState(initialState)

  const handleNavigate = rte => navigate(`${rte}`)
  const handleLogin = async () => {
    if (loginForm.username !== "" && loginForm.password !== "") {
      setLoginForm({...loginForm, isLoading: true, error: ""})
      const re = new RegExp(EMAIL_REGEX)
      const data = {}
      if (re.test(loginForm.username)) {
        data.email = loginForm.username
      } else {
        data.username = loginForm.username
      }
      data.password = loginForm.password
      console.log(data)
      await axios.post(process.env.REACT_APP_API_URI + "api/user/login", {data})
        .then(res => res.data)
        .then(res => {
          if (res.msg != undefined) {
            // set user to state
            setLoginForm({ ...loginForm, isLoading: false, message: `Welcome ${res.msg.username}!` })
            setTimeout(() => {
              handleNavigate("/dashboard")
            }, 1500)
          }
        })
        .catch(err => setLoginForm({ ...loginForm, isLoading: false, error: err.message }))
    }
  }
  const handleChange = e => {
    const newLoginForm = loginForm
    newLoginForm[e.name] = e.value
    setLoginForm(newLoginForm)
  }

  const renderLoader = () => (loginForm.isLoading) ? "block" : "none"
  const renderError = () => (loginForm.error === "") ? "none" : "block"
  const renderMessage = () => (loginForm.message === "") ? "none" : "block"

  return (
    <section id="login-wrapper">
      <h2>Login</h2>
      <div id="login-input-row">
        <input 
          className="form-control form-control-sm register-inputs" 
          type="text" 
          placeholder="Username or Email" 
          name="username" 
          onChange={(evt) => handleChange(evt.target)} 
        />
        <input 
          className="form-control form-control-sm register-inputs" 
          type="password" 
          placeholder="Password" 
          name="password" 
          onChange={(evt) => handleChange(evt.target)} 
        />
      </div>
      <div id="login-button-row">
        <button 
          type="button" 
          className="btn btn-primary btn-sm" 
          onClick={() => handleLogin()}>Login</button>
        <button 
          type="button" 
          className="btn btn-secondary btn-sm" 
          onClick={() => handleNavigate("/register")}>Register</button>
      </div>
      <div id="login-info-row">
        <img id="login-loading-pug" src={LoadingPug} alt="loading pug" style={{ display: renderLoader() }} />
        <small id="login-error" style={{ display: renderError() }}>{loginForm.error}</small>
        <small id="login-message" style={{ display: renderMessage() }}>{loginForm.message}</small>
      </div>
    </section>
  )
}

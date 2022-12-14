import React, { useState } from 'react';
import axios from 'axios';
// import RegisterService from '../services/registerService';
// import Api from '../api/api';
import { useNavigate } from "react-router-dom"
import '../assets/css/register.css'
import LoadingPug from '../assets/img/running-pug.gif'

class RegisterService {
  async register(username, password, email) {
    const config = {
      url: process.env.API,
      data: {
        username,
        password,
        email
      }
    }
    return await axios.post(config)
  }
}

export default function Register() {
  const initialState = {
    username: "",
    password: "",
    email: "",
    error: "",
    message: "",
    isLoading: false
  }
  const navigate = useNavigate()

  const [registerForm, setRegisterForm] = useState(initialState)

  const handleNavigate = rte => navigate(`${rte}`)
  const handleChange = e => {
    const newRegisterForm = registerForm
    newRegisterForm[e.name] = e.value
    setRegisterForm(newRegisterForm)
  }
  const handleRegister = async () => {
    if (registerForm.username !== "" || registerForm.password !== "" || registerForm.email !== "") {
      setRegisterForm({ ...registerForm, isLoading: true, error: "" })

      await axios.post(process.env.REACT_APP_API_URI + "api/user/", {
        data: {
          username: registerForm.username,
          password: registerForm.password,
          email: registerForm.email,
        }
      })
        .then(res => res.data)
        .then(res => {
          setRegisterForm({ ...registerForm, isLoading: false, message: `Successfully Registered ${res.msg.username}` })
          setTimeout(() => {
            handleNavigate("/login")
          }, 3000)
        })
        .catch(err => setRegisterForm({ ...registerForm, isLoading: false, error: err.message }))
    }
  }

  const renderLoader = () => (registerForm.isLoading) ? "block" : "none"
  const renderError = () => (registerForm.error === "") ? "none" : "block"
  const renderMessage = () => (registerForm.message === "") ? "none" : "block"

  return (
    <section id="register-wrapper">
      <h2>Register</h2>
      <div id="register-input-row">
        <input className="form-control form-control-sm register-inputs" type="text" placeholder="Username" name="username" onChange={(evt) => handleChange(evt.target)} />
        <input className="form-control form-control-sm register-inputs" type="password" placeholder="Password" name="password" onChange={(evt) => handleChange(evt.target)} />
        <input className="form-control form-control-sm register-inputs" type="text" placeholder="Email" name="email" onChange={(evt) => handleChange(evt.target)} />
      </div>
      <div id="register-button-row">
        <button type="button" className="btn btn-primary btn-sm" name={registerForm.username} onClick={() => handleRegister()} >Register</button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => handleNavigate("/login")}>Login</button>
      </div>
      <div id="register-info-row">
        <img id="register-loading-pug" src={LoadingPug} alt="loading pug" style={{ display: renderLoader() }} />
        <small id="register-error" style={{ display: renderError() }}>{registerForm.error}</small>
        <small id="register-message" style={{ display: renderMessage() }}>{registerForm.message}</small>
      </div>
    </section>
  )
}
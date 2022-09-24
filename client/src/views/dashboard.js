import React, { useState, useEffect } from 'react'
import '../assets/css/dashboard.css'
import loadingMessage from '../utils/loadingMessages'
import LoadingPug from '../assets/img/running-pug.gif'
import Navbar from '../components/dashboard/navbar'
import ChatList from '../components/dashboard/chatList'

const DashboardLayout = (props) => {
  return (
    <>
      <Navbar />
      <section id="dashboard-wrapper">
        <ChatList id="dashboard-chatList" />
        <main>{props.component}</main>
      </section>
    </>
  )
}

export default function Dashboard(props) {
  const initialState = {
    isLoading: true,
    loadingPercent: 25,
    message: loadingMessage[Math.floor(Math.random() * loadingMessage.length)]
  }

  const [state, setState] = useState(initialState)

  useEffect(() => {
    // test api connections
    // get all conversations from server
    // send last sq of all messages and get latest messages
    // setState({ ...state, isLoading: false })
  }, [])

  // Add useReducer

  const updateLoadingMessage = () => setState({...state, message: loadingMessage[Math.floor(Math.random() * loadingMessage.length)]})

  if (state.isLoading) {
    return (
      <section id="dashboard-wrapper-loading">
        <img src={LoadingPug} alt="Loading pug" id="dashboard-loading-pug" />
        <div id="dashboard-progress">
          <div id="dashboard-progress-bar" style={{width: state.loadingPercent + "%"}}></div>
        </div>
        <small id="dashboard-loading-message">{state.message}</small>
      </section>
    )
  } else {
    return (
      <>
        <DashboardLayout component={props.component}/>
      </>
    )
  }
}

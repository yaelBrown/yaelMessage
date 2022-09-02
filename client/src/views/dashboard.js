import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../assets/css/dashboard.css'
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
    isLoading: true
  }

  const [state, setState] = useState(initialState)

  useEffect(() => {
    setState({ ...state, isLoading: false })
  }, [])

  // Add useReducer

  if (state.isLoading) {
    return (
      <section id="dashboard-wrapper-loading">
        <img src={LoadingPug} alt="Loading pug" id="dashboard-loading-pug" />
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

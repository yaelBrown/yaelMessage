import React from 'react'
import '../../assets/css/dashboard/dashboardLanding.css'

export default function DashboardLanding() {
  return (
    <section id="dbldg-wrapper">
      <h2>Welcome User</h2>
      <p>You have 0 messages from 0 chats</p>
      <span id="dbldg-button-row">
        <button>New Chat</button>
        <button>View Contacts</button>
      </span>
      <p>(Notification Area)</p>
    </section>
  )
}
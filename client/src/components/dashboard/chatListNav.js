import React from 'react'
import '../../assets/css/dashboard/chatList.css'
import { Icon } from '@iconify/react'

export default function ChatListNav() {
  return (
    <div id="cln-wrapper">
      <Icon className="cln-icons" icon="bi:chat-left" />
      <Icon className="cln-icons" icon="ri:chat-new-line" />
      <Icon className="cln-icons" icon="akar-icons:person-add" />
      <Icon className="cln-icons" icon="clarity:group-line" />
    </div>
  )
}
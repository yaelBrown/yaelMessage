import React from 'react'
import '../../assets/css/dashboard/chatList.css'

/*
  {
    name: "Same Name8",
    lastMessage: "This was the last message sent in this chat",
    isViewed: false,
    isGroup: false,
    chatId: 8, 
    dateTime: 33
  }
*/

export default function ChatListItem(props) {
  const renderLastMessage = lmsg => {
    if (lmsg.length === 0) return ""
    const limit = 15
    let out = lmsg.substring(0, limit)
    if (lmsg.length > 10) out += "..."
    return out
  }

  const renderDateTime = dt => {
    // process date and time data
  }

  return (
    <div className="cli-wrapper">
      <p>{props.itemData.name}</p>
      <p>{renderLastMessage(props.itemData.lastMessage)}</p>
      <p>{props.itemData.dateTime}</p>

    </div>
  )
}
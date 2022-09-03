import React, { useEffect } from 'react'
import '../../assets/css/dashboard/chatList.css'
import ChatListNav from './chatListNav'
import ChatListItem from './chatListItem'

const SampleData = [
  {
    name: "Same Name",
    lastMessage: "This was the last message sent in this chat",
    isViewed: false,
    isGroup: false,
    chatId: 1,
    dateTime: 13
  },
  {
    name: "Same Name2",
    lastMessage: "This was the last message sent in this group",
    isViewed: false,
    isGroup: true,
    chatId: 2,
    dateTime: 433
  },
  {
    name: "Same Name3",
    lastMessage: "This was the last message sent in this chat",
    isViewed: false,
    isGroup: false,
    chatId: 3,
    dateTime: 6542
  },
  {
    name: "Same Name4",
    lastMessage: "This was the last message sent in this chat",
    isViewed: false,
    isGroup: false,
    chatId: 4,
    dateTime: 847
  },
  {
    name: "Same Name5",
    lastMessage: "This was the last message sent in this chat",
    isViewed: true,
    isGroup: false,
    chatId: 5,
    dateTime: 555
  },
  {
    name: "Same Name6",
    lastMessage: "This was the last message sent in this chat",
    isViewed: false,
    isGroup: true,
    chatId: 6,
    datetime: 89484
  },
  {
    name: "Same Nam7",
    lastMessage: "This was the last message sent in this chat",
    isViewed: false,
    chatId: 7,
    dateTime: 57382920
  },
  {
    name: "Same Name8",
    lastMessage: "This was the last message sent in this chat",
    isViewed: false,
    isGroup: false,
    chatId: 8, 
    dateTime: 33
  }
]



export default function ChatList(props) {
  useEffect(() => {
    // Sample Data
    SampleData.sort((a,b) => a.dateTime - b.dateTime)
    

    // With props

  }, [])
  
  const renderChatList = (list) => {
    const out = []
    list.forEach((e,i) => {
      out.push(<ChatListItem key={i} itemData={e} />)
    });
    return out
  }

  return (
    <section id="chatList-wrapper" >
      <ChatListNav/>
      {renderChatList(SampleData)}
    </section>
  )
}
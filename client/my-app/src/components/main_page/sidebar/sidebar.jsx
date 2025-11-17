import React from 'react'
import '../../../styles.scss'
import Profile from './profile'
import SidebarItems from './sidebarItems'
import Settings from './settings'
import ChatHistory from './chathistory'

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Profile/>
        <SidebarItems/>
        <ChatHistory/>
        <Settings/>
      </div>
    </>
  )
}

export default Sidebar
import React from 'react'
import '../../../styles.scss'
import Profile from './profile'
import SidebarItems from './sidebarItems'
import Settings from './settings'

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <Profile/>
        <SidebarItems/>
        <Settings/>
      </div>
    </>
  )
}

export default Sidebar
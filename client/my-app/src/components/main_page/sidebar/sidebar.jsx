import React from 'react'
import '../../../styles.scss'
import Profile from './profile'
import SidebarItems from './sidebarItems'
import Settings from './settings'

function Sidebar({ onConnectBankClick }) {
  return (
    <>
      <div className="sidebar">
        <Profile/>
        <SidebarItems/>
        <Settings onConnectBankClick={onConnectBankClick}/>
      </div>
    </>
  )
}

export default Sidebar
import React from 'react'
import './../../styles.scss'
import Sidebar from './sidebar/sidebar'
import MainContainer from './mainContainer'

function MainPage() {
  return (
    <>
    <div className="mainpage">
        <Sidebar/>
        <MainContainer/>
    </div>
    </>
  )
}

export default MainPage
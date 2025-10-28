import React from 'react'
import './../../styles.scss'

function LandingHeader() {
  return (
    <>
        <div className="header">
            <div className='header-text'>
                <h1>financeFlow</h1>
                <p>ผู้ช่วยทางการเงินของคุณ</p>
            </div>
            <div className="authButtons">
                <button>log in</button>
                <button>sign up</button>
            </div>
        </div>        
    </>
  )
}

export default LandingHeader
import React from 'react'
import './../../styles.scss'
import { Link } from 'react-router-dom'

function LandingHeader() {
  return (
    <>
        <div className="header">
            <div className='header-text'>
                <h1>financeFlow</h1>
                <p>ผู้ช่วยทางการเงินของคุณ</p>
            </div>
            <div className="authButtons">
              <Link to="/login">
                <button>log in</button>
              </Link>
              <Link to="/signup">
                <button>sign up</button>
              </Link>
            </div>
        </div>        
    </>
  )
}

export default LandingHeader
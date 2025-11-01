import {React, useState} from 'react'
import './../../styles.scss'
import { Link } from 'react-router-dom'

function LandingNav() {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <>
        <div className="navbar">
            <div className="nav-logo">
                <h1>financeFlow</h1>
            </div>
            <div className="nav-items">
                <ul>
                    <li>หน้าแรก</li>
                    <li>เกี่ยวกับเรา</li>
                    <li>ติดต่อ</li>
                    <li>
                        <Link to="/login">
                            <button>log in</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default LandingNav
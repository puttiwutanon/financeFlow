import React, { useState } from 'react'
import '../../../styles.scss'

function Profile() {
  const [username, setUsername] = useState('ผู้ใช้')
  const [showUpdateUsername, setShowUpdateUsername] = useState(false)

  return (
    <div className="profile-items">
        <div className='profile-image'>
            <img src="/pics/Sample_User_Icon.png" alt="" className="profile-image" />
        </div>
          <button>
            <i class="fa-solid fa-pen-to-square"></i>
          </button>
        <div className="profile-name">
          <h1>{username}</h1>
        </div>

    </div>
  )
}

export default Profile

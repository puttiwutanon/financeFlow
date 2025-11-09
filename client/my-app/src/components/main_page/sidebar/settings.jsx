import React from 'react'

function Settings({ onConnectBankClick }) {
  return (
    <>
      <div className="settings-items">
        <ul>
          <li><i class="fa-solid fa-gear"></i> การตั้งค่า</li>
          <li onClick={onConnectBankClick}><i class="fa-solid fa-building-columns"></i> เชื่อมต่อธนาคาร</li>
        </ul>
      </div>    
    </>
  )
}

export default Settings
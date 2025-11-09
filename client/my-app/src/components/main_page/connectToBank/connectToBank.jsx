import React from 'react'

function ConnectToBank({onCancelConnectBank}) {
  return (
    <>
        <div className="chooseBank">
            <h1>เลือกธนาคาร</h1>
            <div className='banksToChoose'>
                <button className='connectKasikorn'>กสิกร</button>
                <button className='connectKrungsri'>กรุงศรี</button>
            </div>
            <div>
                <button onClick={onCancelConnectBank} className='cancleChooseBank'>ยกเลิก</button>
            </div>
        </div>
    </>
  )
}

export default ConnectToBank
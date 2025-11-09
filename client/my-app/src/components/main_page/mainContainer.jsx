import React from 'react'
import ConnectToBank from './connectToBank/connectToBank'

function MainContainer({ showConnectBank, onCancelConnectBank }) {
  return (
    <>
      <div className="mainContainer">
        {showConnectBank && <ConnectToBank onCancelConnectBank={onCancelConnectBank} />}        
      </div>
    </>
  )
}

export default MainContainer
import React, {useState} from 'react'
import './../../styles.scss'
import Sidebar from './sidebar/sidebar'
import MainContainer from './mainContainer'

function MainPage() {
  const [showConnectBank, setShowConnectBank] = useState(false);
  return (
    <>
    <div className="mainpage">
        <Sidebar onConnectBankClick={() => setShowConnectBank(true)}/>
        <MainContainer 
          showConnectBank={showConnectBank}
          onCancelConnectBank={() => setShowConnectBank(false)}
        />
    </div>
    </>
  )
}

export default MainPage
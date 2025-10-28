import React from 'react'
import LandingHeader from './landingHeader'
import LandingNav from './landingNav'
import LandingAbout from './landingAbout'
import LandingContact from './landingContact'
import LandingFooter from './landingFooter'

function LandingPage() {
  return (
    <>
        <LandingNav/>
        <LandingHeader/>
        <LandingAbout/>
        <LandingContact/>
        <LandingFooter/>
    </>
  )
}

export default LandingPage
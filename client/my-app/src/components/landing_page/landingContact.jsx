import React from 'react'
import './../../styles.scss'

function LandingContact() {
  return (
    <>
        <div className="contact">
            <div className='contact-header'>
                <h1>Contact me</h1>
            </div>
            <div>
                <span className="contact-items">
                    <i class="fa-solid fa-phone"></i>
                    <p>: 66+ 0950857579</p>
                </span>
                <span className="contact-items">
                    <i class="fa-solid fa-envelope"></i>
                    <div>
                        <p>: leoputtiwutanon25@hotmail.com</p>
                        <p>: leotiwutanon@gmail.com</p>
                    </div>
                </span>
                <span className="contact-items">
                    <i class="fa-brands fa-facebook"></i>
                    <a href="https://www.facebook.com/put.tiwutanon.2024">: Put Tiwutanon</a>
                </span>
                <span className="contact-items">
                    <i class="fa-brands fa-instagram"></i>
                    <a href="https://www.instagram.com/pxxt.twn/">: Put Tiwutanon</a>
                </span>
            </div>
        </div>
    </>
  )
}

export default LandingContact
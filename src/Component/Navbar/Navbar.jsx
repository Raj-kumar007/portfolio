import React, { useState } from 'react'
import mypic from '../../Assets/Images/profile-1.jpg'

import './Navbar.css'

const Navbar = () => {
const [active,setactive] =useState(false)
function scrollbar(params) {
  if (window.scrollY>20) {
    setactive(true)
    // console.log(window.scrollY);
  } else {
    setactive(false)
  }
}

window.addEventListener('scroll', scrollbar)
  return (
    <>
      <div className="top" >
        <div className="main">
          <div className={`navbar ${(active) ? "navactive":""}`}>
            <h1>Raj Kumar</h1>
            <ul className='nav-menu'>
              <li>HOME</li>
              <li>ABOUT</li>             
               <li>SKILLS</li>
              <li>SERVICES</li>
              <li>PORTFOLIO</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div className="round"></div>
          <div className="name-info">
            <div className="name">
              <h1>I'm Raj Kumar</h1>
              <div className="changetext">
              <li><span>Web Developer</span></li>
             <li><span>Creative Design</span></li>
             <li><span>Web Design</span></li>
              </div>
           
              <div className='send'>DOWNLOAD CV</div>

            </div>

            <div id="octagon">
              <img src={mypic} alt="" />
            </div>

            <div className="circle"></div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Navbar

import React, { useRef, useState } from 'react'
import mypic from '../../Assets/Images/profile-1.jpg'
import Skill from '../../Component/Skill/Skill.jsx';
import About from '../../Component/About/About.jsx';
import Slider from '../../Component/Slider/Slider.jsx';
import Service from '../../Component/Services/Service.jsx';
import Port from '../../Component/Portfolio/Port.jsx';
import Contact from '../../Component/Contact/Contact.jsx';
import Bottom from'../../Component/Bottom/Bottom.jsx';
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import resume from '../../Assets/Images/Resume (1).pdf'

import './Navbar.css'

const Navbar = () => {
const [active,setactive] =useState(false)
const[sideOpen,sideClose] = useState(false)
const [sideIcon,sideCloseIcon]= useState(true)

function sideToggle(params) {
  sideClose(!sideOpen)
  sideCloseIcon(!sideIcon)
}
function scrollbar(params) {
  if (window.scrollY>10) {
    setactive(true)
  } else {
    setactive(false)
  }
}





const aboutRef =useRef()
const homeRef =useRef()
const skillRef =useRef()
const serviceRef =useRef()
const sliderRef =useRef()
const portRef =useRef()
const contactRef =useRef()
const bottomRef =useRef()
function navscroll(getmyref) {
  console.log(getmyref.current);
  window.scrollTo({
      top:getmyref.current.offsetTop -50,
      behavior:"smooth"
  })
}

window.addEventListener('scroll', scrollbar)
  return (
    <>
      <div className="top" >
        <div className="main">
          <div className={`navbar ${(active) ? "navactive":""}`}>
            <div className='side-name'>
            <h1>Raj Kumar</h1>
            <div className='side-menu' onClick={sideToggle} style={{ fontSize: '24px', cursor: 'pointer' }}>
      {sideIcon ? <HiMiniBars3BottomRight /> : <IoClose />}
    </div>
            </div>

            <ul className= {`nav-menu ${(sideOpen)?"side-open":""}`} >
              <li onClick={ ()=> {navscroll(homeRef)}}>HOME</li>
              <li onClick={ ()=> {navscroll(aboutRef)}}>ABOUT</li>             
               <li onClick={ ()=>{navscroll (skillRef)}}>SKILLS</li>
              <li onClick={ ()=>{ navscroll(serviceRef)}} >SERVICES</li>
              <li onClick={ ()=>{navscroll(portRef)}}>PORTFOLIO</li>
              <li onClick={ ()=>{ navscroll(contactRef)}}>CONTACT</li>
            </ul>
          </div>
          <div className="round"></div>
          <div className="name-info" ref={homeRef}>
            <div className="name">
              <h1>I'm Raj Kumar</h1>
              <div className="changetext">
              <li><span>Web Developer</span></li>
             <li><span>Creative Design</span></li>
             <li><span>Web Design</span></li>
              </div>
           
              <a href={resume} download= "my_resume.pdf"className='send'>DOWNLOAD CV</a>

            </div>

            <div id="octagon">
              <img src={mypic} alt="" />
            </div>

            <div className="circle"></div>

          </div>

        </div>
      </div>
      <About myref={aboutRef} />
 <Slider myref={sliderRef}/>
 <Skill myref={skillRef}/>
 <Service myref={serviceRef}/>
 <Port myref={portRef}/>
 <Contact myref={contactRef}/>
<Bottom myref={bottomRef}/>
    </>
  )
}

export default Navbar

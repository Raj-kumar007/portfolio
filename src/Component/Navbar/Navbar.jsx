import React, { useRef, useState } from 'react'
import mypic from '../../Assets/Images/profile-1.jpg'
import Skill from '../../Component/Skill/Skill.jsx';
import About from '../../Component/About/About.jsx';
import Slider from '../../Component/Slider/Slider.jsx';
import Service from '../../Component/Services/Service.jsx';
import Port from '../../Component/Portfolio/Port.jsx';
import Contact from '../../Component/Contact/Contact.jsx';
import Bottom from'../../Component/Bottom/Bottom.jsx';


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
function menuactive() {
  const active = document.querySelectorAll('.nav-menu li');

  active.forEach((element) => {
    element.classList.add('n-active');
    console.log(element.classList);
  });
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
            <h1>Raj Kumar</h1>
            <ul className='nav-menu'>
              <li onClick={ ()=> {navscroll(homeRef);menuactive()}}>HOME</li>
              <li onClick={ ()=> {navscroll(aboutRef);menuactive()}}>ABOUT</li>             
               <li onClick={ ()=>{navscroll (skillRef);menuactive()}}>SKILLS</li>
              <li onClick={ ()=>{ navscroll(serviceRef);menuactive()}} >SERVICES</li>
              <li onClick={ ()=>{navscroll(portRef);menuactive()}}>PORTFOLIO</li>
              <li onClick={ ()=>{ navscroll(contactRef);menuactive()}}>CONTACT</li>
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
           
              <div className='send'>DOWNLOAD CV</div>

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

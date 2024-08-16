import React from 'react'
import'./Bottom.css'
const Bottom = ({homeRef,aboutRef,serviceRef,skillRef,contactRef,portRef,navscroll}) => {
  return (
    <>
       <div className="buttom" >
        <div className="buttom-info">
            <div className="buttom-content">
            <div className="buttom-details">
                <h1>Raj Kumar</h1>
                <p>When I am working on a problem I never think about beauty but when I have finished, if the solution is not beautiful, I know it is wrong</p>
            </div>
            <div className="buttom-link">
                <div className="buttom-link-1">
                    <h1>Links</h1>
                    <ul>
                    <li onClick={ ()=> {navscroll(homeRef)}}>HOME</li>
              <li onClick={ ()=> {navscroll(aboutRef)}}>ABOUT</li>             
               <li onClick={ ()=>{navscroll (skillRef)}}>SKILLS</li>
              <li onClick={ ()=>{ navscroll(serviceRef)}} >SERVICES</li>
              <li onClick={ ()=>{navscroll(portRef)}}>PORTFOLIO</li>
              <li onClick={ ()=>{ navscroll(contactRef)}}>CONTACT</li>
                    </ul>
                </div>
                <div className="buttom-link-1">
                    <h1>Services</h1>
                    <ul className='course'>
                    <li>Web Development</li>
                    <li>Web Design</li>
                    <li>Business strategy</li>
                    </ul>
                 
                </div>
                <div className="buttom-link-1">
                    <h1>Address</h1>
                    <ul className='course'>
                        <a href="https://www.google.co.in/maps/place/9%C2%B026'04.0%22N+77%C2%B048'11.0%22E/@9.4334137,77.8039775,710m/data=!3m1!1e3!4m4!3m3!8m2!3d9.434446!4d77.803064?entry=ttu" target='blank'><li>Sivakasi</li></a>
                    
                    <a href="mailTo:parajkumar184@gmail"><li>parajkumar184@gmail.com</li></a>
                    <a href="https://wa.me/917092074389" target='blank'><li>+91 7092074389</li></a>
                    </ul>
                </div>
            </div>
            </div>
           
            <div className="copy-right">
                <p>Copyright © 2023. All rights reserved. </p>
            </div>
        </div>
        
        </div> 
    </>
  )
}

export default Bottom

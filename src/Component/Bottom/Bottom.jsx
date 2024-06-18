import React from 'react'
import'./Bottom.css'
const Bottom = (props) => {
  return (
    <>
       <div className="buttom" ref={props.myref}>
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
                        <li>Home</li>
                        <li>About</li>
                        <li>Skills</li>
                        <li>Portfolio</li>
                        <li>Services</li>
                        <li>Contact</li>
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
                    <li>Sivakasi</li>
                    <li>parajkumar184@gmail.com</li>
                    <li>+91 7092074389</li>
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

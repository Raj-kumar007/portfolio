import React from 'react'

import'./About.css'
import mypic from '../../Assets/Images/profile-2.jpg'
const About = (props) => {

    return (
    <>
        <div className="about" ref={props.myref} >
                
                <div className="about-img">
                    <img src={mypic} alt="" />
                <div className="square"></div>

                </div>
                <div className="about-info">
                    <h1>ABOUT ME</h1>
                    <p>I'm professional Web Developer & Web Designer based in Pakistan working on different projects. I can build awesome Designs with different programming languages.</p>
                    <div className="info">
                        <div className="info-n">
                            <ul className='info-name'>
                                <li>Name:</li>
                                <li>Birthdate:</li>
                                <li>Languages:</li>
                                <li>Address:</li>
                                <li>Email:</li>
                                <li>Phone:</li>
                            </ul>
                            <ul className='info-details'>
                                <li>Raj Kumar</li>
                                <li>18-12-2002</li>
                                <li>Tamil,English</li>
                                <li>1/985/13 murugaiyapuram,viswanatham,sivakasi</li>
                                <li>parajkumar194@gmail.com</li>
                                <li>7092074389</li>
                            </ul>
                        </div>


                    </div>
                    <div className="square-1"></div>
                </div>
            </div> 
    </>
  )
}

export default About

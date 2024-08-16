import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'
import Heading from '../Heading/Heading'
const Contact = (props) => {
    const[left, right] =useState(null)
    const contactElement = useRef(null)
    useEffect(() => {
        function side(params) {
            const contact = contactElement.current.getBoundingClientRect()
            // console.log(contact);
            if (contact.top<50) {
                right(true)
            } else if (contact.top>400) {
                right(false)
            }

            
        }
        window.addEventListener('scroll', side)
    },[])



  return (
    <>
       <div className="contact" ref={contactElement}>
                <div className="contact-header" ref={props.contactRef}>
                    <Heading
                        title="CONTACT" />
                </div>
                <div className="contact-info" ref={props.contactRef}>
                    <div className="contact-detail">
                        <div className= {`contact-form ${(left)? "right":""}`}>
                            <h1>Get in Touch</h1>
                          <form >
                          <input className='box' type="text" placeholder="Name" name='user_name' />
                            <input className='box' type="text" placeholder="Email" name='user_mail'/>
                            <input className='box' type="text" placeholder="Subject" name='user_subject' />
                            <input className='message' type="text" placeholder="Message" name='user_message' />

                          </form>
                          
                        </div>
                        <div className={`map ${(left)? "left":""}`}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39133.44957535089!2d77.82638130473406!3d9.450150513523917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfddd9de9027%3A0x9191ab3ded5510cb!2sYokohama%20Club%20Network%20-%20Madurai%20Sundar%20Tyres%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1717225389080!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>

                </div>

            </div>
    </>
  )
}

export default Contact

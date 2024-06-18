import React from 'react'
import { useEffect,useRef,useState } from 'react';
import Heading from '../Heading/Heading'
import'./Service.css'
import { FiLayout } from "react-icons/fi";
import { BsWindow } from "react-icons/bs";
import { BiDevices} from "react-icons/bi";
import { FaCode } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaPalette } from "react-icons/fa";

const Service = (props) => {
  const [close,open]=useState()
const element = useRef(null)
useEffect(()=>{
  function port(params) {
   
  const head = element.current.getBoundingClientRect()
  // console.log(head);
 

  if (head.top<100) {
    open(true)
  } else if (head.top>300) {
    open(false)
  } 

  }
  window.addEventListener("scroll",port)


})

  return (
    <div ref={props.myref}>
        <div className="service" ref={element}>
        
        <div className="service-circle"></div>
        <div className="service-top" >
          <Heading
            title="SERVICE" />
          <div className="service-content" >
            <div className={`props ${(close)?"upscale":""}`}>
              <span className='icons'><FiLayout className='icons123'/></span>
              <div className="prop">
                <h2>Web Desgin</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint quia doloremque magni dolore maiores labore.</p>
              </div>
             
            </div>
            <div className={`props ${(close)?"downscale":""}`}>
            <span className='icons'><BsWindow className='icons123'/></span>
              <div className="prop">
                <h2>Web Application</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint quia doloremque magni dolore maiores labore.</p>
              </div>
            </div>
            <div className={`props ${(close)?"upscale":""}`}>
            <span className='icons'><BiDevices className='icons123'/></span>
              <div className="prop">
                <h2>Responsive Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint quia doloremque magni dolore maiores labore.</p>
              </div>
            </div>
            <div className={`props ${(close)?"downscale":""}`}>
            <span className='icons'><FaCode className='icons123'/></span>
              <div className="prop">
                <h2>Web Developement</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint quia doloremque magni dolore maiores labore.</p>
              </div>
            </div>
            <div className={`props ${(close)?"upscale":""}`}>
            <span className='icons'><FaMobileAlt className='icons123'/></span>
              <div className="prop">
                <h2>Mobile Apps</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint quia doloremque magni dolore maiores labore.</p>
              </div>
            </div>
            <div className={`props ${(close)?"downscale":""}`}>
            <span className='icons'><FaPalette className='icons123' /></span>
              <div className="prop">
                <h2>UI/UX Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint quia doloremque magni dolore maiores labore.</p>
              </div>
            </div>

          </div>

        </div>
        <div className="project" >
          <div className="project-content">
            <div className= "p-content">
              <h1 >Have a Project?</h1>
              <p >Clients satisfaction is my first priority and it will be always. I am available 24/7 you can contact me anytime</p>
              <div className='send' >Contact Me</div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Service

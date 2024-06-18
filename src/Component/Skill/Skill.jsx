import { useEffect, useRef, useState } from 'react'
import'./SAkill.css'
const Skill = (props) => {
const [rect,setrect]=useState(null)
const skillrect=useRef(null)
useEffect(()=>{
  function slider(params) {
    const rect = skillrect.current.getBoundingClientRect()
    console.log(rect.top);
  
   if (rect.top<100) {
      setrect(true)
    }
    else if (rect.top>400) {
      setrect(false) 
    }  
  }
  window.addEventListener('scroll',slider)
 
},[])

  return (
    <>
       <div className="course"ref={skillrect}>
        <div className="skill" ref={props.myref} >
          <h2>MY SKILL</h2>
          <div className="know">
            <div className="content">
              <h3>HTML 5</h3>
              <div className="bar">
                <div className={`bar-2 b-1 ${(rect) ? "move": ""}` }>93%</div>
              </div>
            </div>
            <div className="content">
              <h3>CSS 3</h3>
              <div className="bar ">
                <div className={`bar-2 b-2 ${(rect) ? "move": ""}` }>90%</div>
              </div>
            </div>
            <div className="content">
              <h3>Bootstrap</h3>
              <div className="bar ">
                
              <div className={`bar-2 b-3 ${(rect) ? "move": ""}` }>95%</div>
              </div>
            </div>
            <div className="content">
              <h3>Javascript</h3>
              <div className="bar ">
              <div className={`bar-2 b-4 ${(rect) ? "move": ""}` }>80%</div>
              </div>
            </div>
            <div className="content">
              <h3>React Js</h3>
              <div className="bar ">
              <div className={`bar-2 b-5 ${(rect) ? "move": ""}` }>75%</div>
              </div>
            </div>
            <div className="content">
              <h3>JQuery</h3>
              <div className={`bar-2 b-6 ${(rect) ? "move": ""}` }>70%
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Skill

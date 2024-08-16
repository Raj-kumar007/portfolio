import Navbar from'./Component/Navbar/Navbar.jsx';
import './App.css';
import Contact from './Component/Contact/Contact.jsx';
import About from './Component/About/About.jsx';
import Skill from './Component/Skill/Skill.jsx';
import Slider from './Component/Slider/Slider.jsx';
import Service from './Component/Services/Service.jsx';
import Bottom from './Component/Bottom/Bottom.jsx';
import Port from './Component/Portfolio/Port.jsx';
import { useRef } from 'react';







function App() {
const aboutRef =useRef()
const homeRef =useRef()
const skillRef =useRef()
const serviceRef =useRef()
const portRef =useRef()
const contactRef =useRef()
function navscroll(getmyref) {
  console.log(getmyref.current);
  window.scrollTo({
      top:getmyref.current.offsetTop -50,
      behavior:"smooth"
  })
}
  return (
    <div className="App">
 <Navbar homeRef={homeRef} aboutRef={aboutRef} skillRef={skillRef} serviceRef={serviceRef}  portRef={portRef} contactRef={contactRef} navscroll={navscroll} />
 <About aboutRef={aboutRef} navscroll={navscroll} />
 <Slider/>
 <Skill skillRef={skillRef} navscroll={navscroll}/>
 <Service serviceRef={serviceRef} contactRef={contactRef} navscroll={navscroll}/>
 <Port portRef={portRef} navscroll={navscroll}/>
 <Contact contactRef={contactRef} navscroll={navscroll}/>
<Bottom homeRef={homeRef} aboutRef={aboutRef} skillRef={skillRef} serviceRef={serviceRef}  portRef={portRef} contactRef={contactRef} navscroll={navscroll}/>
 
    </div>
  );
}

export default App;

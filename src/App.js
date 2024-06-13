import logo from './logo.svg';
import Navbar from'./Component/Navbar/Navbar.jsx';
import Bottom from'./Component/Bottom/Bottom.jsx';
import './App.css';
import Skill from './Component/Skill/Skill.jsx';
import About from './Component/About/About.jsx';
import Slider from './Component/Slider/Slider.jsx';
import Service from './Component/Services/Service.jsx';
import Port from './Component/Portfolio/Port.jsx';
import Contact from './Component/Contact/Contact.jsx';
import { useEffect } from'react';

function App() {
  useEffect(() => {
    document.title = My-Portfolio; // Set the new title when the component mounts or when newTitle changes
  }, [App]);
  return (
    <div className="App">
 <Navbar/>
 <About/>
 <Slider/>
 <Skill/>
 <Service/>
 <Port/>
 <Contact/>
<Bottom/>
    </div>
  );
}

export default App;

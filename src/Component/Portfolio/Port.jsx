import'./Folio.css'
import img_1 from '../../Assets/Images/pic_1.png'
import img_2 from '../../Assets/Images/pic_2.png'
import img_3 from '../../Assets/Images/pic_3.png'
import img_4 from '../../Assets/Images/pic_4.png'
import img_5 from '../../Assets/Images/pic_5.png'
import img_6 from '../../Assets/Images/pic_6.png'
import Heading from '../Heading/Heading'
import Blog from '../Reuse/Blog/Blog'
const Port = (props)  => {


  return (
    <>
       <div className="portfolio" ref={props.myref} >
     <Heading
     title="PORTFOLIO"/> 
     <div className="portfolio-content">
<Blog
img={img_1}
title="E-Commerce"
des="Web Design & Development"/>
<Blog
img={img_2}
title="Online Courses"
des="Web Design & Development"/>
<Blog
img={img_3}
title="E-Commerce"
des="Web Design & Development"/>
<Blog
img={img_4}
title="Travelling Website"
des="Web Design & Development"/>
<Blog
img={img_5}
title="It Solution"
des="Web Design & Development"/>
<Blog
img={img_6}
title="LMS Website"
des="Web Design & Development"/>
     </div>
     </div>  
    </>
  )
}

export default Port

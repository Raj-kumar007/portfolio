import React from 'react'
import './Blog.css'
const Blog = (Blog) => {
  // console.log(Blog);
  return (
    <>
     <div className="blog">
      <div className="blog-img">
      <img src={Blog.img} alt="" />
      </div>
     <div className="preview">Preview</div>   
        <div className="blog-info">
            <h1>{Blog.title}</h1>
            <p>{Blog.des}</p>
        </div> 

        </div>
    </>
  )
}

export default Blog

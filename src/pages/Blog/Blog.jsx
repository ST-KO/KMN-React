import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <section id="blog">
        <div className='blog-box'>
            <div className='blog-img'>
                <img src="image/blog/b1.jpg" alt="image" />
            </div>
            <div className='blog-details'>
                <h4>The Tranditional Handmade Loom</h4>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Quos magnam dolorem enim voluptate nobis earum nam sunt, 
                    ullam cumque assumenda nemo quam, tempore veritatis? 
                    Saepe enim consectetur exercitationem facere minus.
                </p>
                <Link to=".">CONTINUE READING</Link>
            </div>
            <h1>13/01</h1>
        </div>
    </section>
  )
}

export default Blog;
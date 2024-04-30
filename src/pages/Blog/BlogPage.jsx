import React from 'react';
import HeaderBanner from '../../components/HeaderBanner';
import Blog from './Blog';
import Newsletter from '../Home/Newsletter';

const BlogPage = () => {
  
  const headerText = "Read More";
  const smallText = "Read All About Textiles"

  return (
    <>
        <HeaderBanner headerText={headerText} smallText={smallText} />
        <Blog />
        <Newsletter />
    </>
  )
}

export default BlogPage; 
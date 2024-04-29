import React from 'react';
import HeaderBanner from './HeaderBanner';
import FeaturedProducts from '../Home/FeaturedProducts/Products';
import Newsletter from '../Home/Newsletter';

const Shop = () => {
  return (
    <>
      <HeaderBanner />
      <section id="product1">
        <FeaturedProducts />
      </section>
      <Newsletter />
    </>
  )
}

export default Shop;
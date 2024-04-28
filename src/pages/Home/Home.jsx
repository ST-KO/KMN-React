import React from 'react';

import StrengthCard from './StrengthCard';
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
  return (
    <>
        <Hero />
        <StrengthCard />
        <FeaturedProducts />
    </>
  )
}

export default Home;
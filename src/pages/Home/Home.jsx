import React from 'react';
import { useLocation } from 'react-router-dom';

import StrengthCard from './StrengthCard';
import Hero from './Hero';
import FeaturedProducts from './FeaturedProducts/FeaturedProducts';
import Banner from './Banner';
import TrendingNow from './TrendingNow/TrendingNow';
import SmallBanner from './SmallBanner';
import Newsletter from './Newsletter';

const Home = () => {

    return (
    <>
        <Hero />
        <StrengthCard />
        <FeaturedProducts />
        <Banner />
        <TrendingNow />
        <SmallBanner />
        <Newsletter />
    </>
  )
}

export default Home;
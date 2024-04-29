import React from 'react';
import HeaderBanner from './HeaderBanner';
import WhoWeAre from './WhoWeAre';
import ComeVisitUs from './ComeVisitUs';
import StrengthCard from '../Home/StrengthCard';
import Newsletter from '../Home/Newsletter';

const AboutPage = () => {
  return (
    <>
        <HeaderBanner />
        <WhoWeAre />
        <ComeVisitUs />
        <StrengthCard />
        <Newsletter />
    </>
  )
}

export default AboutPage;
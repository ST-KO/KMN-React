import React from 'react';
import HeaderBanner from '../../components/HeaderBanner';
import WhoWeAre from './WhoWeAre';
import ComeVisitUs from './ComeVisitUs';
import StrengthCard from '../Home/StrengthCard';
import Newsletter from '../Home/Newsletter';

const AboutPage = () => {
  
  const headerText = "Know Us";
  const smallText = "We Are More Than Retailer"

  return (
    <>
        <HeaderBanner headerText={headerText} smallText={smallText}/>
        <WhoWeAre />
        <ComeVisitUs />
        <StrengthCard />
        <Newsletter />
    </>
  )
}

export default AboutPage;
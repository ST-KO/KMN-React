import React from 'react';
import HeaderBanner from '../../components/HeaderBanner';
import ContactDetails from './ContactDetails';
import Form from './Form';
import Newsletter from '../Home/Newsletter';

const ContactPage = () => {

  const headerText = "Let's Talk";
  const smallText = "We Love To Hear More From You"
  
  return (
    <>
        <HeaderBanner headerText={headerText} smallText={smallText} />
        <ContactDetails />
        <Form />
        <Newsletter />
    </>
  )
}

export default ContactPage;
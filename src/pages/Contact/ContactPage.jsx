import React from 'react';
import HeaderBanner from './HeaderBanner';
import ContactDetails from './ContactDetails';
import Form from './Form';
import Newsletter from '../Home/Newsletter';

const ContactPage = () => {
  return (
    <>
        <HeaderBanner />
        <ContactDetails />
        <Form />
        <Newsletter />
    </>
  )
}

export default ContactPage;
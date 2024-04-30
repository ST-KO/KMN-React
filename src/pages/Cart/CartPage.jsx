import React from 'react';
import HeaderBanner from '../../components/HeaderBanner';
import Cart from './Cart';
import CheckOut from './CheckOut';

const CartPage = () => {
  
  const headerText = "Check Out";
  const smallText = "THANK YOU FOR SHOPPING WITH US"
  
  return (
    <>
        <HeaderBanner headerText={headerText} smallText={smallText} />
        <Cart />
        <CheckOut />
    </>
  );
}

export default CartPage;
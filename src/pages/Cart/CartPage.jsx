import React from 'react';
import HeaderBanner from './HeaderBanner';
import Cart from './Cart';
import CheckOut from './CheckOut';

const CartPage = () => {
  return (
    <>
        <HeaderBanner />
        <Cart />
        <CheckOut />
    </>
  );
}

export default CartPage;
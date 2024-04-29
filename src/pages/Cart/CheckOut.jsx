import React from 'react';

const CheckOut = () => {
  return (
    <section id='cart-add' className='section-p1'>
        <div id='coupon'>
            <h3>Apply Coupon</h3>
            <div>
                <input type="text" placeholder='Enter Your Coupon' />
                <button className='normal'>Apply</button>
            </div>
        </div>
        
        <div id='subtotal'>
            <h3>Cart Total</h3>
            <table>
                <tr>
                    <td>Cart Subtotal</td>
                    <td>80,000 Ks</td>
                </tr>
                <tr>
                    <td>Shipping</td>
                    <td>Free</td>
                </tr>
                <tr>
                    <td>Total</td>
                    <td>80,000 Ks</td>
                </tr>
            </table>
            <button className='normal'>Proceed to Checkout</button>
        </div>
    </section>
  );
}

export default CheckOut;
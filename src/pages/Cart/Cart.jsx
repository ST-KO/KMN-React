import React from 'react';
import { RxCrossCircled } from "react-icons/rx";

const Cart = () => {
  return (
    <section id='cart' className='section-p1'>
        <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Subtotal</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><RxCrossCircled className='icon' /></td>
                    <td><img src="image/products/p1.JPG" alt="product1" /></td>
                    <td>Shwe Loon Chate</td>
                    <td>40,000 Ks</td>
                    <td><input type="number" value="1" /></td>
                    <td>40,000 Ks</td>
                </tr>
                <tr>
                    <td><RxCrossCircled className='icon' /></td>
                    <td><img src="image/products/p2.JPG" alt="product2" /></td>
                    <td>Shwe Loon Chate</td>
                    <td>40,000 Ks</td>
                    <td><input type="number" value="1" /></td>
                    <td>80,000 Ks</td>
                </tr>
            </tbody>
        </table>
    </section>
  );
}

export default Cart;
import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='section-p1'>
        <div className='col'>
            <Link className='logo link' id='logo'>Khit Myat Noe</Link>
            <h4>Contact</h4>
            <p><strong>Address:</strong>107, Anaw Rha Hta Road, <br/>Kyauk Tada Township, Yangon, Myanmar</p>
            <p><strong>Phone:</strong>(+95) 09 787 177 850</p>
            <p><strong>Hours:</strong>9:00 - 21:00, Mon - Sun</p>

            <div className='follow'>
                <h4>Follow Us</h4>
                <div className='icon'>
                    <Link className='icon'  to="https://www.facebook.com/223163021666182" target="_blank">
                        <FaFacebook />
                    </Link>
                    <Link className='icon'  to="https://m.me/223163021666182" target="_blank">
                        <FaFacebookMessenger />
                    </Link>
                </div>
            </div>
        </div>

        <div className='col'>
            <h4>About</h4>
            <Link className='link' to="#">Sign In</Link>
            <Link className='link' to="/cart">View Cart</Link>
            <Link className='link' to="#">My WishList</Link>
            <Link className='link' to="#">Track My Orders</Link>
            <Link className='link' to="#">Help</Link>
        </div>

        <div className='col install'>
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className='row'>
                <img src='image/pay/app.jpg' alt="App store" />
                <img src='image/pay/play.jpg' alt="Google play" />
            </div>
            <p>Secured Payment Gateways</p>
            <img src="image/pay/pay.png" alt="Payment" />
        </div>

        <div className='copyright'>
            <p>Made By STK</p>
        </div>
    </footer>
  )
}

export default Footer
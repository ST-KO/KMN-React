import React from 'react';
import { Link } from 'react-router-dom'; 
import { FaStar } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";

const Products = () => {
  return (
    <div className='pro-container'>

            <div className='pro'>
                <img className="shop-img" src="image/products/p1.JPG" alt="1st product" />
                <div className='description'>
                    <span>Shwe Loom Late Pyar</span>
                    <h5>Bring Pink Chate Lone G</h5>
                    <div className='star'>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                    </div>
                    <h4>40,000 Ks</h4>
                </div>
                <Link to="/">
                        <BsCart2 className='cart'/>
                </Link>
            </div>
            
            <div className='pro'>
                <img className="shop-img" src="image/products/p2.jpg" alt="2nd product" />
                <div className='description'>
                    <span>Shwe Loom Late Pyar</span>
                    <h5>Bring Pink Chate Lone G</h5>
                    <div className='star'>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                    </div>
                    <h4>40,000 Ks</h4>
                </div>
                <Link>
                     <BsCart2 className='cart'/>
                </Link>
            </div>
            
            <div className='pro'>
                <img className="shop-img" src="image/products/p3.jpg" alt="3rd product" />
                <div className='description'>
                    <span>Shwe Loom Late Pyar</span>
                    <h5>Bring Pink Chate Lone G</h5>
                    <div className='star'>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                    </div>
                    <h4>40,000 Ks</h4>
                </div>
                <Link>
                     <BsCart2 className='cart'/>
                </Link>
            </div>
            
            <div className='pro'>
                <img className="shop-img" src="image/products/p4.jpg" alt="4th product" />
                <div className='description'>
                    <span>Shwe Loom Late Pyar</span>
                    <h5>Bring Pink Chate Lone G</h5>
                    <div className='star'>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                    </div>
                    <h4>40,000 Ks</h4>
                </div>
                <Link>
                     <BsCart2 className='cart'/>
                </Link>
            </div>
            
            <div className='pro'>
                <img className="shop-img" src="image/products/p5.jpg" alt="5th product" />
                <div className='description'>
                    <span>Shwe Loom Late Pyar</span>
                    <h5>Bring Pink Chate Lone G</h5>
                    <div className='star'>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                    </div>
                    <h4>40,000 Ks</h4>
                </div>
                <Link>
                     <BsCart2 className='cart'/>
                </Link>
            </div>
            
            <div className='pro'>
                <img className="shop-img" src="image/products/p6.jpg" alt="6th product" />
                <div className='description'>
                    <span>Shwe Loom Late Pyar</span>
                    <h5>Bring Pink Chate Lone G</h5>
                    <div className='star'>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                    </div>
                    <h4>40,000 Ks</h4>
                </div>
                <Link>
                     <BsCart2 className='cart'/>
                </Link>
            </div>
            
            <div className='pro'>
                <img className="shop-img" src="image/products/p7.jpg" alt="7th product" />
                <div className='description'>
                    <span>Shwe Loom Late Pyar</span>
                    <h5>Bring Pink Chate Lone G</h5>
                    <div className='star'>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                    </div>
                    <h4>40,000 Ks</h4>
                </div>
                <Link>
                     <BsCart2 className='cart'/>
                </Link>
            </div>
            
            <div className='pro'>
                <img className="shop-img" src="image/products/p8.jpg" alt="8th product" />
                <div className='description'>
                    <span>Shwe Loom Late Pyar</span>
                    <h5>Bring Pink Chate Lone G</h5>
                    <div className='star'>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                        <FaStar className='icon'/>
                    </div>
                    <h4>40,000 Ks</h4>
                </div>
                <Link>
                     <BsCart2 className='cart'/>
                </Link>
            </div>

        </div>
  )
}

export default Products
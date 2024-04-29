import React from 'react';
import { NavLink, useLocation } from 'react-router-dom'; 
import { FaShoppingBag } from "react-icons/fa";

const Header = () => {
    
    const {pathname} = useLocation();

    return (
        <header id="header">
            <a id="logo" href="#">Khit Myat Noe</a>
            <nav id="navbar">
                <NavLink className="navlink" to="/">
                    <span className={pathname === "/" ? 'active' : ''}>Home</span> 
                </NavLink>
                <NavLink className="navlink" to="/shop">
                    <span className={pathname === "/shop" ? 'active' : ''}>Shop</span>
                </NavLink>
                <NavLink className="navlink" to="/blog">
                    <span className={pathname === "/blog" ? 'active' : ''}>Blog</span>
                </NavLink>
                <NavLink className="navlink" to="/about">
                    <span className={pathname === "/about" ? 'active' : ''}>About</span>
                </NavLink>
                <NavLink className="navlink" to="/contact">
                    <span className={pathname === "/contact" ? 'active' : ''}>Contact</span>
                </NavLink>
                <NavLink className="navlink" id="lg-bag" to="/cart">
                    <span className={pathname === "/cart" ? 'active' : ''}><FaShoppingBag /></span>
                </NavLink>
            </nav>
        </header>
  )
}

export default Header;
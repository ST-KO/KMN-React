import React from 'react';
import { Link, NavLink, useParams } from 'react-router-dom'; 
import { BsCart2 } from "react-icons/bs";

const Header = () => {
    
    const param = useParams();
    console.log(param);

    return (
    <header>
        <section id="header">
            <Link id="logo" to="/">Khit Myat Noe</Link>
            <nav id="navbar">
                <NavLink className="navlink" to="/">
                    <span className='active'>Home</span> 
                </NavLink>
                <NavLink className="navlink" to="/">
                    <span>Shop</span>
                </NavLink>
                <NavLink className="navlink" to="/">
                    <span>About</span>
                </NavLink>
                <NavLink className="navlink" to="/">
                    <span>Contact</span>
                </NavLink>
                <NavLink className="navlink" id="lg-bag" to="/">
                    <span><BsCart2 /></span>
                </NavLink>
            </nav>
        </section>
    </header>
  )
}

export default Header;
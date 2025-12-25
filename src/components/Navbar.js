import React, { useState } from 'react';
import {NavLink} from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
    const[menuOpen,setMenuOpen]=useState(false);
  return (
    <nav>
        <div className='logo'>Sharma Fitness Studio</div>
        <div className={`links ${menuOpen ? "open":""}`}onClick={()=>setMenuOpen(false)}>
            <NavLink to="/" end>Home</NavLink>
            <NavLink to="/about">About Trainer</NavLink>
            <NavLink to="/services">Services</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </div>
        <div className='menu-icon'onClick={()=>setMenuOpen(!menuOpen)}>☰</div>
    </nav>
  )
}

export default Navbar;
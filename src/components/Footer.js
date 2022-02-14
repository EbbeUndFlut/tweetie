import React from 'react';
import { FaHouseUser, FaSearch, FaHeart } from "react-icons/fa";
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <NavLink to="/home" style={({ isActive }) => ({
                color: isActive ? '#0071BC' : "rgba(0, 113, 188, 0.2)",
            })}><FaHouseUser/></NavLink>
            <NavLink to="/search" style={({ isActive }) => ({
                color: isActive ? '#0071BC' : "rgba(0, 113, 188, 0.2)",
            })}><FaSearch/></NavLink>
            <NavLink to="/favorites" style={({ isActive }) => ({
                color: isActive ? '#0071BC' : "rgba(0, 113, 188, 0.2)",
            })}><FaHeart/></NavLink>
        </footer>
    );
}

export default Footer;
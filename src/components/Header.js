import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <h1>Home</h1>
            <Link to='/home'><img src="./img/tweetieLogo.png" alt="logo" /></Link>
        </header>
    );
}

export default Header;
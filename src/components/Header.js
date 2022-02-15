import React from 'react';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header>
            <h1>{props.title}</h1>
            <Link to='/home'><img src="./img/tweetieLogo.png" alt="logo" /></Link>
        </header>
    );
}

export default Header;
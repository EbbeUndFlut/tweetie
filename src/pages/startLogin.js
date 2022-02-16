import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import data from '../data/data';
// import { useEffect, useState } from 'react'
import LoginFunction from '../components/LoginFunction.js';


const Login = () => {
    
    return (
        <section className="start">
            <h1>Melde dich bei Tweetie an</h1>
            <form>
                <input onChange={(e) => LoginFunction.setEmail(e.target.value)} type="email" name="email" id="email" placeholder="E-Mail" />
                <input onChange={(e) => LoginFunction.setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Passwort" />
                {/* <input onClick={triggerLogin} className="blueButton" type="button" value="Anmelden" /> */}
                <Link onClick={LoginFunction.triggerLogin} className="blueButton loginButton" to="/home">Anmelden</Link>
                <Link className="greyFont" to="/registration">Noch kein Konto? Hier registrieren.</Link>
            </form>
        </section>
    );
}

export default Login;
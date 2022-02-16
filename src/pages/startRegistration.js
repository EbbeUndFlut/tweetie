import React from 'react';
import { Link } from 'react-router-dom';
import RegisterFunction from '../components/RegisterFunction.js';

const Registration = () => {
    return (
        <section className="start">
            <h1>Erstelle dein Konto bei Tweetie</h1>
            <form action="">
                <input onChange={(e) => RegisterFunction.setUsername(e.target.value)} type="text" name="username" id="username" placeholder="Username" />
                <input onChange={(e) => RegisterFunction.setEmail(e.target.value)} type="email" name="email" id="email" placeholder="E-Mmail" />
                <input onChange={(e) => RegisterFunction.setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Passwort" />
                <input onChange={(e) => RegisterFunction.setPasswordConfirmation(e.target.value)} type="password" name="password" id="password" placeholder="Passwort Bestätigung" />
                <input onChange={(e) => RegisterFunction.setFile(e.target.value)} type="file" name="image" id="image" placeholder="Bild auswählen" />
                <Link onClick={RegisterFunction.triggerLogin} className="blueButton loginButton" to="/home">Anmelden</Link>
                <Link className="greyFont" to="/">Hast du bereits ein Konto? Hier anmelden.</Link>
            </form>
        </section>
    );
}

export default Registration;
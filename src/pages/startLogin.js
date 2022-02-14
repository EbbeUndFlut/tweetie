import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <section className="start">
            <h1>Melde dich bei Tweetie an</h1>
            <form action="">
                <input type="email" name="email" id="email" placeholder="E-Mail" />
                <input type="password" name="password" id="password" placeholder="Passwort" />
                <input className="blueButton" type="button" value="Anmelden" />
                <Link className="greyFont" to="/registration">Noch kein Konto? Hier registrieren.</Link>
            </form>
            
        </section>

    );
}

export default Login;
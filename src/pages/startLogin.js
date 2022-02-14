import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <section className="login">
            <h1>Melde dich bei Tweetie an</h1>
            <form action="">
                <input type="email" name="email" id="email" placeholder="E-Mail" />
                <input type="password" name="password" id="password" placeholder="Passwort" />
                <input type="button" value="Anmelden" />
            </form>
            <Link to="/registration">Noch kein Konto? Hier registrieren.</Link>
        </section>

    );
}

export default Login;
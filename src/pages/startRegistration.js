import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (  
        <section className="registration">
            <h1>Erstelle dein Konto bei Tweetie</h1>
            <form action="">
                <input type="text" name="username" id="username" placeholder="Username"/>
                <input type="email" name="email" id="email" placeholder="E-Mmail" />
                <input type="password" name="password" id="password" placeholder="Passwort" />
                <input type="password" name="password" id="password" placeholder="Passwort Bestätigung" />
                <input type="file" name="image" id="image" placeholder="Bild auswählen"/>
                <input type="button" value="Registrieren" />
            </form>
            <Link to="/">Hast du bereits ein Konto? Hier anmelden.</Link>
        </section>
    );
}
 
export default Registration;
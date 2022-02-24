// Startseite nach Login & Registrierung
import React from 'react';
import AddComment from '../components/AddComment.js';
import CommentItems from '../components/CommentItems.js';


const Home = () => {
    return (  
        <section>
            <AddComment/>
            <CommentItems/>
        </section>
        
    );
}
 
export default Home;
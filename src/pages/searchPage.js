// Seite für Suche nach Freitext
import { v4 as uuidv4 } from "uuid"
import { Link } from "react-router-dom"
import React, { useState } from "react";
import Search from '../components/Search.js';
import CommentDetails from '../components/CommentDetails.js';


const SearchPage = () => {
    const [filteredData, setFilteredData] = useState([]);

    const setData = (data) => {
        setFilteredData(data)
    }
    
    return (  
        <section>
            <Search setData={setData}/>
            <article className="searchResults">
                {filteredData.map((elt) => 
                // Link zur Anzeige von allen Antworten zu einzelnen Posts
                <Link className="comment-link" to={`/conversationpage/${elt._id}`}>
                    <CommentDetails
                        key={uuidv4()}
                        img={elt.creator.profilepic}
                        username={elt.creator.name}
                        time={elt.date}
                        comment={elt.text}
                        _id={elt._id}
                    /></Link>
                ).sort((a, b) => (a.time > b.time ? 1 : -1))}
            </article>
        </section>
    );
}
 
export default SearchPage;
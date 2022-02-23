import { v4 as uuidv4 } from "uuid"
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
            <section className="searchResults">
                {filteredData.map((elt) => 
                    <CommentDetails
                        key={uuidv4()}
                        img={elt.creator.profilepic}
                        username={elt.creator.name}
                        time={elt.date}
                        comment={elt.text}
                        _id={elt._id}
                    />
                )}
            </section>
        </section>
    );
}
 
export default SearchPage;
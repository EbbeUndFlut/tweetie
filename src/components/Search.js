import React, { useState, useEffect } from "react";
import CommentDetails from './CommentDetails.js';


const Search = () => {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);

    const handleSearch = (event) => {
    }

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/posts", {
            credentials: "include",
        })
            .then(response => {
                console.log(response.data)
                setAllData(response.data);
                setFilteredData(response.data);
            })
            .catch(error => {
                console.log('Error getting fake data: ' + error);
            })
    }, []);

    return (
        <form className="search">
            <input
                onChange={(event) => handleSearch(event)}
                type="text"
                name="search"
                id="search"
                placeholder="🔍 Wonach möchtest du suchen?" />



            <section className="searchResults">
                {filteredData.map((elt) => {
                    <CommentDetails
                        key={uuidv4()}
                        img={elt.img}
                        username={elt.creator.name}
                        time={elt.date}
                        thefunc={comment}
                        comment={elt.text}
                        _id={elt._id}
                    />
                })}
            </section>




        </form>
    );
}

export default Search;
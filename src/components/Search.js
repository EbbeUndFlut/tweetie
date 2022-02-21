import React, { useState, useEffect } from "react";
import CommentDetails from './CommentDetails.js';
import { v4 as uuidv4 } from "uuid"


const Search = () => {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const comment = (item) => {
        allData(item)
    }

    const handleSearch = (event) => {
        let value = event.target.value.toLowerCase(); // Value ist in der Vorlage dort, wo ich unten beim map das elt habe. Verstehe nicht ganz, wie man das schreiben soll. 
        let result = [];
        console.log(value);
        result = allData.filter((data) => {
            return data.title.search(value) != -1;
        });
        setFilteredData(result);
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
    }, []); // kommt hier in die [] noch was rein? 

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
import React, { useState } from "react";


const Search = (props) => {
    
    const handleSearch = (event) => {
        event.preventDefault();
        let value = event.target.value.toLowerCase();
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/posts/search?search=" + value, {
            credentials: "include",
        })
            .then(response => response.json())
            .then(data => props.setData(data))
    }

    return (
        <>
            <form className="search">
                <input
                    onChange={(event) => handleSearch(event)}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="🔍 Wonach möchtest du suchen?" />
            </form>
        </>


    );
}

export default Search;
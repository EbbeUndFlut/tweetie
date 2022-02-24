// Komponente für Sucheingabe
import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = (props) => {
    // Fetch zur Freitextsuche 
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
        <div className="search">
            <form className="search-form">
                <label htmlFor="search" className="search-label"><FaSearch className="FaIcon"/></label>
                <input className="search-input"
                    onChange={(event) => handleSearch(event)}
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Wonach möchtest du suchen?" />
            </form>
        </div>
    );
}

export default Search;
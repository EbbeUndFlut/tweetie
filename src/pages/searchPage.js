import React from 'react';
import Search from '../components/Search.js';
import CommentItems from '../components/CommentItems.js';


const SearchPage = () => {
    return (  
        <section>
            <Search/>
            <CommentItems/>
        </section>
    );
}
 
export default SearchPage;
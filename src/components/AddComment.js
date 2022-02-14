import React from 'react';

const AddComment = () => {
    return (  
        <form className="addComment">
            <input type="text" name="comment" id="comment" placeholder="Was möchtest mitteilen?" />
            <input className="blueButton" type="submit" value="Senden" />
        </form>
    );
}
 
export default AddComment;
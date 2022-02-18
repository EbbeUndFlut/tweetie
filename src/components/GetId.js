import React from 'react';
import {useParams} from 'react-router-dom';
import CommentDetails from './CommentDetails.js';


const GetId = () => {
    let {id} = useParams();
    console.log(id)

    return (  
        <CommentDetails
        _id={id}
        />
    );
}
 
export default GetId;
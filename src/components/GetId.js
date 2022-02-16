import React from 'react';
import {useParams} from 'react-router-dom';
import CommentDetails from './CommentDetails.js';
import Data from '../data/data.js';



const GetId = () => {
    let {id} = useParams();
    console.log(id)

    return (  
        <CommentDetails
        id={id}
        />
    );
}
 
export default GetId;
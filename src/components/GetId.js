// Komponente um ID zu Post und zu Antworten auf Posts zu übergeben
import React from 'react';
import { useParams } from 'react-router-dom';
import Answers from '../pages/answers.js';

// Weiterleitung von allen Posts, zur Antwort auf Posts
const GetId = () => {
    let { id } = useParams();
    console.log(id)

    return (
        <Answers
            _id={id}
        />
    );
}

export default GetId;
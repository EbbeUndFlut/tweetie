import React from 'react';
import { useParams } from 'react-router-dom';
import Answers from '../pages/answers.js';

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
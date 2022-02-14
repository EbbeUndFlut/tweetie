import React from 'react';
import CommentDetails from './CommentDetails.js';
import data from '../data/data.js';
import { v4 as uuidv4 } from 'uuid';

const CommentItems = () => {
    return (
        <section>
            {
                data.map(elt =>
                    <CommentDetails
                        key={uuidv4()}
                        img={elt.img}
                        username={elt.username}
                        time={elt.time}
                        comment={elt.comment}
                    />)
            }
        </section>
    );
}

export default CommentItems;
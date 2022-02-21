import React from 'react';
import { useState } from 'react';
import LikeCounter from './LikeCounter.js';
import CommentCounter from './CommentCounter.js';


const CommentDetails = (props) => {
    return (
        <article className="comment">
            <img src={props.img} alt={props.username} />
            <div className="commentContent">
                <h2>{props.username} <span className="greyFont">{props.time}</span></h2>
                <p>{props.comment}</p>
                <div className="counterIcons">
                    <CommentCounter {...props} /> {/* ...props heißt alle props (spread operator) */}
                    <LikeCounter />
                </div>
            </div>
        </article>
    );
}

export default CommentDetails;
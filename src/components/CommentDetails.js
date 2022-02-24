// Komponente für Kommentarschablone
import LikeCounter from './LikeCounter.js';
import CommentCounter from './CommentCounter.js';
import React, { useState, useEffect } from 'react';

const CommentDetails = (props) => {
    const [time, setTime] = useState(null)

    // Zeitangabe in den Posts
    useEffect(() => {
        const dateNow = new Date()
        console.log(dateNow)
        const dateThen = new Date(props.time)
        console.log(dateThen)
        const timeString = props.time
        console.log(new Date(timeString).toLocaleString())
        setTime(new Date(timeString).toLocaleString())
    })

    return (
        <article className="comment">
            <img src={props.img} alt={props.username} />
            <div className="commentContent">
                <h3>{props.username}</h3>
                <p className="greyFont">{time}</p>
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
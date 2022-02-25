// Komponente für Kommentarschablone
import { Link } from "react-router-dom";
import LikeCounter from "./LikeCounter.js"
import CommentCounter from "./CommentCounter.js"
import React, { useState, useEffect } from "react"

const CommentDetails = (props) => {
    const [time, setTime] = useState(null)

    // Zeitangabe in den Posts
    useEffect(() => {
        const dateNow = new Date()
        const dateThen = new Date(props.time)
        const timeString = props.time
        setTime(new Date(timeString).toLocaleString())
    })

    return (
        <article className="comment">
            <img src={props.img} alt={props.username} />
            <div className="commentContent">
                <h3>{props.username}</h3>
                <p className="greyFont">{time}</p>
                {/* Link zur Anzeige von allen Antworten zu einzelnen Posts */}
                <Link className="comment-link" to={`/conversationpage/${props._id}`}>
                    <p>{props.comment}</p>
                </Link>
                <div className="counterIcons">
                    <CommentCounter {...props} /> {/* ...props heißt alle props (spread operator) */}
                    <LikeCounter {...props} />
                </div>
            </div>
        </article>
    )
}

export default CommentDetails

// Komponente für Fetch aller Kommentare 
import { v4 as uuidv4 } from "uuid"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import CommentDetails from "./CommentDetails.js"


const CommentItems = () => {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState(null)
    const comment = (item) => {
        setPost(item)
    }

    // Kommentar Fetch
    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/posts", {
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setPosts(data)
            })
    }, [post])

    return (
        <section className="commentItems">
            {posts
                .map((elt) => (
                    // Link zur Anzeige von allen Antworten zu einzelnen Posts
                    <Link className="comment-link" to={`/conversationpage/${elt._id}`}>
                        <CommentDetails
                            key={uuidv4()}
                            img={elt.creator.profilepic}
                            ccounter={elt.comments}
                            username={elt.creator.name}
                            time={elt.date}
                            thefunc={comment}
                            comment={elt.text}
                            _id={elt._id}
                        />
                    </Link>
                ))
                .sort((a, b) => (a.time > b.time ? 1 : -1))}
        </section>
    )
}

export default CommentItems

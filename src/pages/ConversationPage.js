// Seite, die alle Antworten auf einzelne Posts anzeigt
import { v4 as uuidv4 } from "uuid"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import BackButton from "../components/BackButton.js"
import CommentDetails from "../components/CommentDetails.js"

const ConversationPage = (props) => {
    const [post, setPost] = useState(null)
    const comment = (item) => {
        setPost(item)
    }
    const [answers, setAnswers] = useState([])
    const [creator, setCreator] = useState([])
    let { id } = useParams()

    // Fetch für Antworten auf einzelne Posts
    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/posts/conversation/", {
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({ parentId: id }),
        })
            .then((data) => data.json())
            .then((item) => {
                console.log("hierhier", item)
                setPost(item.post)
                setAnswers(item.comments)
            })
    }, [])

    return (
        <section className="conversationPage">
            {/* Link zur Anzeige von allen Antworten zu einzelnen Posts  s */}
            {post ? (
                <CommentDetails
                    img={post.creator.profilepic}
                    ccounter={post.comments}
                    username={post.creator.name}
                    time={post.date}
                    thefunc={comment}
                    comment={post.text}
                    _id={post._id}
                />
            ) : null}
            <div className="commentConversationAnswer">
                {answers
                    .map((elt) => (
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
                    ))

                    .sort((a, b) => (a.time > b.time ? 1 : -1))}
            </div>
            <BackButton />
        </section>
    )
}

export default ConversationPage

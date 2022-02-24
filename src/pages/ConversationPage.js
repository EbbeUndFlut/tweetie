import { v4 as uuidv4 } from "uuid"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import CommentDetails from "../components/CommentDetails.js"
import BackButton from "../components/BackButton.js"

const ConversationPage = (props) => {
    const [post, setPost] = useState([])
    const comment = (item) => {
        setPost(item)
    }
    const [answers, setAnswers] = useState([])
    const [creator, setCreator] = useState([])
    let { id } = useParams()
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
                setPost(item[0])
                setAnswers(item[0].comments)
                setCreator(item[0].boy[0])
            })
    }, [])
    return (
        <section className="conversationPage">
            <CommentDetails img={creator.profilepic} ccounter={post.comments} username={creator.name} time={post.date} thefunc={comment} comment={post.text} _id={post._id} />
            <div className="commentConversationAnswer">
                {answers.map((elt) => (
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
                ))}
            </div>
            <BackButton />
        </section>
    )
}

export default ConversationPage

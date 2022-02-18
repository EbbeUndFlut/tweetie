import { useEffect, useState } from "react"
import CommentDetails from "./CommentDetails.js"
import data from "../data/data.js"
import { v4 as uuidv4 } from "uuid"

const CommentItems = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/posts", {
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) =>{
		    console.log(data)
		    setPosts(data)})
    }, [])
    return (
        <section className="commentItems">
            {posts.map((elt) => (
                <CommentDetails key={uuidv4()} img={elt.img} username={elt.creator.name} time={elt.date} comment={elt.text} id={elt.id} />
            ))}
        </section>
    )
}

export default CommentItems

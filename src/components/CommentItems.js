import { useEffect, useState } from "react"
import CommentDetails from "./CommentDetails.js"
import data from "../data/data.js"
import { v4 as uuidv4 } from "uuid"

const CommentItems = () => {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState(null)
    const comment = (item) => {
        setPost(item)
    }
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

    const checker = () => {
        if (post) {
            const item = posts.filter((item) => item._id == post)[0]
            console.log("DAS ITEM: ", item)
            return <CommentDetails key={uuidv4()} img={item.img} username={item.creator.name} time={item.date} thefunc={comment} comment={item.text} _id={item._id} />
        }
    }
    return (
        <section className="commentItems">
<<<<<<< Updated upstream
            {post
                ? checker()
                : posts.map((elt) => (
                      <CommentDetails key={uuidv4()} img={elt.img} username={elt.creator.name} time={elt.date} thefunc={comment} comment={elt.text} _id={elt._id} />
                  ))}
=======
            {posts.map((elt) => (
                <CommentDetails
                    key={uuidv4()}
                    img={elt.img}
                    username={elt.creator.name}
                    time={elt.date}
                    comment={elt.text}
                    _id={elt._id} />
            ))}
>>>>>>> Stashed changes
        </section>
    )
}

export default CommentItems

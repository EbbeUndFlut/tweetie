import { v4 as uuidv4 } from "uuid"
import { useEffect, useState } from "react"
import CommentDetails from "./CommentDetails.js"

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
            return (
                <CommentDetails
                    key={uuidv4()}
                    img={item.elt.creator.profilepic}
                    username={item.creator.name}
                    time={item.date}
                    thefunc={comment}
                    comment={item.text}
                    _id={item._id}
                />
            )
        }
    }
    return (
        <section className="commentItems">
            {post
                ? checker()
                : posts.map((elt) => (
                      <CommentDetails key={uuidv4()} img={elt.creator.profilepic} username={elt.creator.name} time={elt.date} thefunc={comment} comment={elt.text} _id={elt._id} />
                  ))}
        </section>
    )
}

export default CommentItems

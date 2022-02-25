import { v4 as uuidv4 } from "uuid"
import { useEffect, useState } from "react"
import Search from '../components/Search.js';
import CommentDetails from '../components/CommentDetails.js';

const Favorites = () => {
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState(null)
    const comment = (item) => {
        setPost(item)
    }

    useEffect(() => {
        fetch(process.env.REACT_APP_BACKEND_URL + "/api/posts/favs", {
            credentials: "include",
        })
            .then((res) => res.json())
            .then((data) => {
                setPosts(data)
                console.log("hier ist data", data)
            })
    }, [post])
    

    return (
        <section>
            <Search />
            {posts
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
        </section>
    );
}

export default Favorites;
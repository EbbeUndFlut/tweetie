import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";
import CommentDetails from "./CommentDetails.js";
import { Link } from 'react-router-dom'

const CommentItems = () => {
<<<<<<< HEAD
	const [posts, setPosts] = useState([]);
	const [post, setPost] = useState(null);
	const comment = (item) => {
		setPost(item);
	};
	useEffect(() => {
		fetch(process.env.REACT_APP_BACKEND_URL + "/api/posts", {
			credentials: "include",
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPosts(data);
			});
	}, [post]);

	const str = posts.date;
	const date = new Date(str);
	console.log(date.getDate());
=======
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
                /* const newData = data.map(item => item.date = new Date(item.date).toLocaleDateString)
                setPosts(newData) */

                setPosts(data)

            })
    }, [post])

    

    // Versuch das Datum zu bearbeiten. Bisher erfolglos. 
    /* console.log(posts)
    const str = posts[0].date
    console.log(str) */
    // const str = post[0].date
    /* console.log(str)  */
    /* const newStr = str.slice(0, -1)
    console.log(newStr)
    const date = new Date(str)
    console.log(date) */
>>>>>>> 09f901a656bdf741ae446c4e9197081a1bd5f751

	return (
		<section className="commentItems">
			{posts
				.map((elt) => (
					<Link to={`/conversationpage/${elt._id}`}>
						<CommentDetails
							key={uuidv4()}
							img={
								elt.creator
									.profilepic
							}
							ccounter={elt.comments}
							username={
								elt.creator.name
							}
							time={elt.date}
							thefunc={comment}
							comment={elt.text}
							_id={elt._id}
						/>
					</Link>
				))
				.sort((a, b) => (a.time > b.time ? 1 : -1))}
		</section>
	);
};

<<<<<<< HEAD
export default CommentItems;
=======
    return (
        <section className="commentItems">
            {posts.map((elt) => (
                <CommentDetails
                    key={uuidv4()}
                    img={elt.creator.profilepic}
                    username={elt.creator.name}
                    time={elt.date}
                    thefunc={comment}
                    comment={elt.text}
                    _id={elt._id} />
            )).sort((a, b) => a.time > b.time ? 1 : -1)
            }
        </section>
    )
}

export default CommentItems
>>>>>>> 09f901a656bdf741ae446c4e9197081a1bd5f751

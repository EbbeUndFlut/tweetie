// Seite mit Antworten zu Posts
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import BackButton from "../components/BackButton.js";
import AddComment from "../components/AddComment.js";
import CommentDetails from "../components/CommentDetails.js";


const Answers = (props) => {
	const [text, setText] = useState(""); // löschen? 
	const [posts, setPosts] = useState([]);
	const [post, setPost] = useState(null);
	const [answers, setAnswers] = useState(null) // löschen? 
	const comment = (item) => {
		setPost(item);
	};

	// Fetch mit Antworten zu Parent Post
	useEffect(() => {
		fetch(
			process.env.REACT_APP_BACKEND_URL +
			`/api/posts/${props._id}`,
			{
				credentials: "include",
			}
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				setPosts([data]);
			});
	}, [post]);

	return (
		<>
			<section className="postAnswers">
				{posts.map((elt) => (
					// Link zur Anzeige von allen Antworten zu einzelnen Posts
					<Link className="comment-link" to={`/conversationpage/${elt._id}`}>
						<CommentDetails
							key={uuidv4()}
							img={elt.creator.profilepic}
							username={elt.creator.name}
							time={elt.date}
							thefunc={comment}
							comment={elt.text}
							_id={elt._id}
							parenId={props._id}
						/>
					</Link>
				)).sort((a, b) => (a.time > b.time ? 1 : -1))}
				<AddComment parentid={props._id} />
				<BackButton />
			</section>
		</>
	);
};

export default Answers;

import React from "react";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AddComment from "../components/AddComment.js";
import CommentDetails from "../components/CommentDetails.js";
import BackButton from "../components/BackButton.js";

const Answers = (props) => {
	const [text, setText] = useState("");
	const [posts, setPosts] = useState([]);
	const [post, setPost] = useState(null);
	const [answers, setAnswers] = useState(null)
	const comment = (item) => {
		setPost(item);
	};

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
				))}
				<AddComment parentid={props._id} />
				<BackButton />
			</section>
		</>
	);
};

export default Answers;

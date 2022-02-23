import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ConversationPage = (props) => {
	const [post, setPost] = useState([]);
	const [answers, setAnswers] = useState([]);
	let { id } = useParams();
	useEffect(() => {
		fetch(
			process.env.REACT_APP_BACKEND_URL +
				"/api/posts/conversation/",
			{
				credentials: "include",
				headers: {
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify({ parentId: id }),
			}
		)
			.then((data) => data.json())
			.then((item) => {
				setPost(item[0]);
				setAnswers(item[0].comments);
			});
	}, []);
	return (
		<>
			<h1>hajhsj</h1>
			{answers.map((item) => (
				<h1>Geilo</h1>
			))}
		</>
	);
};

export default ConversationPage;

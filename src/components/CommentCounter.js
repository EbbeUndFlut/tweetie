// Kommponente für den Kommentarzähler
import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const CommentCounter = (props) => {
	const [count, setCount] = useState(0);
	useEffect(() => {
		setCount(props.ccounter || 0);
	}, []);

	return (
		<Link className="commentCounter" to={`/answers/${props._id}`}>
			<FaComment />
			<p className="counterP">{count}</p>
		</Link>
	);
};

export default CommentCounter;

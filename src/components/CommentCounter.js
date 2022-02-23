import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaComment } from "react-icons/fa";

const CommentCounter = (props) => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setCount(props.ccounter);
	}, []);

	return (
		<Link className="counterP" to={`/answers/${props._id}`}>
			<FaComment />
			<p className="counterP">{count}</p>
		</Link>
	);
};

export default CommentCounter;

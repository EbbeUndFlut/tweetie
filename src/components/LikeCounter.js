// Komponente für den Like Counter
import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";

const LikeCounter = (props) => {
	const [count, setCount] = useState(0);
	const [isFav, setFav] = useState(false);
	useEffect(() => {}, []);

	const changeFav = () => {
		const stat = !isFav
		setFav(stat);
		fetch(process.env.REACT_APP_BACKEND_URL + "/api/posts/fav", {
			method: "POST",
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				favId: props._id,
				isFav: stat,
			}),
		});
	};

	return (
		<>
			<div className="likeCounter"></div>
			<FaHeart onClick={changeFav} />
			<p className="counterP">{count}</p>
		</>
	);
};

export default LikeCounter;

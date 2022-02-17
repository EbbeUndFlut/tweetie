import { useState } from "react";

const AddComment = () => {
	const [text, setText] = useState("");
	const create = (e) => {
		e.preventDefault();
		fetch(process.env.REACT_APP_BACKEND_URL + "/api/posts", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({text}),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => console.log(res));
	};
	return (
		<form className="addComment">
			<input
				onChange={(e) => setText(e.target.value)}
				type="text"
				name="comment"
				id="comment"
				placeholder="Was möchtest mitteilen?"
			/>
			<input
				onClick={create}
				className="blueButton"
				type="submit"
				value="Senden"
			/>
		</form>
	);
};

export default AddComment;

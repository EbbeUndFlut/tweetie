// Komponente für Kommentareingabe
import React, { useState, useRef } from "react";

const AddComment = (props) => {
	const inputRef = useRef(null)
	const [text, setText] = useState("");
	const create = (e) => {
		// Auskommentiert, um Reload der Seite bei neuem Kommentar zu starten
		/* e.preventDefault(); */
		const { parentid } = props;
		console.log("PROPS:", parentid);
		inputRef.current.value=""
		fetch(process.env.REACT_APP_BACKEND_URL + "/api/posts", {
			method: "POST",
			credentials: "include",
			body: JSON.stringify({ text, parentPostId: parentid }),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => console.log(res));
	};
	return (
		<form className="addComment">
			<input
				ref={inputRef}
				className="inputComment"
				onChange={(e) => setText(e.target.value)}
				type="text"
				name="comment"
				id="comment"
				placeholder="Was möchtest du mitteilen?"
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

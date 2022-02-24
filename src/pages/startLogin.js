import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FormFeedback from "../components/FormFeedback.js";

const Login = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [formFeedback, setFormFeedback] = useState(null);

	async function postData(url, data) {
		// Default options are marked with *
		const response = await fetch(url, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			mode: "cors", // no-cors, *cors, same-origin
			credentials: "include",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data), // body data type must match "Content-Type" header
		});
		console.log(url)
		let myResponse = await response.json();
		myResponse.status = response.status;
		return myResponse;
	}

	async function postLoginUser({ email, password }) {
		const url =
			process.env.REACT_APP_BACKEND_URL + "/api/users/login";
		const body = { email, password };
		const result = await postData(url, body);
		return result;
	}

	const triggerLogin = (event) => {
		event.preventDefault();
		// check for data
		const hasData = email.length > 0 && password.length > 0;
		if (!hasData) {
			setFormFeedback({
				status: "error",
				message: "Please fill in your Login information!",
			});
			console.log(formFeedback);
			return;
		}
		// trigger the login
		postLoginUser({ email, password }).then((data, err) => {
			if (data.status === 200) {
				navigate("/home");
			}
			if (err) {
				setFormFeedback({
					status: "error",
					message: err,
				});

				return;
			}
			// login erfgolreich --> token speichern (in der App.js)
			// props.saveToken(token)
			// reset state...
			setEmail("");
			setPassword("");
			// setFormFeedback(null)
		});
	};

	return (
		<section className="start">
			<h1>Melde dich bei Tweet<span className="fontColorOrange">i</span>e an</h1>
			<form>
				<input
					onChange={(e) =>
						setEmail(e.target.value)
					}
					type="email"
					name="email"
					id="email"
					placeholder="E-Mail"
				/>
				<input
					onChange={(e) =>
						setPassword(e.target.value)
					}
					type="password"
					name="password"
					id="password"
					placeholder="Passwort"
				/>
				<input
					onClick={triggerLogin}
					className="blueButton"
					type="button"
					value="Anmelden"
				/>
				<Link className="greyFont" to="/registration">
					Noch kein Konto? Hier registrieren.
				</Link>
			</form>
			<FormFeedback feedback={formFeedback} />
		</section>
	);
};

export default Login;

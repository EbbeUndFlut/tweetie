import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Registration = () => {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [pass, setPass] = useState("");
	const [passConfirm, setPassConfirm] = useState("");
	const [pic, setPic] = useState(null);
	const [picUrl, setPicUrl] = useState("");
	const navigate = useNavigate();
	const register = async () => {
		console.log("in register");
		const data = await fetch(
			process.env.REACT_APP_BACKEND_URL +
			"/api/users/signedurl?imgname=" +
			pic.name,
			{
				method: "GET",
			}
		);
		const { url } = await data.json();
		console.log(url);
		const result = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "multipart/form-data",
			},
			body: pic,
		});
		if (result) {
			setPicUrl(url.split("?")[0]);

			let formData = new FormData();
			formData.append("name", name);
			formData.append("email", mail);
			formData.append("password", pass);
			formData.append("picurl", url.split("?")[0]);
			console.log("check mal form:", url);
			const result = await fetch(
				process.env.REACT_APP_BACKEND_URL +
				"/api/users",
				{
					method: "POST",
					credentials: "include",
					body: formData,
				}
			);
			if (result.status === 201) {
				navigate("/home");
			}
		}
	};

	const [fileLabelText, setFileLabelText] = useState("Datei auswählen")

	return (
		<section className="start">
			<h1>Erstelle dein Konto bei Tweetie</h1>
			<form>
				<input
					onChange={(e) =>
						setName(e.target.value)
					}
					type="text"
					name="username"
					id="username"
					placeholder="Username"
				/>
				<input
					onChange={(e) =>
						setMail(e.target.value)
					}
					type="email"
					name="email"
					id="email"
					placeholder="E-Mail"
				/>
				<input
					onChange={(e) =>
						setPass(e.target.value)
					}
					type="password"
					name="password"
					id="password"
					placeholder="Passwort"
				/>
				<input
					onChange={(e) =>
						setPassConfirm(e.target.value)
					}
					type="password"
					name="password"
					id="passwordConfirm"
					placeholder="Passwort Bestätigung"
				/>
				<label htmlFor="image" name="image" className="upload-label greyFont">{fileLabelText}</label>
				<input className="upload-button"
					onChange={(e) =>
						{setPic(e.target.files[0])
						setFileLabelText("Ausgewählte Datei: " + e.target.files[0].name)}
					}
					type="file"
					name="image"
					id="image"
					placeholder="Bild auswählen"
				/>
				<input
					onClick={register}
					className="blueButton"
					type="button"
					value="Registrieren"
				/>
				<Link className="greyFont" to="/">
					Hast du bereits ein Konto? Hier
					anmelden.
				</Link>
			</form>
		</section>
	);
};

export default Registration;

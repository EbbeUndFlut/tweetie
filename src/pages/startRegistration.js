import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import S3FileUpload from "react-s3"

const Registration = () => {
    const bucketConfig = {
        bucketName: "tweetiebucket",
        region: "eu-central-1",
        accessKeyId: "AKIAQOTBFH6HATM5NK56",
        secretAccessKey: "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",
    }
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [passConfirm, setPassConfirm] = useState("")
    const [pic, setPic] = useState(null)
    const [picUrl, setPicUrl] = useState("")
    const navigate = useNavigate()
    // window.Buffer = window.Buffer || require("buffer").Buffer;
    const register = () => {
        console.log("in register")
        // const imgUpload = async () => {
        // 	try{
        // 	const data = await S3FileUpload.uploadFile(
        // 		pic,
        // 		bucketConfig
        // 	);
        // 	console.log(data.location);
        // 	setPicUrl(data.location);
        // 	} catch (err){
        // 		console.log(err.message)
        // 	}
        // };
        // imgUpload()
        //.then(() => {
        let formData = new FormData()
        formData.append("name", name)
        formData.append("email", mail)
        formData.append("password", pass)
        formData.append("avatar", pic, pic.name)
        const result = fetch(process.env.REACT_APP_BACKEND_URL + "/api/users", {
            method: "POST",
            credentials: "include",
            body: formData,
        }).then((res) => {
            if (res.status === 201) {
                navigate("/home")
            }
        })
    }

    return (
        <section className="start">
            <h1>Erstelle dein Konto bei Tweetie</h1>
            <form>
                <input onChange={(e) => setName(e.target.value)} type="text" name="username" id="username" placeholder="Username" />
                <input onChange={(e) => setMail(e.target.value)} type="email" name="email" id="email" placeholder="E-Mmail" />
                <input onChange={(e) => setPass(e.target.value)} type="password" name="password" id="password" placeholder="Passwort" />
                <input onChange={(e) => setPassConfirm(e.target.value)} type="password" name="password" id="passwordConfirm" placeholder="Passwort Bestätigung" />
                <input onChange={(e) => setPic(e.target.files[0])} type="file" name="image" id="image" placeholder="Bild auswählen" />
                <input onClick={register} className="blueButton" type="button" value="Registrieren" />
                <Link className="greyFont" to="/">
                    Hast du bereits ein Konto? Hier anmelden.
                </Link>
            </form>
        </section>
    )
}

export default Registration

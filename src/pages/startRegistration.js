import { useState } from "react"
import { Link } from "react-router-dom"

const Registration = () => {
    const [name, setName] = useState("")
    const [mail, setMail] = useState("")
    const [pass, setPass] = useState("")
    const [passConfirm, setPassConfirm] = useState("")
    const [pic, setPic] = useState(null)

    const register = () => {
        console.log("in register")
        let formData = new FormData()
        formData.append("name", name)
        formData.append("email", mail)
        formData.append("password", pass)
        formData.append("avatar", pic, pic.name)

        const result = fetch(process.env.REACT_APP_BACKEND_URL + "/api/users", {
            method: "POST",
            body: formData,
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

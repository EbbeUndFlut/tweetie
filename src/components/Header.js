// Komponente für den Header
import { useEffect, useState } from "react"
import { FaPowerOff } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"

const Header = (props) => {
    const [user, setUser] = useState({}) // brauchen wir die Zeile??
    const navigate = useNavigate()
    useEffect(() => {
        const result = fetch(process.env.REACT_APP_BACKEND_URL + "/api/users/currentuser", {
            method: "GET",
            credentials: "include",
        })
    })

    const logoutTrigger = () => {
        const resultLogout = fetch(process.env.REACT_APP_BACKEND_URL + "/api/users/logout", {
            method: "GET",
            credentials: "include",
        }).then((result) => {
            if (result.status === 200) {
                navigate("/")
            }
        })
    }

    return (
        <header>
            <section>
                <Link to="/home">
                    <img src="./img/tweetieLogo.png" alt="logo" />
                </Link>
                <h2>{props.title}</h2>
            </section>
            <FaPowerOff className="cursor" onClick={logoutTrigger} />
        </header>
    )
}

export default Header

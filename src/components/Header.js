import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { FaPowerOff } from "react-icons/fa";

const Header = (props) => {
	const [user, setUser] = useState({})
	const navigate = useNavigate();
	useEffect(() => {
		const result = fetch(process.env.REACT_APP_BACKEND_URL + '/api/users/currentuser', {
			method: 'GET',
			credentials: 'include',
		}).then((result) => console.log(result))
	})

	const logoutTrigger = () => {
		const resultLogout = fetch(process.env.REACT_APP_BACKEND_URL + '/api/users/logout', {
			method: 'GET',
			credentials: 'include',
		}).then((result) => {
			if (result.status === 200) {
				navigate("/");
			}
		})
	}

	return (
		<header>
			<section>
				<Link to='/home'><img src="./img/tweetieLogo.png" alt="logo" /></Link>
				<h2>{props.title}</h2>
			</section>
			<FaPowerOff style={{ cursor: 'pointer' }} onClick={logoutTrigger} />
		</header>
	);
}

export default Header;

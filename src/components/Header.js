import {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
	const [user, setUser] = useState({})
	useEffect(()=> {
		const result = fetch(process.env.REACT_APP_BACKEND_URL+'/api/users/currentuser',{
			method: 'GET',
			credentials: 'include',
		}).then((result)=>console.log(result))
	})
    return (
        <header>
            <h1>{props.title}</h1>
            <Link to='/home'><img src="./img/tweetieLogo.png" alt="logo" /></Link>
        </header>
    );
}

export default Header;

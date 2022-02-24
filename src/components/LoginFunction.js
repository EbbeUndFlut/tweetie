// Komponenten für den Logintrigger
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginFunction = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    async function postData(url, data) {
        // Default options are marked with *
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        let myResponse = await response.json()
        myResponse.status = response.status
        return myResponse;
    }

    async function postLoginUser({ email, password }) {
        const url = process.env.REACT_APP_BACKEND_URL + "/api/users/login"
        const body = { email, password }
        const result = await postData(url, body)
        return result
    }

    const triggerLogin = (event) => {
        event.preventDefault()
        // check for data
        const hasData = email.length > 0 && password.length > 0
        /* if(!hasData) {
            setFormFeedback({
                status: "error",
                message: "Please fill in your Login information!"
            })
            return;
        } */
        // trigger the login
        postLoginUser({ email, password })
            .then((data) => {
                if (data.status === 200) {
                    navigate("/home")
                }
                /*                 if (err) {
                                    setFormFeedback({
                                        status: "error",
                                        message: err
                                    })
                                    return;
                                } */
                // login erfgolreich --> token speichern (in der App.js)
                // props.saveToken(token)
                // reset state...
                setEmail("")
                setPassword("")
                // setFormFeedback(null)
            })
    }

    return (
        <></>
    );
}

export default LoginFunction;







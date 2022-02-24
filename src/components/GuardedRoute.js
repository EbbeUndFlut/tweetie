// Komponente um Routen nur für eingeloggte User zugänglich zu machen
import { Outlet } from "react-router-dom";
import Login from "../pages/startLogin.js";

const useAuth = async () => {
    const res = await fetch(process.env.REACT_APP_BACKEND_URL + "/api/validate", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    console.log("Meine Guarded Route:", data.verify);
    return data.verify;
};

const GuardedRoute = () => {
    const isAuth = true;
    console.log(isAuth);
    return isAuth ? <Outlet /> : <Login />;
};

export default GuardedRoute;
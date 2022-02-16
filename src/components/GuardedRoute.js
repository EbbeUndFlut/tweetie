import { Outlet } from "react-router-dom";
import Login from "../pages/startLogin.js";

const useAuth = async () => {
    const res = await fetch("http://localhost:9898/api/validate", {
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
    const isAuth = useAuth();
    console.log(isAuth);
    return isAuth ? <Outlet /> : <Login />;
};

export default GuardedRoute;
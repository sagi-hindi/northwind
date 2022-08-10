import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../../Redux/AuthState";
import store from "../../../Redux/Store";
import authService from "../../../Services/AuthService";
import "./Logout.css";

function Logout(): JSX.Element {
    const navigate = useNavigate()


    useEffect(()=>{

        authService.logout();
        alert("logout success")
        navigate("/home")
    },[])

    

    return null;
}

export default Logout;

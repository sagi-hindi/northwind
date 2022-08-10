import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import Login from "../Login/Login";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {

    const [user,setUser] = useState<UserModel>(null);

    useEffect(()=>{
        setUser(store.getState().AuthState.user);

        const unsubscribe  =store.subscribe(()=>{
        setUser(store.getState().AuthState.user)
        });

        return () => unsubscribe ();
    },[]);


    return (
        <div className="AuthMenu">
            {user === null ? <>

            <span>Hello Guest</span>
            <span> | </span>
            <NavLink to="/login">Login</NavLink>
            <span> | </span>
            <NavLink to="/Register">Register</NavLink>
            
            </>
            :
            <>
            <span>Hello {user.firstName} {user.lastName}</span>
            <span> | </span>
            <NavLink to="/logout">logout</NavLink>


            
            </>
            
        }
			
        </div>
    );
}

export default AuthMenu;

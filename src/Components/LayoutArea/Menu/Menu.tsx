import { Navigate, NavLink } from "react-router-dom";
import Home from "../../HomeArea/Home/Home";
import "./Menu.css";

function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/Home">Home</NavLink>
            <NavLink to="/Products">Products</NavLink>
            <NavLink to="/About">About</NavLink>
			
        </div>
    );
}

export default Menu;

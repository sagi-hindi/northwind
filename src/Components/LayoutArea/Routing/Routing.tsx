import { Navigate, Route, Routes } from "react-router-dom";
import About from "../../AboutArea/About/About";
import Login from "../../AuthArea/Login/Login";
import Logout from "../../AuthArea/Logout/Logout";
import Register from "../../AuthArea/Register/Register";
import Home from "../../HomeArea/Home/Home";
import AddProduct from "../../ProductArea/AddProduct/AddProduct";
import ProductsDetails from "../../ProductArea/ProductsDetails/ProductsDetails";
import ProductsList from "../../ProductArea/ProductsList/ProductsList";
import UpdateProduct from "../../ProductArea/UpdateProduct/UpdateProduct";
import PageNotFound from "../PageNotFound/PageNotFound";
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
            
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Products" element={<ProductsList/>}/>
                <Route path="/Products/details/:id" element={<ProductsDetails/>}/>
                <Route path="/Products/new" element={<AddProduct/>}/>
                <Route path="Products/edit/:id" element={<UpdateProduct/>}/>
                <Route path="/Register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/logout" element={<Logout/>}/>

                <Route path="/About" element={<About/>}/>

                <Route path="/" element={<Navigate to="/Home"/>}/>

                <Route path="*" element={<PageNotFound/>}/>


                </Routes>



            
			
        </div>
    );
}

export default Routing;

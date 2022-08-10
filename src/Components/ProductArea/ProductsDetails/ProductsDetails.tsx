import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import config from "../../../utils/Config";
import Loading from "../../SharedArea/Loading/Loading";
import "./ProductsDetails.css";

function ProductsDetails(): JSX.Element {
    const params = useParams()
    const [product,setProduct]= useState<ProductModel>()
    let id = +params.id


    useEffect(()=>{

        productsService.getOneProduct(id)
        .then(product => setProduct(product))
        .catch(err => alert(err.message))
      


        //  axios.get<ProductModel>("http://localhost:3030/api/products/" + params.id)
        // .then(response =>setId(response.data) )
        

    },[])


    console.log(product)
    const navigate = useNavigate()

    async function deleteProduct(){
        try{
            const confirmDelete = window.confirm("Are you sure?")

            if(!confirmDelete) return;
            debugger

                // await axios.delete("http://localhost:3030/api/products/" + params.id)
                await productsService.deleteOnProduct(id);
                alert("Product is deleted!")

                navigate("/products")
            
           

        }
        catch(err: any){
            alert(err.message)

        }
    }

    

        
    


    return (
        <div className="ProductsDetails">
            <p>Products Details</p>
            {!product && <Loading/>}
            

            {/* {product && } */}
            {/* {?.} */}
            <>
            <h3>Name:{product?.name}</h3>
            <h3>Price:{product?.price}</h3>
            <h3>Stock:{product?.stock}</h3>
            <img src={config.productsImageUrl + product?.imageName}/>
            <br/>
            <button onClick={()=>{navigate("/products")}}>Back</button>
            <button onClick={()=> navigate("/products/edit/" + id)}>Edit</button>
            <button onClick={deleteProduct}>Delete</button>
            </>
			
        </div>
    );
}

export default ProductsDetails;

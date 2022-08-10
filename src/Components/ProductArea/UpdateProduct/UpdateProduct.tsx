import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import "./UpdateProduct.css";

function UpdateProduct(): JSX.Element {
    const params = useParams()
    const id = +params.id

    const {register, handleSubmit, formState, setValue}=useForm<ProductModel>()
    const navigate = useNavigate()

    useEffect(()=>{
        productsService.getOneProduct(id)
        .then(product =>{
            setValue("name", product.name)
            setValue("price", product.price)
            setValue("stock", product.stock)
        })
        .catch(err => err.message)
    },[])

    async function submit(product: ProductModel){
        try{
          product.id = id
          await productsService.UpdateProduct(product)
          alert("product has been edit!")
 
               navigate("/products")
 
        }
        catch(err:any){
            alert(err.message)
 
        }
    }

    




    return (
        <div className="UpdateProduct Box">
            
            
            <form onSubmit={handleSubmit(submit)}>
            <h2>Edit Product</h2>
               <label>Name:</label>
               <input type="text" {...register("name", {
                   required: { value: true, message: "Missing product name" }
               })} />
               <span>{formState.errors.name?.message}</span>

               <label>Price:</label>
               <input type="number" step="0.01" {...register("price")} />

               <label>Stock:</label>
               <input type="number" {...register("stock") } />
               
               <label>Image</label>
               <input type="file" accept="image/*" {...register("image") } />
               
               <button>Update</button>
               </form>
			
        </div>
    );
}

export default UpdateProduct;

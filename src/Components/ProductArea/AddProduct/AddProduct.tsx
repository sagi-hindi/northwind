import axios from "axios";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import "./AddProduct.css";

function AddProduct(): JSX.Element {
    const {register, handleSubmit, formState}=useForm<ProductModel>()

    const navigate = useNavigate()

    async function submit(product: ProductModel){
       try{
        //    console.log(product)
        //    const formData = new FormData();
        //    formData.append("name", product.name);
        //    formData.append("price", product.price.toString());
        //    formData.append("stock", product.stock.toString());
        //    formData.append("image", product.image.item(0));
        //    console.log(product)

        //    const response = await axios.post<ProductModel>("http://localhost:3030/api/products", formData)
        //    const addedProduct = response.data
        //    console.log(addedProduct)
         await productsService.addNewProduct(product)
         alert("new product is added")

              navigate("/products")

       }
       catch(err:any){
           alert(err.message)

       }

    }


    return (
        <div className="AddProduct Box">

            
           <form onSubmit={handleSubmit(submit)}>
           <h2>Add Product</h2>
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
               
               <button >Add</button>

           </form>
			
        </div>
    );
}

export default AddProduct;

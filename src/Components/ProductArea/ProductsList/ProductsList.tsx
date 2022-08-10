import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsService";
import Loading from "../../SharedArea/Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductsList.css";

function ProductsList(): JSX.Element {

     const [products, setProducts] = useState<ProductModel[]>([])
    
    useEffect(()=>{

      productsService.fetchProducts()
      .then(products => setProducts(products))
      .catch(err=> alert(err.message))



    },[])

    console.log(products)


    return (
        
        <div className="ProductsList">


            {products.length === 0 && <Loading/>}
            
            <NavLink to="/products/new">➕</NavLink>
            


            {products.map((item) => <ProductCard key={item.id} product={item}/>)}
        
			
        </div>
    );
}

export default ProductsList;

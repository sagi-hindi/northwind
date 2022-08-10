import { NavLink } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import config from "../../../utils/Config";
import "./ProductCard.css";

interface ProductCardProps {
    product: ProductModel;
	
}

function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <NavLink to={"/Products/details/"+ props.product.id}>
        <div className="ProductCard Box">
            
            <div>
                {props.product.name}
                <br/>
                Price: {props.product.price}
                <br/>
                Stock:{props.product.stock}
            </div>
            <div>
                
                <img src={config.productsImageUrl + props.product.imageName} />
            </div>
        
			
        </div>
        </NavLink>
    );
}

export default ProductCard;

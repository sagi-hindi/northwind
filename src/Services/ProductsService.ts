
import axios from "axios";
import ProductModel from "../Models/ProductModel";
import { addProductsAction, deleteProductsAction, fetchProductsAction, updateProductsAction } from "../Redux/ProductsState";
import store from "../Redux/Store";
import config from "../utils/Config";

class ProductsService{
    public async fetchProducts():Promise<ProductModel[]>{

        if(store.getState().ProductsState.products.length === 0){
            const response = await axios.get<ProductModel[]>(config.productsUrl)
            console.log(config.productsUrl)
            store.dispatch(fetchProductsAction(response.data))
        }
        return store.getState().ProductsState.products
    }

    public async getOneProduct(id:number): Promise<ProductModel>{
        let product = store.getState().ProductsState.products.find(p=> p.id === id);
        if(!product){
            const response = await axios.get<ProductModel>(config.productsUrl + id)
            product = response.data
        }
        return product

    }

    public async deleteOnProduct(id:number):Promise<void>{
        await axios.delete(config.productsUrl + id)
        store.dispatch(deleteProductsAction(id))


    }

    public async addNewProduct(product: ProductModel):Promise<void>{
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image.item(0));
        // console.log(product.stock)

        const response = await axios.post<ProductModel>(config.productsUrl, formData);
        const addedProduct = response.data;
        store.dispatch(addProductsAction(addedProduct));

        // return addedProduct


    }

    public async UpdateProduct(product: ProductModel):Promise<ProductModel>{
        const formData = new FormData();
        formData.append("name", product.name);
        formData.append("price", product.price.toString());
        formData.append("stock", product.stock.toString());
        formData.append("image", product.image.item(0));

        const response = await axios.put<ProductModel>(config.productsUrl + product.id, formData);
        const updatedProduct = response.data;
        store.dispatch(updateProductsAction(updatedProduct));

        return updatedProduct


    }

    
            



}

const productsService = new ProductsService()

export default productsService
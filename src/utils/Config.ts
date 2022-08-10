class Config{

}

class DevelopmentConfig extends Config {
    public productsUrl = "http://localhost:3001/api/products";
    public productsImageUrl = "http://localhost:3001/api/products/images/";
    public registerUrl = "http://localhost:3001/api/auth/register/";
    public login = "http://localhost:3001/api/auth/login/";
}

class ProductionConfig extends Config {
    public productsUrl = "https://northwind-by-sagi.herokuapp.com/api/products";
    public productsImageUrl = "https://northwind-by-sagi.herokuapp.com/api/products/images/";
    public registerUrl = "https://northwind-by-sagi.herokuapp.com/api/auth/register/";
    public login = "https://northwind-by-sagi.herokuapp.com/api/auth/login/";
}

const config = process.env.NODE_ENV === "development" ? new DevelopmentConfig() : new ProductionConfig() ;


export default config
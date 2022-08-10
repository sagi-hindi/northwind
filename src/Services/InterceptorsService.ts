import axios from "axios"
import { request } from "express"
import store from "../Redux/Store"

class InterceptorsService{

    public createInterceptors(){

        axios.interceptors.request.use(()=>{
            if(store.getState().AuthState.token){
                request.headers = {
                    authorization: "Bearer " + store.getState().AuthState.token
                    
                }

            }
            return request
        });
    }

}

const interceptorsService = new InterceptorsService()

export default interceptorsService
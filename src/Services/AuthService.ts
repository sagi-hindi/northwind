import axios from "axios";
import CredentialsModel from "../Models/CredentialsModel";
import UserModel from "../Models/UserModel";
import { loginAction, logoutAction, registerAction } from "../Redux/AuthState";
import store from "../Redux/Store";
import config from "../utils/Config";

export class AuthService{
    public async register(user: UserModel):Promise<void>{
        console.log(user)
        debugger
        const response = await axios.post<string>(config.registerUrl, user);
        console.log(user)
        
        const token = response.data;
        store.dispatch(registerAction(token))

    }

    public async login(credentials: CredentialsModel):Promise<void>{
        const response = await axios.post<string>(config.login , credentials)
        const token = response.data
        store.dispatch(loginAction(token))

    }

    public logout():void{
        store.dispatch(logoutAction())

    }

}
let authService = new AuthService

export default authService
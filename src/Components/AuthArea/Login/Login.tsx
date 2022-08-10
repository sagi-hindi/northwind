import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { CredentialsModel } from "../../../Models/CredentialsModel";
import authService from "../../../Services/AuthService";
import "./Login.css";

function Login(): JSX.Element {
    const {register, handleSubmit, formState} = useForm<CredentialsModel>()
 
    const navigate = useNavigate()
 
    async function submit(credentials: CredentialsModel){
        try{
        
         await authService.login(credentials)
         alert("login Succeeds")
         
         navigate("/products")
 
        }
        catch(err: any){
            alert(err.message)
 
        }
 
 
 
    }
 
 
 
 
     return (
         <div className="Login Box">
             <h2>Register</h2>
             <form onSubmit={handleSubmit(submit)}>

             <label>Username</label>
             <input type="text" {...register("username")}/>
 
             <label>Password</label>
             <input type="password" {...register("password")}/>
 
             <button>Login</button>
             </form>
 
             
             
             
         </div>
     );
 }

export default Login;

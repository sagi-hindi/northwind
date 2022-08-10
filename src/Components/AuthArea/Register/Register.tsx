import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Services/AuthService";
import "./Register.css";

function Register(): JSX.Element {
   const {register, handleSubmit, formState} = useForm<UserModel>()

   const navigate = useNavigate()

   async function submit(user: UserModel){
       try{
       
        await authService.register(user)
        alert("Register Succeeds")
        
        navigate("/products")

       }
       catch(err: any){
           alert(err.message)

       }



   }




    return (
        <div className="Register Box">
            <h2>Register</h2>

            <form onSubmit={handleSubmit(submit)}>
            
            <label>First Name</label>
            <input type="text" {...register("firstName")}/>

            <label>Last Name</label>
            <input type="text" {...register("lastName")}/>

            <label>Username</label>
            <input type="text" {...register("username")}/>

            <label>Password</label>
            <input type="password" {...register("password")}/>

            <button>Register</button>
            </form>

            
            
			
        </div>
    );
}

export default Register;

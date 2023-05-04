import { useDispatch, useSelector } from "react-redux"
import bikeApi from "../api/bikeApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";

export const useAuthStore=()=>{

    const {status,user,errorMessage}=useSelector(state=>state.auth);

    const dispatch=useDispatch();

    const startLogin=async({guardUser,guardPassword})=>{

        dispatch(onChecking());

        try{

        
            const {data}=await bikeApi.post('/auth',{guardUser,guardPassword})
            localStorage.setItem('usuario',data.name)
            dispatch(onLogin({name:data.name,uid:data.uid}))

        }catch(error){
            dispatch(onLogout('Credenciales Incorrectas'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
        }
    }

    const startRegisterGuard=


    return{
        //propiedades
        status,user,errorMessage,


        //methods
        startLogin
    }
}
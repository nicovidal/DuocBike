import { useDispatch, useSelector } from "react-redux"
import bikeApi from "../api/bikeApi";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";
import Swal from "sweetalert2";

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

    
    const startRegisterGuard=async({guardName,guardUser,guardPassword})=>{

        dispatch(onChecking());

        try{

        
            const {data}=await bikeApi.post('/auth/newg',{guardName,guardUser,guardPassword})
            localStorage.setItem('usuario',data.name)
            dispatch(onLogin({name:data.name,uid:data.uid}))
            Swal.fire('Guardia creado correctamente','','success')

        }catch(error){
            dispatch(onLogout(error.response.data?.msg||'--'))
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
        }
    }
    const startRegisterAlumno=async({registerName,registerRut,registerCarrer,registerBrand,registerColor,registerID})=>{



        try{
        
            const {data}=await bikeApi.post('/auth/newa',{registerName,registerRut,registerCarrer,registerBrand,registerColor,registerID})
            localStorage.setItem('usuario',data.name)
            
            Swal.fire('Guardia creado correctamente','','success')

        }catch(error){
  
            setTimeout(() => {
                dispatch(clearErrorMessage())
            }, 10);
        }
    }


    const startLogout=()=>{
        localStorage.clear();
        dispatch(onLogout());
      }

    return{
        //propiedades
        status,user,errorMessage,


        //methods
        startLogin,
        startRegisterGuard,
        startLogout,
        startRegisterAlumno
    }
}
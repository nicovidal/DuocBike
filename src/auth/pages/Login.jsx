import { useEffect } from 'react';
import { useAuthStore, useRegister } from '../../hooks'
import './Login.css'
import Swal from 'sweetalert2';

const loginFormFields={
    loginUser:'',
    loginPassword:'',
}


export const Login = () => {

    const {startLogin,errorMessage}=useAuthStore();



    const {loginUser,loginPassword,onInputChange:onLoginInputChange}=useRegister(loginFormFields);

    const loginSubmit = (event)=>{
        event.preventDefault();
 
        startLogin({guardUser:loginUser,guardPassword:loginPassword});
    }


    useEffect(() => {
      if(errorMessage !==undefined){
        Swal.fire('Error en credenciales',errorMessage,'error')
      }
    
   
    }, [errorMessage])
    


  return (
    
    <div className="container login-container">
      
        <div className="row">
            <div className="col-md-6 login-form-1">
            <img src="../assets/logo.png" className='logo'/>
        
                <form onSubmit={loginSubmit}>
                    <div className="form-group mb-2">                     
                        <input 
                            type="text"
                            className=" form-control"
                            placeholder="Usuario"
                            name="loginUser"
                            value={loginUser}
                            onChange={onLoginInputChange}
                        />
                  {/*       <i className="fa-solid fa-user"></i> */}
                     
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                            name="loginPassword"
                            value={loginPassword}
                            onChange={onLoginInputChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input 
                            type="submit"
                            className="btnSubmit"
                            value="Entrar" 
                        />
                        {/* <i className="fa-solid fa-lock"></i> */}
                    </div>
                </form>
            </div>

            
        </div>
    </div>
)
}


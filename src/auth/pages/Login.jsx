import { useEffect } from 'react';
import { useAuthStore, useRegister } from '../../hooks'
import './Login.css'
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';


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
    <div className='body1'>
        {/* Fondo */}
{/*         <svg preserveAspectRatio='none' class="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFB800" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
 */}        
        <div className='container1'>
            {/* imagen */}
            <img className='img1' src="../assets/logo.png"/>
            <h2 className='h2'>DuocBike</h2>

            <form className='form1' onSubmit={loginSubmit}>
                {/* Usuario */}
                <div className='form-control1'>
                    <FontAwesomeIcon icon={faUser} className='icono1'></FontAwesomeIcon>
                    <input type='text' placeholder='Usuario' className='input'
                     name='loginUser' 
                     value={loginUser}
                      onChange={onLoginInputChange} 
                      required></input>
                </div>

                {/* Contraseña */}
                <div className='form-control1'>
                    <FontAwesomeIcon icon={faLock} className='icono1'></FontAwesomeIcon>
                    <input type='password' className='input' placeholder='Contraseña' name='loginPassword' value={loginPassword} onChange={onLoginInputChange} required></input>
                </div>
                
                {/* Boton Entrar */}
                <button className='btn' value="Entrar">Entrar</button>
            </form>

        </div>
    </div>


    // Login del nicosexo

    // <div className="container login-container">
      
    //     <div className="row">
    //         <div className="col-md-6 login-form-1">
    //         <img src="../assets/logo.png" className='logo'/>
        
    //             <form onSubmit={loginSubmit} xxxxx>
    //                 <div className="form-group mb-2">                     
    //                     <input 
    //                         type="text"
    //                         className=" form-control"
    //                         placeholder="Usuario"
    //                         name="loginUser xxxxx"
    //                         value={loginUser}xxxx
    //                         onChange={onLoginInputChange}xxxxx
    //                     />
    //               {/*       <i className="fa-solid fa-user"></i> */}
                     
    //                 </div>
    //                 <div className="form-group mb-2">
    //                     <input
    //                         type="password"
    //                         className="form-control"
    //                         placeholder="Contraseña"
    //                         name="loginPassword"xxxxx
    //                         value={loginPassword}xxxxxxxx
    //                         onChange={onLoginInputChange}xxxxxx
    //                     />
    //                 </div>
    //                 <div className="form-group mb-2">
    //                     <input 
    //                         type="submit"
    //                         className="btnSubmit"
    //                         value="Entrar" xxxxxxxx
    //                     />
    //                     {/* <i className="fa-solid fa-lock"></i> */}
    //                 </div>
    //             </form>
    //         </div>

            
    //     </div>
    // </div>
)
}


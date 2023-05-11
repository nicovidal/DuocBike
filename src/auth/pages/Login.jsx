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
    <body className='cuerpo'>
        <div className='container login-cuerpo'>
            {/* imagen */}
            <img src="../assets/logo.png" className='imagencita'/>
            <h2>DuocBike</h2>

            <form className='form form-loginPulento' onSubmit={loginSubmit}>
                {/* Usuario */}
                <div className='form-control form-loginPulento-control'>
                    <FontAwesomeIcon icon={faUser} className='icono'></FontAwesomeIcon>
                    <input type='text' placeholder='Usuario' 
                    className='placecentrado' 
                    name='loginUser' 
                    value={loginUser} 
                    onChange={onLoginInputChange} required></input>
                </div>

                {/* Contraseña */}
                <div className='form-control form-loginPulento-control' >
                    <FontAwesomeIcon icon={faLock} className='icono'></FontAwesomeIcon>
                    <input type='password' placeholder='Contraseña' name='loginPassword' 
                    value={loginPassword} className='placecentrado'  onChange={onLoginInputChange} required></input>
                </div>
                
                {/* Boton Entrar */}
                <button className='btn btn-login' value="Entrar">Entrar</button>
            </form>

        </div>
    </body>


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


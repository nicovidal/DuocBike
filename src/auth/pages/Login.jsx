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

    function validacion(){
        var usuario = document.getElementById('usuario')
        var contraseña = document.getElementById('contraseña')

        var btn = document.getElementById('btn')
        var error = document.getElementById('error')

        var mensajesError = []
        var form = document.getElementById('form')
        let deshabilitar = false;

        if(usuario.value === null || usuario.value === ''){
            mensajesError.push('El usuario no debe estar vacio. <br>')
            deshabilitar=true;
        }

        if(contraseña.value === null || contraseña.value === ''){
            mensajesError.push('La contraseña no debe estar vacio. <br>')
            deshabilitar=true;
        }
        if(contraseña.value.length >0 && contraseña.value.length <2){
            mensajesError.push('La contraseña debe ser mas larga. <br>')
            deshabilitar=true;
        }
        

        if(deshabilitar === true){
            btn.disabled = true;
        }
        else{
            btn.disabled = false;
        }
        error.innerHTML= mensajesError.join('')
        form.addEventListener("keyup", validacion)
    }

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
    <div className='fondo'>
        <div className='body1'>
            <div className='container1'>
                {/* imagen */}
                <img className='img1' src="../assets/logo.png"/>
                <h2 className='h2'>DuocBike</h2>

                <form className='form1' onSubmit={loginSubmit} id='form'>
                    {/* Usuario */}
                    <div className='form-control1'>
                        <FontAwesomeIcon icon={faUser} className='icono1'></FontAwesomeIcon>
                        <input type='text' placeholder='Usuario' className='input' maxLength={15} id='usuario' minLength={1}
                        name='loginUser' 
                        value={loginUser}
                        onChange={onLoginInputChange} 
                        ></input>
                    </div>

                    {/* Contraseña */}
                    <div className='form-control1'>
                        <FontAwesomeIcon icon={faLock} className='icono1'></FontAwesomeIcon>
                        <input type='password' className='input' placeholder='Contraseña' name='loginPassword' value={loginPassword} onChange={onLoginInputChange} maxLength={15} id='contraseña' minLength={2} required></input>
                    </div>
                    
                    {/* Boton Entrar */}
                    <button className='btn' value="Entrar" onClick={validacion} id='btn'>Entrar</button>
                    <h1 className='copy'>Copyright ©2023 PipeloveINC.</h1>
                    <img className="logo" src="../assets/LogoDuoc.png"/>
                </form>
                <div id='error' className='error2'></div>
            </div>
            
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


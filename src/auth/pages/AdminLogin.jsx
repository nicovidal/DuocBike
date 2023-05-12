import { useEffect } from "react";
import { useAuthStore, useRegister } from "../../hooks";
import Swal from "sweetalert2";
import './Admin.css'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';


const loginAdminFormFields={
    adminUser:'',
    adminPassword:'',
}



export const AdminLogin = () => {

    
    const {startLoginAdmin,errorMessage}=useAuthStore();



    const {adminUser,adminPassword,onInputChange:onLoginAdminInputChange}=useRegister(loginAdminFormFields);

    const loginAdminSubmit = (event)=>{
        event.preventDefault();
 
        startLoginAdmin({adminUser:adminUser,adminPassword:adminPassword});
    }


    useEffect(() => {
      if(errorMessage !==undefined){
        Swal.fire('Error en credenciales',errorMessage,'error')
      }
    
   
    }, [errorMessage])


    return (
        <div className="fondo2">
            <div className="body2">
                <div className="container2">
                    {/* Imagen */}
                    <img className="img2" src="../assets/logo.png"></img>
                    <h2 className="letraadmi">Administrador</h2>

                    <form className="form2" onSubmit={loginAdminSubmit}>
                        {/* Usuario */}
                        <div className="form-control2">
                            <FontAwesomeIcon icon={faUser} className='icono2'></FontAwesomeIcon>
                            <input type='text' placeholder='Usuario' className='input' 
                            name="adminUser"
                            value={adminUser}
                            onChange={onLoginAdminInputChange} required></input>
                        </div>

                        {/* Contraseña */}
                        <div className='form-control2'>
                            <FontAwesomeIcon icon={faLock} className='icono2'></FontAwesomeIcon>
                            <input type='password' className='input' placeholder='Contraseña' 
                            name="adminPassword"
                            value={adminPassword}
                            onChange={onLoginAdminInputChange} required></input>
                        </div>

                        {/* Boton Entrar */}
                        <button className='btn' value="Entrar">Entrar</button>
                        <h1 className='copy2'>Copyright ©2023 PipeloveINC.</h1>
                    </form>
                </div>
            </div>

        </div>


// Login admin del nicosexo
    
        // <div className="container login-container">
          
        //     <div className="row">
        //         <div className="col-md-6 login-form-1">
        //         <img src="../assets/logo.png" className='logo'/>
        //             <h1>ADMINISTRADOR</h1>
        //             <form onSubmit={loginAdminSubmit}>
        //                 <div className="form-group mb-2">                     
        //                     <input 
        //                         type="text"
        //                         className=" form-control"
        //                         placeholder="Usuario"
        //                         name="adminUser"
        //                         value={adminUser}
        //                         onChange={onLoginAdminInputChange}
                               
        //                     />
        //               {/*       <i className="fa-solid fa-user"></i> */}
                         
        //                 </div>
        //                 <div className="form-group mb-2">
        //                     <input
        //                         type="password"
        //                         className="form-control"
        //                         placeholder="Contraseña"
        //                         name="adminPassword"
        //                         value={adminPassword}
        //                         onChange={onLoginAdminInputChange}
                               
                             
        //                     />
        //                 </div>
        //                 <div className="form-group mb-2">
        //                     <input 
        //                         type="submit"
        //                         className="btnSubmit"
        //                         value="Entrar" 
        //                     />
        //                     {/* <i className="fa-solid fa-lock"></i> */}
        //                 </div>
        //             </form>
        //         </div>
    
                
        //     </div>
        // </div>
    )
}

import { useEffect } from "react";
import { useAuthStore, useRegister } from "../../hooks";
import Swal from "sweetalert2";

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
    
        <div className="container login-container">
          
            <div className="row">
                <div className="col-md-6 login-form-1">
                <img src="../assets/logo.png" className='logo'/>
                    <h1>ADMINISTRADOR</h1>
                    <form onSubmit={loginAdminSubmit}>
                        <div className="form-group mb-2">                     
                            <input 
                                type="text"
                                className=" form-control"
                                placeholder="Usuario"
                                name="adminUser"
                                value={adminUser}
                                onChange={onLoginAdminInputChange}
                               
                            />
                      {/*       <i className="fa-solid fa-user"></i> */}
                         
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="adminPassword"
                                value={adminPassword}
                                onChange={onLoginAdminInputChange}
                               
                             
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



export const AdminLogin = () => {

    return (
    
        <div className="container login-container">
          
            <div className="row">
                <div className="col-md-6 login-form-1">
                <img src="../assets/logo.png" className='logo'/>
                    <h1>ADMINISTRADOR</h1>
                    <form >
                        <div className="form-group mb-2">                     
                            <input 
                                type="text"
                                className=" form-control"
                                placeholder="Usuario"
                                name="adminUser"
                               
                            />
                      {/*       <i className="fa-solid fa-user"></i> */}
                         
                        </div>
                        <div className="form-group mb-2">
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Contraseña"
                                name="adminPassword"
                             
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

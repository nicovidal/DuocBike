import './Login.css'


export const Login = () => {
  return (
    
    <div className="container login-container">
      
        <div className="row">
            <div className="col-md-6 login-form-1">
            <img src="../assets/logo.png" className='logo'/>
        
                <form>
                    <div className="form-group mb-2">                     
                        <input 
                            type="text"
                            className=" form-control"
                            placeholder="Usuario"
                        />
                        <i className="fa-solid fa-user"></i>
                     
                    </div>
                    <div className="form-group mb-2">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Contraseña"
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input 
                            type="submit"
                            className="btnSubmit"
                            value="Entrar" 
                        />
                        <i className="fa-solid fa-lock"></i>
                    </div>
                </form>
            </div>

            
        </div>
    </div>
)
}


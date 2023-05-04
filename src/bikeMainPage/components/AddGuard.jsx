import { useRegister } from '../../hooks'
import '../styles/AddGuard.css'

const guardFormFields={
    guardName:'',
    guardUser:'',
    guardPassword:'',
}



export const AddGuard = () => {

    const {guardName,guardUser,guardPassword,onInputChange:onGuardInputChange}=useRegister(guardFormFields);

    const registerSubmit = (event)=>{
        event.preventDefault();
        console.log({guardName,guardUser,guardPassword})
    }

    return (
        <div className="container add-container">
      
        <div className="row">
            <div className="col-md-6 add-form-1">
        
                <form onSubmit={registerSubmit}>
                    <div className="form-group mb-2">                     
                        <input 
                            type="text"
                            className=" form-control-add"
                            placeholder="Nombre"
                            name="guardName"
                            value={guardName}
                            onChange={onGuardInputChange}
                        />                   
                    </div>
                    <div className="form-group mb-2">                     
                        <input 
                            type="text"
                            className=" form-control-add"
                            placeholder="Usuario"
                            name="guardUser"
                            value={guardUser}
                            onChange={onGuardInputChange}
                        />                   
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control-add"
                            placeholder="contraseña"
                            name="guardPassword"
                            value={guardPassword}
                            onChange={onGuardInputChange}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input 
                            type="submit"
                            className="btnAddGuard"
                            value="Registrar" 
                        />
                    </div>
        
                </form>
            </div>

            
        </div>
    </div>
    )
}

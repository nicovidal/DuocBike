
import { useRegister } from '../../hooks';
import '../styles/RegistrationBike.css'


const registerFormFields={
    registerName:'',
    registerRut:'',
    registerCarrer:'',
    registerBrand:'',
    registerColor:'',
    registerID:'',
  }
  


export const RegistrationBike = () => {


    const {registerName,registerRut,registerCarrer,registerBrand,registerColor,registerID,onInputChange:onRegisterInputChange}=useRegister(registerFormFields);

    const registerSubmit = (event)=>{
        event.preventDefault();
        console.log({registerName,registerRut,registerCarrer,registerBrand,registerColor,registerID})
    }

  return (
    <div className="container">
        <div className="row">
            <div className="addBike-form">  
                <img src="../assets/logo.png" className='logo-addBike'/>
                <form onSubmit={registerSubmit}>

                    <div className="form-group mb-2">
                        <input
                        type="text"
                        className=" form-control-addBike"
                        placeholder="Nombre"
                        name="registerName"
                        value={registerName}
                        onChange={onRegisterInputChange}
                        />                
                    </div>

                    <div className="form-group mb-2">
                        <input
                        type="text"
                        className=" form-control-addBike"
                        placeholder="Rut"
                        name="registerRut"
                        value={registerRut}
                        onChange={onRegisterInputChange}
                        />                
                    </div>

                    <div className="form-group mb-2">
                        <input
                        type="text"
                        className=" form-control-addBike"
                        placeholder="Carrera"
                        name="registerCarrer"
                        value={registerCarrer}
                        onChange={onRegisterInputChange}
                        />                
                    </div>

                    <div className="form-group mb-2">
                        <input
                        type="text"
                        className=" form-control-addBike"
                        placeholder="Marca"
                        name="registerBrand"
                        value={registerBrand}
                        onChange={onRegisterInputChange}
                        />                
                    </div>

                    <div className="form-group mb-2">
                        <input
                        type="text"
                        className=" form-control-addBike"
                        placeholder="Color"
                        name="registerColor"
                        value={registerColor}
                        onChange={onRegisterInputChange}
                        />                
                    </div>

                    <div className="form-group mb-2">
                        <input
                        type="text"
                        className=" form-control-addBike"
                        placeholder="ID"
                        name="registerID"
                        value={registerID}
                        onChange={onRegisterInputChange}
                        />                
                    </div>

                    <div className="form-group mb-2">
                        <input 
                            type="submit"
                            className="btnAddBike"
                            value="Registrar" 
                        />
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

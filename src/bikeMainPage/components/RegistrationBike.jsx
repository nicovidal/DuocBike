
import { useAuthStore, useRegister } from '../../hooks';

import '../styles/RegistrationBike.css'


const registerFormFields = {
    registerName: '',
    registerRut: '',
    registerCarrer: '',
    registerBrand: '',
    registerColor: '',
    registerID: '',
}



export const RegistrationBike = () => {


    const { registerName, registerRut, registerCarrer, registerBrand, registerColor, registerID, onInputChange: onRegisterInputChange } = useRegister(registerFormFields);

    const { startRegisterAlumno } = useAuthStore();

    const registerSubmit = (event) => {
        event.preventDefault();
        startRegisterAlumno({ registerName:registerName, registerRut:registerRut,registerCarrer: registerCarrer, registerBrand:registerBrand, registerColor:registerColor, registerID:registerID })
    }

    return (
        <div className="container cuerpo-bici">
            <div className="row">
                <div className="addBike-form">
                    <img src="../assets/logo.png" className='logo-addBike' />
                    <form className='form form-registro'onSubmit={registerSubmit}>

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

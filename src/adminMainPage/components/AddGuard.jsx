import { useEffect } from 'react';
import { useAuthStore, useRegister } from '../../hooks'
import '../styles/AddGuard.css'
import Swal from 'sweetalert2';

const guardFormFields = {
    guardName: '',
    guardUser: '',
    guardPassword: '',
}

export const AddGuard = () => {

    const { guardName, guardUser, guardPassword, onInputChange: onGuardInputChange } = useRegister(guardFormFields);
    const { startRegisterGuard} = useAuthStore();

    const registerSubmit = (event) => {
        event.preventDefault();

        Swal.fire({
            title: '¿Desea agregar a este guardia?',
            icon: 'question',
  /*           showDenyButton: true, */
            showCancelButton: true, 
            confirmButtonText: 'Agregar',
     /*        denyButtonText: `No guardar`, */
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire('Agregado Correctamente', '', 'success')
              startRegisterGuard({ guardName: guardName, 
                guardUser: guardUser, 
                guardPassword: guardPassword })

  
            } else if (result.isDenied) {
              Swal.fire('No agregado', '', 'info')
            }
          })

    }



    return (
        <div className="container add-container">



            <div className="row">

                <div className="col-md-6 add-form-1">
                    <h1 className='titulo'>Ingresar Nuevo Guardia</h1>
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
                                type="password"
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

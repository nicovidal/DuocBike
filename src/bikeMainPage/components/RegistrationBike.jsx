
import Swal from 'sweetalert2';
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

    function enviarFormulario(){
        console.log('enviando')

        var nombre = document.getElementById('name')
        var rut = document.getElementById('rut')
        var carrera = document.getElementById('carrera')
        var marca = document.getElementById('marca')
        var color = document.getElementById('color')
        var id = document.getElementById('id')

        var error = document.getElementById('error')
        error.style.color= 'red'

        var mensajesError = []

        console.log(nombre.value)
        console.log(rut.value)
        console.log(carrera.value)
        console.log(marca.value)
        console.log(color.value)
        console.log(id.value)

        if(nombre.value === null || nombre.value === ''){
            mensajesError.push('ingresa tu nombre')
        }

        if(nombre.value.length <3){
            mensajesError.push('Debe ser mayor a 3')
        }
        error.innerHTML= mensajesError.join(', ')

        
        
    }

    const { registerName, registerRut, registerCarrer, registerBrand, registerColor, registerID, onInputChange: onRegisterInputChange,onResetForm } = useRegister(registerFormFields);

    const { startRegisterAlumno } = useAuthStore();

    const registerSubmit = (event) => {
        event.preventDefault();
                
        Swal.fire({
          title: '¿Desea agregar a este alumno?',
          icon: 'question',
/*           showDenyButton: true, */
          showCancelButton: true, 
          confirmButtonText: 'Agregar',
   /*        denyButtonText: `No guardar`, */
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Agregado Correctamente', '', 'success')
            startRegisterAlumno({ 
                registerName:registerName, 
                registerRut:registerRut,
                registerCarrer: registerCarrer, 
                registerBrand:registerBrand, 
                registerColor:registerColor, 
                registerID:registerID })
                onResetForm();

          } else if (result.isDenied) {
            Swal.fire('No agregado', '', 'info')
          }
        })
      
    }

    return (

        <div className='fondo3'>
            <div className='body3'>
                <div className='container3'>
                    {/* imagen */}
                    
                    <h2 className='nuevoal'>Nuevo Alumno</h2>

                    <form className='form3' onSubmit={registerSubmit} id='form'>
                        {/* Nombre */}
                        <div className="form-control3">
                            
                            <input type='text' placeholder='Nombre' className='input3' id='name'
                            name="registerName"
                            value={registerName}
                            onChange={onRegisterInputChange} ></input>
                        </div>

                        {/* Rut */}
                        <div className="form-control3">
                            
                            <input type='text' placeholder='Rut' className='input3' id='rut'
                            name="registerRut"
                            value={registerRut}
                            onChange={onRegisterInputChange} required></input>
                        </div>

                        {/* Carrera */}
                        <div className="form-control3">
                            
                            <input type='text' placeholder='Carrera' className='input3' id='carrera'
                            name="registerCarrer"
                            value={registerCarrer}
                            onChange={onRegisterInputChange} required></input>
                        </div>

                        {/* Marca */}
                        <div className="form-control3">
                            
                            <input type='text' placeholder='Marca' className='input3' id='marca'
                            name="registerBrand"
                            value={registerBrand}
                            onChange={onRegisterInputChange} required></input>
                        </div>

                        {/* Color */}
                        <div className="form-control3">
                            
                            <input type='text' placeholder='Color' className='input3' id='color'
                            name="registerColor"
                            value={registerColor}
                            onChange={onRegisterInputChange} required></input>
                        </div>

                        {/* ID */}
                        <div className="form-control3">
    
                            <input type='text' placeholder='ID' className='input3' id='id'
                            name="registerID"
                            value={registerID}
                            onChange={onRegisterInputChange} required></input>
                        </div>

                        {/* Boton Registrar */}
                        <button className='btn' value="Registrar" onClick={enviarFormulario}>Registrar</button>
                    </form>
                    <div id='error'></div>
                    <img className="logo2" src="../assets/LogoDuoc.png"/>
                </div>
            </div>

        </div>


        // <div className="container">
        //     <div className="row">
        //         <div className="addBike-form">
        //             <img src="../assets/logo.png" className='logo-addBike' />
        //             <form onSubmit={registerSubmit}>

        //                 <div className="form-group mb-2">
        //                     <input
        //                         type="text"
        //                         className=" form-control-addBike"
        //                         placeholder="Nombre"xxxxxxxx
        //                         name="registerName"xxxxx
        //                         value={registerName}xxxxx
        //                         onChange={onRegisterInputChange}xxxxxxxx
        //                     />
        //                 </div>

        //                 <div className="form-group mb-2">
        //                     <input
        //                         type="text"
        //                         className=" form-control-addBike"
        //                         placeholder="Rut"xxxxx
        //                         name="registerRut"xxxxx
        //                         value={registerRut}xxxxx
        //                         onChange={onRegisterInputChange}xxxxxxx
        //                     />
        //                 </div>

        //                 <div className="form-group mb-2">
        //                     <input
        //                         type="text"
        //                         className=" form-control-addBike"
        //                         placeholder="Carrera"xxxxxx
        //                         name="registerCarrer"xxxxx
        //                         value={registerCarrer}xxxxxx
        //                         onChange={onRegisterInputChange}xxxxxxx
        //                     />
        //                 </div>

        //                 <div className="form-group mb-2">
        //                     <input
        //                         type="text"
        //                         className=" form-control-addBike"
        //                         placeholder="Marca"xxxxxxxxx
        //                         name="registerBrand"xxxxxxxxxx
        //                         value={registerBrand}xxxxxxx
        //                         onChange={onRegisterInputChange}xxxxxxxx
        //                     />
        //                 </div>

        //                 <div className="form-group mb-2">
        //                     <input
        //                         type="text"
        //                         className=" form-control-addBike"
        //                         placeholder="Color"xxxxxxxxx
        //                         name="registerColor"xxxxxxxxx
        //                         value={registerColor}xxxxxxxxxxx
        //                         onChange={onRegisterInputChange}
        //                     />
        //                 </div>

        //                 <div className="form-group mb-2">
        //                     <input
        //                         type="text"
        //                         className=" form-control-addBike"
        //                         placeholder="ID"XXXXXX
        //                         name="registerID"XXXXXXX
        //                         value={registerID}XXXXXXXX
        //                         onChange={onRegisterInputChange}
        //                     />
        //                 </div>

        //                 <div className="form-group mb-2">
        //                     <input
        //                         type="submit"
        //                         className="btnAddBike"
        //                         value="Registrar"
        //                     />
        //                 </div>

        //             </form>
        //         </div>
        //     </div>
        // </div>
    )
}

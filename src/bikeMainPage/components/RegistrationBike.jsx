
import Swal from 'sweetalert2';
import { useAuthStore, useRegister } from '../../hooks';
import React, { useState } from 'react';
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
        var nombre = document.getElementById('name')
        
        //para validar rut//
        var rut = document.getElementById('rut')
        //para validar rut//

        var carrera = document.getElementById('carrera')
        var marca = document.getElementById('marca')
        var color = document.getElementById('color')
        var id = document.getElementById('id')
        var btn = document.getElementById('btn')
        var error = document.getElementById('error')
        
        var mensajesError = []
        var form = document.getElementById('form')
        let deshabilitar = false;

        /*VALIDACION NOMBRE*/
        if (nombre.value === null || nombre.value === '') {
            mensajesError.push('Ingresa tu nombre. <br>');
            deshabilitar = true;
        } else if (!/^[a-zA-Z]+$/.test(nombre.value)) {
            mensajesError.push('El nombre solo debe contener letras. <br>');
            deshabilitar = true;
        } else if (nombre.value.length > 0 && nombre.value.length < 3) {
            mensajesError.push('El nombre debe ser más largo. <br>');
            deshabilitar = true;
        }
        /*VALIDACION NOMBRE*/

        /*VALIDACION RUT*/
        if (rut.value === null || rut.value === '') {
            mensajesError.push('Ingresa un RUT. <br>');
            deshabilitar = true;
        } else if (!/^[0-9]+[0-9kK]$/.test(rut.value) || /-/.test(rut.value)) {
            mensajesError.push('El RUT debe contener solo números y la "k" final, sin guiones. <br>');
            deshabilitar = true;
        } else if (rut.value.length < 9) {
            mensajesError.push('El RUT debe tener al menos 9 dígitos. <br>');
            deshabilitar = true;
        }
        /*VALIDACION RUT*/

        /*VALIDACION CARRERA*/
        if(carrera.value === null || carrera.value === ''){
            mensajesError.push('Ingresa una carrera. <br>')
            deshabilitar=true;
        }
        if(carrera.value.length >0 && carrera.value.length <3){
            mensajesError.push('La carrera debe ser mas largo. <br>')
            deshabilitar=true;
        }
        /*VALIDACION CARRERA*/

        /*VALIDACION MARCA*/
        if(marca.value === null || marca.value === ''){
            mensajesError.push('Ingresa una marca. <br>')
            deshabilitar=true;
        }
        if(marca.value.length >0 && marca.value.length <3){
            mensajesError.push('La marca debe ser mas largo. <br>')
            deshabilitar=true;
        }
        /*VALIDACION MARCA*/

        /*VALIDACION COLOR*/
        if(color.value === null || color.value === ''){
            mensajesError.push('Ingresa un color. <br>')
            deshabilitar=true;
        }
        if(color.value.length >0 && color.value.length <3){
            mensajesError.push('El color debe ser mas largo. <br>')
            deshabilitar=true;
        }
        /*VALIDACION COLOR*/

        /*VALIDACION ID*/
        if(id.value === null || id.value === ''){
            mensajesError.push('Ingresa una ID. <br>')
            deshabilitar=true;
        }
        if(id.value.length >0 && id.value.length <1){
            mensajesError.push('La ID debe ser mas largo. <br>')
            deshabilitar=true;
        }
        if(id.value <0){
            mensajesError.push('Tiene que ser positivo. <br>')
            deshabilitar=true;
        }
        /*VALIDACION ID*/

        error.innerHTML= mensajesError.join('')
        form.addEventListener("keyup", enviarFormulario)

        if(deshabilitar === true){
            btn.disabled = true;
        }
        else{
            btn.disabled = false;
        }        
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
                    <h2 className='nuevoal'>Nuevo Alumno</h2>
                    <form className='form3' onSubmit={registerSubmit} id='form'>
                        {/* Nombre */}
                        <div className="form-control3">
    
                            <input type='text' placeholder='Nombre' className='input3' id='name' minLength={1} maxLength={15} pattern="[a-z]"
                            name="registerName"
                            value={registerName}
                            onChange={onRegisterInputChange} onClick={enviarFormulario}></input>
                        </div>

                        {/* Rut */}
                        <div className="form-control3">
                            
                            <input type='text' placeholder='Rut: 123456785' className='input3' id='rut' maxLength={9}
                            name="registerRut"
                            value={registerRut}
                            onChange={onRegisterInputChange} ></input>
                        </div>

                        {/* Carrera */}
                        <div className="form-control3">
                            
                            <input type='text' placeholder='Carrera' className='input3' id='carrera' minLength={1} maxLength={15}
                            name="registerCarrer"
                            value={registerCarrer}
                            onChange={onRegisterInputChange} onClick={enviarFormulario}></input>
                        </div>

                        {/* Marca */}
                        <div className="form-control3">
                            
                            <input type='text' placeholder='Marca' className='input3' id='marca' minLength={1} maxLength={15}
                            name="registerBrand"
                            value={registerBrand}
                            onChange={onRegisterInputChange} onClick={enviarFormulario}></input>
                        </div>

                        {/* Color */}
                        <div className="form-control3">
                            
                            <input type='text' placeholder='Color' className='input3' id='color' minLength={1} maxLength={10}
                            name="registerColor"
                            value={registerColor}
                            onChange={onRegisterInputChange} onClick={enviarFormulario}></input>
                        </div>

                        {/* ID */}
                        <div className="form-control3">
    
                            <input type='number' placeholder='ID' className='input3' id='id'
                            name="registerID"
                            value={registerID}
                            onChange={onRegisterInputChange} onClick={enviarFormulario}></input>
                        </div>

                        {/* Boton Registrar */}
                        <button className='btn' value="Registrar" id='btn' disabled>Registrar</button>
                        <div id='error' className='error'></div>
                        <div id="resultado"></div>
                    </form>
                    <img className="logo2" src="../assets/LogoDuoc.png"/>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import '../styles/RegistroVisitas.css'
import { useVisitaStore } from '../../hooks/useVisitaStore';
import Swal from 'sweetalert2';
import { useRegister } from '../../hooks';

const visitasFormFields = {
  visitaRut: '',
  visitaNombre: '',
  visitaMarca: '',
  visitaLugar: '',
  visitaMotivo: '',
}

export const RegistroVisita = () => {
  const {visitaRut,visitaNombre,visitaMarca,visitaLugar,visitaMotivo, onInputChange: onRegisterInputChange } = useRegister(visitasFormFields);
  const { startRegisterVisita } = useVisitaStore();
  const registerVisitaSubmit = (event) => {
    event.preventDefault();

    Swal.fire({
      title: '¿Desea agregar a esta visita?',
      icon: 'question',
/*           showDenyButton: true, */
      showCancelButton: true, 
      confirmButtonText: 'Agregar',
/*        denyButtonText: `No guardar`, */
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Agregado Correctamente', '', 'success')
        startRegisterVisita({ 
          visitaRut:visitaRut,
          visitaNombre:visitaNombre,
          visitaMarca:visitaMarca,
          visitaLugar:visitaLugar,
          visitaMotivo:visitaMotivo, })

      } else if (result.isDenied) {
        Swal.fire('No agregado', '', 'info')
      }
    })
  }

  return (
    
    <div className='fondoVisitas'>
      <div className='bodyVisitas'>
        <div className='containerVisita'>
          <h2 className="nuevaVisita">Registro visitas</h2><br />


          <form className='formVisitas' onSubmit={registerVisitaSubmit}>
            <div className='form-controlVisita'>
              <input type="text" placeholder='Rut' className='inputVisitas' 
              name="visitaRut" value={visitaRut}
              onChange={onRegisterInputChange} required></input>
              &nbsp;&nbsp;&nbsp;

              <input type="text" placeholder='Nombre' className='inputVisitas' 
              name="visitaNombre" value={visitaNombre }
              onChange={onRegisterInputChange} required></input>
              &nbsp;&nbsp;&nbsp;

              <input type="text" placeholder='Marca' className='inputVisitas' 
              name="visitaMarca" value={visitaMarca}
              onChange={onRegisterInputChange} required></input>
              &nbsp;&nbsp;&nbsp;
      
              <input type="text" placeholder='Lugar' className='inputVisitas' 
              name="visitaLugar" value={visitaLugar}
              onChange={onRegisterInputChange} required></input>
              &nbsp;&nbsp;&nbsp;
           
              <input type="text" placeholder='Motivo' className='inputVisitas' 
              name="visitaMotivo" value={visitaMotivo}
              onChange={onRegisterInputChange} required></input>
              
            </div>
            <button className='btn' value="Registrar">Registrar</button>
          </form>
        </div>
      </div>
      </div>

  

  )                   
}

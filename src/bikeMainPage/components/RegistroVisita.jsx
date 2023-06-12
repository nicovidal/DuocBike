// RegistroVisita.js
import '../styles/RegistroVisitas.css';
import { useVisitaStore } from '../../hooks/useVisitaStore';
import Swal from 'sweetalert2';
import { useRegister } from '../../hooks';
import { ListaVisita } from './ListaVisita';

const visitasFormFields = {
  visitaRut: '',
  visitaNombre: '',
  visitaMarca: '',
  visitaLugar: '',
  visitaMotivo: '',
}

export const RegistroVisita = () => {
  
  const { visitaRut, visitaNombre, visitaMarca, visitaLugar, visitaMotivo, onInputChange: onRegisterInputChange } = useRegister(visitasFormFields);
  const { startRegisterVisita, startLoadingVisitas } = useVisitaStore();

  function validacion(){
    var rut = document.getElementById('rut')
    var nombre = document.getElementById('nombre')
    var marca = document.getElementById('marca')
    var lugar = document.getElementById('lugar')
    var motivo = document.getElementById('motivo')

    var btn = document.getElementById('btn')
    var error = document.getElementById('error')

    var mensajesError = []
    var form = document.getElementById('form')
    let deshabilitar = false;

    /*VALIDACION NOMBRE*/
    if(nombre.value === null || nombre.value === ''){
      mensajesError.push('El usuario no debe estar vacio. <br>')
      deshabilitar=true;
    }
    if(nombre.value.length >0 && nombre.value.length <3){
      mensajesError.push('El nombre debe ser mas largo. <br>')
      deshabilitar=true;
    }
    /*VALIDACION NOMBRE*/

    /*VALIDACION RUT*/
    if(rut.value === null || rut.value === ''){
      mensajesError.push('Ingresa rut. <br>')
      deshabilitar=true;
    }
    if(rut.value.length >0 && rut.value.length <9){
      mensajesError.push('Rut invalido. <br>')
      deshabilitar=true;
    }
    /*VALIDACION RUT*/

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

    /*VALIDACION LUGAR*/
    if(lugar.value === null || lugar.value === ''){
      mensajesError.push('Ingresa un lugar. <br>')
      deshabilitar=true;
    }
    if(lugar.value.length >0 && lugar.value.length <3){
        mensajesError.push('El lugar debe ser mas largo. <br>')
        deshabilitar=true;
    }
    /*VALIDACION LUGAR*/

    /*VALIDACION MOTIVO*/
    if(motivo.value === null || motivo.value === ''){
      mensajesError.push('Ingresa una motivo. <br>')
      deshabilitar=true;
    }
    if(motivo.value.length >0 && motivo.value.length <3){
        mensajesError.push('El motivo debe ser mas largo. <br>')
        deshabilitar=true;
    }
    /*VALIDACION MOTIVO*/

    if(deshabilitar === true){
      btn.disabled = true;
    }
    else{
        btn.disabled = false;
    }
    error.innerHTML= mensajesError.join('')
    form.addEventListener("keyup", validacion)

  }

  const registerVisitaSubmit = async (event) => {
    event.preventDefault();

    Swal.fire({
      title: '¿Desea agregar a esta visita?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Agregar',
    }).then(async (result) => {
      if (result.isConfirmed) {
        Swal.fire('Agregado Correctamente', '', 'success');
        await startRegisterVisita({
          visitaRut: visitaRut,
          visitaNombre: visitaNombre,
          visitaMarca: visitaMarca,
          visitaLugar: visitaLugar,
          visitaMotivo: visitaMotivo,
        
        });
      } else if (result.isDenied) {
        Swal.fire('No agregado', '', 'info');
      }
    });

    startLoadingVisitas(); 
  };

  return (
    <div className='fondoVisitas'>
      <div className='bodyVisitas'>
        <div className='containerVisita'>
          <h2 className="nuevaVisita">Registro visitas</h2><br />

          <form className='formVisitas' onSubmit={registerVisitaSubmit} id='form'>
            <div className='form-controlVisita'>
              <input
                type="text"
                placeholder='Nombre'
                className='inputVisitas'
                name="visitaNombre"
                value={visitaNombre}
                onChange={onRegisterInputChange}
                id='nombre' maxLength={15} minLength={1}
              />
              &nbsp;&nbsp;&nbsp;
              
              <input
                type="text"
                placeholder='Rut'
                className='inputVisitas'
                name="visitaRut"
                value={visitaRut}
                onChange={onRegisterInputChange}
                id='rut' maxLength={9} min={1}
              />
              &nbsp;&nbsp;&nbsp;

              <input
                type="text"
                placeholder='Marca'
                className='inputVisitas'
                name="visitaMarca"
                value={visitaMarca}
                onChange={onRegisterInputChange}
                id='marca' maxLength={15}
              />
              &nbsp;&nbsp;&nbsp;

              <input
                type="text"
                placeholder='Lugar'
                className='inputVisitas'
                name="visitaLugar"
                value={visitaLugar}
                onChange={onRegisterInputChange}
                id='lugar' maxLength={15}
              />
              &nbsp;&nbsp;&nbsp;

              <input
                type="text"
                placeholder='Motivo'
                className='inputVisitas'
                name="visitaMotivo"
                value={visitaMotivo}
                onChange={onRegisterInputChange}
                id='motivo' maxLength={30}
              />
            </div>
            <button className='btn' value="Registrar" id='btn' onClick={validacion}>Registrar</button>
            <div id='error' className='error2'></div>
          </form>
          

          <ListaVisita />
          <img className="logo3" src="../assets/LogoDuoc.png"/>
        </div>
      </div>
    </div>
  );
};

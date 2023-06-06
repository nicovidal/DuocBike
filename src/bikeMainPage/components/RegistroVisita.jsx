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

          <form className='formVisitas' onSubmit={registerVisitaSubmit}>
            <div className='form-controlVisita'>
              <input
                type="text"
                placeholder='Rut'
                className='inputVisitas'
                name="visitaRut"
                value={visitaRut}
                onChange={onRegisterInputChange}
                required
              />
              &nbsp;&nbsp;&nbsp;

              <input
                type="text"
                placeholder='Nombre'
                className='inputVisitas'
                name="visitaNombre"
                value={visitaNombre}
                onChange={onRegisterInputChange}
                required
              />
              &nbsp;&nbsp;&nbsp;

              <input
                type="text"
                placeholder='Marca'
                className='inputVisitas'
                name="visitaMarca"
                value={visitaMarca}
                onChange={onRegisterInputChange}
                required
              />
              &nbsp;&nbsp;&nbsp;

              <input
                type="text"
                placeholder='Lugar'
                className='inputVisitas'
                name="visitaLugar"
                value={visitaLugar}
                onChange={onRegisterInputChange}
                required
              />
              &nbsp;&nbsp;&nbsp;

              <input
                type="text"
                placeholder='Motivo'
                className='inputVisitas'
                name="visitaMotivo"
                value={visitaMotivo}
                onChange={onRegisterInputChange}
                required
              />
            </div>
            <button className='btn' value="Registrar">Registrar</button>
          </form>

          <ListaVisita />
        </div>
      </div>
    </div>
  );
};

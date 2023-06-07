import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useIngresoStore } from '../../hooks/useIngresoStore';
import '../styles/FormularioIngreso.css';

export const FormularioIngreso = () => {
  const { alumnoDatos,ingreso, startSearchAlumno, startIngresandingALumno, startLoadingIngresos, startSaliendingAlumno } = useIngresoStore();

  const [contador1, setContador1] = useState(20);
  const [contador2, setContador2] = useState(15);
  const [alumnoRut, setAlumnoRut] = useState('');





  const onSubmit = (e) => {
    e.preventDefault();
    startSearchAlumno(alumnoRut);
    startLoadingIngresos();
  };

  const onIngresar = (e) => {
    e.preventDefault();

    if (contador1 === 0) {
      Swal.fire('No hay más lugares disponibles', '', 'warning');
      return;
    }

    if (!alumnoDatos || !alumnoDatos.registerName) {
      Swal.fire('Falta ingresar datos', '', 'warning');
      return;
    }
  

    if(!alumnoDatos){
      Swal.fire("debe ingresar datos")
    }

    Swal.fire({
      title: `¿Confirmas el ingreso de ${alumnoDatos.registerName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
    
      if (result.isConfirmed) {

        startIngresandingALumno(alumnoRut);

        Swal.fire('Ingreso realizado correctamente', '', 'success');
        setContador1((prevContador) => prevContador - 1);
        setContador2((prevContador) => prevContador + 1);
      }
    });
  };

  const onSalir = (e) => {
    e.preventDefault();

    

    if (contador2 === 0) {
      Swal.fire('Todos los lugares estan disponibles', '', 'warning');
      return;
    }

    if (!alumnoDatos || !alumnoDatos.registerName) {
      Swal.fire('Falta ingresar datos', '', 'warning');
      return;
    }
  

    Swal.fire({
      title: `¿Confirmas la salida de ${alumnoDatos.registerName}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Salida realizada correctamente', '', 'success');
        startSaliendingAlumno(alumnoRut);
        
        setContador1((prevContador) => prevContador + 1);
        setContador2((prevContador) => prevContador - 1);
      }
    });
  };


  useEffect(() => {

    startLoadingIngresos();

  }, [])


  return (
    <>
      <div className="bodyIngreso">
        <div className="container text-center">
          <div className="">
            <form className="form-control-ingreso" onSubmit={onSubmit}>
              <div>
                <label className="nuevoIngreso">Ingrese el rut:</label>
                &nbsp;&nbsp;&nbsp;
                <input
                  placeholder="Rut"
                  type="text"
                  value={alumnoRut}
                  name="alumnoRut"
                  className="inputIngreso"
                  onChange={(e) => setAlumnoRut(e.target.value)}
                />
              </div>
              <div>
                <button className="btn btn-1" value="Buscar" type="submit">
                  Buscar
                </button>
              </div>
            </form>
          </div>

          <form className="datosAlumnoForm">
            <div className="form-row ">
              <div className="form-group col-me-6 ">
                <label>ID bicicleta</label>
                <input
                  type="text"
                  className="form-control datosAlumno"
                  id="iDBicicleta"
                  placeholder="id bicicleta"
                  value={alumnoDatos.registerID}
                  disabled
                />
              </div>
              <div className="form-group col-me-6">
                <label>Rut</label>
                <input
                  type="text"
                  className="form-control datosAlumno"
                  id="inputRut"
                  placeholder="Rut"
                  value={alumnoDatos.registerRut}
                  disabled
                />
              </div>
            </div>
            <div className="form-group col-me-6">
              <label>Nombre Completo</label>
              <input
                type="text"
                className="form-control datosAlumno"
                id="inputAddress"
                placeholder="Nombre Alumno"
                value={alumnoDatos.registerName}
                disabled
              />
            </div>
            <div className="form-group">
              <div className="form-row">
                <div className="form-group col-me-6">
                  <label>Modelo de bici</label>
                  <input
                    type="text"
                    className="form-control datosAlumno"
                    id="inputCity"
                    placeholder="Marca Bicicleta"
                    value={alumnoDatos.registerBrand}
                    disabled
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2" onClick={onIngresar}>
              Ingresar
            </button>
            <button type="submit" className="btn btn-danger me-2" onClick={onSalir}>
              Salir
            </button>
          </form>
          <div className="contadores">
            <div className="contador">
              <h2>DISPONIBLES</h2>
              <div className="valor">{contador1 > 0 ? contador1 : 0}</div>
            </div>
            <div className="contador">
              <h2>OCUPADOS</h2>
              <div className="valor">{contador2 >= 0 ? contador2 : 0}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

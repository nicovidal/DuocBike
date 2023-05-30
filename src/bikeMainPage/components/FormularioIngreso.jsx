import { useIngresoStore } from '../../hooks/useIngresoStore';
import '../styles/FormularioIngreso.css';

export const FormularioIngreso = () => {
  const { alumnoDatos, alumnoRut, startSearchAlumno, handleRutChange,startIngresandingALumno } = useIngresoStore();

  const onSubmit = (e) => {
    e.preventDefault();
    startSearchAlumno(alumnoRut);
  };

  const onIngresar=(e)=>{
    e.preventDefault();
    startIngresandingALumno(alumnoRut);
  }
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
                  onChange={handleRutChange}
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
                  value={alumnoRut}
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
                    placeholder='Marca Bicicleta'
                    value={alumnoDatos.registerBrand}
                    disabled
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary me-2" onClick={onIngresar}>
              ingresar
            </button>
            <button type="submit" className="btn btn-danger me-2">
              salir
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

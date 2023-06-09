import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useIngresoStore } from "../../hooks/useIngresoStore";
import "../styles/FormularioIngreso.css";

export const FormularioIngreso = () => {
  const {
    alumnoDatos,
    ingreso,
    startSearchAlumno,
    startIngresandingALumno,
    startLoadingIngresos,
    startSaliendingAlumno,
  } = useIngresoStore();

  const [contador1, setContador1] = useState(10);
  const [contador2, setContador2] = useState(10);
  const [alumnoRut, setAlumnoRut] = useState("");

  const resetForm = () => {
    setAlumnoRut("");
    startIngresandingALumno();
  };

  const onSubmit = (e) => {
    e.preventDefault();
  
    if (alumnoRut === "") {
      Swal.fire("Debe ingresar un rut", "", "warning");
      return;
    }
  
    startSearchAlumno(alumnoRut);
    startLoadingIngresos();
  };

  const onIngresar = (e) => {
    e.preventDefault();

    if (contador1 === 0) {
      Swal.fire("No hay más lugares disponibles", "", "warning");
      return;
    }

    if (!alumnoDatos || !alumnoDatos.registerName) {
      Swal.fire("Falta ingresar datos", "", "warning");
      return;
    }

    if (!alumnoDatos) {
      Swal.fire("debe ingresar datos");
    }

    if (!alumnoDatos.horaSalida && !alumnoDatos.horaIngreso) {
      Swal.fire({
        title: `¿Confirmas el ingreso de ${alumnoDatos.registerName}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          startIngresandingALumno(alumnoRut);
          Swal.fire("Ingreso realizado correctamente", "", "success");
          setContador1((prevContador) => prevContador - 1);
          setContador2((prevContador) => prevContador + 1);
          resetForm();
        }
      });
    } else {
      Swal.fire("Debe registrar salida primero", "", "warning");
    }
    if (alumnoDatos.horaSalida && alumnoDatos.horaIngreso) {
      Swal.fire({
        title: `¿Confirmas el ingreso de ${alumnoDatos.registerName}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          startIngresandingALumno(alumnoRut);
          Swal.fire("Ingreso realizado correctamente", "", "success");
          setContador1((prevContador) => prevContador - 1);
          setContador2((prevContador) => prevContador + 1);
          resetForm();
        }
      });
    }
  };

  const onSalir = (e) => {
    e.preventDefault();

    if (contador2 === 0) {
      Swal.fire("Todos los lugares estan disponibles", "", "warning");
      return;
    }

    if (!alumnoDatos || !alumnoDatos.registerName) {
      Swal.fire("Falta ingresar datos", "", "warning");
      return;
    }

    if (!alumnoDatos.horaSalida) {
      Swal.fire({
        title: `¿Confirmas la salida de ${alumnoDatos.registerName}?`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Confirmar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Salida realizada correctamente", "", "success");
          startSaliendingAlumno(alumnoRut);

          setContador1((prevContador) => prevContador + 1);
          setContador2((prevContador) => prevContador - 1);
          resetForm();
        }
      });
    } else {
      Swal.fire("No hay ingreso asociado a ese rut", "", "warning");
    }
  };

  useEffect(() => {
    startLoadingIngresos();
  }, []);

  return (
    <>
    <div className="main-container">
      <div className="container text-center containerInputIngreso ">
        <div className="row">
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
      </div>
      <div className="container  text-center containerFormIngreso">
        <div className="row">
          <div className="contador1 col-3 me-5">
            <h2>DISPONIBLES</h2>
            <div className="valor">{contador1 > 0 ? contador1 : 0}</div>
          </div>
          <form className="datosAlumnoForm  col-6 me-5">
            <div className="form-row ">
              <div className="form-group">
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
              <div className="form-group ">
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
            <div className="form-group ">
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
                <div className="form-group ">
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
            <button
              type="submit"
              className="btn btn-primary me-2"
              onClick={onIngresar}
            >
              Ingresar
            </button>
            <button
              type="submit"
              className="btn btn-danger me-2"
              onClick={onSalir}
            >
              Salir
            </button>
          </form>
          <div className="contador2 col-3">
            <h2>OCUPADOS</h2>
            <div className="valor">{contador2 >= 0 ? contador2 : 0}</div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

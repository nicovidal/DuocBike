import { useDispatch, useSelector } from "react-redux";
import { onSearchingAlumno, onAlumnoFound, onAlumnoNotFound, setAlumnoRut } from "../store/data/ingresoSlice";
import bikeApi from "../api/bikeApi";
import Swal from "sweetalert2";

export const useIngresoStore = () => {
  const dispatch = useDispatch();
  const { isBuscandoAlumno, alumnoDatos, alumnoRut } = useSelector((state) => state.ingreso);

  const startSearchAlumno = async (rut) => {
    try {
      dispatch(onSearchingAlumno());
  
      // Realizar la llamada a la API para buscar el alumno por rut
      const response = await bikeApi.get(`/info/alumnos/rut/${rut}`);
      const alumnoEncontrado = response.data.alumno;
  
      console.log(alumnoEncontrado);
  
      // Verificar si se encontró el alumno o no
      if (alumnoEncontrado) {
        // Alumno encontrado
        dispatch(onAlumnoFound(alumnoEncontrado));
      } else {
        // Alumno no encontrado
        dispatch(onAlumnoNotFound());
      }
    } catch (error) {
      if (error.response && error.response.status === 404) {
        // Alumno no encontrado
        dispatch(onAlumnoNotFound());
      } else {
        // Error desconocido
        console.log(error);
      }
    }
  };

  const handleRutChange = (e) => {
    const rut = e.target.value;
    if (rut) {
      dispatch(setAlumnoRut(rut));
    } else {
      // Si el valor es vacío, asignar una cadena vacía al alumnoRut
      dispatch(setAlumnoRut(''));
    }
  };


  const startIngresandingALumno =async(alumnoRut)=>{


    try {


      const {data} = await bikeApi.post("/ingreso/",{rut:alumnoRut});

      console.log('alumno ingresado',data)
      
    } catch (error) {
      if(error){
        Swal.fire('ya tiene un ingreso registrado')
      }
    
    }



  }

  const startSaliendingAlumno=async(alumnoRut)=>{

    try {

      const {data}=await bikeApi.put("/ingreso/salida/",{rut:alumnoRut});
      console.log('alumno se fue',data)
      
    } catch (error) {
      if(error)
      Swal.fire('Alumno no tiene registro de ingreso')
      console.log(error)
      
    }
  }

  return {
    isBuscandoAlumno,
    alumnoDatos,
    alumnoRut,
    startSearchAlumno,
    handleRutChange,
    startIngresandingALumno,
    startSaliendingAlumno
  };
};
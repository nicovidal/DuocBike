import { useDispatch, useSelector } from "react-redux";
import bikeApi from "../api/bikeApi";
import { onLoadingAlumnos } from "../store";

export const useAlumnoStore =  () => {

    const dispatch=useDispatch();
    const {alumno}=useSelector((state)=>state.alumno);


  const startLoadingAlumno = async () => {
    try {
      const { data } = await bikeApi.get('/info/alumnos');
      console.log( {data });
     const alumno=data.alumnos 
      dispatch( onLoadingAlumnos(alumno));
    } catch (error) {
      console.log("error cargar alumnos");
      console.log(error);
    }
  };

  return {
    //propiedades
    alumno,

    //metodos
    startLoadingAlumno,
  };
};

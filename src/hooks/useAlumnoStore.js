import { useDispatch, useSelector } from "react-redux";
import bikeApi from "../api/bikeApi";
import { onDeleteAlumno, onLoadingAlumnos,} from "../store";
import Swal from "sweetalert2";

export const useAlumnoStore =  () => {

    const dispatch=useDispatch();
    const {alumno,activeAlumno}=useSelector((state)=>state.alumno);

 

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

  const startDeletingAlumno=async()=>{

    try {
      await bikeApi.delete(`/info/alumnos/${activeAlumno.id}`);
      dispatch(onDeleteAlumno());
      console.log(activeAlumno.id)

    } catch (error) {
      console.log(error);
      Swal.fire('Error al eliminar error')
    }


  }

  return {
    //propiedades
    alumno,
    activeAlumno,

    //metodos
    startLoadingAlumno,
    startDeletingAlumno,
    
  };
};

import { useDispatch, useSelector } from "react-redux";
import bikeApi from "../api/bikeApi";
import { onLoadingGuardias, onSetActiveGuardia } from "../store";

export const useGuardiaStore =  () => {

    const dispatch=useDispatch();
    const {guardia,activeGuardia}=useSelector((state)=>state.guardias);





  const startLoadingGuardias = async () => {
    try {
      const { data } = await bikeApi.get('/info/guardias');
      console.log( {data});
     const guardia=data.guardias
      dispatch( onLoadingGuardias(guardia));
    } catch (error) {
      console.log("error cargar guardias");
      console.log(error);
    }
  };


  const setActiveGuardia=(guardiaEvent)=>{
    
    dispatch(onSetActiveGuardia(guardiaEvent))

  }

  return {
    //propiedades
    guardia,
    activeGuardia,

    //metodos
    startLoadingGuardias,
    setActiveGuardia
  };
};

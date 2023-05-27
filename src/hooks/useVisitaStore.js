
import { useDispatch, useSelector } from "react-redux";
import bikeApi from "../api/bikeApi"
import { onLoadingVisitas } from "../store/data/visitaSlice";

export	const useVisitaStore =() => {
    const dispatch=useDispatch();
    const {visita} = useSelector((state)=>state.visita)

    const startRegisterVisita=async({visitaRut,visitaNombre,visitaMarca,visitaLugar,visitaMotivo})=> {

        try {
            await bikeApi.post('/info/newvisitas',{visitaRut,visitaNombre,visitaMarca,visitaLugar,visitaMotivo})


        } catch (error) {
            console.log('Error al agregar visita')
        }

    }

    const startLoadingVisitas = async () => {
        try {
            const { data } = await bikeApi.get('/info/visitas');
            console.log({data})
            const visita=data.visitas
            dispatch( onLoadingVisitas(visita));
        } catch (error) {
            console.log("Error")
            console.log(error)
        }


    }


    return{
    visita,
      startRegisterVisita,
      startLoadingVisitas
    }
}
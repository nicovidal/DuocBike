
import bikeApi from "../api/bikeApi"

export	const useVisitaStore =() => {
    const startRegisterVisita=async({visitaRut,visitaNombre,visitaMarca,visitaLugar,visitaMotivo})=> {

        try {
            await bikeApi.post('/info/newvisitas',{visitaRut,visitaNombre,visitaMarca,visitaLugar,visitaMotivo})


        } catch (error) {
            console.log('Error al agregar visita')
        }

    }


    return{
      startRegisterVisita  
    }
}
import { useDispatch, useSelector } from "react-redux"
import { onOpenAlumnoModal,onCloseAlumnoModal } from "../store/modal/modalAlumnoSlice";


export const useModalStore=()=>{

    const dispatch=useDispatch();

    const {isAlumnoModalOpen}=useSelector(state=>state.modalAlumno);

    const openAlumnoModal=()=>{
        dispatch( onOpenAlumnoModal());

    };

    const closeAlumnoModal=()=>{
        dispatch(onCloseAlumnoModal())
    };

    //can use like this too.
    const toggleAlumnoModal=()=>{
        (isAlumnoModalOpen)
        ?openAlumnoModal()
        :closeAlumnoModal
    };

    return{
        //properties
        isAlumnoModalOpen,
        //metodos
        openAlumnoModal,
        closeAlumnoModal,
        toggleAlumnoModal,
    }


}
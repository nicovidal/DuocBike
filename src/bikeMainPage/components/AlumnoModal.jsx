import Modal from "react-modal"
import { useModalStore } from "../../hooks/useModalStore";
import { useAlumnoStore } from "../../hooks";
import { useEffect, useMemo, useState } from "react";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

//para que se sobreponga ante todo lo demas
Modal.setAppElement('#root')

export const AlumnoModal = () => {

    const {isAlumnoModalOpen,closeAlumnoModal}=useModalStore();
    
    const{activeAlumno,startSavingAlumno}=useAlumnoStore();

    const [formSumbitted, setFormSumbitted] = useState(false);

    const [formValues, setFormValues] = useState({
        nombre: '',
        rut: '',
        carrera: '',
        marca: '',
        color: '',
        ID: '',
  
    });

    const alumnoClass = useMemo(() => { 
        if(!formSumbitted)return '';
        return(formValues.nombre.length>0)
        ?''
        :'is-invalid';


    }, [formValues.nombre, formSumbitted]);

    useEffect(() => {
        if(activeAlumno !== null){
            setFormValues({...activeAlumno});
        }
        
    }, [activeAlumno])

    const onInputChanged=({target})=>{

        setFormValues({
            ...formValues,
            [target.name]:target.value,
        })


    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setFormSumbitted(true);

        if (formValues.title.length <= 0) return;

        console.log(formValues);
 
        await startSavingAlumno(formValues);
        closeAlumnoModal();
        setFormSumbitted(false);

    }

    const onCloseModal = () => {
        /* console.log('cerrando modal') */
        closeAlumnoModal();

        /* setIsOpen(false); */

    }



    



    return (
        <Modal
        isOpen={isAlumnoModalOpen}
        onRequestClose={onCloseModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}

    >
        <h1> Nuevo evento </h1>
        <hr />
        <form className="container" onSubmit={onSubmit}>

            <div className="form-group mb-2">
                <label>Fecha y hora inicio</label>


            </div>

            <div className="form-group mb-2">
                <label>Fecha y hora fin</label>          
            </div>

            <hr />
            <div className="form-group mb-2">
                <label>Titulo y notas</label>
                <input

                    type="text"
                    className={`form-control ${alumnoClass}`}
                    placeholder="Título del evento"
                    name="title"
                    autoComplete="off"
                    value={formValues.title}
                    onChange={onInputChanged}
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group mb-2">
                <textarea
                    type="text"
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    value={formValues.notes}
                    onChange={onInputChanged}
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form>
    </Modal>

    )
}
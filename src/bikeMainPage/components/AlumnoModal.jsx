import Modal from "react-modal";
import { useModalStore } from "../../hooks/useModalStore";
import { useAlumnoStore } from "../../hooks/useAlumnoStore";
import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const AlumnoModal = () => {
  const { isAlumnoModalOpen, closeAlumnoModal } = useModalStore();
  const { activeAlumno, startSavingAlumno } = useAlumnoStore();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formValues, setFormValues] = useState({
    title: "",
    notes: "",
  });

  useEffect(() => {
    if (activeAlumno !== null) {
      setFormValues({ ...activeAlumno });
    }
  }, [activeAlumno]);

  const onInputChanged = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (formValues.title.length <= 0) return;

    await startSavingAlumno(formValues);
    closeAlumnoModal();
    setFormSubmitted(false);
  };

  const onCloseModal = () => {
    /* console.log('cerrando modal') */
    closeAlumnoModal();

    /* setIsOpen(false); */

}



  const alumnoClass = formSubmitted && formValues.title.length === 0 ? "is-invalid" : "";

  return (
    <Modal 
      className="modal"
      overlayClassName="modal-fondo" 
      isOpen={isAlumnoModalOpen} 
      onRequestClose={onCloseModal}
      style={customStyles}>

      hola
    </Modal>


  );
};
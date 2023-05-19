import Modal from "react-modal";
import { useModalStore } from "../../hooks/useModalStore";
import { useAlumnoStore } from "../../hooks/useAlumnoStore";
import { useEffect, useState } from "react";
import { TextField, Button } from "@mui/material";
import { TextFields } from "@mui/icons-material";

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
    closeAlumnoModal();
  };

  const alumnoClass = formSubmitted && formValues.title.length === 0 ? "is-invalid" : "";

  return (
    <Modal
      isOpen={isAlumnoModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={200}
    >
      <h1>Nuevo evento</h1>
      <hr />
      <form className="container" onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label>Título y notas</label>
          <TextField
            type="text"
            className={`form-control ${alumnoClass}`}
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChanged}
            helpertext={formSubmitted && formValues.title.length === 0 ? "El título es requerido" : ""}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>
        <div className="form-group mb-2">
          <TextField
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChanged}
            multiline
            helperText="Información adicional"
          />
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>
        <Button type="submit" variant="outlined" fullWidth>
          <i className="far fa-save"></i>
          <span>Guardar</span>
        </Button>
      </form>
    </Modal>
  );
};
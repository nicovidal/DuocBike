import Modal from "react-modal";
import { useModalStore } from "../../hooks/useModalStore";
import { useEffect, useMemo, useState } from "react";
import { useGuardiaStore } from "../../hooks/useGuardiaStore";

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


export const GuardModal = () => {

  const { isGuardiaModalOpen, closeGuardiaModal } = useModalStore();

  const [formSubmitted, setFormSubmitted] = useState(false);

  const { activeGuardia, startSavingGuardia,startDeletingGuardia} = useGuardiaStore();


  const [formValues, setFormValues] = useState({
    guardName: '',
    guardUser: '',
    guardPassword: '',

  });



  const guardiaClass = useMemo(() => {
    if (!formSubmitted) return "";
    return formValues.guardName.length > 0 ? '' : "is-invalid";
  }, [formValues.guardName, formSubmitted]);




  const onInputChanged = (event, field) => {
    setFormValues({
      ...formValues,
      [field]: event.target.value,
    });
  };

  useEffect(() => {
    if (activeGuardia !== null) {
      setFormValues({ ...activeGuardia});
    }
  }, [activeGuardia]);






  const onCloseModal = () => {
    closeGuardiaModal();
  };



  return (
    <>
    <Modal
    isOpen={isGuardiaModalOpen}
    style={customStyles}
    className="modal"
    overlayClassName="modal-fondo"
    onRequestClose={onCloseModal}
    
    >
      <h1>Modificar Guardia</h1>
      <hr />
      <form className="container">
        <div className="form-group mb-2">
          <label>Nombre</label>
          <input
            type="text"
            className={`form-control ${guardiaClass}`}
            value={formValues.guardName}
            onChange={(event) => onInputChanged(event, "guardName")}
          />
        </div>
        <div className="form-group mb-2">
          <label>Usuario</label>
          <input
            type="text"
            className={`form-control ${guardiaClass}`}
            value={formValues.guardUser}
            onChange={(event) => onInputChanged(event, "guardUser")}
          />
        </div>
        <div className="form-group mb-2">
          <label>Contraseña</label>
          <input
            type="text"
            className={`form-control ${guardiaClass}`}
            value={formValues.guardPassword}
            onChange={(event) => onInputChanged(event, "guardPassword")}
          />
        </div>
      </form>
    </Modal>
    </>
  )
}

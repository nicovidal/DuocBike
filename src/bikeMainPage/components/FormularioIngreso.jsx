import '../styles/FormularioIngreso.css';

export const FormularioIngreso = () => {
    return (
        <>
            <div className="bodyIngreso">
                <div className='container text-center'>
                    <div className=''>
                        <form className="form-control-ingreso">
                            <div>
                                <label className='nuevoIngreso'>Ingrese el rut:</label>
                                &nbsp;&nbsp;&nbsp;
                                <input placeholder="Rut" className='inputIngreso'></input>
                            </div>
                            <div>
                                <button className='btn btn-1' value="Buscar">Buscar</button>
                            </div>
                        </form>
                    </div>
                    
                    <form className='datosAlumnoForm'>
                        <div className="form-row ">
                            <div className="form-group col-me-6 ">
                                <label>ID bicicleta</label>
                                <input type="text" className="form-control datosAlumno" id="iDBicicleta" placeholder="919191919"disabled/>
                            </div>
                            <div className="form-group col-me-6">
                                <label>Rut</label>
                                <input type="text" className="form-control datosAlumno" id="inputPassword4" placeholder="Password" disabled/>
                            </div>
                        </div>
                        <div className="form-group col-me-6">
                            <label>Nombre Completo</label>
                            <input type="text" className="form-control datosAlumno" id="inputAddress" placeholder="" disabled/>
                        </div>
                        <div className="form-group">
                            <div className="form-row">
                                <div className="form-group col-me-6">
                                    <label>Modelo de bici</label>
                                    <input type="text" className="form-control datosAlumno" id="inputCity"disabled />
                                </div>
                       
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary me-2">ingresar</button>
                        <button type="submit" className="btn btn-danger me-2">salir </button>
                    </form>
                </div>
                
   
            </div>
            


        </>
    );
};


export const AddGuard = () => {
    return (
        <div className="container">
            <form>
                <div className="form-group mb-2">
                    <input
                        type="text"
                        className=" form-control"
                        placeholder="Nombre"
                    />
                 

                </div>
                <div className="form-group mb-2">
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Usuario"
                    />
                </div>
                <div className="form-group mb-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Contraseña"
                    />  
                </div>
                <div className="form-group mb-2">
                        <input 
                            type="submit"
                            className="btnSubmit"
                            value="Registrar" 
                        />
                      
                    </div>
            </form>

        </div>
    )
}

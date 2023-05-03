import '../styles/AddGuard.css'

export const AddGuard = () => {
    return (
        <div className="container add-container">
      
        <div className="row">
            <div className="col-md-6 add-form-1">
        
                <form>
                    <div className="form-group mb-2">                     
                        <input 
                            type="text"
                            className=" form-control-add"
                            placeholder="Nombre"
                        />                   
                    </div>
                    <div className="form-group mb-2">                     
                        <input 
                            type="text"
                            className=" form-control-add"
                            placeholder="Usuario"
                        />                   
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control-add"
                            placeholder="contraseña"
                        />
                    </div>
        
                </form>
            </div>

            
        </div>
    </div>
    )
}

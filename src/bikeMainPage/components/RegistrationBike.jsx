import React from 'react'
import '../styles/RegistrationBike.css'

export const RegistrationBike = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="addBike-form">  
                <img src="../assets/logo.png" className='logo-addBike'/>
                <form>

                    <div className="form-group mb-2">
                        <input
                        type="text"
                        className=" form-control-addBike"
                        placeholder="Nombre"
                        />                
                    </div>

                    <div className="form-group mb-2">
                        <input
                        type="text"
                        className=" form-control-addBike"
                        placeholder="Rut"
                        />                
                    </div>

                    <div className="form-group mb-2">
                        <input
                        type="text"
                        className=" form-control-addBike"
                        placeholder="Carrera"
                        />                
                    </div>

                    <div className="form-group mb-2">
                        <input
                        type="text"
                        className=" form-control-addBike"
                        placeholder="Marca"
                        />                
                    </div>

                    <div className="form-group mb-2">
                        <input
                        type="text"
                        className=" form-control-addBike"
                        placeholder="Color"
                        />                
                    </div>

                    <div className="form-group mb-2">
                        <input
                        type="text"
                        className=" form-control-addBike"
                        placeholder="ID"
                        />                
                    </div>

                    <div className="form-group mb-2">
                        <input 
                            type="submit"
                            className="btnAddBike"
                            value="Registrar" 
                        />
                    </div>

                </form>
            </div>
        </div>
    </div>
  )
}

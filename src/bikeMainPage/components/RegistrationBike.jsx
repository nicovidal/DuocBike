import React from 'react'

export const RegistrationBike = () => {
  return (
    <div className="container">
        <img src="../assets/logo.png" className='logo'/>
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
                    className="btnSubmit"
                    value="Registrar" 
                />
            </div>
        </form>

    </div>
  )
}

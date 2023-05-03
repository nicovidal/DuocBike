import React from 'react'

export const RegistrationBike = () => {
  return (
    <div className="container">
        <img src="../assets/logo.png" className='logo'/>
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
                type="text"
                className=" form-control"
                placeholder="Rut"
                />                
            </div>

            <div className="form-group mb-2">
                <input
                type="text"
                className=" form-control"
                placeholder="Carrera"
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

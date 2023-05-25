import React from 'react'
import '../styles/RegistroVisitas.css'


export const RegistroVisita = () => {
  return (
    
    <div className='fondoVisitas'>
      <div className='bodyVisitas'>
        <div className='containerVisita'>
          <h2 className="nuevaVisita">Registro visitas</h2><br />


          <form className='formVisitas'>
            <div className='form-controlVisita'>
              <input type="text" placeholder='Rut' className='inputVisitas' 
              name="rutVisitas"/>
              &nbsp;&nbsp;&nbsp;
              <input type="text" placeholder='Nombre' className='inputVisitas' 
              name="nombreVisitas"/>
              &nbsp;&nbsp;&nbsp;
              <input type="text" placeholder='Marca' className='inputVisitas' 
              name="marcaVisitas"/>
              &nbsp;&nbsp;&nbsp;
              <input type="text" placeholder='Lugar' className='inputVisitas' 
              name="lugarVisitas"/>
              &nbsp;&nbsp;&nbsp;
              <input type="text" placeholder='Motivo' className='inputVisitas' 
              name="motivoVisitas"/>

              
            </div>
            <button className='btn' value="Registrar">Registrar</button>
          </form>
        </div>
      </div>
      </div>



  )                   
}

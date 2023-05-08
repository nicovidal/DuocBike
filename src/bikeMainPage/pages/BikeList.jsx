import { useEffect } from "react";
import { Navbar } from "../components/Navbar"
import { useAlumnoStore } from "../../hooks";


export const BikeList = () => {

  const {alumno,startLoadingAlumno } =useAlumnoStore();


  useEffect(() => {
   
    startLoadingAlumno();
   
  }, [])
  

  return (
    <>
    <Navbar/>
  
  
      {alumno.map(a=>{
        return(
          <tr key={a.id}>
            <td>{a.registerName}</td>
            <td>{a.registerRut}</td>
            <td>{a.registerCarrer}</td>
            <td>{a.registerBrand}</td>
            <td>{a.registerColor}</td>
            <td>{a.registerID}</td>    
          </tr>
        )
      })}
  
    </>
  )
}

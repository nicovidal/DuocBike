import { useEffect } from "react";
import { Navbar } from "../components/Navbar"
import { useAlumnoStore } from "../../hooks";


export const BikeList = () => {

  const {startLoadingAlumnos } =useAlumnoStore();


  useEffect(() => {
    startLoadingAlumnos();

  }, [])
  

  return (
    <>
    <Navbar/>
    <div>Aqui se mostraran los cilistas</div>
    </>
  )
}

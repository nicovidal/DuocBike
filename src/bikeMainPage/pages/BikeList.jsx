import { useEffect } from "react";
import { Navbar } from "../components/Navbar"
import { useAlumnoStore } from "../../hooks";


export const BikeList = () => {

  const { alumno, startLoadingAlumno } = useAlumnoStore();


  useEffect(() => {

    startLoadingAlumno();

  }, [])


  return (
    <>
      <Navbar />
      <table className="table table-striped ">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Nombre</th>
            <th scope="col">Rut</th>
            <th scope="col">Carrera</th>
            <th scope="col">Marca</th>
            <th scope="col">Color</th>

          </tr>
        </thead>

        {alumno.map(a => {
          return (
            <>
              <tbody key={a.id}>
                <tr>
                  <td>{a.registerID}</td>
                  <td>{a.registerName}</td>
                  <td>{a.registerRut}</td>
                  <td>{a.registerCarrer}</td>
                  <td>{a.registerBrand}</td>
                  <td>{a.registerColor}</td>
                </tr>
              </tbody>
            </>

          )

        })}
      </table>

    </>
  )
}

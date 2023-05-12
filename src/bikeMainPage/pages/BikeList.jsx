import { useEffect } from "react";
import { Navbar } from "../components/Navbar"
import { useAlumnoStore } from "../../hooks";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead,TableRow } from "@mui/material";

import '../styles/BikeList.css'


export const BikeList = () => {

  const { alumno, startLoadingAlumno } = useAlumnoStore();


  useEffect(() => {

    startLoadingAlumno();

  })
  
  


  return (
    <>
      <Navbar />
{/*       <table className="table table-hover">
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
      </table> */}
      <div className="fondo4">
        <div className="body4">
          <div className="container4">
            <TableContainer className="form4" component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                <TableHead >
                    <TableRow >
                      <TableCell align="right">ID Bicicleta</TableCell>
                      <TableCell align="right">Nombre</TableCell>
                      <TableCell align="right">Rut</TableCell>
                      <TableCell align="right">Carrera</TableCell>
                      <TableCell align="right">Marca</TableCell>
                      <TableCell align="right">Color</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {alumno.map((a) => (
                    <TableRow
                      key={a.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell align="center">{a.registerID}</TableCell>
                      <TableCell align="right">{a.registerName}</TableCell>
                      <TableCell align="right">{a.registerRut}</TableCell>
                      <TableCell align="right">{a.registerCarrer}</TableCell>
                      <TableCell align="right">{a.registerBrand}</TableCell>
                      <TableCell align="right">{a.registerColor}</TableCell>

                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          </TableContainer>
        </div>
        </div>
    </div>

      

    </>
  )
}

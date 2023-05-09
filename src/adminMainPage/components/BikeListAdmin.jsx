import { useEffect } from "react";

import { useAlumnoStore } from "../../hooks";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead,TableRow } from "@mui/material";
import { NavBarAdmin } from "./NavBarAdmin";




export const BikeListAdmin = () => {

  const { alumno, startLoadingAlumno } = useAlumnoStore();


  useEffect(() => {

    startLoadingAlumno();

  })
  
  


  return (
    <>
      <NavBarAdmin />
      <div className="container">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
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

      

    </>
  )
}

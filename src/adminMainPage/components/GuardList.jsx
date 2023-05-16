import { useEffect } from "react";
import { useGuardiaStore } from "../../hooks/useGuardiaStore"
import { NavBarAdmin } from "./NavBarAdmin"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export const GuardList = () => {

  const {guardia,startLoadingGuardias}=useGuardiaStore();

  useEffect(() => {
    startLoadingGuardias();
  }, )
  


  return (
    <>
    <NavBarAdmin />
    <div className="container">
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Nombre</TableCell>
            <TableCell align="right">Usuario</TableCell>
            <TableCell align="right">Contraseña</TableCell>
 
          </TableRow>
        </TableHead>
        <TableBody>
          {guardia.map((g) => (
            <TableRow
              key={g.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{g.guardName}</TableCell>
              <TableCell align="right">{g.guardUser}</TableCell>
              <TableCell align="right">{g.guardPassword}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    </>
  )
}

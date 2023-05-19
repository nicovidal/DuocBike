import { useState, useEffect } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import "../styles/BikeList.css";
import { useModalStore } from "../../hooks/useModalStore";
import { AlumnoModal } from "../components/AlumnoModal";
import { useAlumnoStore } from "../../hooks";

export const BikeList = () => {

  const { alumno, startLoadingAlumno, setActiveAlumno } = useAlumnoStore();
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    startLoadingAlumno();
  }, []);

  const { openAlumnoModal, closeAlumnoModal } = useModalStore();


  const onDoubleClick = (event) => {
    /* console.log({ doubleClick: event }) */
    
  }

  const onDouble=()=>{
    openAlumnoModal();
  }


  const onSelectAlumno = (event,alumno) => {
    setActiveAlumno(alumno);
 
    setSelectedRow(alumno.id);

    console.log(alumno)
  };

  return (
    <>
      <div className="fondo4">
        <div className="body4">
          <div className="container4">
            <TableContainer className="form4" component={Paper}>
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
                    onClick={(event) => onSelectAlumno(event, a)}
                      onDoubleClick={onDouble}
                      hover                    
                      key={a.id}
                      selected={selectedRow === a.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
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
      <AlumnoModal/>
    </>
  );
};

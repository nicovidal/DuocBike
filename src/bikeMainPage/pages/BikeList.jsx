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
  const { openAlumnoModal, closeAlumnoModal } = useModalStore();
  const { alumno, startLoadingAlumno, setActiveAlumno } = useAlumnoStore();
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    startLoadingAlumno();
  }, []);

  const openModal = (alumno) => {
    openAlumnoModal();
  };

  const onSelect = (alumno) => {
    setActiveAlumno(alumno);
    setSelectedRow(alumno.id);
    openAlumnoModal();
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
                      onClick={() => onSelect(a)}
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
          <AlumnoModal />
        </div>
      </div>
    </>
  );
};

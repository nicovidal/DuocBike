import { useEffect, useState } from "react";
import { useIngresoStore } from "../../hooks/useIngresoStore";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import "../styles/ListIngreso.css";

export const ListIngreso = () => {
  const { startLoadingIngresos, ingreso } = useIngresoStore();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  useEffect(() => {
    startLoadingIngresos();
  }, []);

  const sortedIngresos = ingreso.slice().reverse();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, sortedIngresos.length - page * rowsPerPage);

  return (
    <>
      <div className="fondo9">
        <div className="body9">
          <div className="container9">
            <TableContainer className="form9" component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="right">Rut</TableCell>
                    <TableCell align="right">Nombre</TableCell>
                    <TableCell align="right">Modelo Bicicleta</TableCell>
                    <TableCell align="right">Hora Ingreso</TableCell>
                    <TableCell align="right">Hora Salida</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {(rowsPerPage > 0
                    ? sortedIngresos.slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                    : sortedIngresos
                  ).map((i) => (
                    <TableRow key={i.id}>
                      <TableCell align="center">{i.rutAlumno}</TableCell>
                      <TableCell align="right">{i.nombreAlumno}</TableCell>
                      <TableCell align="right">{i.biciAlumno}</TableCell>
                      <TableCell align="right">{i.horaIngreso}</TableCell>
                      <TableCell align="right">{i.horaSalida}</TableCell>
                    </TableRow>
                  ))}

                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={5} />
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10]}
                component="div"
                count={sortedIngresos.length}
                rowsPerPage={rowsPerPage}
                page={page}
                labelRowsPerPage="Filas por página"
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableContainer>
          </div>
        </div>
      </div>
    </>
  );
};

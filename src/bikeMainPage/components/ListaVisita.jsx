
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination } from '@mui/material';
import { useEffect, useState } from 'react';
import { useVisitaStore } from '../../hooks/useVisitaStore';
import Swal from 'sweetalert2';


export const ListaVisita = () => {
  const { startLoadingVisitas, visita, setActiveVisita, startSaliendingVisita, activeVisita } = useVisitaStore();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [visitaList, setVisitaList] = useState([]);

  useEffect(() => {
    startLoadingVisitas();
  }, []);

  useEffect(() => {
    setVisitaList(visita);
  }, [visita]);

  useEffect(() => {
    if (activeVisita && activeVisita.horaSalida) {
      // La visita tiene una hora de salida, actualiza la lista de visitas
      setVisitaList((prevList) =>
        prevList.map((v) =>
          v.id === activeVisita.id ? { ...v, horaSalida: activeVisita.horaSalida } : v
        )
      );
    }
  }, [activeVisita]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const paginatedVisita = visitaList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const onSelectVisita = (event, visita) => {
    setActiveVisita(visita);
  };

  const onSalirVisita = (e) => {
    e.preventDefault();
  
    Swal.fire({
      title: `¿Confirmas la salida de ${activeVisita.visitaNombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Salida realizada correctamente', '', 'success');
        startSaliendingVisita(activeVisita.visitaRut).then(() => {
          startLoadingVisitas();
        });
      }
    });
  };

  return (
    <div>
      <TableContainer component={Paper} className='listaVisita'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Rut</TableCell>
              <TableCell align="right">Nombre</TableCell>
              <TableCell align="right">Marca</TableCell>
              <TableCell align="right">Lugar</TableCell>
              <TableCell align="right">Motivo</TableCell>
              <TableCell align="right">Entrada</TableCell>
              <TableCell align="right">Salida</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedVisita.map((v) => (
              <TableRow 
              key={v.id}
              hover
              onClick={(event) => onSelectVisita(event, v)}
              >
                <TableCell align="right">{v.visitaRut}</TableCell>
                <TableCell align="right">{v.visitaNombre}</TableCell>
                <TableCell align="right">{v.visitaMarca}</TableCell>
                <TableCell align="right">{v.visitaLugar}</TableCell>
                <TableCell align="right">{v.visitaMotivo}</TableCell>
                <TableCell align="right">{v.horaIngreso}</TableCell>
                <TableCell align="right">{v.horaSalida}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={visitaList.length} 
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage="Filas por página"
          rowsPerPageOptions={[5, 10]}
        />
      </TableContainer>
      <button className='btn btn-danger' onClick={onSalirVisita}>Salida</button>
    </div>
  );
};
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import '../styles/ListaVisitas.css'
import { useVisitaStore } from '../../hooks/useVisitaStore'

export const ListaVisita = () => {

  const {startLoadingVisitas, visita} = useVisitaStore ()
  useEffect(() => {
    startLoadingVisitas();
  })
  
  return (
    <>
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
              {
                visita.map((v) => (
                  <TableRow key={v.id}>
                    <TableCell align="right">{v.visitaRut}</TableCell>
                    <TableCell align="right">{v.visitaNombre}</TableCell>
                    <TableCell align="right">{v.visitaMarca}</TableCell>
                    <TableCell align="right">{v.visitaLugar}</TableCell>
                    <TableCell align="right">{v.visitaMotivo}</TableCell>
                  </TableRow>
                ))
              }

              </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
    
  )
}

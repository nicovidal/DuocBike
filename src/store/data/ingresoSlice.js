import { createSlice } from '@reduxjs/toolkit';

export const ingresoSlice = createSlice({
  name: 'ingreso',
  initialState: {
    isBuscandoAlumno: false,
    alumnoDatos: [],
    alumnoRut: '',
  },
  reducers: {
    onSearchingAlumno: (state) => {
      state.isBuscandoAlumno = true;
    },
    onAlumnoFound: (state, action) => {
      state.isBuscandoAlumno = false;
      state.alumnoDatos = action.payload;
      state.alumnoRut=action.payload.registerRut
  

    },
    onAlumnoNotFound: (state) => {
      state.isBuscandoAlumno = false;
      state.alumnoDatos = [];
      state.alumnoRut = '';
    },
    setAlumnoRut: (state, action) => {
      state.alumnoRut = action.payload;
    },
  },
});

export const { onSearchingAlumno, onAlumnoFound, onAlumnoNotFound, setAlumnoRut } = ingresoSlice.actions;
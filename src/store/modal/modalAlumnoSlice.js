import { createSlice } from '@reduxjs/toolkit';

export const modalAlumnoSlice = createSlice({
    name: 'modalAlumno',
    initialState: {
        isAlumnoModalOpen:true
    },
    reducers: {
        onOpenAlumnoModal:(state)=>{
            state.isAlumnoModalOpen=true;
        },
        onCloseAlumnoModal:(state)=>{
            state.isAlumnoModalOpen=false;
        },

    }
});



export const { onOpenAlumnoModal, onCloseAlumnoModal} = modalAlumnoSlice.actions;
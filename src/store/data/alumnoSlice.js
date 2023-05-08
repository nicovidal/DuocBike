import { createSlice } from '@reduxjs/toolkit';

export const alumnoSlice = createSlice({
    name: 'alumno',
    initialState: {
        isLoadingALumnos:true,
        alumnoSlice:[],
        
    },
    reducers: {
        onLoadingAlumnos: (state,{payload=[]} ) => {
            state.isLoadingALumnos=false;
            payload.forEach(alumno=>{
                const exists=state.alumno.some(dbAlumno=>dbAlumno.id===alumno.id)
                if(!exists){
                    state.events.push(alumno)
                }
            })
        },
    }
});



export const { increment } = alumnoSlice.actions;
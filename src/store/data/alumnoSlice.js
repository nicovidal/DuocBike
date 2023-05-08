import { createSlice } from '@reduxjs/toolkit';

export const alumnoSlice = createSlice({
    name: 'alumno',
    initialState: {
        isLoadingALumnos:true,
        alumno:[],
        
    },
    reducers: {
        onLoadingAlumnos: (state,{payload=[]} ) => {
            state.isLoadingALumnos=false;
            payload.forEach(alumno=>{
                const exists=state.alumno.some(dbAlumno=>dbAlumno.id===alumno.id)
                if(!exists){
                    state.alumno.push(alumno)
                    
                }
            })
        },
      
    }
});



export const { onLoadingAlumnos } = alumnoSlice.actions;
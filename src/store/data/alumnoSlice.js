import { createSlice } from '@reduxjs/toolkit';

export const alumnoSlice = createSlice({
    name: 'alumno',
    initialState: {
        isLoadingALumnos:true,
        alumno:[],
        activeAlumno:null,
        
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
        onSetActiveAlumno:(state,{payload})=>{
            state.activeAlumno=payload;
        },



    }
});



export const { onLoadingAlumnos,onDeleteAlumno ,onSetActiveAlumno} = alumnoSlice.actions;
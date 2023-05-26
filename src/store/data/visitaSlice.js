import { createSlice } from '@reduxjs/toolkit';

export const visitaSlice = createSlice({
    name: 'visitas',
    initialState: {
        isLoadingVisitas:true,
        visita:[]
    },
reducers: {
    onLoadingVisitas: (state, {payload=[]} ) => {
        state.isLoadingVisitas=false;
        payload.forEach(visita=>{
            const exists=state.visita.some(dbVisita=>dbVisita.id===visita.id)
            if(!exists){
                state.visita.push(visita)
            }
        })
    },

}
})


export const { onLoadingVisitas} = visitaSlice.actions;
import { createSlice } from '@reduxjs/toolkit';

export const guardiasSlice = createSlice({
    name: 'guardias',
    initialState: {
        isLoadingGuardias:true,
        guardia:[],
        
    },
    reducers: {
        onLoadingGuardias: (state,{payload=[]} ) => {
            state.isLoadingGuardias=false;
            payload.forEach(guardia=>{
                const exists=state.guardia.some(dbGuardia=>dbGuardia.id===guardia.id)
                if(!exists){
                    state.guardia.push(guardia)
                    
                }
            })
        },
      
    }
});



export const { onLoadingGuardias } = guardiasSlice.actions;
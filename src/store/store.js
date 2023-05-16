import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { alumnoSlice } from "./data/alumnoSlice";
import { guardiasSlice } from "./data/guardiasSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        alumno:alumnoSlice.reducer,
        guardias:guardiasSlice.reducer,
    }
})
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { alumnoSlice } from "./data/alumnoSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        alumno:alumnoSlice.reducer,
    }
})
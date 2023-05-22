import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/authSlice";
import { alumnoSlice } from "./data/alumnoSlice";
import { guardiasSlice } from "./data/guardiasSlice";
import { modalAlumnoSlice } from "./modal/modalAlumnoSlice";
import { modalGuardiaSlice } from "./modal/modalGuardiaSlice";

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        alumno:alumnoSlice.reducer,
        guardias:guardiasSlice.reducer,
        modalAlumno:modalAlumnoSlice.reducer,
        modalGuardia:modalGuardiaSlice.reducer,
    }
})
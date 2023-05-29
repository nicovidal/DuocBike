import { Navigate, Route, Routes } from "react-router-dom"
import { AdminLogin, Login } from "../auth";
import {RegisterGuard } from "../bikeMainPage";
import { useAuthStore } from "../hooks";
import { BikeListAdmin, GuardList } from "../adminMainPage/components";
import { AdminMain } from "../adminMainPage/pages/adminMain";

import { Visitas } from "../bikeMainPage/pages/Visitas";
import { ListaAlumnos } from "../bikeMainPage/pages/ListaAlumnos";
import { ListaIngresos } from "../bikeMainPage/pages/ListaIngresos";
import { Ingresar } from "../bikeMainPage/pages/Ingresar";

/* import { Admin } from "../bikeMainPage/pages/Admin"; */


export const AppRouter = () => {

  const { status } = useAuthStore();

  if (status === 'checking') {
    return (
      <h3>Cargando...</h3>
    )
  }
  return (
    <Routes>
      {status === 'checking' ? (
        <h3>Cargando...</h3>
      ) : status === 'not-authenticated' ? (
        <>
          <Route path='/auth/*' element={<Login />} />
          <Route path='/auth/admin' element={<AdminLogin />} />
          <Route path='/*' element={<Navigate to="/auth/login" />} />
        </>
      ) : status === 'authenticated' ? (
        <>
          <Route path='/registrar' element={<RegisterGuard />} />
          <Route path='/*' element={<Navigate to="/registrar" />} />
          <Route path='/list' element={<ListaAlumnos />} />
          <Route path='/ingreso' element={<Ingresar/>} />
          <Route path='/visitas' element={<Visitas />} />
          <Route path='/ingresados' element={<ListaIngresos/>} />

        </>
      ) : status === 'admin' ? (
        <>
          <Route path='/administracion' element={<AdminMain/>} />
          <Route path='/*' element={<Navigate to="/administracion" />} />
          <Route path='/listAdmin' element={<BikeListAdmin />} />
          <Route path='/listGuard' element={<GuardList />} />

        </>
      ) : null}
     
    </Routes>
  );
}
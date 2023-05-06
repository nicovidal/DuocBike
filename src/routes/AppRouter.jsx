import { Navigate, Route, Routes } from "react-router-dom"
import { AdminLogin, Login } from "../auth";
import { Admin, BikeList, RegisterGuard } from "../bikeMainPage";
import { useAuthStore } from "../hooks";

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
          <Route path='/list' element={<BikeList />} />

        </>
      ) : status === 'admin' ? (
        <>
          <Route path='/administracion' element={<Admin />} />
          <Route path='/*' element={<Navigate to="/administracion" />} />
          <Route path='/list' element={<BikeList />} />

        </>
      ) : null}
     
    </Routes>
  );
}
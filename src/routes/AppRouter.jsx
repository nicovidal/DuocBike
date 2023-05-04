import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../auth";
import { RegisterGuard } from "../bikeMainPage";
import { useAuthStore } from "../hooks";
/* import { Admin } from "../bikeMainPage/pages/Admin"; */


export const AppRouter = () => {

  const {status} = useAuthStore();

 if (status === 'checking') {
    return (
      <h3>Cargando...</h3>
    )

  } 

  return (
    <Routes>
      {
        (status === 'not-authenticated')
          //si no estoy autenticado
          ? (<>
                <Route path='/auth/*' element={<Login />} />
                <Route path='/*' element={<Navigate to="/auth/login" />} />
            </>
            )

          : (
              <>
                <Route path='/' element={<RegisterGuard />} />
                <Route path='/*' element={<Navigate to="/" />} />              
              </>
            )
      }

      {/*         {
            (authStatus==='authenticatedAdmin')
            ? 
            :

        }  */}

      {/* <Route path='/admin/' element={<Admin />} /> */}
      {/* <Route path='/auth/*' element={<Login/>}/>  */}
      
    </Routes>
  )
}

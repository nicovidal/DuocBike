import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../auth";
import { RegisterGuard } from "../bikeMainPage";

export const AppRouter = () => {

    const authStatus='not-authenticated';

  return (
    <Routes>
       {
            (authStatus==='not-authenticated')
            ? <Route path='/auth/*' element={<Login/>}/>
            :<Route path='/*' element={<RegisterGuard/>}/>
        } 

        
        
        <Route path='/*' element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}

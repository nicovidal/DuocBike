import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../auth";
 import { RegisterGuard } from "../bikeMainPage"; 
import { Admin } from "../bikeMainPage/pages/Admin";

export const AppRouter = () => {

    const authStatus='authenticatedAdmin';

  return (
    <Routes>
        {
            (authStatus==='authenticated')
            ? <Route path='/auth/*' element={<Login/>}/>
            :<Route path='/*' element={<RegisterGuard/>}/>
        } 
        
        {
            (authStatus==='authenticatedAdmin')
            ? <Route path='/admin/' element={<Admin/>}/>
            :<Route path='/auth/*' element={<Login/>}/>

        }

        
        
        <Route path='/*' element={<Navigate to="/auth/login"/>}/>
    </Routes>
  )
}

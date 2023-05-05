import { NavLink } from "react-router-dom"
import { useAuthStore } from "../../hooks";


export const NavBarAdmin = () => {


  const  {startLogout,user}=useAuthStore();
    return (
        <div className="navbar navbar-light bg-light mb-4 px-4">
          <span className="navbar-brand">
          <i className="fa-solid fa-person-military-pointing"></i>
          {user.name}
          </span>
          <div className="navbar-nav">
          <a className="nav-item nav-link active" href="">Registro Guardia<span className="sr-only">(current)</span></a>
          </div>
          <NavLink to="/auth">
            Gestion
          </NavLink>
    
          <button className="btn btn-outline-danger"onClick={startLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Salir</span>
          </button>
        </div>
      )
}

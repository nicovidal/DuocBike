import { NavLink } from "react-router-dom";
import { useAuthStore } from "../../hooks"



export const Navbar = () => {

  const  {startLogout,user}=useAuthStore();

  return (
    <div className="navbar navbar-light bg-light mb-4 px-4">
      <span className="navbar-brand">
      <i className="fa-solid fa-person-military-pointing"></i>
      &nbsp;
      {user.name}
      </span>
      <div className="navbar-nav">
      <NavLink to='/'>
        Registrar
      </NavLink>
      </div>
      <NavLink to='/list'>
        Lista
      </NavLink>

      <button className="btn btn-outline-danger"
        onClick={startLogout}>
        <i className="fas fa-sign-out-alt"></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  )
}

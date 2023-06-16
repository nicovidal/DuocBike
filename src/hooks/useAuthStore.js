import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import bikeApi from "../api/bikeApi";
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLoginAdmin,
  onLogout,
} from "../store/auth/authSlice";
import Swal from "sweetalert2";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const checkLocalStorageToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      // El usuario está autenticado, realiza las acciones necesarias
      dispatch(onLogin({ name: localStorage.getItem("usuario"), uid: "dummy-uid" }));
    } else {
      // El usuario no está autenticado, redirige a la página de inicio de sesión
      dispatch(onLogout());
    }
  };

  useEffect(() => {
    checkLocalStorageToken();
  }, []);

  const startLogin = async ({ guardUser, guardPassword }) => {
    dispatch(onChecking());

    try {
      const { data } = await bikeApi.post("/auth", { guardUser, guardPassword });
      localStorage.setItem("usuario", data.name);
      localStorage.setItem("token", "el-token-de-autenticacion");
      dispatch(onLogin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout("Credenciales Incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startLoginAdmin = async ({ adminUser, adminPassword }) => {
    dispatch(onChecking());

    try {
      const { data } = await bikeApi.post("/auth/adminLogin", {
        adminUser,
        adminPassword,
      });
      localStorage.setItem("usuario", data.name);
      localStorage.setItem("token", "el-token-de-autenticacion");
      dispatch(onLoginAdmin({ name: data.name, uid: data.uid }));
    } catch (error) {
      dispatch(onLogout("Credenciales Incorrectas"));
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startRegisterGuard = async ({ guardName, guardUser, guardPassword }) => {
    try {
      await bikeApi.post("/auth/newg", { guardName, guardUser, guardPassword });
    } catch (error) {
      Swal.fire("Error", "Registro invalido", "error");
    }
  };

  const startRegisterAlumno = async ({
    registerName,
    registerRut,
    registerCarrer,
    registerBrand,
    registerColor,
    registerID,
  }) => {
    try {
      const { data } = await bikeApi.post("/auth/newa", {
        registerName,
        registerRut,
        registerCarrer,
        registerBrand,
        registerColor,
        registerID,
      });
      localStorage.setItem("usuario", data.name);
      localStorage.setItem("token", "el-token-de-autenticacion");
    } catch (error) {
      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const startLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("usuario");
    dispatch(onLogout());
  };

  return {
    status,
    user,
    errorMessage,
    startLogin,
    startRegisterGuard,
    startLogout,
    startRegisterAlumno,
    startLoginAdmin,
  };
};

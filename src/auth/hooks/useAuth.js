import { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import { loginReducer } from "../reducer/loginReducer";
import Swal from "sweetalert2";

const initialLogin = JSON.parse(sessionStorage.getItem("login")) || {
  isAuth: false,
  isAdmin: false,
  user: undefined,
};

export const useAuth = () => {
  const [login, dispatch] = useReducer(loginReducer, initialLogin);
  const navigate = useNavigate();

  const handlerLogin = async ({ username, password }) => {
    try {
      const response = await loginUser({ username, password });
      console.log(response);
      const token = response.data.jwt;
      console.log("prueba token: ", token);
      const claims = JSON.parse(window.atob(token.split(".")[1])); //decodificacion del token
      console.log(claims);
      const user = { username: claims.sub };

      dispatch({
        type: "login",
        payload: { user, isAdmin: claims.isAdmin },
      });
      sessionStorage.setItem(
        "login",
        JSON.stringify({
          isAuth: true,
          isAdmin: claims.isAdmin,
          user, //objeto
        })
      );
      console.log("nnn");
      sessionStorage.setItem("token", `Bearer ${token}`);
      console.log("Token en sessionStorage:", sessionStorage.getItem("token"));
      navigate("/listado");
      console.log("hola");
    } catch (error) {
      if (error.response?.status === 401) {
        Swal.fire("Error Login", "username o password invalidos", "error");
      } else if (error.response?.status === 403) {
        Swal.fire("Error Login", "No tiene acceso al recurso", "error");
      } else {
        throw error;
      }
    }
  };

  const handlerLogout = () => {
    dispatch({
      type: "logout",
    });
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("login");
    //sessionStorage.clear;
  };
  return {
    login,
    handlerLogin,
    handlerLogout,
  };
};

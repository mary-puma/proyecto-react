import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";

const initialLoginForm = {
  username: "",
  password: "",
};

export const LoginPage = () => {
  const { handlerLogin, login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      Swal.fire("Los campos no pueden estar vacíos");
      return;
    }

    setIsLoading(true); // Muestra el mensaje de carga

    try {
      await handlerLogin({ username, password });
    } catch (error) {
      setIsLoading(false); // Detiene la carga si hay un error
    }
  };

  // Ya no es necesario este useEffect ya que la redirección está manejada por el hook `useAuth`
  // useEffect(() => {
  //   if (login.isAuth) {
  //     setIsLoading(false); // Detiene el mensaje de carga después de redirigir
  //   }
  // }, [login.isAuth]);

  const handleRegisterRedirect = () => {
    navigate("/register");
  };

  return (
    <>
      <form className="pt-5 flex-grow-1" onSubmit={submitHandler}>
        <div className="mb-3 d-flex justify-content-center">
          <label className="col-sm-4 col-form-label ">
            Email
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              name="username"
              value={username}
              onChange={onInputChange}
            />
          </label>
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <label className="col-sm-4 col-form-label">
            Password
            <input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onInputChange}
            />
          </label>
        </div>
        <div className="mb-3 d-flex justify-content-center">
          <button type="submit" className="btn btn-primary ">
            Iniciar sesión
          </button>
          {/* Botón de registrarse */}
          <button
            type="button"
            className="btn btn-secondary mx-2"
            onClick={handleRegisterRedirect}
          >
            Crear una cuenta
          </button>
        </div>
      </form>

      {/* Mostrar mensaje de carga si está en proceso de login */}
      {isLoading && (
        <div className="d-flex justify-content-center align-items-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
          <p className="ms-2">Estamos validando tus datos...</p>
        </div>
      )}
    </>
  );
};

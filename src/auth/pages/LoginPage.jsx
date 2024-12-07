import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const initialLoginForm = {
  username: "",
  password: "",
};

export const LoginPage = () => {
  console.log("loginPage");
  const navigate = useNavigate(); // Inicializa el hook para la redirección
  const { handlerLogin } = useContext(AuthContext);

  const [loginForm, setLoginForm] = useState(initialLoginForm);
  const { username, password } = loginForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setLoginForm({
      ...loginForm,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (username === "" || password === "") {
      Swal.fire("Los campos no pueden estar vacios");
      return;
    }
    handlerLogin({ username, password });
    console.log("loginpagehandler");

    setLoginForm(initialLoginForm);
  };

  // Función para redirigir a la página de registro
  const handleRegisterRedirect = () => {
    navigate("/register"); // Ruta donde está tu página de registro
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
    </>
  );
};

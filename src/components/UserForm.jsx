import { useEffect, useState } from "react";
import { useContext } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../auth/context/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

/*export const UserForm = () => {
  const { initialUserForm, handlerAddUser } = useContext(UserContext);

  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, password, email } = userForm;

  useEffect(() => {
    if (initialUserForm) {
      setUserForm(initialUserForm);
    }
  }, [initialUserForm]);

  const onInputChange = ({ target }) => {
    // console.log(target.value)
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (!username || !password || !email) {
      Swal.fire(
        "Error de validacion",
        "Debe completar los campos del formulario!",
        "error"
      );

      return;
    }
    if (!email.includes("@")) {
      Swal.fire(
        "Error de validacion email",
        "El email debe ser valido, incluir un @!",
        "error"
      );
      return;
    }
    // console.log(userForm);

    // guardar el user form en el listado de usuarios
    handlerAddUser(userForm);
    setUserForm(initialUserForm);
  };

  return (
    <form className="pt-5" onSubmit={onSubmit}>
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
          Registrarse
        </button>
      </div>
    </form>
  );
};*/

/*export const UserForm = () => {
  const context = useContext(UserContext);
  console.log("User form");

  // Verificación de errores en el contexto
  if (!context) {
    console.error("UserContext no está configurado correctamente.");
  }

  const { initialUserForm = {}, handlerAddUser } = context || {}; // Valores predeterminados

  // Hooks (llamados siempre, sin condicionales)
  const [userForm, setUserForm] = useState(initialUserForm);

  useEffect(() => {
    setUserForm(initialUserForm); // Siempre se ejecuta el efecto
  }, [initialUserForm]);

  const { username = "", password = "", email = "" } = userForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // Validaciones
    if (!username || !password || !email) {
      Swal.fire(
        "Error de validación",
        "Todos los campos son obligatorios.",
        "error"
      );
      return;
    }
    if (!email.includes("@")) {
      Swal.fire("Error de validación", "El email debe ser válido.", "error");
      return;
    }

    // Guardar usuario y reiniciar formulario
    handlerAddUser(userForm);
    setUserForm(initialUserForm);

    Swal.fire("Éxito", "Usuario registrado correctamente.", "success");
  };

  return (
    <form className="pt-5" onSubmit={onSubmit}>
      <div className="mb-3 d-flex justify-content-center">
        <label className="col-sm-4 col-form-label">
          Email
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={onInputChange}
            required
          />
        </label>
      </div>
      <div className="mb-3 d-flex justify-content-center">
        <label className="col-sm-4 col-form-label">
          Nombre de Usuario
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={onInputChange}
            required
          />
        </label>
      </div>
      <div className="mb-3 d-flex justify-content-center">
        <label className="col-sm-4 col-form-label">
          Contraseña
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onInputChange}
            required
          />
        </label>
      </div>
      <div className="mb-3 d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
      </div>
    </form>
  );
};*/

export const UserForm = () => {
  const context = useContext(UserContext);
  console.log("User form");
  const navigate = useNavigate(); // Inicializa el hook para la redirección

  if (!context) {
    console.error("UserContext no está configurado correctamente.");
  }

  const { initialUserForm = {} } = context || {};

  const [userForm, setUserForm] = useState(initialUserForm);

  useEffect(() => {
    setUserForm(initialUserForm);
  }, [initialUserForm]);

  const { firstName = "", lastName = "", password = "", email = "" } = userForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // Validaciones
    if (!lastName || !firstName || !password || !email) {
      Swal.fire(
        "Error de validación",
        "Todos los campos son obligatorios.",
        "error"
      );
      return;
    }
    if (!email.includes("@")) {
      Swal.fire("Error de validación", "El email debe ser válido.", "error");
      return;
    }

    try {
      // Petición POST al servidor
      const response = await axios.post(
        "https://registro-login.onrender.com/auth/register",
        {
          lastName,
          firstName,
          password,
          email,
        }
      );

      // Manejo de éxito
      Swal.fire("Éxito", "Usuario registrado correctamente.", "success");
      console.log("Response data:", response.data);

      // Reiniciar el formulario
      setUserForm(initialUserForm);
    } catch (error) {
      // Manejo de errores
      Swal.fire(
        "Error",
        error.response?.data?.message || "Hubo un problema con el registro.",
        "error"
      );
      console.error("Error en la solicitud:", error);
    }
  };
  const handleLoginRedirect = () => {
    navigate("/login"); // Ruta donde está tu página de registro
  };

  return (
    <form className="pt-5" onSubmit={onSubmit}>
      <div className="mb-3 d-flex justify-content-center">
        <label className="col-sm-4 col-form-label">
          Email
          <input
            type="email"
            className="form-control"
            name="email"
            value={email}
            onChange={onInputChange}
            required
          />
        </label>
      </div>
      <div className="mb-3 d-flex justify-content-center">
        <label className="col-sm-4 col-form-label">
          Nombre
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={firstName}
            onChange={onInputChange}
            required
          />
        </label>
      </div>
      <div className="mb-3 d-flex justify-content-center">
        <label className="col-sm-4 col-form-label">
          Apellido
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={lastName}
            onChange={onInputChange}
            required
          />
        </label>
      </div>
      <div className="mb-3 d-flex justify-content-center">
        <label className="col-sm-4 col-form-label">
          Contraseña
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={onInputChange}
            required
          />
        </label>
      </div>
      <div className="mb-3 d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">
          Registrarse
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={handleLoginRedirect}
        >
          Iniciar sesion
        </button>
      </div>
    </form>
  );
};

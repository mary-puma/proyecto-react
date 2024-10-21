import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const initialLoginForm = {
  username: "",
  password: "",
};

export const LoginPage = () => {
  console.log("loginPage");
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
  return (
    <>
      <form className="pt-5" onSubmit={submitHandler}>
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
            Ingresar
          </button>
        </div>
      </form>
    </>
  );
};

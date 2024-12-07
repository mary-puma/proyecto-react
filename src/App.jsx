//librerias
import { Routes, Route, Navigate } from "react-router-dom";

//componentes
//import Login from './components/Login';

//estilos
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/footer.css";
import { LoginPage } from "./auth/pages/LoginPage";
import { RegisterPage } from "./components/RegisterPage";
import { UserRoutes } from "./routes/UserRoutes";
import { AuthContext } from "./auth/context/AuthContext";
import { useContext } from "react";
import { UserProvider } from "./auth/context/UserProvider";
import Footer from "./components/Footer";

export const App = () => {
  const { login } = useContext(AuthContext);
  console.log("app");
  console.log(login.isAuth);

  return (
    <>
      <UserProvider>
        <Routes>
          {login.isAuth ? (
            <Route path="/*" element={<UserRoutes />} />
          ) : (
            <>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="*" element={<Navigate to="/login" />} />{" "}
              {/* Redirigir si no está autenticado */}
            </>
          )}
        </Routes>
      </UserProvider>
      <Footer />
    </>
  );
};

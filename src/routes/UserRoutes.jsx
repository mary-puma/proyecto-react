import { Navigate, Route, Routes } from "react-router-dom";
import { Listado } from "../components/Listado";
import Favoritos from "../components/Favoritos";
import Header from "../components/Header";
import { RegisterPage } from "../components/RegisterPage";
import { UserProvider } from "../auth/context/UserProvider";

//import {useEffect, useState } from "react";
import { MoviesProvider } from "../context/MoviesProvider";

export const UserRoutes = () => {
  return (
    <>
      <UserProvider>
        <MoviesProvider>
          <Header />
          <Routes>
            <Route path="listado" element={<Listado />} />
            <Route
              path="favoritos"
              element={<Favoritos />} // Agrega la ruta para Favoritos
            />
            <Route path="register" element={<RegisterPage />} />

            <Route path="/" element={<Navigate to="/listado" />} />
          </Routes>
        </MoviesProvider>
      </UserProvider>
    </>
  );
};

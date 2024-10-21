import { Navigate, Route, Routes } from "react-router-dom";
import { Listado } from "../components/Listado";
import Favoritos from "../components/Favoritos";
import Header from "../components/Header";
//import {useEffect, useState } from "react";
import { MoviesProvider } from "../context/MoviesProvider";

export const UserRoutes = () => {
  return (
    <>
      <MoviesProvider>
        <Header />
        <Routes>
          <Route path="listado" element={<Listado />} />
          <Route
            path="favoritos"
            element={<Favoritos />} // Agrega la ruta para Favoritos
          />

          <Route path="/" element={<Navigate to="/listado" />} />
        </Routes>
      </MoviesProvider>
    </>
  );
};

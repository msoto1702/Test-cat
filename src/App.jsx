import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardNoticias from "./pages/CardNoticias";
import Contraseña from "./pages/Contraseña";
import LoginSreen from "./pages/LoginSreen";
import RegScreen from "./pages/RegScreen";
import "./css/styles.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginSreen />} />
        <Route path="/reg" element={<RegScreen />} />
        <Route path="/noticias" element={<CardNoticias />} />
        <Route path="/password" element={<Contraseña />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

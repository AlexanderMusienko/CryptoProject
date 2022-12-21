import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

import "./styles/style.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main-page/*" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;

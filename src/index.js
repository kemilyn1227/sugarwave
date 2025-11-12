import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { AuthProvider } from "./components/Login/authContext";
import ProtectedRoute from "./components/Login/protectedRoute";

import NavBar from "./components/navBar";
import Home from "./components/p1/page1";
import Cardapio from "./components/cardapio/Cardapio";
import QuemSomos from "./components/quemSomos/apresentacao";
import Login from "./components/Login/login";
import Footer from "./components/Footer"

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
    < HashRouter>
      <Routes>

        {/* Página de login sempre acessível */}
        <Route path="/login" element={<Login />} />

        {/* Todas as páginas abaixo são protegidas */}
        <Route element={<ProtectedRoute/>}>

        <Route path="/" element={
          <>
          <NavBar/>
          <Home/>
          <Footer/>
          </>
        }
        />

        <Route 
        path="/cardapio"
        element={
          <>
          <NavBar/>
          <Cardapio/>
          <Footer/>
          

          </>
        }/>

        <Route
        path="/quem-somos"
        element={
          <>
          <NavBar/>
          <QuemSomos/>
          <Footer className='fixed-bottom'/>
          </>
        }
        />
        </Route>
      </Routes>
    </ HashRouter>
  </AuthProvider>
);

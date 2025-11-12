// src/components/Login/Login.jsx
import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useAuth } from "./authContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Login = () => {


useEffect(() => {
  if (localStorage.getItem("user")) {
    navigate("/");
  }
}, []);
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    const user = { token };
    
    await loginWithGoogle(user); // garante que o contexto atualize
    navigate("/"); // redireciona para a home protegida
  };

  return (
    <GoogleOAuthProvider clientId="555028215632-q5f1g33qphn13elddr84n81jjcgqct7d.apps.googleusercontent.com">
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h2 className="mb-4">🍯 Entrar com o Google</h2>
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={() => console.log("Erro ao fazer login")}
        />
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;

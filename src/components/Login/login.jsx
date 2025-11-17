// src/components/Login/Login.jsx
import React, { useEffect } from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useAuth } from "./authContext";
import { useNavigate, useLocation } from "react-router-dom";

const redirectUri = "https://kemilyn1227.github.io/sugarwave";

const Login = () => {
  const { loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // 🔥 Página que o usuário tentou acessar antes de logar
  const destino = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate(destino, { replace: true });
    }
  }, []);

  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse.credential;
    const user = { token };

    await loginWithGoogle(user);

    // 🚀 Redirecionar para o destino original
    navigate(destino, { replace: true });
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

import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Button from "../../components/Button/Button";
import AuthService from "../../services/AuthService.js";
import "./Login.css";

const authService = new AuthService();

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await authService.signIn(email, password);
      navigate("/professor");
    } catch (error) {
      setError(loginErrorMessage(error.code));
    }
  };

  const loginErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "Email inválido";
      case "auth/wrong-password":
        return "Senha inválida";
      case "auth/missing-password":
        return "Faltou colocar a senha";
      default:
        return "Email ou senha inválido";
    }
  };

  useEffect(() => {
    const checkAutoLogin = async () => {
      const isUserLoggedIn = await authService.checkLogin();
      try {
        if (isUserLoggedIn) {
          navigate("/professor");
        }
      } catch (error) {
        console.error("Auto login error:", error);
      }
    };

    checkAutoLogin();
  }, [navigate]);

  return (
    <div className="login-container">
      <Nav />
      <div className="login-body">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Senha:</label>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button text="Logar" type="submit" />
            {error && <p className="error">{error}</p>}
          </form>
          <p>
            Não tem conta?{" "}
            <Link to="/cadastrar" className="link">
              Cadastre aqui
            </Link>
          </p>
        </div>
        <div className="login-image">
          <img src="/images/loginRegisterImage.png" alt="Login" />
        </div>
      </div>
    </div>
  );
}

export default Login;

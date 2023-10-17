import React, { useState } from "react";
import Nav from "../../components/nav/Nav";
import Button from "../../components/Button/Button";
import "./RegisterTeacher.css";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

function RegisterTeacher() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const signUp = (e) => {
    e.preventDefault();
    const auth = getAuth();
    if (name === "") {
      setError("Nome inválido");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential;
          console.log(user)
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(error);
          console.log(errorCode);
          console.log(errorMessage);

          switch (errorCode) {
            case "auth/invalid-email":
              setError("Email inválido");
              break;
            case "auth/missing-password":
              setError("Faltou colocar a senha");
              break;
            case "auth/invalid-login-credentials":
              setError("Email ou senha inválido");
              break;
            case "auth/email-already-in-use":
              setError("Email já está em uso");
              break;
            default:
              setError("Erro inesperado");
          }
        });
    }
  };

  return (
    <div className="register-teacher-container">
      <Nav />
      <div className="register-teacher-body">
        <div className="register-teacher-form">
          <h2>Cadastro de Professor</h2>
          <form onSubmit={signUp}>
            <div className="form-group">
              <label>Nome:</label>
              <input
                type="text"
                placeholder="Nome"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Senha:</label>
              <input
                type="password"
                placeholder="Senha"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button text="Cadastrar" type="submit" />
            {error ? <p className="error">{error}</p> : null}
          </form>
          <p>
            Já tem conta?{" "}
            <Link to="/login" className="link">
              Clique aqui
            </Link>
          </p>
        </div>
        <div className="register-teacher-image">
          <img
            src="/images/loginRegisterImage.png"
            alt="Cadastro de Professor"
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterTeacher;

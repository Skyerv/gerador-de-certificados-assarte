import React from "react";
import Nav from "../../components/nav/Nav";
import Button from "../../components/Button/Button";
import "./RegisterTeacher.css";
import { Link } from "react-router-dom";

function RegisterTeacher() {
  return (
    <div className="register-teacher-container">
      <Nav />
      <div className="register-teacher-body">
        <div className="register-teacher-form">
          <h2>Cadastro de Professor</h2>
          <form>
            <div className="form-group">
              <label>Nome:</label>
              <input type="text" placeholder="Nome" />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input type="email" placeholder="Email" />
            </div>
            <div className="form-group">
              <label>Senha:</label>
              <input type="password" placeholder="Senha" />
            </div>
            <Button text="Cadastrar" />
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

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Nav from "../../components/nav/Nav";
import Button from "../../components/Button/Button";
import "./RegisterTeacher.css";
import TeacherController from "../../controllers/TeacherController";
import Teacher from "../../entities/Teacher";

function RegisterTeacher() {
  const {
    name,
    setName,
    email,
    setEmail,
    handleAddTeacher,
    handleSignUpTeacher,
    teachers,
    fetchTeachers,
  } = TeacherController();

  useEffect(() => {
    const fetchData = async () => {
      await fetchTeachers();
    };
    fetchData();
  }, [fetchTeachers]);

  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Preencha todos os campos corretamente.");
      return;
    }

    if (!teachers.some((teacher) => teacher.email === email)) {
      setError("Esse email não foi cadastrado pelo administrador");
      return;
    }

    try {
      await handleSignUpTeacher(email, password);
      const teacher = new Teacher(name, email);
      await handleAddTeacher(teacher);
      navigate("/professor");
    } catch (error) {
      const errorCode = error.code;
      console.log(error);
      setError(registerTeacherErrorMessage(errorCode));
    }
  };

  const registerTeacherErrorMessage = (errorCode) => {
    switch (errorCode) {
      case "auth/invalid-email":
        return "Email inválido";
      case "auth/missing-password":
        return "Faltou colocar a senha";
      case "auth/email-already-in-use":
        return "Email já está em uso";
      default:
        return "Erro inesperado";
    }
  };

  return (
    <div className="register-teacher-container">
      <Nav />
      <div className="register-teacher-body">
        <div className="register-teacher-form">
          <h2>Cadastro de Professor</h2>
          <form onSubmit={handleSignUp}>
            <div className="form-group">
              <label>Nome:</label>
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button text="Cadastrar" type="submit" />
            {error && <p className="error">{error}</p>}
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

import React from "react";
import Nav from "../../components/nav/Nav";
import "./RegisterStudents.css";
import Button from "../../components/Button/Button";
import StudentTile from "../../components/studentTile/StudentTile";

function RegisterStudents() {
  return (
    <div className="register-students-container">
      <Nav />
      <div className="register-students-body">
        <div className="register-students-form">
          <h2>Cadastro de Alunos</h2>
          <form>
            <div className="form-group add-student-form">
              <span>Nome do aluno:</span>
              <input type="text" placeholder="Nome do aluno" />
              <Button text="Adicionar"/>
            </div>
            <div className="form-group search-student-form">
              <input type="text" placeholder="Pesquisar aluno" />
              <Button text="Buscar"/>
            </div>
          </form>
        </div>
        <StudentTile name="Rodrigo Edinael Silveira" />
        <StudentTile name="Rodrigo Edinael Silveira" />
        <StudentTile name="Rodrigo Edinael Silveira" />
        <StudentTile name="Rodrigo Edinael Silveira" />
        <StudentTile name="Rodrigo Edinael Silveira" />
        <StudentTile name="Rodrigo Edinael Silveira" />
        <StudentTile name="Rodrigo Edinael Silveira" />
      </div>
    </div>
  );
}

export default RegisterStudents;

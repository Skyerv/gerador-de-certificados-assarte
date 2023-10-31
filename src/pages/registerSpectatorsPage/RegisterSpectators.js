import React from "react";
import Nav from "../../components/nav/Nav";
import "./RegisterSpectators.css";
import Button from "../../components/Button/Button";
import SpectatorTile from "../../components/spectatorTile/SpectatorTile";
import StudentController from "../../controllers/StudentController";
import { useParams } from "react-router-dom";

function RegisterSpectators() {
  const {
    students,
    studentName,
    setStudentName,
    handleAddStudent,
    searchQuery,
    setSearchQuery,
    handleSearch,
  } = StudentController();

  const { presentationId } = useParams();

  function checkIfPresentationWatched(student) {
    return (
      student.watchedPresentations &&
      student.watchedPresentations.includes(presentationId)
    );
  }

  return (
    <div className="register-spectator">
      <Nav />
      <div className="register-spectator-container">
        <div className="register-spectator-form">
          <h2>Cadastro de Espectadores</h2>
          <form>
            <div className="form-group add-student-form">
              <span>Nome do espectador:</span>
              <input
                type="text"
                placeholder="Nome do espectador"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
              <Button text="Adicionar" onClick={handleAddStudent} />
            </div>
            <div className="form-group search-student-form">
              <input
                type="text"
                placeholder="Pesquisar espectador"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button text="Buscar" onClick={handleSearch} />
            </div>
          </form>
        </div>
        {students.map((student) => (
          <SpectatorTile
            key={student.id}
            student={student}
            presentationId={presentationId}
            isWatched={checkIfPresentationWatched(student)}
          />
        ))}
      </div>
    </div>
  );
}

export default RegisterSpectators;

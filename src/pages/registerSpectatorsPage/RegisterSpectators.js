import React, { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import "./RegisterSpectators.css";
import Button from "../../components/Button/Button";
import SpectatorTile from "../../components/spectatorTile/SpectatorTile";
import StudentController from "../../controllers/StudentController";
import { useParams } from "react-router-dom";
import EventController from "../../controllers/EventController";

function RegisterSpectators() {
  const {
    students,
    studentName,
    setStudentName,
    handleAddStudent,
    searchQuery,
    setSearchQuery,
    handleSearch,
    fetchStudents,
  } = StudentController();
  const [event, setEvent] = useState(null);
  const { getLastAddedEvent } = EventController();

  const { presentationId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const eventData = await getLastAddedEvent();
      setEvent(eventData);
      if (eventData && eventData.id) {
        await fetchStudents(eventData.id);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchStudents]);

  function checkIfPresentationWatched(student) {
    return (
      student.watchedPresentations &&
      student.watchedPresentations.includes(presentationId)
    );
  }

  async function handleAddStudentForm(e) {
    e.preventDefault();
    await handleAddStudent(event.id);
  }

  return (
    <div className="register-spectator">
      <Nav />
      <div className="register-spectator-container">
        <div className="register-spectator-form">
          <h2>Cadastro de Espectadores</h2>
          <form onSubmit={(e) => handleAddStudentForm(e)}>
            <div className="form-group add-student-form">
              <span>Nome do espectador:</span>
              <input
                required={true}
                type="text"
                placeholder="Nome do espectador"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
              <Button text="Adicionar" type="submit" />
            </div>
            <div className="form-group search-student-form">
              <input
                type="text"
                placeholder="Pesquisar espectador"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button text="Buscar" onClick={() => handleSearch(event.id)} />
            </div>
          </form>
        </div>
        {students.map((student) => (
          <SpectatorTile
            key={student.id}
            student={student}
            presentationId={presentationId}
            isWatched={checkIfPresentationWatched(student)}
            eventId={event.id}
          />
        ))}
      </div>
    </div>
  );
}

export default RegisterSpectators;

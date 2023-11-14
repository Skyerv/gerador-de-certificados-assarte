import Nav from "../../components/nav/Nav";
import "./RegisterStudents.css";
import Button from "../../components/Button/Button";
import StudentTile from "../../components/studentTile/StudentTile";
import StudentController from "../../controllers/StudentController";
import EventController from "../../controllers/EventController";
import { useEffect, useState } from "react";

function RegisterStudents() {
  const {
    studentName,
    setStudentName,
    students,
    searchQuery,
    setSearchQuery,
    handleAddStudent,
    handleDeleteStudent,
    handleEditStudent,
    handleSearch,
    fetchStudents,
  } = StudentController();

  const [event, setEvent] = useState(null);

  const { getLastAddedEvent } = EventController();

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

  function handAddStudentForm(e) {
    e.preventDefault();
    handleAddStudent(event.id);
  }

  return (
    <div className="register-students-container">
      <Nav />
      <div className="register-students-body">
        <div className="register-students-form">
          <h2>Cadastro de Alunos</h2>
          <form onSubmit={(e) => handAddStudentForm(e)}>
            <div className="form-group add-student-form">
              <span>Nome do aluno:</span>
              <input
                required={true}
                type="text"
                placeholder="Nome do aluno"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
              <Button text="Adicionar" type="submit" />
            </div>
            <div className="form-group search-student-form">
              <input
                type="text"
                placeholder="Pesquisar aluno"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button text="Buscar" onClick={() => handleSearch(event.id)} />
            </div>
          </form>
        </div>
        <div className="student-tiles-container">
          {students.map((student) => (
            <StudentTile
              key={student.id}
              id={student.id}
              name={student.name}
              onDelete={handleDeleteStudent}
              onEdit={handleEditStudent}
              eventId={event.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RegisterStudents;

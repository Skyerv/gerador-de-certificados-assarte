import Nav from "../../components/nav/Nav";
import "./RegisterStudents.css";
import Button from "../../components/Button/Button";
import StudentTile from "../../components/studentTile/StudentTile";
import StudentController from "../../controllers/StudentController";

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
  } = StudentController();

  return (
    <div className="register-students-container">
      <Nav />
      <div className="register-students-body">
        <div className="register-students-form">
          <h2>Cadastro de Alunos</h2>
          <form>
            <div className="form-group add-student-form">
              <span>Nome do aluno:</span>
              <input
                type="text"
                placeholder="Nome do aluno"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
              <Button text="Adicionar" onClick={handleAddStudent} />
            </div>
            <div className="form-group search-student-form">
              <input
                type="text"
                placeholder="Pesquisar aluno"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button text="Buscar" onClick={handleSearch} />
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
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RegisterStudents;

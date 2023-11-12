import Nav from "../../components/nav/Nav";
import "../registerStudentsPage/RegisterStudents.css";
import Button from "../../components/Button/Button";
import StudentTile from "../../components/studentTile/StudentTile";
import TeacherController from "../../controllers/TeacherController";
import { useEffect } from "react";
import AdminSidebar from "../../components/adminSideBar/AdminSideBar";

function AdminTeacher() {
  const {
    email,
    setEmail,
    handleRegisterTeacher,
    teachers,
    fetchTeachers,
    handleDeleteTeacher,
    handleEditTeacher,
  } = TeacherController();

  useEffect(() => {
    const fetchData = async () => {
      await fetchTeachers();
    };
    fetchData();
  }, [fetchTeachers]);

  return (
    <div className="register-students-container">
      <Nav />
      <AdminSidebar />
      <div className="register-students-body">
        <div className="register-students-form">
          <h2>Cadastro de emails de professores</h2>
          <form>
            <div className="form-group add-student-form">
              <span>Email do professor:</span>
              <input
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                text="Adicionar"
                onClick={() => handleRegisterTeacher()}
              />
            </div>
          </form>
        </div>
        <div className="student-tiles-container">
          {teachers.map((teacher) => (
            <StudentTile
              key={teacher.id}
              id={teacher.id}
              name={teacher.email}
              onDelete={handleDeleteTeacher}
              onEdit={handleEditTeacher}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminTeacher;

import { useCallback, useState } from "react";
import TeacherRepository from "../repositories/teacherRepository";
import AuthService from "../services/AuthService";

const TeacherController = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [teachers, setTeachers] = useState([]);
  const teacherRepo = new TeacherRepository();
  const authService = new AuthService();

  const handleAddTeacher = async (teacher) => {
    await teacherRepo.addTeacher(teacher);
    setName("");
    setEmail("");
  };

  const handleRegisterTeacher = async () => {
    await teacherRepo.registerTeacher(email);
    setEmail("");
    fetchTeachers();
  };

  const fetchTeachers = useCallback(async () => {
    const teacherRepo = new TeacherRepository();
    const allTeachers = await teacherRepo.fetchTeacher();

    setTeachers(allTeachers);
  }, []);

  const handleDeleteTeacher = async (teacherId) => {
    const teacherRepo = new TeacherRepository();
    await teacherRepo.deleteTeacher(teacherId);
    fetchTeachers();
  };

  const handleEditTeacher = (teacherId, currentEmail) => {
    const newEmail = prompt("Edit teacher name:", currentEmail);
    if (newEmail !== null) {
      const teacherRepo = new TeacherRepository();
      teacherRepo.updateTeacher(teacherId, { email: newEmail });
      fetchTeachers();
    }
  };

  const handleSignUpTeacher = async (email, password) => {
    await authService.signUp(email, password);
    setName("");
    setEmail("");
  };

  const handleSignInTeacher = async (email, password) => {
    await authService.signIn(email, password);
  };

  const handleSignOutTeacher = async () => {
    await authService.signOut();
  };

  const handleAutoLoginTeacher = async () => {
    return await authService.checkLogin();
  };

  return {
    name,
    setName,
    email,
    setEmail,
    handleAddTeacher,
    handleSignUpTeacher,
    handleSignInTeacher,
    handleSignOutTeacher,
    handleAutoLoginTeacher,
    handleRegisterTeacher,
    fetchTeachers,
    handleDeleteTeacher,
    handleEditTeacher,
    teachers,
    setTeachers,
  };
};

export default TeacherController;

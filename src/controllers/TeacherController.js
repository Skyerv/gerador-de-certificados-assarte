import { useState } from "react";
import TeacherRepository from "../repositories/teacherRepository";
import AuthService from "../services/AuthService";

const TeacherController = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const teacherRepo = new TeacherRepository();
  const authService = new AuthService();

  const handleAddTeacher = async (teacher) => {
    await teacherRepo.addTeacher(teacher);
    setName("");
    setEmail("");
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
  };
};

export default TeacherController;

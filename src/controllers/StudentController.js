import { useState, useEffect, useCallback } from "react";
import StudentRepository from "../repositories/studentRepository";

const StudentController = () => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [watchedPresentations, setWatchedPresentations] = useState([]);

  const handleAddStudent = async () => {
    const studentRepo = new StudentRepository();
    await studentRepo.addStudent(studentName);
    setStudentName("");
    fetchStudents();
  };

  const handleDeleteStudent = async (studentId) => {
    const studentRepo = new StudentRepository();
    await studentRepo.deleteStudent(studentId);
    fetchStudents();
  };

  const handleEditStudent = (studentId, currentName) => {
    const newName = prompt("Edit student name:", currentName);
    if (newName !== null) {
      const studentRepo = new StudentRepository();
      studentRepo.updateStudent(studentId, { name: newName });
      fetchStudents();
    }
  };

  const fetchStudents = useCallback(async () => {
    const studentRepo = new StudentRepository();
    const allStudents = await studentRepo.getAllStudents();

    const filteredStudents = allStudents.filter((student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setStudents(filteredStudents);
  }, [searchQuery]);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  const handleSearch = () => {
    fetchStudents();
  };

  const registerWatchedPresentations = async (studentId, presentationId) => {
    const studentRepo = new StudentRepository();
    await studentRepo.registerWatchedPresentations(studentId, presentationId);
  };

  const removeWatchedPresentation = async (studentId, presentationId) => {
    const studentRepo = new StudentRepository();
    await studentRepo.removeWatchedPresentation(studentId, presentationId);
  };

  return {
    studentName,
    setStudentName,
    students,
    searchQuery,
    setSearchQuery,
    handleAddStudent,
    handleDeleteStudent,
    handleEditStudent,
    handleSearch,
    registerWatchedPresentations,
    removeWatchedPresentation,
    watchedPresentations,
    setWatchedPresentations,
  };
};

export default StudentController;

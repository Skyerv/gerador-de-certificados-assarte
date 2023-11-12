import { useState, useCallback } from "react";
import StudentRepository from "../repositories/studentRepository";

const StudentController = () => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [watchedPresentations, setWatchedPresentations] = useState([]);

  const handleAddStudent = async (eventId) => {
    const studentRepo = new StudentRepository();
    await studentRepo.addStudent(studentName, eventId);
    setStudentName("");
    fetchStudents(eventId);
  };

  const handleDeleteStudent = async (studentId, eventId) => {
    const studentRepo = new StudentRepository();
    await studentRepo.deleteStudent(studentId, eventId);
    fetchStudents(eventId);
  };

  const handleEditStudent = (studentId, currentName, eventId) => {
    const newName = prompt("Edit student name:", currentName);
    if (newName !== null) {
      const studentRepo = new StudentRepository();
      studentRepo.updateStudent(studentId, { name: newName }, eventId);
      fetchStudents(eventId);
    }
  };

  const fetchStudents = useCallback(
    async (eventId) => {
      const studentRepo = new StudentRepository();
      const allStudents = await studentRepo.getAllStudents(eventId);

      const filteredStudents = allStudents.filter((student) =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setStudents(filteredStudents);
    },
    [searchQuery]
  );

  const handleSearch = (eventId) => {
    fetchStudents(eventId);
  };

  const registerWatchedPresentations = async (
    studentId,
    presentationId,
    eventId
  ) => {
    const studentRepo = new StudentRepository();
    await studentRepo.registerWatchedPresentations(
      studentId,
      presentationId,
      eventId
    );
  };

  const removeWatchedPresentation = async (
    studentId,
    presentationId,
    eventId
  ) => {
    const studentRepo = new StudentRepository();
    await studentRepo.removeWatchedPresentation(
      studentId,
      presentationId,
      eventId
    );
  };

  const getAllStudentsFromAllEvents = async () => {
    const studentRepo = new StudentRepository();
    return await studentRepo.getAllStudentsFromAllEvents();
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
    fetchStudents,
    getAllStudentsFromAllEvents,
  };
};

export default StudentController;

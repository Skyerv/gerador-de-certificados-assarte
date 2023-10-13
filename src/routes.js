import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/homePage/Home";
import Login from "./pages/loginPage/Login";
import RegisterTeacher from "./pages/registerTeacherPage/RegisterTeacher";
import TeacherPage from "./pages/teacherPage/TeacherPage";
import RegisterPresentation from "./pages/registerPresentationPage/RegisterPresentation";
import Certificate from "./pages/certificatePage/Certificate";
import RegisterStudents from "./pages/registerStudentsPage/RegisterStudents";
import RegisterSpectators from "./pages/registerSpectatorsPage/RegisterSpectators";
import SearchCertificates from "./pages/searchCertificatesPage/SearchCertificates";

function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<RegisterTeacher />} />
        <Route path="/professor" element={<TeacherPage />} />
        <Route
          path="/cadastrar-apresentacao"
          element={<RegisterPresentation />}
        />
        <Route path="/certificado" element={<Certificate />} />
        <Route path="/cadastrar-alunos" element={<RegisterStudents />} />
        <Route
          path="/cadastrar-espectadores"
          element={<RegisterSpectators />}
        />
        <Route path="/procurar-certificados" element={<SearchCertificates />} />
      </Routes>
    </Router>
  );
}

export default routes;

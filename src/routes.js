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
import AdminInfo from "./pages/adminInfoPage/AdminInfo";
import ProtectedRoute from "./components/protectedRoute/protectedRoute";
import AdminTeacher from "./pages/adminRegisterTeacherPage/adminTeacher";

function routes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<RegisterTeacher />} />
        <Route path="/certificado" element={<Certificate />} />
        <Route path="/procurar-certificados" element={<SearchCertificates />} />
        <Route
          path="/professor"
          element={
            <ProtectedRoute>
              <TeacherPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cadastrar-apresentacao"
          element={
            <ProtectedRoute>
              <RegisterPresentation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/editar-apresentacao/:presentationId"
          element={
            <ProtectedRoute>
              <RegisterPresentation />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cadastrar-alunos"
          element={
            <ProtectedRoute>
              <RegisterStudents />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cadastrar-espectadores/:presentationId"
          element={
            <ProtectedRoute>
              <RegisterSpectators />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin-info"
          element={
            // <ProtectedRoute>
            <AdminInfo />
            // </ProtectedRoute>
          }
        />
        <Route
          path="/admin-gerenciar-professores"
          element={
            // <ProtectedRoute>
            <AdminTeacher />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default routes;

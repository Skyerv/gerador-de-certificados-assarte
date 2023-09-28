import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisterTeacher from './pages/RegisterTeacher';
import TeacherPage from './pages/TeacherPage';
import RegisterPresentation from './pages/RegisterPresentation';
import Certificate from './pages/Certificate';
import RegisterStudents from './pages/RegisterStudents';
import RegisterSpectators from './pages/RegisterSpectators';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/cadastrar" element={<RegisterTeacher/>} />
        <Route path="/professor" element={<TeacherPage/>} />
        <Route path="/registerPresentation" element={<RegisterPresentation/>} />
        <Route path="/certificate" element={<Certificate/>} />
        <Route path="/cadastrar-alunos" element={<RegisterStudents/>} />
        <Route path="/cadastrar-espectadores" element={<RegisterSpectators/>} />
      </Routes>
    </Router>
  );
}

export default App;
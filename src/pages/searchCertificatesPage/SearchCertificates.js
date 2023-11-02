import React from "react";
import Nav from "../../components/nav/Nav";
import "./SearchCertificates.css";
import Button from "../../components/Button/Button";
import CertificateTile from "../../components/certificateTile/CertificateTile";
import StudentController from "../../controllers/StudentController";
import { useNavigate } from "react-router-dom";

function SearchCertificates() {
  const { searchQuery, setSearchQuery, students } = StudentController();
  const navigate = useNavigate();

  const handleCertificateClick = (student) => {
    navigate("/certificado", { state: { student } });
  };
  return (
    <div className="search-certificates">
      <Nav />
      <div className="search-certificates-container">
        <h2>Procurar Certificado</h2>
        <div className="search-certificates-form">
          <form>
            <div className="form-group search-certificate-form">
              <input
                type="text"
                placeholder="Pesquisar por nome"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button text="Pesquisar" />
            </div>
          </form>
          <div className="text-hint">
            <span>Apenas clique em seu nome para baixar o certificado.</span>
          </div>
        </div>
        {students.map((student) => (
          <div key={student.id} onClick={() => handleCertificateClick(student)}>
            <CertificateTile name={student.name} theme="Sustentabilidade" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchCertificates;

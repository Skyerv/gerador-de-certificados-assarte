import React, { useEffect, useState } from "react";
import Nav from "../../components/nav/Nav";
import "./SearchCertificates.css";
import Button from "../../components/Button/Button";
import CertificateTile from "../../components/certificateTile/CertificateTile";
import StudentController from "../../controllers/StudentController";
import { useNavigate } from "react-router-dom";

function SearchCertificates() {
  const { searchQuery, setSearchQuery, getAllStudentsFromAllEvents } =
    StudentController();
  const navigate = useNavigate();
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const certificatesData = await getAllStudentsFromAllEvents();
      console.log(certificatesData);
      if (certificatesData) {
        setCertificates(certificatesData);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCertificateClick = (certificate) => {
    navigate("/certificado", { state: { certificate } });
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
        {certificates.map((certificate) => {
          if (certificate.watchedPresentations) {
            return (
              <div
                key={certificate.studentId}
                onClick={() => handleCertificateClick(certificate)}
              >
                <CertificateTile
                  name={certificate.name}
                  theme={certificate.eventTheme}
                />
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
}

export default SearchCertificates;

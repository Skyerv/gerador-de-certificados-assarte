import React from "react";
import Nav from "../../components/nav/Nav";
import "./SearchCertificates.css";
import Button from "../../components/Button/Button";
import StudentTile from "../../components/studentTile/StudentTile";

function SearchCertificates() {
  return (
    <div className="search-certificates">
      <Nav />
      <div className="search-certificates-container">
        <h2>Procurar Certificado</h2>
        <div className="search-certificates-form">
          <form>
            <div className="form-group search-certificate-form">
              <input type="text" placeholder="Pesquisar por nome" />
              <Button text="Pesquisar"/>
            </div>
          </form>
          <div className="text-hint">
            <span>Apenas clique em seu nome para baixar o certificado.</span>
          </div>
        </div>
        <StudentTile name="Rodrigo Edinael Silveira" />
        <StudentTile name="Rodrigo Edinael Silveira" />
        <StudentTile name="Rodrigo Edinael Silveira" />
        <StudentTile name="Rodrigo Edinael Silveira" />
        <StudentTile name="Rodrigo Edinael Silveira" />
        <StudentTile name="Rodrigo Edinael Silveira" />
        <StudentTile name="Rodrigo Edinael Silveira" />
      </div>
    </div>
  );
}

export default SearchCertificates;

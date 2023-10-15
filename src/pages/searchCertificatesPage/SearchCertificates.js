import React from "react";
import Nav from "../../components/nav/Nav";
import "./SearchCertificates.css";
import Button from "../../components/Button/Button";
import CertificateTile from "../../components/certificateTile/CertificateTile";

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
        <CertificateTile name="Rodrigo Edinael Silveira" theme="Sustentabilidade"/>
        <CertificateTile name="Rodrigo Edinael Silveira" theme="Artes"/>
        <CertificateTile name="Rodrigo Edinael Silveira" theme="Ecologia"/>
        <CertificateTile name="Rodrigo Edinael Silveira" theme="Sustentabilidade"/>
        <CertificateTile name="Rodrigo Edinael Silveira" theme="Sustentabilidade"/>
        <CertificateTile name="Rodrigo Edinael Silveira" theme="Sustentabilidade"/>
        <CertificateTile name="Rodrigo Edinael Silveira" theme="Sustentabilidade"/>
      </div>
    </div>
  );
}

export default SearchCertificates;

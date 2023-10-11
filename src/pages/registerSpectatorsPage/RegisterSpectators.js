import React from "react";
import Nav from "../../components/nav/Nav";
import "./RegisterSpectators.css";
import "../../components/spectatorTile/SpectatorTile.css";
import SpectatorTile from "../../components/spectatorTile/SpectatorTile";

function RegisterSpectators() {
  return (
    <div className="register-students">
      <Nav />
      <div className="register-students-container">
        <div className="register-students-form">
          <h2>Cadastro de Espectadores</h2>
          <form>
            <div className="form-group add-student-form">
              <span>Nome do espectador:</span>
              <input type="text" placeholder="Nome do espectador" />
              <button className="register-student-button">Adicionar</button>
            </div>
            <div className="form-group search-student-form">
              <input type="text" placeholder="Pesquisar espectador" />
              <button className="register-student-button">Buscar</button>
            </div>
          </form>
        </div>
        <SpectatorTile name="Rodrigo Edinael Silveira" />
        <SpectatorTile name="Rodrigo Edinael Silveira" />
        <SpectatorTile name="Rodrigo Edinael Silveira" />
        <SpectatorTile name="Rodrigo Edinael Silveira" />
        <SpectatorTile name="Rodrigo Edinael Silveira" />
        <SpectatorTile name="Rodrigo Edinael Silveira" />
        <SpectatorTile name="Rodrigo Edinael Silveira" />
      </div>
    </div>
  );
}

export default RegisterSpectators;

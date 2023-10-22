import React from "react";
import Nav from "../../components//nav/Nav";
import DateInput from "../../components/dateInput/DateInput";
import TimeInput from "../../components/timeInput/TimeInput";
import Button from "../../components/Button/Button";
import PresentationController from "../../controllers/PresentationController";

import "./RegisterPresentation.css";

function RegisterPresentation() {
  const {
    title,
    setTitle,
    day,
    setDay,
    startTime,
    setStartTime,
    endTime,
    setEndTime,
    presenterName,
    setPresenterName,
    responsibleName,
    setResponsibleName,
    handleAddPresentation,
  } = PresentationController();

  return (
    <div className="register-presentation-container">
      <Nav />
      <div className="register-presentation-body">
        <h2>Cadastro de Apresentação</h2>
        <form className="formContainer" >
          <div className="column">
            <div className="form-group">
              <label>Título:</label>
              <input
                type="text"
                placeholder="Título da apresentação"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Dia:</label>
              <DateInput value={day} onChange={setDay} />
            </div>
            <label>Horário:</label>
            <div className="time">
              <div className="form-group columnTime">
                <label>Inicial:</label>
                <TimeInput value={startTime} onChange={setStartTime} />
              </div>
              <div className="form-group columnTime">
                <label>Final:</label>
                <TimeInput value={endTime} onChange={setEndTime} />
              </div>
            </div>
          </div>
          <div className="column">
            <div className="form-group">
              <label>Nome do Apresentador:</label>
              <input
                type="text"
                placeholder="Nome do Apresentador"
                value={presenterName}
                onChange={(e) => setPresenterName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Nome do Responsável:</label>
              <input
                type="text"
                placeholder="Nome do Responsável"
                value={responsibleName}
                onChange={(e) => setResponsibleName(e.target.value)}
              />
            </div>
            <Button text="Cadastrar Apresentação" onClick={handleAddPresentation} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPresentation;

import React from "react";
import Nav from "../../components//nav/Nav";
import DateInput from "../../components/dateInput/DateInput";
import TimeInput from "../../components/timeInput/TimeInput";
import CustomButton from "../../components/customButtom/CustomButton";

import "./RegisterPresentation.css";

function RegisterPresentation() {
  return (
    <div className="registerPresentationContainer">
      <Nav />
      <div className="space"></div>
      <form className="formContainer">
        <div className="column">
          <div className="form-group">
            <label>Título:</label>
            <input type="text" placeholder="Título da apresentação" />
          </div>
          <div className="form-group">
            <label>Dia:</label>
            <DateInput />
          </div>
          <label>Horário:</label>
          <div className="time">
            <div className="form-group columnTime">
              <label>Inicial:</label>
              <TimeInput />
            </div>
            <div className="form-group columnTime">
              <label>Final:</label>
              <TimeInput />
            </div>
          </div>
        </div>
        <div className="column">
          <div className="form-group">
            <label>Nome do Apresentador:</label>
            <input type="text" placeholder="Nome do Apresentador" />
          </div>
          <div className="form-group">
            <label>Nome do Responsável:</label>
            <input type="text" placeholder="Nome do Responsável" />
          </div>
          <CustomButton text="Cadastrar Apresentação" />
        </div>
      </form>
    </div>
  );
}

export default RegisterPresentation;

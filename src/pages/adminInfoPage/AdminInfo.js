import React from "react";
import Nav from "../../components//nav/Nav";
import DateInput from "../../components/dateInput/DateInput";
import Button from "../../components/Button/Button";
import AdminSidebar from "../../components/adminSideBar/AdminSideBar";

import "./AdminInfo.css";

function AdminInfo() {
  return (
    <div className="event-information-container">
      <Nav />
      <AdminSidebar />
      <div className="event-information-body">
        <h2>Informações da Feira</h2>
        <form className="formContainer">
          <div className="column">
            <div className="form-group">
              <label>Tema:</label>
              <input type="text" placeholder="Tema" />
            </div>
            <div className="form-group">
              <label>Começa:</label>
              <DateInput />
            </div>
            <div className="form-group">
              <label>Termina:</label>
              <DateInput />
            </div>
            <div className="form-group">
              <label>Descrição:</label>
              <textarea name="Text1" cols="40" rows="5" />
            </div>
          </div>
          <div className="column">
            <div className="form-group">
              <label>Local:</label>
              <input type="text" placeholder="Local" />
            </div>
            <div className="form-group">
              <label>Fone:</label>
              <input type="text" placeholder="(00) 00000-0000" />
            </div>
            <Button text="Confirmar" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminInfo;

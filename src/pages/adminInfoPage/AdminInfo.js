import React from "react";
import Nav from "../../components//nav/Nav";
import DateInput from "../../components/dateInput/DateInput";
import Button from "../../components/Button/Button";
import AdminSidebar from "../../components/adminSideBar/AdminSideBar";

import "./AdminInfo.css";
import EventController from "../../controllers/EventController";

function AdminInfo() {
  const {
    theme,
    setTheme,
    startDay,
    setStartDay,
    endDay,
    setEndDay,
    description,
    setDescription,
    phone,
    setPhone,
    local,
    setLocal,
    add,
  } = EventController();

  const handleAddEventInfo = async (e) => {
    e.preventDefault();
    await add();
  };

  return (
    <div className="event-information-container">
      <Nav />
      <AdminSidebar />
      <div className="event-information-body">
        <h2>Informações da Feira</h2>
        <form className="formContainer" onSubmit={handleAddEventInfo}>
          <div className="column">
            <div className="form-group">
              <label>Tema:</label>
              <input
                type="text"
                placeholder="Tema"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Começa:</label>
              <DateInput value={startDay} onChange={setStartDay} />
            </div>
            <div className="form-group">
              <label>Termina:</label>
              <DateInput value={endDay} onChange={setEndDay} />
            </div>
            <div className="form-group">
              <label>Descrição:</label>
              <textarea
                name="Text1"
                cols="40"
                rows="5"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
          <div className="column">
            <div className="form-group">
              <label>Local:</label>
              <input
                type="text"
                placeholder="Local"
                value={local}
                onChange={(e) => setLocal(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Fone:</label>
              <input
                type="text"
                placeholder="(00) 00000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <Button text="Confirmar" type="submit" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminInfo;

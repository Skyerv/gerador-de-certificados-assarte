import Nav from "../../components//nav/Nav";
import DateInput from "../../components/dateInput/DateInput";
import TimeInput from "../../components/timeInput/TimeInput";
import Button from "../../components/Button/Button";
import PresentationController from "../../controllers/PresentationController";

import "./RegisterPresentation.css";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EventController from "../../controllers/EventController";

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
    handleEditPresentation,
    fetchPresentationById,
  } = PresentationController();
  const { getLastAddedEvent } = EventController();
  const [event, setEvent] = useState(null);

  const navigate = useNavigate();
  const { presentationId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const eventData = await getLastAddedEvent();
      setEvent(eventData);
      if (presentationId && eventData && eventData.id) {
        await fetchPresentationById(presentationId, eventData.id);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (presentationId) {
      await handleEditPresentation(presentationId, event.id);
      navigate("/professor");
    } else {
      handleAddPresentation(event.id);
    }
  };
  return (
    <div className="register-presentation-container">
      <Nav />
      <div className="register-presentation-body">
        <h2>
          {presentationId ? "Editar Apresentação" : "Cadastro de Apresentação"}
        </h2>
        <form className="formContainer" onSubmit={handleFormSubmit}>
          <div className="column">
            <div className="form-group">
              <label>Título:</label>
              <input
                required={true}
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
                required={true}
                type="text"
                placeholder="Nome do Apresentador"
                value={presenterName}
                onChange={(e) => setPresenterName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Nome do Responsável:</label>
              <input
                required={true}
                type="text"
                placeholder="Nome do Responsável"
                value={responsibleName}
                onChange={(e) => setResponsibleName(e.target.value)}
              />
            </div>
            <Button
              text={
                presentationId
                  ? "Editar Apresentação"
                  : "Cadastrar Apresentação"
              }
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPresentation;

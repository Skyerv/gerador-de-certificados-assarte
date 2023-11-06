import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Nav from "../../components/nav/Nav";
import PresentationCard from "../../components/presentationCard/PresentationCard";
import "./Home.css";
import PresentationController from "../../controllers/PresentationController";
import EventController from "../../controllers/EventController";
import { useEffect } from "react";

function Home() {
  const { presentations, fetchPresentations } = PresentationController();
  const { description, startDay, endDay, local, phone, getLastAddedEvent } =
    EventController();

  useEffect(() => {
    const fetchData = async () => {
      const event = await getLastAddedEvent();
      if (event && event.id) {
        fetchPresentations(event.id);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home-container">
      <Nav />
      <div className="home-body">
        <div className="button-container">
          <Link to="/procurar-certificados" className="button1">
            <Button text={"Pegar Certificados"} />
          </Link>
          <Link to="/login" className="button2">
            <Button text={"Sou Professor"} />
          </Link>
        </div>
        <p className="admin-description">{description}</p>
        <p className="admin-date-hour-informations">
          Venha participar, a feira ocorrerá dia: {startDay} até o dia: {endDay}
        </p>
        <p className="admin-local-information">
          <strong>Local:</strong> {local}
        </p>
        <p className="admin-phone-information">
          <strong>Fone:</strong> {phone}
        </p>

        <p>
          <strong>Apresentações:</strong>
        </p>
        {presentations.map((presentation) => (
          <PresentationCard
            key={presentation.id}
            title={presentation.title}
            date={presentation.day}
            initialHour={presentation.startTime}
            finalHour={presentation.endTime}
            responsible={presentation.responsible}
            presenter={presentation.presenter}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;

import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Nav from "../../components/nav/Nav";
import PresentationCard from "../../components/presentationCard/PresentationCard";
import "./Home.css";
import PresentationController from "../../controllers/PresentationController";

function Home() {
  const { presentations } = PresentationController();
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
        <p className="admin-description">
          Assarte - Associação do Excepcional de Ponta Grossa, Aqui vem a
          descrição colocado pelo admin.
        </p>
        <p className="admin-date-hour-informations">
          Venha participar, a feira ocorrerá dia: ../../2023, das 00:00 até as
          00:00
        </p>
        <p className="admin-local-information">
          <strong>Local:</strong>R. Pref. Brásílio Ribas, 775 - São José. Ponta
          Grossa - Parana, 84010-450
        </p>
        <p className="admin-phone-information">
          <strong>Fone:</strong> (42) 3224-9017
        </p>

        <p>
          <strong>Apresentações:</strong>
        </p>
        {presentations.map((presentation) => (
          <PresentationCard
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

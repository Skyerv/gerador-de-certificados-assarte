import { Link } from "react-router-dom";
import CustomButton from "../../components/customButtom/CustomButton";
import Nav from "../../components/nav/Nav";
import PresentationCard from "../../components/presentationCard/PresentationCard";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <Nav />
      <div className="button-container">
        <Link to="/procurar-certificados" className="button1">
          <CustomButton text={"Pegar Certificados"} />
        </Link>
        <div className="space" />
        <Link to="/login" className="button2">
          <CustomButton text={"Sou Professor"} />
        </Link>
      </div>

      <p className="informations">
        Venha participar, a feira ocorrerá dia: ../../2023, das 00:00 até as
        00:00
      </p>
      <p className="presentations">Apresentações:</p>

      <PresentationCard
        title="Titulo da Apresentação"
        date="04/07/2023"
        initialHour="13:00"
        finalHour="14:00"
        responsible="Francisco Da Silva"
        presenter="Francisco Da Silva"
      />
      <PresentationCard
        title="Titulo da Apresentação"
        date="04/07/2023"
        initialHour="13:00"
        finalHour="14:00"
        responsible="Francisco Da Silva"
        presenter="Francisco Da Silva"
      />
      <PresentationCard
        title="Titulo da Apresentação"
        date="04/07/2023"
        initialHour="13:00"
        finalHour="14:00"
        responsible="Francisco Da Silva"
        presenter="Francisco Da Silva"
      />
    </div>
  );
}

export default Home;

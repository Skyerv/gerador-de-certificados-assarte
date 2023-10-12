import Nav from "../../components/nav/Nav";
import Button from "../../components/Button/Button";
import "./TeacherPage.css";
import { Link } from "react-router-dom";
import PresentationCard from "../../components/presentationCard/PresentationCard";

function TeacherPage() {
  return (
    <div className="teacher-page-container">
      <Nav />
      <div className="teacher-page-body">
        <div className="teacher-page-body-buttons">
          <div className="buttons-column">
            <Link to="/registerPresentation">
              <Button text="Cadastrar Apresentação" />
            </Link>
            <Link to="/cadastrar-alunos">
              <Button text="Cadastrar Seus Alunos" />
            </Link>
          </div>

          <div className="logout-button">
            <Link to="/login">
              <Button text="Logout" color="red" />
            </Link>
          </div>
        </div>

        <Link to="/login">
          <PresentationCard
            title="Titulo da Apresentação"
            date="04/07/2023"
            initialHour="13:00"
            finalHour="14:00"
            responsible="Francisco Da Silva"
            presenter="Francisco Da Silva"
          />
        </Link>
        <Link to="/login">
          <PresentationCard
            title="Titulo da Apresentação"
            date="04/07/2023"
            initialHour="13:00"
            finalHour="14:00"
            responsible="Francisco Da Silva"
            presenter="Francisco Da Silva"
          />
        </Link>
      </div>
    </div>
  );
}

export default TeacherPage;

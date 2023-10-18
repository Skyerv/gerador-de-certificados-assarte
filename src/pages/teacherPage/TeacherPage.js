import Nav from "../../components/nav/Nav";
import Button from "../../components/Button/Button";
import "./TeacherPage.css";
import { Link, useNavigate } from "react-router-dom";
import PresentationCard from "../../components/presentationCard/PresentationCard";
import { getAuth, signOut } from "firebase/auth";

function TeacherPage() {
  const navigate = useNavigate();
  const auth = getAuth();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="teacher-page-container">
      <Nav />
      <div className="teacher-page-body">
        <h2>Tela do Professor</h2>
        <div className="teacher-page-body-buttons">
          <div className="buttons-column">
            <Link to="/cadastrar-apresentacao">
              <Button text="Cadastrar Apresentação" />
            </Link>
            <Link to="/cadastrar-alunos">
              <Button text="Cadastrar Seus Alunos" />
            </Link>
          </div>

          <div className="logout-button">
            <Link to="/login">
              <Button text="Logout" color="red" onClick={handleLogout}/>
            </Link>
          </div>
        </div>

        <div className="presentation-card-with-buttons">
          <div className="presentation-card-div">
            <Link to="/cadastrar-espectadores">
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
          <div className="presentation-card-buttons">
            <Button text="Edit" />
            <Button text="Delete" color="red" />
          </div>
        </div>

        <div className="presentation-card-with-buttons">
          <div className="presentation-card-div">
            <Link to="/cadastrar-espectadores">
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
          <div className="presentation-card-buttons">
            <Button text="Edit" />
            <Button text="Delete" color="red" />
          </div>
        </div>
        <div className="presentation-card-with-buttons">
          <div className="presentation-card-div">
            <Link to="/cadastrar-espectadores">
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
          <div className="presentation-card-buttons">
            <Button text="Edit" />
            <Button text="Delete" color="red" />
          </div>
        </div>
        <div className="presentation-card-with-buttons">
          <div className="presentation-card-div">
            <Link to="/cadastrar-espectadores">
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
          <div className="presentation-card-buttons">
            <Button text="Edit" />
            <Button text="Delete" color="red" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherPage;

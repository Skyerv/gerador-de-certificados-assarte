import Nav from "../../components/nav/Nav";
import Button from "../../components/Button/Button";
import "./TeacherPage.css";
import { Link, useNavigate } from "react-router-dom";
import PresentationCard from "../../components/presentationCard/PresentationCard";
import AuthService from "../../services/AuthService";
import PresentationController from "../../controllers/PresentationController";
import { FaEdit, FaTrash } from "react-icons/fa";

const authService = new AuthService();

function TeacherPage() {
  const { presentations, handleDeletePresentation } = PresentationController();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await authService.signOut();
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
              <Button text="Logout" color="red" onClick={handleLogout} />
            </Link>
          </div>
        </div>

        {presentations.map((presentation) => (
          <div className="presentation-card-with-buttons" key={presentation.id}>
            <div className="presentation-card-div">
              <Link to={`/cadastrar-espectadores/${presentation.id}`}>
                <PresentationCard
                  title={presentation.title}
                  date={presentation.day}
                  initialHour={presentation.startTime}
                  finalHour={presentation.endTime}
                  responsible={presentation.responsible}
                  presenter={presentation.presenter}
                />
              </Link>
            </div>
            <div className="presentation-card-buttons">
              <FaEdit
                onClick={() =>
                  navigate(`/editar-apresentacao/${presentation.id}`)
                }
                className="editIcon"
              />
              <FaTrash
                onClick={() => handleDeletePresentation(presentation.id)}
                className="deleteIcon"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherPage;

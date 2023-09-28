import Nav from '../components/Nav';
import CustomButton from '../components/CustomButton';
import '../styles/TeacherPage.css';
import { Link } from 'react-router-dom';
import PresentationCard from '../components/PresentationCard';

function TeacherPage() {
  return (
    <div className="container">
        <Nav/>
        <div className="buttons-div">
            <div className="buttons-column">
                <Link to='/login'><CustomButton text='Cadastrar Apresentação'/></Link>
                <Link to='/cadastrar-alunos'><CustomButton text='Cadastrar Seus Alunos'/></Link>
            </div>

            <div className="logout-button">
                <Link to='/login'><button>Logout</button></Link>
            </div>
        </div>

        <Link to='/login'>
            <PresentationCard
                title="Titulo da Apresentação"
                date="04/07/2023"
                initialHour="13:00"
                finalHour="14:00"
                responsible="Francisco Da Silva"
                presenter="Francisco Da Silva"
            />
        </Link>
        <Link to='/login'>
            <PresentationCard
                title="Titulo da Apresentação"
                date="04/07/2023"
                initialHour='13:00'
                finalHour='14:00'
                responsible="Francisco Da Silva"
                presenter="Francisco Da Silva"
            />
        </Link>
    </div>
  );
}

export default TeacherPage;
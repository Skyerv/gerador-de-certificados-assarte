import { Link } from 'react-router-dom';
import Card from '../components/Card';
import CustomButton from '../components/CustomButton';
import Nav from '../components/Nav';
import PresentationCard from '../components/PresentationCard';
import '../styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <Nav/>
      <div className="button-container">
        <CustomButton text={"Pegar Certificados"} />
        <Link to='/login'><CustomButton text={"Sou Professor"} /></Link>
      </div>
      <Card/>

      <p className="informations">
        Venha participar, a feira ocorrerá dia: ../../2023, das 00:00 até as 00:00
      </p>
      <p className='presentations'>
        Apresentações:
      </p>

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
        initialHour='13:00'
        finalHour='14:00'
        responsible="Francisco Da Silva"
        presenter="Francisco Da Silva"
      />
      <PresentationCard
        title="Titulo da Apresentação"
        date="04/07/2023"
        initialHour='13:00'
        finalHour='14:00'
        responsible="Francisco Da Silva"
        presenter="Francisco Da Silva"
      />
    </div>
  );
}

export default Home;

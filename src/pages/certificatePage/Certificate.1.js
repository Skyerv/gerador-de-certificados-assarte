import { Link, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import Nav from "../../components/nav/Nav";
import { useEffect, useState } from "react";
import StudentRepository from "../../repositories/studentRepository";

export function Certificate() {
  const location = useLocation();
  const { student } = location.state;
  const [watchedPresentations, setWatchedPresentations] = useState([]);
  const studentRepo = new StudentRepository();

  useEffect(() => {
    const fetchWatchedPresentations = async () => {
      const watchedPresentationIds = await studentRepo.getWatchedPresentations(
        student.id
      );
      const watchedPresentationData = [];

      for (const presentationId of watchedPresentationIds) {
        const presentation = await studentRepo.getPresentationData(
          presentationId
        );
        if (presentation) {
          watchedPresentationData.push(presentation);
        }
      }

      setWatchedPresentations(watchedPresentationData);
    };

    fetchWatchedPresentations();
  }, [student.id, studentRepo]);

  return (
    <div className="Certificate">
      <div className="certificate-top">
        <Nav />
        <img
          className="sustentabilityImg"
          src="/images/certificateSustentabilityImage.png"
          alt="Sustentabilidade"
        />
      </div>
      <p className="certificate-p intro-p">Este certificado comprova que</p>
      <h1 className="name">{student.name}</h1>
      <p className="certificate-p">
        Participou da <strong>Feira Cultural ASARTE</strong>, com o tema
        sustentabilidade como espectador no dia: 27/05/2023 Assistindo as
        apresentações:
      </p>

      <div className="table-container">
        <table>
          <tr>
            <th>Apresentações</th>
            <th>Duração</th>
          </tr>
          <tr>
            <td>Presentation 1</td>
            <td>30 minutes</td>
          </tr>
          <tr>
            <td>Presentation 2</td>
            <td>45 minutes</td>
          </tr>
        </table>
      </div>
      <div className="downloadCertificateButton">
        <Link to="/login">
          <Button text={"Baixar Certificados"} />
        </Link>
      </div>
    </div>
  );
}

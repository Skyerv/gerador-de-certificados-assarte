import Button from "../../components/Button/Button";
import Nav from "../../components/nav/Nav";
import "./Certificate.css";
import { useEffect } from "react";
import StudentController from "../../controllers/StudentController";
import PresentationController from "../../controllers/PresentationController";
import { useLocation } from "react-router-dom";
import CertificateController from "../../controllers/CertificateController";

function Certificate() {
  const { watchedPresentations, setWatchedPresentations } = StudentController();
  const { fetchPresentationById, calculateDuration } = PresentationController();
  const location = useLocation();
  const { student } = location.state;

  useEffect(() => {
    const fetchWatchedPresentations = async () => {
      const watchedPresentationData = [];
      if (student.watchedPresentations) {
        for (const presentationId of student.watchedPresentations) {
          const presentation = await fetchPresentationById(presentationId);
          if (presentation) {
            watchedPresentationData.push(presentation);
          }
        }
      }

      setWatchedPresentations(watchedPresentationData);
      console.log(watchedPresentationData);
    };

    fetchWatchedPresentations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [student.watchedPresentations]);

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
          {watchedPresentations.map((presentation) => (
            <tr key={presentation.id}>
              <td>{presentation.title}</td>
              <td>
                {calculateDuration(
                  presentation.startTime,
                  presentation.endTime
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
      <div className="downloadCertificateButton">
        <Button
          text={"Baixar Certificados"}
          onClick={new CertificateController().downloadCertificateAsPDF}
        />
      </div>
    </div>
  );
}

export default Certificate;

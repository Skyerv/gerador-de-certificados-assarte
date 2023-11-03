import jsPDF from "jspdf";
import html2canvas from "html2canvas";

class CertificateController {
  downloadCertificateAsPDF() {
    const certificateElement = document.querySelector(".Certificate");

    if (!certificateElement) {
      return;
    }
    const downloadButton = document.querySelector(".downloadCertificateButton");
    if (downloadButton) {
      downloadButton.style.display = "none";
    }

    const pdf = new jsPDF();

    html2canvas(certificateElement).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("certificate.pdf");

      if (downloadButton) {
        downloadButton.style.display = "block";
      }
    });
  }
}

export default CertificateController;

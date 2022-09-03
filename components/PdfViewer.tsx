import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../pdf-worker";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFViewer() {
  const [file, setFile] = useState("C:/Users/SURIYA S/Desktop/Projects/Personal/SuryaPortfolio/surya-portfolio/assets/pdf/Resume.pdf");
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <div>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {/* {Array.from({ length: numPages }, (_, index) => ( */}
            <Page
              key={`page_${1}`}
              pageNumber={1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          {/* ))} */}
        </Document>
      </div>
    </div>
  );
}

import React, { useState} from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Transcript() {
  const url = "https://firebasestorage.googleapis.com/v0/b/t-scripty.appspot.com/o/CEC.pdf?alt=media&token=af0d74a4-9b19-4034-97c1-e675e193d02b";
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      <Document

        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        className="max-w-screen-lg mx-auto"
      >
        {Array.from(new Array(numPages), (el, index) => (
          <Page
            key={`page_${index + 1}`}
            pageNumber={index + 1}
            className="my-4"
            style={{ width: "100%" }}
          />
        ))}
      </Document>
    </div>
  );
}

export default Transcript
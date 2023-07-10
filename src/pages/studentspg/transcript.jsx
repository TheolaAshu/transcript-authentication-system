import React, { useState} from "react"
import { Document, Page, pdfjs } from "react-pdf"
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function Transcript() {
  const url = "https://example.com/document.pdf";
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
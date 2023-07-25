import React, { useContext, useState } from "react";
import { Document, Page, pdfjs  } from "react-pdf";
import { AuthContext } from "../../context/AuthContext";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

function Transcript() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const { currentUser } = useContext(AuthContext);
  const url = currentUser.pdfUrl || "";

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="max-w-screen-lg mx-auto">
      {url ? (
        <div>
          <div>
            <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(new Array(numPages), (el, index) => (
                <Page key={`page_${index + 1}`} pageNumber={index + 1} />
              ))}
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </div>
          {/* <div>
            <embed
              src={url}
              type="application/pdf"
              width="100%"
              height="800px"
            />
          </div> */}
        </div>
      ) : (
        <div className="text-center text-red-500 mt-4">
          Your transcript is yet to be uploaded.
        </div>
      )}
    </div>
  );
}

export default Transcript;

import React, { useContext, useState } from "react";
import { Document, Page } from "react-pdf";
import { AuthContext } from "../../context/AuthContext";

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
          {/* <Document file={url} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          <p>
            Page {pageNumber} of {numPages}
          </p> */}
          <div>
            <embed
              src={url}
              type="application/pdf"
              width="100%"
              height="1000px"
            />
          </div>
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

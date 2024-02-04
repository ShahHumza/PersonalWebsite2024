import React from 'react';
import PdfViewer from '../PdfViewerComponent';

const ResumePage = () => {
  return (
    <div>
      <PdfViewer document="HumzaShahResume.pdf" />
      {/* Add your resume content here */}
    </div>
  );
};

export default ResumePage;

import React from 'react';

const CV = () => {
  const pdfUrl = "/docs/CV.pdf"; // Use the URL path

  return (
    <iframe 
      title="cv" 
      id="cv" 
      src={pdfUrl} 
      className="w-full max-md:w-90 h-[100dvh]" 
    />
  );
};

export default CV;

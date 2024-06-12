import cv from "./docs/CV.pdf";

const CV = () => {
  return (
    <iframe title="cv" id="cv" src={cv} className="w-full max-md:w-90 h-[100dvh]" />
  );
}
 
export default CV;
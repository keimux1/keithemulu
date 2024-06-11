import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="flex gap-6 flex-col justify-center items-center px-2.5 py-16 font-bold bg-CallToAction ">
      <div className="text-xl font-bold text-amber-500 text-center">
        U HAVE MADE IT THIS FAR
      </div>
      <div className="text-base font-normal md:font-medium text-gray-300 text-center capitalize ">
        Feel Free To Reach Out and Lets Work Together
      </div>
      <Link className="contactButton">
        CONTACT ME
      </Link>
    </div>
  );
}

export default CallToAction;
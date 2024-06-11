import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col gap-6 justify-center p-8 bg-gray-300 max-md:px-5">
      <div className="flex flex-col items-center justify-center">
        <div className="text-xl font-bold text-center capitalize text-gray-950 max-md:max-w-full">
          You reached Here Great !
        </div>
      </div>

      <div className="flex justify-between max-md:flex-col gap-8 ">
        <div className="flex flex-1 flex-col items-center text-base lowercase text-slate-800 gap-4">
          <div className=" font-bold capitalize text-center">
            Check Out My Socials{" "}
          </div>

          <div className="flex flex-col  gap-4 max-md:gap-6">
            <Link target="_blank" className="flex gap-2.5 whitespace-nowrap  hover:text-amber-700" to="https://www.linkedin.com/in/keithemulu/">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/71d66c1bddcd2a322598f5da4968adc31d3ca5822e57cb22984f3dfbf946667d?"
                className="shrink-0 w-6 aspect-square"
              />
              www.linkedin.com/in/keithemulu
            </Link>

            <Link target="_blank" className="flex gap-2.5 whitespace-nowrap  hover:text-amber-700" to="https://x.com/keimux1/">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/09969c0ce18342c876949941e8bc9b2707f211866571a8659fca388805d524ed?"
                className="shrink-0 w-6 aspect-square"
              />
              www.x.com/keimux1
            </Link>

            <Link target="_blank" className="flex gap-2.5 whitespace-nowrap hover:text-amber-700" to="https://www.github.com/keimux1/">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20595a35c9bcd4ea5fa40ae987c35b0cc2188133f0ad0d810080356bb002e08b?"
                className="shrink-0 aspect-[1.04] w-[25px]"
              />
              www.github.com/keimux1
            </Link>
          </div>

        </div>

        <div className="flex flex-1 flex-col items-center text-base capitalize text-slate-800 gap-4">
          <div className="font-bold">Go through my CV</div>
          <div className="underline">Emulu Keith CV.pdf</div>
        </div>

        <div className="flex flex-1 flex-col items-center text-base  text-slate-800 gap-4">
          <div className="font-bold capitalize">Reach Out to me </div>
          <div className="flex gap-3">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/871b1f43a8b41a2eb204431fa777ac0fcac736f254201768edcca3a3cda0fa25?"
              className="shrink-0 w-6 aspect-square"
            />
            <div>keimux21@gmail.com</div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Footer;
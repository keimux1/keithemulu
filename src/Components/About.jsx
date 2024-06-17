
const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-gray-300 md:px-16 lg:px-24">
        <img className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48" src="../../public/EmuluKeith.png " alt="" />
        <div className="mt-2.5 text-4xl font-bold text">
          Emulu Keith
        </div>
        <div className="mt-10 px-2 w-full text-xl font-bold text-amber-500 max-md:max-w-full text-center">
          UI/UX DESIGNER / SOFTWARE DEVELOPER / ELECTRICIAN
        </div>
        <div className="mt-6 w-full text-lg sm:text-justify p-8 2xl:w-[60rem] ">
          <p>
            I’m a Product Designer and Web Developer passionate about creating
            user-centered experiences, I design websites and applications that blend
            aesthetics with functionality.
          </p>

          <p className="mt-4">
            I come from an electrical Background though
            have always been enthusiastic about web technologbagies and design.
          </p>

          <p className="mt-4">
            I am passionate about user interface design because its a
            corner Stone from which the web gets its face.
          </p>

          <p className="mt-4">
            I develop as well , with my main focus being the front end with JavaScript , Html and CSS with a few frameworks like
            React as well.
          </p>

          <p className="mt-4">
            I have also had a some experince in the backend particularly Node Js and Mongo Db.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About; 
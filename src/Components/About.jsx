import profilepic from "../assets/EmuluKeith.png";


const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center text-gray-300 md:px-16 lg:px-24">
        <img className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48" src={profilepic} alt="emulukeith" />
        <div className="mt-2.5 text-4xl font-bold text">
          Emulu Keith
        </div>
        <div className="mt-10 px-2 w-full text-xl font-bold text-amber-500 max-md:max-w-full text-center">
          UI/UX DESIGNER / SOFTWARE DEVELOPER / ELECTRICIAN
        </div>
        <div className="mt-6 w-full text-lg sm:text-justify p-8 2xl:w-[60rem] ">
          <p>
            I’m a Product Designer and Web Developer passionate about creating user-centered experiences.
            I design websites and applications that seamlessly blend aesthetics with functionality.
          </p>

          <p className="mt-4">
            Though I come from an electrical engineering background, I have always been enthusiastic about web technologies and design.
            My passion for user interface design stems from its pivotal role in shaping the web's face.
          </p>

          <p className="mt-4">
            I specialize in front-end development, primarily working with JavaScript, HTML, and CSS, along with frameworks like React.
            Additionally,
            I have some experience in backend development, particularly with Node.js and MongoDB.
          </p>

        </div>
      </div>
    </div>

  );
}

export default About; 
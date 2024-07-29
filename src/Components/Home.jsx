import profile from "../assets/KeimuxMokeUp.png";
import { Link } from "react-router-dom";
import streamlineSample from "../assets/streamlinesample.png";
import DockvilleSample from "../assets/Dockvillesample.png";
import EmployeeRewardApp from "../assets/EmployeeRewardApp.png";
import MOMO from "../assets/MOMOAppMokeUp.png";
import OnlineLib from "../assets/OnlineBookLibraryMokeup.png";
import Slider from "../assets/SliderMokeUp.png";
import HrManagement from "../assets/HrManagementMokeUplanding.png";
import BareFoot from "../assets/BareFootMokeUp.png";
import Rotation from "../assets/RotationAnimation.png";
import MobileStore from "../assets/OnlineMobileStoreMokeUp.png";
import Rockline from "../assets/RocklineMokeUp.png";
import Wakelo from "../assets/WakeloMokeUp.png";

const Home = () => {
  return (
    <div className="text-gray-300 ">

      <section className="flex max-md:px-4  items-center justify-center">
        <div className="flex max-md:flex-col gap-10 justify-around max-md:items-center w-full max-w-6xl  md:px-8">
          <div className="flex flex-col  justify-center">
            <div className="text-xl text-nowrap capitalize font-bold">
              Hi, I’m Keith
            </div>
            <div className="w-full text-xl mt-3 max-md:text-lg font-extrabold text-amber-500 max-md:max-w-full">
              A UI/ UX DESIGNER AND SOFTWARE DEVELOPER
            </div>
            <div className="text-base capitalize mt-2 w-full ">
              I’m a Product Designer and Web Developer passionate about creating
              user-centered experiences, I design websites and applications that blend
              aesthetics with functionality.
              <br />
              <br />
              Welcome to my portfolio...
            </div>
            <div className="flex md:gap-6 max-md:justify-between mt-8 lg:max-w-96 ">
              <Link to="/contact" className="contactButton">
                CONTACT ME
              </Link>

              <Link to="/contact" className="py-2 px-4 text-base font-bold border border-amber-500 rounded-md text-amber-400 text-nowrap transition ease-in hover:bg-amber-300 hover:text-amber-800">
                Check Out My Work
              </Link>
            </div>
          </div>

          <img src={profile} alt="profilephoto" width={250} />
        </div>
      </section>

      <section className="flex max-md:px-4 mb-8 items-center justify-center">
        <div className="flex flex-col gap-10 justify-around max-md:items-center w-full max-w-6xl py-8 md:px-8">
          <div className="flex flex-col font-bold">
            <div className="section-h">
              SKILLS
            </div>
            <div className="flex justify-around mt-5 capitalize max-md:grid max-md:grid-cols-4 ">
              <div className="flex flex-col items-center p-0.5 my-auto whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/7de289564213ee7bf1d526f6c82e34d55cb54901eea168bac4c2360290a20f2e?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="self-center w-5 aspect-square"
                />
                <div>Figma</div>
              </div>

              <div className="flex flex-col items-center p-0.5 my-auto whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d9f4b5cdb92685e2c7041a1f51a1547a78823758d39aeb69708cc83db8a53a9?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="self-center w-5 aspect-square"
                />
                <div>HTML</div>
              </div>

              <div className="flex flex-col items-center p-0.5 my-auto whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/31efbbf46de0cbc3589aef5ca973922312288ab646b33b10a4c627f0cf9c2352?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="self-center aspect-[1.75] w-[35px]"
                />
                <div>CSS</div>
              </div>

              <div className="flex flex-col items-center p-0.5 my-auto whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/77404b36481da4ff2cfece4d90e4d932eb6f3f49f37ead1038c3b9a4d5ea0a21?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="self-center w-5 aspect-square"
                />
                <div>Tailwind css</div>
              </div>


              <div className="flex flex-col items-center p-0.5 my-auto whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c7198b4f81a06bd95981ea07041ac648972d83aaad70318436217c2c5eb3d4e2?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="self-center w-5 aspect-square"
                />
                <div>JavaScript</div>
              </div>

              <div className="flex flex-col items-center p-0.5 my-auto whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/5d32bdd4312abbd5407e34b9c5fe901c1cceea281de4f1767c9b6a7e89ba8b20?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="self-center w-5 aspect-square"
                />
                <div>React</div>
              </div>

              <div className="flex flex-col items-center p-0.5 my-auto whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9006b46fbca1ac5405c474c388d091454f01518e20c0e51527facf82f1fff00f?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="self-center w-5 aspect-square"
                />
                <div>Node Js</div>
              </div>

              <div className="flex flex-col items-center p-0.5 whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0662c39a03cb5d788abf788f53a5cd17d6835b37fa0deb02bb08563e6fec776a?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="self-center aspect-[0.46] w-[11px]"
                />
                <div>Mongo Db</div>
              </div>

            </div>

          </div>

          <div className="flex flex-col font-bold py-2 flex-1">
            <div className="section-h">
              Background
            </div>

            <div className="flex gap-5 px-5 mt-5 text-xs font-normal capitalize text-gray-700 max-md:grid max-md:grid-cols-2 md:max-lg:grid md:max-lg:grid-cols-3 ">
              <Link to="/RefactoryCertificate" className="flex flex-col flex-1 p-2 rounded-md bg-amber-100 hover:bg-amber-600 hover:drop-shadow-[0_2px_2px_rgba(255,213,79,0.25)] transition ease delay-150 duration-300 hover:text-amber-100">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="aspect-[4] w-[81px]"
                />
                <div className="mt-2">
                  Advanced Certificate In Best Software Practices
                </div>
              </Link>

              <div className="flex flex-col flex-1 p-2 rounded-md bg-amber-100 hover:bg-amber-600 hover:drop-shadow-[0_2px_2px_rgba(255,213,79,0.25)] transition ease delay-150 duration-300 hover:text-amber-100">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/710e52d52c5228f5012e5ab16141d2ca473c6a209b71993c1cb834e75be8c077?apiKey=cf78a5e822724851b7bba55553a58bb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/710e52d52c5228f5012e5ab16141d2ca473c6a209b71993c1cb834e75be8c077?apiKey=cf78a5e822724851b7bba55553a58bb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/710e52d52c5228f5012e5ab16141d2ca473c6a209b71993c1cb834e75be8c077?apiKey=cf78a5e822724851b7bba55553a58bb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/710e52d52c5228f5012e5ab16141d2ca473c6a209b71993c1cb834e75be8c077?apiKey=cf78a5e822724851b7bba55553a58bb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/710e52d52c5228f5012e5ab16141d2ca473c6a209b71993c1cb834e75be8c077?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/710e52d52c5228f5012e5ab16141d2ca473c6a209b71993c1cb834e75be8c077?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/710e52d52c5228f5012e5ab16141d2ca473c6a209b71993c1cb834e75be8c077?apiKey=cf78a5e822724851b7bba55553a58bb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/710e52d52c5228f5012e5ab16141d2ca473c6a209b71993c1cb834e75be8c077?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="aspect-[3.23] w-[65px]"
                />
                <div className="mt-2">Agile Scrum Foundation</div>
              </div>

              <div className="flex flex-col flex-1 p-2 rounded-md bg-amber-100 hover:bg-amber-600 hover:drop-shadow-[0_2px_2px_rgba(255,213,79,0.25)] transition ease delay-150 duration-300 hover:text-amber-100">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4b25ce62659093b7f9d96da6252d6900518b30736cf828d6070d6d748254985e?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="aspect-[4] w-[81px]"
                />
                <div className="mt-2">
                  certificate in software Enginering with Javascript
                </div>
              </div>

              <div className="flex flex-col flex-1 p-2 rounded-md bg-amber-100 hover:bg-amber-600 hover:drop-shadow-[0_2px_2px_rgba(255,213,79,0.25)] transition ease delay-150 duration-300 hover:text-amber-100">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/874ea79cc5d0120af0bd2286c6ba9562d239cccaebdc02685322fab4a49ff94a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/874ea79cc5d0120af0bd2286c6ba9562d239cccaebdc02685322fab4a49ff94a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/874ea79cc5d0120af0bd2286c6ba9562d239cccaebdc02685322fab4a49ff94a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/874ea79cc5d0120af0bd2286c6ba9562d239cccaebdc02685322fab4a49ff94a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/874ea79cc5d0120af0bd2286c6ba9562d239cccaebdc02685322fab4a49ff94a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/874ea79cc5d0120af0bd2286c6ba9562d239cccaebdc02685322fab4a49ff94a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/874ea79cc5d0120af0bd2286c6ba9562d239cccaebdc02685322fab4a49ff94a?apiKey=cf78a5e822724851b7bba55553a58bb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/874ea79cc5d0120af0bd2286c6ba9562d239cccaebdc02685322fab4a49ff94a?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="aspect-[1.96] w-[39px]"
                />
                <div className="mt-2">
                  Profile Certification in Computer & Online Essentials
                </div>
              </div>

              <div className="flex flex-col flex-1 p-2 rounded-md bg-amber-100 hover:bg-amber-600 hover:drop-shadow-[0_4px_4px_rgba(255,213,79,0.25)] transition ease delay-150 duration-300 hover:text-amber-100">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/cb74fd344f431dd41b13c7739a06671777ce22e2a20221c15f4c7a379bd29e31?apiKey=cf78a5e822724851b7bba55553a58bb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb74fd344f431dd41b13c7739a06671777ce22e2a20221c15f4c7a379bd29e31?apiKey=cf78a5e822724851b7bba55553a58bb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb74fd344f431dd41b13c7739a06671777ce22e2a20221c15f4c7a379bd29e31?apiKey=cf78a5e822724851b7bba55553a58bb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb74fd344f431dd41b13c7739a06671777ce22e2a20221c15f4c7a379bd29e31?apiKey=cf78a5e822724851b7bba55553a58bb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb74fd344f431dd41b13c7739a06671777ce22e2a20221c15f4c7a379bd29e31?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb74fd344f431dd41b13c7739a06671777ce22e2a20221c15f4c7a379bd29e31?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb74fd344f431dd41b13c7739a06671777ce22e2a20221c15f4c7a379bd29e31?apiKey=cf78a5e822724851b7bba55553a58bb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/cb74fd344f431dd41b13c7739a06671777ce22e2a20221c15f4c7a379bd29e31?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="aspect-[3.23] w-[65px]"
                />
                <div className="mt-2">UI/UX Design Course</div>
              </div>

              <div className="flex flex-col flex-1 p-2 rounded-md bg-amber-100 hover:bg-amber-600 hover:drop-shadow-[0_4px_4px_rgba(255,213,79,0.25)] transition ease delay-150 duration-300 hover:text-amber-100">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b417aaf230b02040c41690627ed90825ff3d43e2c41e431aa242617d8991423d?apiKey=cf78a5e822724851b7bba55553a58bb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b417aaf230b02040c41690627ed90825ff3d43e2c41e431aa242617d8991423d?apiKey=cf78a5e822724851b7bba55553a58bb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b417aaf230b02040c41690627ed90825ff3d43e2c41e431aa242617d8991423d?apiKey=cf78a5e822724851b7bba55553a58bb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b417aaf230b02040c41690627ed90825ff3d43e2c41e431aa242617d8991423d?apiKey=cf78a5e822724851b7bba55553a58bb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b417aaf230b02040c41690627ed90825ff3d43e2c41e431aa242617d8991423d?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b417aaf230b02040c41690627ed90825ff3d43e2c41e431aa242617d8991423d?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b417aaf230b02040c41690627ed90825ff3d43e2c41e431aa242617d8991423d?apiKey=cf78a5e822724851b7bba55553a58bb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b417aaf230b02040c41690627ed90825ff3d43e2c41e431aa242617d8991423d?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="aspect-[4.35] w-[88px]"
                />
                <div className="mt-2">Diploma In Electrical Engineering</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="flex max-md:px-4 mb-8 items-center justify-center ">
        <div className="flex flex-col gap-4  w-full max-w-6xl md:px-8">
          <div className="section-h">
            Companies Worked Under
          </div>

          <div className="px-4 flex gap-4 max-md:flex-col max-md:gap-4">

            <Link to="/laboremus" className="group flex flex-col relative min-h-48 gap-4 p-4 w-full capitalize bg-amber-200 rounded-md text-stone-700 hover:bg-amber-300">
              <div className="bg-[#eee68bbe] group-hover:bg-[#fcd34dd5] absolute top-4 bottom-0 right-4 left-4">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1941b164d6e8f424137398ca911052cccf9a340b44596c2e04ec497e3605bcff?apiKey=cf78a5e822724851b7bba55553a58bb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1941b164d6e8f424137398ca911052cccf9a340b44596c2e04ec497e3605bcff?apiKey=cf78a5e822724851b7bba55553a58bb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1941b164d6e8f424137398ca911052cccf9a340b44596c2e04ec497e3605bcff?apiKey=cf78a5e822724851b7bba55553a58bb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1941b164d6e8f424137398ca911052cccf9a340b44596c2e04ec497e3605bcff?apiKey=cf78a5e822724851b7bba55553a58bb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1941b164d6e8f424137398ca911052cccf9a340b44596c2e04ec497e3605bcff?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1941b164d6e8f424137398ca911052cccf9a340b44596c2e04ec497e3605bcff?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1941b164d6e8f424137398ca911052cccf9a340b44596c2e04ec497e3605bcff?apiKey=cf78a5e822724851b7bba55553a58bb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1941b164d6e8f424137398ca911052cccf9a340b44596c2e04ec497e3605bcff?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="aspect-[1.16] w-[50px]"
                />
                <div className="mt-3.5 text-base font-bold  max-md:max-w-full">
                  Streamline Back Office Analytics Dashboard
                </div>
                <div className="mt-3.5 text-xs font-medium text-stone-500 group-hover:text-stone-700 max-md:max-w-full">
                  The dashboard is meant to give real time analytical feedback to
                  stakeholders to enable them make Data driven financial
                  decisions.
                </div>
              </div>
              <div>
                <img className="w-full min-h-48 object-cover group-hover:scale-110 group-hover:rotate-3 transition ease-in-out delay-150 duration-300" src={streamlineSample} alt="streamlineSample" />
              </div>

            </Link>

            <Link to="/refactory" className="group flex flex-col relative p-4 w-full capitalize rounded-md bg-zinc-200 hover:bg-zinc-400">
              <div className="bg-[#e4e4e7d2] group-hover:bg-[#a1a1aadf] absolute top-4 bottom-0 right-4 left-4">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9a01e261289186602027e1b4dbc595332f474a27ff7edf78ec20946c6187e350?apiKey=cf78a5e822724851b7bba55553a58bb2&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a01e261289186602027e1b4dbc595332f474a27ff7edf78ec20946c6187e350?apiKey=cf78a5e822724851b7bba55553a58bb2&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a01e261289186602027e1b4dbc595332f474a27ff7edf78ec20946c6187e350?apiKey=cf78a5e822724851b7bba55553a58bb2&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a01e261289186602027e1b4dbc595332f474a27ff7edf78ec20946c6187e350?apiKey=cf78a5e822724851b7bba55553a58bb2&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a01e261289186602027e1b4dbc595332f474a27ff7edf78ec20946c6187e350?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a01e261289186602027e1b4dbc595332f474a27ff7edf78ec20946c6187e350?apiKey=cf78a5e822724851b7bba55553a58bb2&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a01e261289186602027e1b4dbc595332f474a27ff7edf78ec20946c6187e350?apiKey=cf78a5e822724851b7bba55553a58bb2&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9a01e261289186602027e1b4dbc595332f474a27ff7edf78ec20946c6187e350?apiKey=cf78a5e822724851b7bba55553a58bb2&"
                  className="max-w-full aspect-[4.17] w-[177px]"
                />
                <div className="mt-3.5 text-base font-bold text-stone-700 max-md:max-w-full">
                  Dockville
                </div>
                <div className="mt-3.5 text-xs font-medium text-stone-500 group-hover:text-stone-700  max-md:max-w-full">
                  Dockville is a public car parking space, which receives about
                  100 to 200 cars a day for
                  <br />
                  parking and operates a car Tire Clinic and renting car
                  Batteries. For easy management and record keeping
                </div>
              </div>
              <div>
                <img className="w-full min-h-48 max-h-64 object-cover group-hover:scale-110 group-hover:rotate-3 transition ease-in-out delay-150 duration-300" src={DockvilleSample} alt="streamlineSample" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      <section className="flex max-md:px-4 mb-16 items-center justify-center ">
        <div className="flex flex-col gap-4  w-full max-w-6xl md:px-8">
          <div className="section-h">
            Personal Projects
          </div>

          <div className="px-4 grid grid-cols-6 gap-4 max-md:grid-cols-2">

            <Link to="/employeeReward" className="overflow-hidden group md:col-span-2 gap-2 px-2 w-full capitalize bg-[#E6CEAC] rounded-md text-stone-700 hover:bg-[#F3AA3D] transition ease-in-out delay-150 duration-300">
              <div className="mt-3.5 text-base font-bold text-center max-md:max-w-full">
                Employee Reward App
              </div>
              <div className="flex justify-center py-4">
                <img className="w-32 group-hover:scale-110 group-hover:rotate-3 transition ease-in-out delay-150 duration-300" src={EmployeeRewardApp} alt="EmployeeRewardApp" />
              </div>
            </Link>

            <Link to="/MtnMomo" className="overflow-hidden group  gap-2 px-2 w-full capitalize bg-[#91B4C8] rounded-md text-stone-700 hover:bg-[#3380AC] transition ease-in-out delay-150 duration-300">
              <div className="mt-3.5 text-base font-bold text-center max-md:max-w-full">
                MOMO APP redesign
              </div>
              <div className="flex justify-center py-4">
                <img className="w-32 group-hover:scale-110 group-hover:rotate-3 transition ease-in-out delay-150 duration-300" src={MOMO} alt="EmployeeRewardApp" />
              </div>
            </Link>

            <Link to="/BookLibrary" className="overflow-hidden group col-span-2 gap-2 px-2 w-full capitalize bg-[#81CCC5] rounded-md text-stone-700 hover:bg-[#00C6B4] transition ease-in-out delay-150 duration-300">
              <div className="mt-3.5 text-base font-bold text-center max-md:max-w-full">
                Online Book Library
              </div>
              <div className="flex justify-center p-4">
                <img className="w-64 h-48 object-cover group-hover:scale-110 group-hover:rotate-3 transition ease-in-out delay-150 duration-300" src={OnlineLib} alt="Online Book Library" />
              </div>
            </Link>

            <Link to="/Slider" className="overflow-hidden group max-md:col-span-2 gap-2 px-2 w-full capitalize bg-[#FFFAFA] rounded-md text-stone-700 hover:bg-[#CE6D66] transition ease-in-out delay-150 duration-300">
              <div className="mt-3.5 text-base font-bold text-center max-md:max-w-full">
                Slider Animation In Figma
              </div>
              <div className="flex justify-center py-4">
                <img className="w-52 object-cover group-hover:scale-110 group-hover:rotate-3 transition ease-in-out delay-150 duration-300" src={Slider} alt="Slider" />
              </div>
            </Link>

            <Link to="/hrManagement" className="overflow-hidden group max-md:col-span-2 md:col-span-3 gap-2 px-2 w-full capitalize bg-[#D1E3FC] rounded-md text-stone-700 hover:bg-[#89ADF2] transition ease-in-out delay-150 duration-300">
              <div className="mt-3.5 text-base font-bold text-center max-md:max-w-full">
                Hr Management System
              </div>
              <div className="flex justify-center p-4">
                <img className="w-52 object-cover group-hover:scale-110 group-hover:rotate-3 transition ease-in-out delay-150 duration-300" src={HrManagement} alt="Hr Management" />
              </div>
            </Link>

            <Link to="/Barefoot" className="overflow-hidden group max-md:col-span-2 md:col-span-3  px-2 w-full capitalize bg-[#BFCE8D] rounded-md text-stone-700 hover:bg-[#AFD136] transition ease-in-out delay-150 duration-300">
              <div className="mt-3.5 text-base font-bold text-center max-md:max-w-full">
                BareFoot Law Redesign
              </div>
              <div className="flex justify-center  mt-6">
                <img className="max-md:w-72  object-fit group-hover:scale-110 group-hover:rotate-3 transition ease-in-out delay-150 duration-300" src={BareFoot} alt="Barefoot" />
              </div>
            </Link>

            <Link to="/Rotation" className="overflow-hidden group  gap-2 px-2 w-full capitalize bg-[#E4FFC0] rounded-md text-stone-700 hover:bg-[#B7EC73] transition ease-in-out delay-150 duration-300">
              <div className="mt-3.5 text-base font-bold text-center max-md:max-w-full">
                Rotation Animation
              </div>
              <div className="flex justify-center py-4 mt-4">
                <img className="w-32 group-hover:scale-110 group-hover:rotate-3 transition ease-in-out delay-150 duration-300" src={Rotation} alt="Rotation" />
              </div>
            </Link>

            <Link to="/OnlineMobileStore" className="overflow-hidden group gap-2 px-2 w-full capitalize bg-[#BFAB94] rounded-md text-stone-700 hover:bg-[#C69C6C] transition ease-in-out delay-150 duration-300">
              <div className="mt-3.5 text-base font-bold text-center max-md:max-w-full">
                Online Mobile Store
              </div>
              <div className="flex justify-center p-4 mt-4">
                <img className="w-52 object-cover group-hover:scale-110 group-hover:rotate-3 transition ease-in-out delay-150 duration-300" src={MobileStore} alt="Online Mobile Store" />
              </div>
            </Link>

            <Link to="/Rockline" className="overflow-hidden group max-md:col-span-2 md:col-span-3  px-2 w-full capitalize bg-[#92BCE3] rounded-md text-stone-700 hover:bg-[#78a5cf] transition ease-in-out delay-150 duration-300">
              <div className="mt-3.5 text-base font-bold text-center max-md:max-w-full">
                Rockline Peace Network Redesign
              </div>
              <div className="flex justify-center  mt-6">
                <img className="max-md:w-72  object-fit group-hover:scale-110 group-hover:rotate-3 transition ease-in-out delay-150 duration-300" src={Rockline} alt="RPN" />
              </div>
            </Link>

            <Link to="/Wakelo" className="overflow-hidden max-md:col-span-2 group gap-2 px-2 w-full capitalize bg-[#A5A2D3] rounded-md text-stone-700 hover:bg-[#8380ac] transition ease-in-out delay-150 duration-300">
              <div className="mt-3.5 text-base font-bold text-center max-md:max-w-full">
                Wakelo Express Redesign
              </div>
              <div className="flex justify-center p-4 mt-4">
                <img className="w-52 object-cover group-hover:scale-110 group-hover:rotate-3 transition ease-in-out delay-150 duration-300" src={Wakelo} alt="Wakelo" />
              </div>
            </Link>

          </div>
        </div>
      </section>


    </div>
  );
}

export default Home;
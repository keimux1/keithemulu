import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/EMULUKEITHLogo.png"

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
    console.log("toggleMenu");
  };
  return (
    <>
      <nav className="flex justify-center items-center px-6 max-md:h-14 md:px-20 md:py-2 bg-slate-700 fixed top-0 right-0 left-0 h-10">
        <div className="flex justify-between w-full relative">
          <NavLink to="/">
            <img className="resize-none" src={logo} alt="Logo" />
          </NavLink>

          <button className="md:hidden flex items-center transition duration-500 ease-in-out" onClick={toggleMenu}>
            {openMenu ?
              <div className="relative">

                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 18L18 6M6 6L18 18" stroke="#FF9900" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

                <div className="font-bold text-base text-gray-300 flex items-end bg-slate-700 rounded-b-lg justify-center absolute -bottom-[270px] -right-6 w-36 px-2 py-4 transition duration-500 ease-in-out">
                  <ul className="flex flex-col gap-4 justify-center ">
                    <li className="relative">
                      <button className=" w-full">
                        <NavLink className="NavButton" to="/">HOME</NavLink>
                      </button>
                    </li>
                    <li>
                      <button className="w-full">
                        <NavLink className="NavButton" to="/designs">PROJECTS</NavLink>
                      </button>
                    </li>
                    <li>
                      <div className="w-full">
                        <NavLink className="NavButton" to="/about">ABOUT</NavLink>
                      </div>
                    </li>
                    <li>
                      <div className="w-full">
                      <NavLink className="NavButton" to="/contact">CONTACT ME</NavLink>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              :
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 18V16H21V18H3ZM3 13V11H21V13H3ZM3 8V6H21V8H3Z" fill="#CCCCCC" />
              </svg>
            }


          </button>


          <div className="max-md:hidden font-bold font-base text-gray-300 flex items-end justify-end">
            <ul className="flex gap-6 justify-center items-center">
              <li className="relative">
                <NavLink className="NavButton" to="/designs">PROJECTS</NavLink>
              </li>
              <li className="relative">
                <NavLink className="NavButton" to="/about">ABOUT</NavLink>
              </li>
              <li className="relative">
                <NavLink className="NavButton" to="/contact">CONTACT ME</NavLink>
              </li>
            </ul>
          </div>


        </div>
      </nav>
    </>
  );
}

export default Navbar;
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center items-center px-16 py-3 bg-slate-700 max-md:px-5">
        <div className="flex gap-5 justify-between p-1 w-full">
          <div className="justify-center py-2 text-3xl text-amber-500 lowercase">
            <img src="/EMULU KEITH Logo.png" alt="" />
          </div>
          <div className="flex gap-5 justify-between px-1 py-1 my-auto font-0.5rem font-bold text-gray-300">
            <Link to="/designs">DESIGNS & DEVELOPMENTS</Link>
            <Link to="/about">ABOUT</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="relative w-full h-[100px] flex justify-between items-center px-4 bg-[#ffffff] text-black z-10 shadow-md">
      <div className="flex justify-center items-center"></div>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li className="font-medium duration-500 hover:text-gray-500">
          <Link to="/">Home</Link>
        </li>
        <li className="font-medium duration-500 hover:text-gray-500">
          <Link to="/work">Work History</Link>
        </li>
        <li className="font-medium duration-500 hover:text-gray-500">
          <Link to="/qualifications">Qualifications</Link>
        </li>
        <li className="font-medium duration-500 hover:text-gray-500">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="font-medium duration-500 hover:text-gray-500">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="font-medium duration-500 hover:text-gray-500">
          <Link to="/jurgens">Jurgens Contractors</Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-zinc-200 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl"></li>
        <li className="py-6 text-4xl"></li>
        <li className="py-6 text-4xl"></li>
        <li className="py-6 text-4xl"></li>
        <li className="py-6 text-4xl"></li>
        <li className="py-6 text-4xl"></li>
      </ul>

      {/* Social icons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;

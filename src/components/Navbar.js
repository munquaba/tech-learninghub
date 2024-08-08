import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center bg-slate-700 h-24 mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[white]">
        <img src="" alt="" />
        Tech Learning Hub
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link to="/" className="hover:bg-gray-600 hover:text-yellow-50 px-2 py-1 rounded font-bold">Home</Link>
        </li>
       
        <li className="p-4">
          <Link to="/contact" className="hover:bg-gray-600 hover:text-yellow-50 px-2 py-1 rounded font-bold">Contact</Link>
        </li>
        {/* <li className="p-4">
          <Link to="/articles" className="hover:bg-gray-600 hover:text-yellow-50 px-2 py-1 rounded font-bold">Articles</Link>
        </li> */}
        <li className="p-4">
          <Link to="/login" className="hover:bg-gray-600  border-2 border-white block p-2">Login</Link>
        </li>
        <li className="p-4">
          <Link to="/signup" className="hover:bg-gray-600  border-2 border-white block p-2">SignUp</Link>
        </li>
      </ul>

      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
       
        <li className="p-4 border-b border-gray-600">Home</li>
      
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;

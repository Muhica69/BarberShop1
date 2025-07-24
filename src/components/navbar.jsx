import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [logoScale, setLogoScale] = useState("scale-125");
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLogoScale("scale-100"), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <nav className="w-full flex flex-row justify-around items-center py-5 px-10 backdrop-blur-sm bg-black/20 text-white shadow">
      <ul className="flex flex-row items-center space-x-6">
        <li>
          <a href="#about" className="hover:text-yellow-700">
            O nama
          </a>
        </li>
        <li>
          <a href="#team" className="hover:text-yellow-700">
            Nas tim
          </a>
        </li>

        <img
          src="/sl2.png"
          alt="Logo"
          className={`w-20 h-20 transition-transform duration-900 ${logoScale}`}
          id="navbar-logo"
        />
        <li>
          <span
            className="text-yellow-700 hover:text-yellow-500 cursor-pointer"
            style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}
            onClick={() => navigate("/BookNow")}
          >
            Book now!
          </span>
        </li>
        <li>
          <a href="#kontakt" className="hover:text-yellow-700">
            Kontakt
          </a>
        </li>
        {/* <li>
          <button
            onClick={() => navigate("/Login")}
            className="bg-gradient-to-r from-gray-500 to-gray-600 hover:bg-gray-100 text-yellow-700 font-semibold py-2 px-4 border border-yellow-700 rounded shadow"
          >
             LogIn
          </button>
        </li>
        <li>
          <button
          onClick={() => navigate("/SignUp")}
           className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            SignUp
          </button>
        </li> */}
      </ul>
    </nav>
  );
}

export default Navbar;

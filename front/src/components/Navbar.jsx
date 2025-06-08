import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-primary-color text-white shadow-md z-50">
      <div className="flex items-center justify-between p-4">
        {/* Testo a sinistra */}
        <div className="text-xl font-bold">
          <Link to="/">AlineL</Link>
        </div>

        {/* Icona menu hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden focus:outline-none"
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Menu fullscreen */}
      <div
        className={`fixed inset-0 bg-primary-color text-white flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-2xl focus:outline-none"
        >
          &times;
        </button>

        <ul className="space-y-6 text-center text-xl">
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/tarifs" onClick={() => setIsOpen(false)}>
              Tarifs
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              
            </Link>
          </li>
          <li>
          </li>
        </ul>
      </div>

      {/* Menu desktop */}
      <div className="hidden md:flex items-center space-x-6 p-4">
        <Link to="/" className="hover:underline">
        Accueil
        </Link>
        <Link to="/tarifs" className="hover:underline">
        Tarifs
        </Link>
        <Link to="/services" className="hover:underline">
          Services
        </Link>
        <Link to="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

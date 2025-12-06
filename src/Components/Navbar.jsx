import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className=" bg-slate-900 border-b border-slate-800 text-slate-100  px-6 py-4">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        
        {/* Logo + Name */}
        <div className="flex items-center space-x-2">
          <NavLink to="/">
            <h1 className="text-2xl font-bold text-purple-600">Mohamed Hussein</h1>
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <NavLink 
            to="/" 
            className={({ isActive }) =>
              isActive ? "text-purple-400 font-semibold" : "text-slate-300 hover:text-purple-400 transition"
            }
          >
            Home
          </NavLink>

          <NavLink 
            to="/about" 
            className={({ isActive }) =>
              isActive ? "text-purple-600 font-bold" : "text-gray-700 hover:text-purple-600 transition"
            }
          >
            About
          </NavLink>

          <NavLink 
            to="/contact" 
            className={({ isActive }) =>
              isActive ? "text-purple-600 font-bold" : "text-gray-700 hover:text-purple-600 transition"
            }
          >
            Contact
          </NavLink>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;

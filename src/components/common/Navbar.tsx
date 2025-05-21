import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-10">
          <Link to="/" className="text-2xl font-bold text-blue-800">Transitley</Link>
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/universities" className="text-gray-700 hover:text-blue-600">Study in UK</Link>
            {/* <Link to="/exam" className="text-gray-700 hover:text-blue-600">Exam</Link> */}
            <Link to="/finance" className="text-gray-700 hover:text-blue-600">Finance</Link>
            <Link to="/travel" className="text-gray-700 hover:text-blue-600">Visa</Link>
            {/* <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link> */}
            {/* <Link to="/events" className="text-gray-700 hover:text-blue-600">Events</Link> */}
            <Link to="/flight" className="text-gray-700 hover:text-blue-600">Flights</Link>
            <Link to="/job" className="text-gray-700 hover:text-blue-600">Jobs</Link>
            {/* <Link to="/cvmaker" className="text-gray-700 hover:text-blue-600">CVmaker</Link> */}
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 border rounded-full text-sm"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div> */}
          {/* Sign In button only on desktop */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 hidden md:block">
            Sign In
          </button>
          {/* Hamburger Icon */}
          <button
            className="md:hidden ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={24} className="text-gray-700" /> : <FiMenu size={24} className="text-gray-700" />}
          </button>
        </div>
      </div>
      {/* Mobile Side Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">
          <div className="bg-white w-64 h-full p-6 flex flex-col space-y-4">
            <button
              className="self-end mb-4"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <FiX size={28} />
            </button>
            <Link to="/universities" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Study in UK</Link>
            {/* <Link to="/exam" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Exam</Link> */}
            <Link to="/finance" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Finance</Link>
            <Link to="/travel" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Visa</Link>
            {/* <Link to="/contact" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/events" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Events</Link> */}
            <Link to="/flight" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Flight</Link>
            <Link to="/job" className="text-gray-700 hover:text-blue-600" onClick={() => setMenuOpen(false)}>Job</Link>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </button>
          </div>
          {/* Click outside to close */}
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </nav>
  );
}
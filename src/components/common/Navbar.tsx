// import React from 'react';
import { FiSearch} from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-10">
        <Link to="/" className="text-2xl font-bold text-blue-800">Transitley</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/universities" className="text-gray-700 hover:text-blue-600">Universities</Link>
            <Link to="/courses" className="text-gray-700 hover:text-blue-600">Courses</Link>
            <Link to="/scholarships" className="text-gray-700 hover:text-blue-600">Scholarships</Link>
            <Link to="/visa" className="text-gray-700 hover:text-blue-600">Visa Process</Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact Us</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search..." 
              className="pl-10 pr-4 py-2 border rounded-full text-sm"
            />
            <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}
import { useState } from 'react';

// Simple icon components to replace react-icons
const MenuIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-700">
    <line x1="3" y1="12" x2="21" y2="12" strokeLinecap="round"></line>
    <line x1="3" y1="6" x2="21" y2="6" strokeLinecap="round"></line>
    <line x1="3" y1="18" x2="21" y2="18" strokeLinecap="round"></line>
  </svg>
);

const CloseIcon = ({ size = 28 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-700">
    <line x1="18" y1="6" x2="6" y2="18" strokeLinecap="round"></line>
    <line x1="6" y1="6" x2="18" y2="18" strokeLinecap="round"></line>
  </svg>
);

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [careerDropdownOpen, setCareerDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const [mobileCareerDropdownOpen, setMobileCareerDropdownOpen] = useState(false);

  const closeAll = () => {
    setMenuOpen(false);
    setMobileDropdownOpen(false);
    setMobileCareerDropdownOpen(false);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center">
          <img src="/logo2.png" alt="Transitley Logo" className="h-10 w-auto" />
        </a>
        <sup className="ml-1 text-xs text-green-800 align-super">®</sup>
        <div className="flex items-center space-x-10 ml-auto">
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button 
                className="text-lg text-gray-700 hover:text-green-600 flex items-center focus:outline-none"
              >
                Study Abroad
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 mt-0 pt-2 w-40 z-20">
                  <div className="bg-white border rounded shadow-lg">
                    <a 
                      href="/studyuk" 
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      Study in UK
                    </a>
                    <a 
                      href="/studyusa" 
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      Study in USA
                    </a>
                    <a 
                      href="/studycanada" 
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      Study in Canada
                    </a>
                    <a 
                      href="/studygermany" 
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      Study in Germany
                    </a>
                  </div>
                </div>
              )}
            </div>            
            <a href="/languagecourses" className="text-lg text-gray-700 hover:text-green-600">Academy</a>
            <a href="/finance" className="text-lg text-gray-700 hover:text-green-600">Finance</a>
            <a href="/travel" className="text-lg text-gray-700 hover:text-green-600">Visas</a>
            <a href="/accommodation" className="text-lg text-gray-700 hover:text-green-600">Accommodation</a>
            
            {/* <div 
              className="relative"
              onMouseEnter={() => setCareerDropdownOpen(true)}
              onMouseLeave={() => setCareerDropdownOpen(false)}
            >
              <button 
                className="text-lg text-gray-700 hover:text-green-600 flex items-center focus:outline-none"
              >
                Career
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {careerDropdownOpen && (
                <div className="absolute left-0 mt-0 pt-2 w-48 z-20">
                  <div className="bg-white border rounded shadow-lg">
                    <a 
                      href="/studentambassador" 
                      className="block px-4 py-2 text-gray-700 hover:bg-green-50 hover:text-green-600"
                    >
                      Student Ambassador
                    </a>
                  </div>
                </div>
              )}
            </div> */}
            <a href="/career-transitley" className="text-lg text-gray-700 hover:text-green-600">Career</a>
            <a href="/job" className="text-lg text-gray-700 hover:text-green-600">Jobs</a>
            <a href="/business" className="text-lg text-gray-700 hover:text-green-600">Business</a>
            
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* Hamburger Icon */}
          <button
            className="md:hidden ml-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>


      {/* Mobile Side Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex">
          <div className="bg-white w-64 h-full p-6 flex flex-col space-y-4 relative overflow-y-auto">
            <button
              className="absolute top-4 right-4"
              onClick={closeAll}
              aria-label="Close menu"
            >
              <CloseIcon size={32} />
            </button>

            <div className="mt-8">
              <button 
                className="text-lg text-gray-700 hover:text-green-600 flex items-center focus:outline-none w-full"
                onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              >
                Study Abroad
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileDropdownOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <a 
                    href="/studyuk" 
                    className="block py-2 text-gray-700 hover:text-green-600"
                    onClick={closeAll}
                  >
                    Study in UK
                  </a>
                  <a 
                    href="/studyusa" 
                    className="block py-2 text-gray-700 hover:text-green-600"
                    onClick={closeAll}
                  >
                    Study in USA
                  </a>
                  <a 
                    href="/studycanada" 
                    className="block py-2 text-gray-700 hover:text-green-600"
                    onClick={closeAll}
                  >
                    Study in Canada
                  </a>
                  <a 
                    href="/studygermany" 
                    className="block py-2 text-gray-700 hover:text-green-600"
                    onClick={closeAll}
                  >
                    Study in Germany
                  </a>
                </div>
              )}
            </div>            
            <a href="/languagecourses" className="text-lg text-gray-700 hover:text-green-600" onClick={closeAll}>Academy</a>
            <a href="/finance" className="text-lg text-gray-700 hover:text-green-600" onClick={closeAll}>Finance</a>
            <a href="/travel" className="text-lg text-gray-700 hover:text-green-600" onClick={closeAll}>Visas</a>
            <a href="/accommodation" className="text-lg text-gray-700 hover:text-green-600" onClick={closeAll}>Accommodation</a>
            
            {/* <div>
              <button 
                className="text-lg text-gray-700 hover:text-green-600 flex items-center focus:outline-none w-full"
                onClick={() => setMobileCareerDropdownOpen(!mobileCareerDropdownOpen)}
              >
                Career
                <svg 
                  className={`ml-1 w-4 h-4 transition-transform ${mobileCareerDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileCareerDropdownOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <a 
                    href="/studentambassador" 
                    className="block py-2 text-gray-700 hover:text-green-600"
                    onClick={closeAll}
                  >
                    Student Ambassador
                  </a>
                </div>
              )}
            </div> */}
             <a href="/career-transitley" className="text-lg text-gray-700 hover:text-green-600" onClick={closeAll}>Career</a>
            <a href="/job" className="text-lg text-gray-700 hover:text-green-600" onClick={closeAll}>Jobs</a>
            <a href="/business" className="text-lg text-gray-700 hover:text-green-600" onClick={closeAll}>Business</a>
           
          </div>
          <div className="flex-1" onClick={closeAll} />
        </div>
      )}
    </nav>
  );
}
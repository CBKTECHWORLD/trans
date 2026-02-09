import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  link?: string;
  hasDropdown?: boolean;
  dropdownItems?: { title: string; link: string; }[];
  index?: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  link, 
  hasDropdown, 
  dropdownItems,
  index 
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    // Only auto-open on desktop
    if (window.innerWidth >= 1024) {
      setShowDropdown(true);
    }
  };

  const handleMouseLeave = () => {
    // Only auto-close on desktop
    if (window.innerWidth >= 1024) {
      timeoutRef.current = setTimeout(() => {
        setShowDropdown(false);
      }, 300);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (hasDropdown) {
      e.preventDefault();
      e.stopPropagation();
      // Toggle dropdown on click
      setShowDropdown(!showDropdown);
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      const target = event.target as Node;
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(target) &&
        cardRef.current &&
        !cardRef.current.contains(target)
      ) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [showDropdown]);

  if (hasDropdown && dropdownItems) {
    return (
      <div 
        ref={dropdownRef}
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          ref={cardRef}
          className="group cursor-pointer"
          onClick={handleClick}
        >
          <div className="bg-white rounded-xl px-6 py-3 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-green-100 hover:border-green-300">
            <div className="flex items-center gap-3">
              <div className="text-green-600 flex-shrink-0">
                {icon}
              </div>
              <h3 className="text-sm font-semibold text-gray-800 whitespace-nowrap">{title}</h3>
              {/* Dropdown indicator */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-4 w-4 text-green-600 transition-transform duration-200 ml-auto ${showDropdown ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Dropdown Options */}
        {showDropdown && (
          <>
            {/* Desktop: Show above horizontally */}
            <div className="hidden lg:block absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-[100]">
              <div className="flex gap-2">
                {dropdownItems.map((dropdownItem, idx) => (
                  <Link
                    key={idx}
                    to={dropdownItem.link}
                    className="group/item relative bg-gradient-to-br from-emerald-400 to-green-600 
                               px-5 py-2.5 rounded-lg shadow-lg 
                               hover:scale-105 hover:shadow-xl
                               transition-all duration-300 ease-out
                               border-2 border-emerald-300 text-center"
                    onClick={() => setShowDropdown(false)}
                  >
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
                    
                    <span className="relative text-white font-semibold text-sm whitespace-nowrap">
                      {dropdownItem.title}
                    </span>
                    
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover/item:opacity-100 
                                  bg-gradient-to-r from-transparent via-white/30 to-transparent
                                  transform -skew-x-12 transition-opacity duration-500"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Mobile: Show below vertically with better positioning */}
            <div className="lg:hidden absolute top-full left-0 right-0 mt-2 z-[100] px-2">
              <div className="bg-white rounded-lg shadow-xl border-2 border-green-200 p-2">
                <div className="flex flex-col gap-2">
                  {dropdownItems.map((dropdownItem, idx) => (
                    <Link
                      key={idx}
                      to={dropdownItem.link}
                      className="group/item relative bg-gradient-to-br from-emerald-400 to-green-600 
                                 px-5 py-3 rounded-lg shadow-md 
                                 active:scale-95
                                 transition-all duration-200 ease-out
                                 border-2 border-emerald-300 text-center"
                      onClick={() => setShowDropdown(false)}
                    >
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg"></div>
                      
                      <span className="relative text-white font-semibold text-sm whitespace-nowrap">
                        {dropdownItem.title}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // Regular card without dropdown
  return (
    <Link to={link || '#'} className="group">
      <div className="bg-white rounded-xl px-6 py-3 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-green-100 hover:border-green-300">
        <div className="flex items-center gap-3">
          <div className="text-green-600 flex-shrink-0">
            {icon}
          </div>
          <h3 className="text-sm font-semibold text-gray-800 whitespace-nowrap">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

const Role: React.FC = () => {
  // Define your services here - Easy to add or remove!
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Study Abroad",
      hasDropdown: true,
      dropdownItems: [
        { title: "Study in UK", link: "/studyuk" },
        { title: "Study in USA", link: "/studyusa" },
        { title: "Study in Canada", link: "/studycanada" },
        { title: "Study in Germany", link: "/studygermany" }
      ]
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7l9 6 9-6" />
        </svg>
      ),
      title: "Courier Services",
      link: "https://forms.gle/ix3BmsY5T7HoMfzn7"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: "Launch Your Business",
      link: "/business"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Forex & International Transfers",
      link: "https://transitley.extravelmoney.com/"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      title: "Accommodation",
      link: "/accommodation"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Visa services",
      link: "/travel"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      ),
      title: "IELTS and Foreign Language",
      link: "/languagecourses"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Find Jobs",
      link: "/job"
    }
  ];

  // Calculate positions in a circle
  const calculatePosition = (index: number, total: number) => {
    const radius = 220;
    const angle = (index * 360) / total - 90;
    const radian = (angle * Math.PI) / 180;
    
    const x = 50 + radius * Math.cos(radian) / 6;
    const y = 50 + radius * Math.sin(radian) / 6;
    
    return { x, y };
  };

  return (
    <section className="min-h-[80vh] py-12 bg-gray-50 relative overflow-hidden">
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Desktop Circular Layout */}
        <div className="hidden lg:block">
          <div className="relative w-full max-w-6xl mx-auto" style={{ height: '650px' }}>
            
            {/* Double Circular Arc Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
                  <stop offset="50%" style={{ stopColor: '#059669', stopOpacity: 0.4 }} />
                  <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
                </linearGradient>
              </defs>
              
              {/* Inner circle */}
              <circle 
                cx="50%" 
                cy="50%" 
                r="250" 
                fill="none" 
                stroke="url(#circleGrad)" 
                strokeWidth="1.5"
                opacity="0.5"
              />
              
              {/* Outer circle */}
              <circle 
                cx="50%" 
                cy="50%" 
                r="310" 
                fill="none" 
                stroke="url(#circleGrad)" 
                strokeWidth="1.5"
                opacity="0.5"
              />
            </svg>

            {/* Central Student Image */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" style={{ zIndex: 20 }}>
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-30"></div>
                
                {/* Image container */}
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl bg-white">
                  <img
                    src="/images/student2.jpg"
                    alt="Student"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (target.src.endsWith('.png')) {
                        target.src = '/images/student2.jpg';
                      } else {
                        target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="192" height="192"%3E%3Crect fill="%2310b981" width="192" height="192"/%3E%3Ctext x="50%25" y="50%25" font-size="64" text-anchor="middle" dy=".3em" fill="white"%3E👨‍🎓%3C/text%3E%3C/svg%3E';
                      }
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Service Cards */}
            {services.map((service, index) => {
              const pos = calculatePosition(index, services.length);
              return (
                <div 
                  key={index}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2" 
                  style={{ 
                    left: `${pos.x}%`, 
                    top: `${pos.y}%`,
                    zIndex: 10 
                  }}
                >
                  <FeatureCard
                    icon={service.icon}
                    title={service.title}
                    link={service.link}
                    hasDropdown={service.hasDropdown}
                    dropdownItems={service.dropdownItems}
                    index={index}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Grid Layout */}
        <div className="lg:hidden">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {services.map((service, index) => (
              <FeatureCard
                key={index}
                icon={service.icon}
                title={service.title}
                link={service.link}
                hasDropdown={service.hasDropdown}
                dropdownItems={service.dropdownItems}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Role;
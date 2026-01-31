import React from 'react';

const CourierSection: React.FC = () => {
  const handleBookingClick = () => {
    // Replace this URL with your actual Google Form link
    window.open('https://forms.gle/ix3BmsY5T7HoMfzn7', '_blank');
  };

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating planes - rotated to face right */}
        <div className="absolute top-10 left-0 animate-fly-across opacity-30">
          <svg className="w-16 h-16 text-teal-400 rotate-90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </div>
        <div className="absolute top-32 left-0 animate-fly-across-delayed opacity-20">
          <svg className="w-12 h-12 text-emerald-400 rotate-90" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/>
          </svg>
        </div>
        
        {/* Animated dotted path */}
        <svg className="absolute top-1/2 left-0 w-full h-32 -translate-y-1/2 opacity-20" xmlns="http://www.w3.org/2000/svg">
          <path d="M 0 16 Q 200 8, 400 16 T 800 16 T 1200 16 T 1600 16" 
                stroke="#14b8a6" 
                strokeWidth="2" 
                strokeDasharray="8,8" 
                fill="none"
                className="animate-dash"/>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with animated icon */}
        <div className="text-center mb-8">
          <div className="inline-block mb-4 animate-bounce-slow">
            <div className="bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full p-4 shadow-lg">
              <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
           From India to International Courier Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Fast door-to-door courier service worldwide in 10-12 working days
          </p>
        </div>

        {/* Features Grid with Button */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {/* Feature 1 - Doorstep Pickup & Delivery */}
          <div className="group bg-white border-2 border-teal-100 rounded-2xl p-6 hover:border-teal-400 hover:shadow-lg transition-all duration-300 text-center hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.1s'}}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-50 rounded-xl text-teal-600 mb-3 group-hover:rotate-12 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-800">
              Doorstep Pickup & Delivery
            </h3>
          </div>

          {/* Feature 2 - Worldwide */}
          <div className="group bg-white border-2 border-teal-100 rounded-2xl p-6 hover:border-teal-400 hover:shadow-lg transition-all duration-300 text-center hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-50 rounded-xl text-teal-600 mb-3 group-hover:rotate-180 transition-transform duration-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-800">
              Worldwide
            </h3>
          </div>

          {/* Feature 3 - Working Days */}
          <div className="group bg-white border-2 border-teal-100 rounded-2xl p-6 hover:border-teal-400 hover:shadow-lg transition-all duration-300 text-center hover:scale-105 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-teal-50 rounded-xl text-teal-600 mb-3 group-hover:animate-spin-slow transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-base font-semibold text-gray-800">
              10-12 Working Days
            </h3>
          </div>

          {/* Book Button - Pulsing animation */}
          <button
            onClick={handleBookingClick}
            className="relative bg-gradient-to-r from-teal-500 to-emerald-500 text-white rounded-2xl p-6 hover:from-teal-600 hover:to-emerald-600 transition-all duration-300 text-center font-semibold flex flex-col items-center justify-center gap-2 hover:scale-105 animate-fade-in-up overflow-hidden group"
            style={{animationDelay: '0.5s'}}
          >
            {/* Pulse effect */}
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 group-hover:animate-ping rounded-2xl"></div>
            
            <svg className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <span className="text-base relative z-10">Book Now</span>
            
            {/* Arrow that moves on hover */}
            <svg className="w-5 h-5 absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>

        {/* Animated truck moving across */}
        <div className="mt-8 relative h-16 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-200 to-transparent"></div>
          <div className="animate-truck-drive">
            <svg className="w-16 h-16 text-teal-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 18.5a1.5 1.5 0 01-1.5-1.5 1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5 1.5 1.5 0 01-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9A1.5 1.5 0 017.5 17 1.5 1.5 0 016 15.5 1.5 1.5 0 017.5 14 1.5 1.5 0 019 15.5m2.5-8.5h-6v-2h6m7 0h-6V7h5.5l2 2M17 12V9.5H3.5V17h1.03c-.05-.17-.03-.34-.03-.5a2.5 2.5 0 012.5-2.5 2.5 2.5 0 012.5 2.5c0 .16-.02.33-.03.5h6.06c-.06-.17-.03-.34-.03-.5a2.5 2.5 0 012.5-2.5 2.5 2.5 0 012.5 2.5c0 .16-.02.33-.03.5H21v-4.5h-4z"/>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes flyAcross {
          from {
            transform: translateX(-100px);
          }
          to {
            transform: translateX(calc(100vw + 100px));
          }
        }

        @keyframes truckDrive {
          from {
            transform: translateX(-100px);
          }
          to {
            transform: translateX(calc(100vw + 100px));
          }
        }

        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-fly-across {
          animation: flyAcross 15s linear infinite;
        }

        .animate-fly-across-delayed {
          animation: flyAcross 20s linear infinite;
          animation-delay: 5s;
        }

        .animate-truck-drive {
          animation: truckDrive 12s linear infinite;
        }

        .animate-dash {
          stroke-dasharray: 8, 8;
          animation: dash 20s linear infinite;
        }

        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 2s linear;
        }
      `}</style>
    </section>
  );
};

export default CourierSection;
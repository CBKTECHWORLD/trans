import React from 'react';

const RecognisedBy: React.FC = () => {
  // You can add more logos here
  const logos = [
    {
      name: 'Startup TN',
      src: '/images/startuptn.png',
      alt: 'Startup TN Logo'
    },
    {
      name: 'British Council',
      src: '/images/britishcouncil.png',
      alt: 'British Council Logo'
    },
    {
      name: 'MSME',
      src: '/images/msme.png',
      alt: 'MSME Logo'
    },
    // {
    //   name: 'Partner 4',
    //   src: '/path-to-logo-4.png',
    //   alt: 'Partner 4 Logo'
    // },
    // {
    //   name: 'Partner 5',
    //   src: '/path-to-logo-5.png',
    //   alt: 'Partner 5 Logo'
    // },
    // {
    //   name: 'Partner 6',
    //   src: '/path-to-logo-6.png',
    //   alt: 'Partner 6 Logo'
    // }
  ];

  return (
    <section className="py-12 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Trusted and Recognized by leading organizations
          </h2>
         
        </div>

        {/* Logos Container */}
        <div className="bg-white border-2 border-teal-100 rounded-2xl p-8 hover:border-teal-400 hover:shadow-lg transition-all duration-300">
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-teal-50 transition-all duration-300 hover:scale-110"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 w-auto object-contain  transition-all duration-300" //grayscale group-hover:grayscale-0 add if you want to show in bw color instead of color
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.innerHTML = `
                      <div class="flex flex-col items-center justify-center h-16 w-20">
                        <svg class="w-12 h-12 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd" />
                        </svg>
                        <p class="text-xs text-gray-400 mt-1">${logo.name}</p>
                      </div>
                    `;
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        {/* <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-gray-500 text-sm">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Verified Partner</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Certified Services</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Trusted by Thousands</span>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default RecognisedBy;
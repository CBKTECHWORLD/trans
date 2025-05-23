import React from 'react';

interface BannerProps {
  backgroundImage?: string;
}

const Intro: React.FC<BannerProps> = ({ backgroundImage }) => {
  const openGoogleForm = () => {
    window.open('https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc', '_blank');
  };

  return (
    <section
      className="relative py-4 md:py-4"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(to right, #3b5998, #1e4487)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 md:px-4">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="text-white mb-4 md:mb-0 w-full max-w-xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Land... <br />
              Live... <br />
              Launch...
            </h1>
            <p className="text-lg mb-4">
              From admissions to accommodations, forex to flights, jobs to entrepreneurship—Transitely brings it all under one roof for UK-bound immigrants.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition duration-300">
                Get Started
              </button>
              <button 
                onClick={openGoogleForm}
                className="bg-white hover:bg-gray-100 text-gray-800 font-medium py-3 px-6 rounded-md transition duration-300"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;

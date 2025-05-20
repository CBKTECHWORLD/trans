import React from 'react';

interface BannerProps {
  backgroundImage?: string;
}

const Intro: React.FC<BannerProps> = ({ backgroundImage }) => {
  const openGoogleForm = () => {
    // Replace with the actual Google Form URL
    window.open('https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc', '_blank');
  };

  return (
    <section
      className="relative py-16 md:py-24"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'linear-gradient(to right, #3b5998, #1e4487)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-white mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              One Portal. <br />
              Endless <br />
              Opportunities <br />
              in the UK
            </h1>
            <p className="text-lg mb-8">
              Find education, jobs, accommodation, and start your UK journey with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
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
          <div className="md:w-1/2">
            {/* This is where you will add your image */}
            <img src="/banner/intro2.jpg" alt="People smiling" className="w-full rounded-lg" /> 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
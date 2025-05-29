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
      className="relative py-4 md:py-4 overflow-hidden"
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : 'linear-gradient(135deg, #0a2342 0%, #19376d 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute animate-pulse bg-blue-900 opacity-30 rounded-full w-72 h-72 -top-16 -left-16 blur-2xl" />
        <div className="absolute animate-bounce bg-blue-700 opacity-20 rounded-full w-60 h-60 -bottom-20 right-10 blur-2xl" />
        <div className="absolute animate-spin-slow bg-blue-800 opacity-10 rounded-full w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      </div>
      <div className="container mx-auto px-4 md:px-4 relative z-10">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <div className="text-white mb-8 md:mb-4 w-full max-w-xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-down">
              Start Fresh. <br />
              Feel at Home. <br /></h1>
                <h3 className="text-xl mb-6"><em >Leaving home is hard—but with Transitley, you're never alone.</em></h3>
            
            <p className="text-l mb-6 animate-fade-in-up">
              From admissions to jobs, housing to flights, we guide your every step to build a life you love in the UK.
            </p>
            <p className="text-l mb-6 animate-fade-in-up">
              Because your dreams deserve more than just a destination—they deserve a journey that feels like home.


            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 hover:from-blue-800 hover:to-blue-900 text-white font-medium py-3 px-6 rounded-md transition duration-300 shadow-lg animate-pop">
                Begin Your New Chapter
              </button>
              <button 
                onClick={openGoogleForm}
                className="bg-white hover:bg-gray-100 text-blue-900 font-medium py-3 px-6 rounded-md transition duration-300 shadow-md animate-pop"
              >
                Book Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes fade-in-down {
          0% { opacity: 0; transform: translateY(-30px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px);}
          100% { opacity: 1; transform: translateY(0);}
        }
        @keyframes pop {
          0% { transform: scale(0.95);}
          60% { transform: scale(1.05);}
          100% { transform: scale(1);}
        }
        @keyframes spin-slow {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
        .animate-fade-in-down {
          animation: fade-in-down 1s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 1s 0.3s cubic-bezier(0.4,0,0.2,1) both;
        }
        .animate-pop {
          animation: pop 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .animate-spin-slow {
          animation: spin-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Intro;

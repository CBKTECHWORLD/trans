import React, { useState, useEffect } from 'react';

const Banner: React.FC = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  
  const banners = [
    {
      title: "Discover Exciting Events",
      subtitle: "Find and register for the best events happening near you",
      bgColor: "bg-blue-600"
    },
    {
      title: "Early Bird Discounts",
      subtitle: "Get special pricing on upcoming featured events",
      bgColor: "bg-purple-600"
    },
    {
      title: "Join Our Community",
      subtitle: "Connect with like-minded people at our exclusive events",
      bgColor: "bg-green-600"
    }
  ];

  useEffect(() => {
    // Auto rotate banner every 5 seconds
    const interval = setInterval(() => {
      setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const currentBanner = banners[currentBannerIndex];

  return (
    <div className={`w-full ${currentBanner.bgColor} transition-all duration-500 ease-in-out`}>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 transition-opacity duration-300">
          {currentBanner.title}
        </h1>
        <p className="text-xl text-white opacity-90 max-w-2xl mx-auto transition-opacity duration-300">
          {currentBanner.subtitle}
        </p>
        
        {/* Banner navigation dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBannerIndex(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentBannerIndex ? 'bg-white scale-125' : 'bg-white opacity-50'
              }`}
              aria-label={`Go to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
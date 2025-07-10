import React, { useState, useEffect } from 'react';

const Banner: React.FC = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  
  const banners = [
    {
      title: "Study Abroad Opportunities",
      subtitle: "Explore top universities and programs worldwide.",
      bgColor: "bg-blue-600",
      image: "/images/study-abroad.jpg",
      link: "/study-abroad"
    },
    {
      title: "Finance Your Education",
      subtitle: "Find scholarships, loans, and financial planning tips.",
      bgColor: "bg-purple-600",
      image: "/images/finance.jpg",
      link: "/finance"
    },
    {
      title: "Visa Guidance",
      subtitle: "Get expert advice on student, visitor, innovator and other visas applications.",
      bgColor: "bg-green-600",
      image: "/images/visa.jpg",
      link: "/visa"
    },
    {
      title: "Accommodation Solutions",
      subtitle: "Discover safe and affordable student housing before reaching the UK.",
      bgColor: "bg-yellow-600",
      image: "/images/accommodation.jpg",
      link: "/accommodation"
    },
    {
      title: "Jobs",
      subtitle: "Find full-time jobs, internships, part-time jobs and work placements.",
      bgColor: "bg-red-400",
      image: "/images/jobs.jpg",
      link: "/jobs"
    },
    {
      title: "Business & Entrepreneurship",
      subtitle: "Learn how to start and grow your business in the United Kingdom.",
      bgColor: "bg-indigo-600",
      image: "/images/business.jpg",
      link: "/business"
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
      <div className="container mx-auto px-4 py-20 text-center">
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
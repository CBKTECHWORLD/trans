import { useState, useEffect } from 'react';

export default function LargerVideoTestimonials() {
  const videoTestimonials = [
    { id: 1, name: "Priya K.", videoUrl: "#", thumbnail: "https://randomuser.me/api/portraits/women/65.jpg" },
    { id: 2, name: "Rahul M.", videoUrl: "#", thumbnail: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, name: "Ananya S.", videoUrl: "#", thumbnail: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 4, name: "Vikram J.", videoUrl: "#", thumbnail: "https://randomuser.me/api/portraits/men/75.jpg" },
    { id: 5, name: "Neha P.", videoUrl: "#", thumbnail: "https://randomuser.me/api/portraits/women/33.jpg" },
    { id: 6, name: "Arjun K.", videoUrl: "#", thumbnail: "https://randomuser.me/api/portraits/men/55.jpg" },
    { id: 7, name: "Sanya M.", videoUrl: "#", thumbnail: "https://randomuser.me/api/portraits/women/22.jpg" }
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const [isPlaying, setIsPlaying] = useState(null);
  const videosPerPage = 5;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet(prev => (prev + 1) % Math.ceil(videoTestimonials.length / videosPerPage));
    }, 5000);

    return () => clearInterval(interval);
  }, [videoTestimonials.length]);

  const visibleVideos = [];
  for (let i = 0; i < videosPerPage; i++) {
    const index = (currentSet * videosPerPage + i) % videoTestimonials.length;
    visibleVideos.push(videoTestimonials[index]);
  }

  return (
    <div className="max-w-4xl mx-auto p-4"> {/* Increased max-width */}
      <div className="flex space-x-6 overflow-hidden"> {/* Increased spacing between videos */}
        {visibleVideos.map((video, idx) => (
          <div key={`${video.id}-${idx}`} className="flex-shrink-0" style={{ width: '18%' }}> {/* Custom width */}
            {/* Larger video container */}
            <div className="relative pb-[150%] bg-gray-200 rounded-lg overflow-hidden shadow-md"> {/* Increased aspect ratio */}
              {isPlaying === video.id ? (
                <iframe
                  src={`${video.videoUrl}?autoplay=1`}
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay"
                  title={video.name}
                />
              ) : (
                <>
                  <img 
                    src={video.thumbnail} 
                    alt={video.name}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setIsPlaying(video.id)}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center"> {/* Larger play button */}
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11v11.78a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </button>
                </>
              )}
            </div>
            <p className="text-center text-base font-medium mt-3">{video.name}</p> {/* Larger text */}
          </div>
        ))}
      </div>
    </div>
  );
}
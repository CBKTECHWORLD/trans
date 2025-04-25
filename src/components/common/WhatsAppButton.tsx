import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);

  // Phone number and default message
  const phoneNumber = '919354449357'; // Replace with your number
  const defaultMessage = 'Hello CBK, I have a question about...';

  // Show button after component mounts
  useEffect(() => {
    setIsVisible(true);
    // Pulse animation every 10 seconds
    const pulseInterval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 10000);
    return () => clearInterval(pulseInterval);
  }, []);

  const handleClick = () => {
    // Open WhatsApp with your number and default message
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`,
      '_blank'
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleClick}
        className={`flex items-center justify-center w-16 h-16 rounded-full bg-[#25D366] text-white shadow-lg transform transition-all duration-300 hover:scale-110 ${
          isPulsing ? 'animate-pulse' : ''
        }`}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-8 h-8" />
        
        {/* Notification badge */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 text-xs text-white items-center justify-center">
            1
          </span>
        </span>
      </button>
      
      {/* Tooltip */}
      <div className="absolute right-20 bottom-2 bg-gray-800 text-white text-sm px-3 py-1 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        Chat with us!
      </div>
    </div>
  );
};

export default WhatsAppButton;
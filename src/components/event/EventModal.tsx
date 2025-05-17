import React from 'react';
import { Event } from '../../pages/EventsPage'; // Adjust the import path as necessary
import { Calendar, Clock, MapPin, X, ExternalLink } from 'lucide-react';

interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleRegister = () => {
    window.open(event.registerUrl, '_blank');
  };

  // Close modal when clicking outside the content
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden">
        {/* Modal Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        {/* Modal Content */}
        <div className="overflow-y-auto p-6 max-h-[calc(90vh-132px)]">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Left Column: Image */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Right Column: Event Details */}
            <div className="md:w-1/2">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Event Details</h4>
                <p className="text-gray-700">{event.fullDescription}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-700">
                  <Calendar className="h-5 w-5 mr-3 text-blue-600" />
                  <span>{event.date}</span>
                </div>
                
                <div className="flex items-center text-gray-700">
                  <Clock className="h-5 w-5 mr-3 text-blue-600" />
                  <span>{event.time}</span>
                </div>
                
                <div className="flex items-start text-gray-700">
                  <MapPin className="h-5 w-5 mr-3 text-blue-600 mt-1" />
                  <span>{event.location}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Price</h4>
                <p className="text-2xl font-bold text-blue-600">{event.price}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Modal Footer */}
        <div className="p-6 border-t bg-gray-50 flex justify-end">
          <button
            onClick={handleRegister}
            className="flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register Now
            <ExternalLink className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventModal;
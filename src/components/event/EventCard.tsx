import React from 'react';
import { Event } from '../../pages/EventsPage'; // Adjust the import path as necessary
import { Calendar, Clock, MapPin, Plus } from 'lucide-react';

interface EventCardProps {
  event: Event;
  onViewMore: () => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onViewMore }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Event Image */}
      <div className="h-48 overflow-hidden">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      {/* Event Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
        
        <p className="text-gray-600 mb-4 line-clamp-2">{event.shortDescription}</p>
        
        <div className="flex items-center text-gray-500 mb-2">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{event.date}</span>
        </div>
        
        <div className="flex items-center text-gray-500 mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          <span className="text-sm truncate">{event.location.split(',')[0]}</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg text-blue-600">{event.price}</span>
          
          <button 
            onClick={onViewMore}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span className="mr-1">More details</span>
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
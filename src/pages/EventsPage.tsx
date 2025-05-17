import React, { useState, useEffect } from 'react';
import Banner from '../components/event/Banner';
import EventCard from '../components/event/EventCard';
import EventModal from '../components/event/EventModal';
import eventsData from '../data/events.json'; 

// Define TypeScript interfaces
export interface Event {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  date: string;
  time: string;
  location: string;
  price: string;
  registerUrl: string;
}

const EventsPage: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    // In a real app, this might be an API call
    setEvents(eventsData.events);
  }, []);

  const openEventDetails = (event: Event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const closeEventDetails = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner Section */}
      <Banner />
      
      {/* Events Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Upcoming Events</h2>
        
        {events.length === 0 ? (
          <div className="text-center text-gray-500 text-lg py-20">
            No event, keep visiting again.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard 
                key={event.id} 
                event={event} 
                onViewMore={() => openEventDetails(event)} 
              />
            ))}
          </div>
        )}
      </section>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          isOpen={isModalOpen} 
          onClose={closeEventDetails} 
        />
      )}
    </div>
  );
};

export default EventsPage;
import React, { useState } from 'react';
import { MapPin, Plus } from 'lucide-react';
import { University } from '../types/University';
import UniversityModal from './UniversityModal';

interface UniversityListProps {
  universities: University[];
}

const UniversityList: React.FC<UniversityListProps> = ({ universities }) => {
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (university: University) => {
    setSelectedUniversity(university);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUniversity(null);
  };

  return (
    <div>
      {universities.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No universities found matching your criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {universities.map((university) => (
            <div key={university.id} className="bg-white overflow-hidden shadow rounded-lg relative">
              <div className="p-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-16 w-16 mr-4">
                    <img
                      className="h-16 w-16 object-contain"
                      src={university.logo}
                      alt={`${university.name} logo`}
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{university.name}</h3>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <MapPin size={16} className="mr-1" />
                      <span>{university.location}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                      {university.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => openModal(university)}
                  className="absolute bottom-4 right-4 inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-100 text-indigo-600 hover:bg-indigo-200"
                  aria-label={`View details for ${university.name}`}
                >
                  <Plus size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {selectedUniversity && (
        <UniversityModal
          university={selectedUniversity}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default UniversityList;
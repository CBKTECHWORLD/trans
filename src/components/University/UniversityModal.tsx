import React from 'react';
import { X, MapPin, Calendar, BookOpen, Globe } from 'lucide-react';
import { University } from '../types/University';

interface UniversityModalProps {
  university: University;
  isOpen: boolean;
  onClose: () => void;
}

const UniversityModal: React.FC<UniversityModalProps> = ({ university, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-10 overflow-y-auto">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75" onClick={onClose}></div>
        </div>

        <div 
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog" 
          aria-modal="true" 
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full">
                <div className="flex justify-between items-start">
                  <div className="flex items-center">
                    <img
                      src={university.logo}
                      alt={`${university.name} logo`}
                      className="h-16 w-16 object-contain mr-4"
                    />
                    <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                      {university.name}
                    </h3>
                  </div>
                  <button
                    onClick={onClose}
                    className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    <span className="sr-only">Close</span>
                    <X size={24} />
                  </button>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <MapPin size={16} className="mr-1" />
                    <span>{university.location}</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <Globe size={16} className="mr-1" />
                    <a 
                      href={university.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-indigo-600 hover:text-indigo-800 hover:underline"
                    >
                      Visit Website
                    </a>
                  </div>
                  
                  <p className="text-sm text-gray-500 mb-4">
                    {university.description}
                  </p>
                  
                  <div className="border-t border-gray-200 pt-4">
                    <h4 className="font-medium text-gray-900 mb-2">Available Programs</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {university.programs.map(program => {
                      const programUrl = program.toLowerCase() === 'bachelor' ? university.bachelorurl : university.masterurl;
                      return (
                        <a 
                        key={program} 
                        href={programUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 hover:bg-indigo-200"
                        >
                        <BookOpen size={12} className="mr-1" />
                        {program}
                        </a>
                      );
                      })}
                    </div>
                    
                    <h4 className="font-medium text-gray-900 mb-2">Intake Months</h4>
                    <div className="flex flex-wrap gap-2">
                      {university.intake.map(intake => (
                        <span key={intake} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <Calendar size={12} className="mr-1" />
                          {intake}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniversityModal;
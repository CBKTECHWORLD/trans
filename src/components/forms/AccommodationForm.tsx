// src/components/forms/AccommodationForm.tsx
import React from 'react';
import { Save } from 'lucide-react';
import { useApplication } from '../../contexts/ApplicationContext';

const AccommodationForm: React.FC = () => {
  const { formData, handleInputChange } = useApplication();
  const section = 'accommodation';
  
  return (
    <div className="p-6 bg-white rounded-lg text-blue-500 shadow">
      <h2 className="text-xl font-bold mb-4">Accommodation Details</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="accommodationType" className="block mb-1">Accommodation Type</label>
          <select 
            id="accommodationType" 
            className="w-full p-2 border rounded"
            value={formData[section].accommodationType as string}
            onChange={(e) => handleInputChange(section, 'accommodationType', e.target.value)}
          >
            <option value="">Select accommodation type</option>
            <option value="University Dormitory">University Dormitory</option>
            <option value="Private Apartment">Private Apartment</option>
            <option value="Shared Housing">Shared Housing</option>
            <option value="Homestay">Homestay</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="address" className="block mb-1">Address (if known)</label>
          <input 
            type="text" 
            id="address" 
            className="w-full p-2 border rounded"
            value={formData[section].address as string}
            onChange={(e) => handleInputChange(section, 'address', e.target.value)}
            placeholder="Enter address"
          />
        </div>
        
        <div>
          <label htmlFor="moveInDate" className="block mb-1">Move-in Date</label>
          <input 
            type="date" 
            id="moveInDate" 
            className="w-full p-2 border rounded"
            value={formData[section].moveInDate as string}
            onChange={(e) => handleInputChange(section, 'moveInDate', e.target.value)}
          />
        </div>
        
        <div className="pt-4">
          <button className="px-4 py-2 bg-blue-600 text-white rounded flex items-center">
            <Save className="mr-2 h-4 w-4" />
            Save and Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccommodationForm;
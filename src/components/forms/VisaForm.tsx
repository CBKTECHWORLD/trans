// src/components/forms/VisaForm.tsx
import React from 'react';
import { Save } from 'lucide-react';
import { useApplication } from '../../contexts/ApplicationContext';

const VisaForm: React.FC = () => {
  const { formData, handleCheckboxChange, handleInputChange } = useApplication();
  const section = 'visa';
  
  return (
    <div className="p-6 bg-white rounded-lg  text-blue-500 shadow">
      <h2 className="text-xl font-bold mb-4">Visa Process</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="visaType" className="block mb-1">Visa Type</label>
          <input 
            type="text" 
            id="visaType" 
            className="w-full p-2 border rounded"
            value={formData[section].visaType as string}
            onChange={(e) => handleInputChange(section, 'visaType', e.target.value)}
            placeholder="e.g., Student Visa (F-1), etc."
          />
        </div>
        
        <div>
          <label htmlFor="appointmentDate" className="block mb-1">Visa Appointment Date</label>
          <input 
            type="date" 
            id="appointmentDate" 
            className="w-full p-2 border rounded"
            value={formData[section].appointmentDate as string}
            onChange={(e) => handleInputChange(section, 'appointmentDate', e.target.value)}
          />
        </div>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="financialDocuments" 
            className="h-4 w-4 text-blue-600"
            checked={formData[section].financialDocuments as boolean}
            onChange={() => handleCheckboxChange(section, 'financialDocuments')}
          />
          <label htmlFor="financialDocuments" className="ml-2">Financial Documents Prepared</label>
        </div>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="healthInsurance" 
            className="h-4 w-4 text-blue-600"
            checked={formData[section].healthInsurance as boolean}
            onChange={() => handleCheckboxChange(section, 'healthInsurance')}
          />
          <label htmlFor="healthInsurance" className="ml-2">Health Insurance Arranged</label>
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

export default VisaForm;
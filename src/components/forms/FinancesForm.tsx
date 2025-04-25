// src/components/forms/FinancesForm.tsx
import React from 'react';
import { Save } from 'lucide-react';
import { useApplication } from '../../contexts/ApplicationContext';

const FinancesForm: React.FC = () => {
  const { formData, handleCheckboxChange } = useApplication();
  const section = 'finances';
  
  return (
    <div className="p-6 bg-white rounded-lg text-blue-500 shadow">
      <h2 className="text-xl font-bold mb-4">Financial Documentation</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="bankStatement" 
            className="h-4 w-4 text-blue-600"
            checked={formData[section].bankStatement as boolean}
            onChange={() => handleCheckboxChange(section, 'bankStatement')}
          />
          <label htmlFor="bankStatement" className="ml-2">Bank Statements (Last 6 months)</label>
        </div>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="sponsorLetter" 
            className="h-4 w-4 text-blue-600"
            checked={formData[section].sponsorLetter as boolean}
            onChange={() => handleCheckboxChange(section, 'sponsorLetter')}
          />
          <label htmlFor="sponsorLetter" className="ml-2">Sponsor Letter (if applicable)</label>
        </div>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="scholarshipApplication" 
            className="h-4 w-4 text-blue-600"
            checked={formData[section].scholarshipApplication as boolean}
            onChange={() => handleCheckboxChange(section, 'scholarshipApplication')}
          />
          <label htmlFor="scholarshipApplication" className="ml-2">Scholarship Applications Submitted</label>
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

export default FinancesForm;
// src/components/forms/DocumentationForm.tsx
import React from 'react';
import { Save } from 'lucide-react';
import { useApplication } from '../../contexts/ApplicationContext';

const DocumentationForm: React.FC = () => {
  const { formData, handleCheckboxChange, handleInputChange } = useApplication();
  const section = 'documentation';
  
  return (
    <div className="p-6 bg-white rounded-lg text-blue-500 shadow">
      <h2 className="text-xl font-bold mb-4">Documentation Requirements</h2>
      <div className="space-y-4">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="passport" 
            className="h-4 w-4 text-blue-600"
            checked={formData[section].passport as boolean}
            onChange={() => handleCheckboxChange(section, 'passport')}
          />
          <label htmlFor="passport" className="ml-2">Valid Passport (with at least 6 months validity)</label>
        </div>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="transcripts" 
            className="h-4 w-4 text-blue-600"
            checked={formData[section].transcripts as boolean}
            onChange={() => handleCheckboxChange(section, 'transcripts')}
          />
          <label htmlFor="transcripts" className="ml-2">Academic Transcripts</label>
        </div>
        
        <div className="flex items-center">
          <input 
            type="checkbox" 
            id="recommendation" 
            className="h-4 w-4 text-blue-600"
            checked={formData[section].recommendation as boolean}
            onChange={() => handleCheckboxChange(section, 'recommendation')}
          />
          <label htmlFor="recommendation" className="ml-2">Letters of Recommendation</label>
        </div>
        
        <div>
          <label htmlFor="englishTest" className="block mb-1">English Proficiency Test Score (IELTS/TOEFL)</label>
          <input 
            type="text" 
            id="englishTest" 
            className="w-full p-2 border rounded"
            value={formData[section].englishTest as string}
            onChange={(e) => handleInputChange(section, 'englishTest', e.target.value)}
            placeholder="Enter your test name and score"
          />
        </div>
        
        <div>
          <label htmlFor="personalStatement" className="block mb-1">Personal Statement</label>
          <textarea 
            id="personalStatement" 
            className="w-full p-2 border rounded"
            value={formData[section].personalStatement as string}
            onChange={(e) => handleInputChange(section, 'personalStatement', e.target.value)}
            placeholder="Enter details about your personal statement"
            rows={4}
          ></textarea>
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

export default DocumentationForm;
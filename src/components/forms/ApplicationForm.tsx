// src/components/forms/ApplicationForm.tsx
import React from 'react';
import { Save } from 'lucide-react';
import { useApplication } from '../../contexts/ApplicationContext';

const ApplicationForm: React.FC = () => {
  const { formData, handleInputChange } = useApplication();
  const section = 'application';
  
  return (
    <div className="p-6 bg-white rounded-lg text-blue-500 shadow">
      <h2 className="text-xl font-bold mb-4">University Application Details</h2>
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="university1" className="block mb-1">University #1</label>
            <input 
              type="text" 
              id="university1" 
              className="w-full p-2 border rounded"
              value={formData[section].university1 as string}
              onChange={(e) => handleInputChange(section, 'university1', e.target.value)}
              placeholder="University name"
            />
          </div>
          <div>
            <label htmlFor="program1" className="block mb-1">Program #1</label>
            <input 
              type="text" 
              id="program1" 
              className="w-full p-2 border rounded"
              value={formData[section].program1 as string}
              onChange={(e) => handleInputChange(section, 'program1', e.target.value)}
              placeholder="Program name"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="university2" className="block mb-1">University #2 (Optional)</label>
            <input 
              type="text" 
              id="university2" 
              className="w-full p-2 border rounded"
              value={formData[section].university2 as string}
              onChange={(e) => handleInputChange(section, 'university2', e.target.value)}
              placeholder="University name"
            />
          </div>
          <div>
            <label htmlFor="program2" className="block mb-1">Program #2 (Optional)</label>
            <input 
              type="text" 
              id="program2" 
              className="w-full p-2 border rounded"
              value={formData[section].program2 as string}
              onChange={(e) => handleInputChange(section, 'program2', e.target.value)}
              placeholder="Program name"
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="university3" className="block mb-1">University #3 (Optional)</label>
            <input 
              type="text" 
              id="university3" 
              className="w-full p-2 border rounded"
              value={formData[section].university3 as string}
              onChange={(e) => handleInputChange(section, 'university3', e.target.value)}
              placeholder="University name"
            />
          </div>
          <div>
            <label htmlFor="program3" className="block mb-1">Program #3 (Optional)</label>
            <input 
              type="text" 
              id="program3" 
              className="w-full p-2 border rounded"
              value={formData[section].program3 as string}
              onChange={(e) => handleInputChange(section, 'program3', e.target.value)}
              placeholder="Program name"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="applicationDeadline" className="block mb-1">Application Deadline</label>
          <input 
            type="date" 
            id="applicationDeadline" 
            className="w-full p-2 border rounded"
            value={formData[section].applicationDeadline as string}
            onChange={(e) => handleInputChange(section, 'applicationDeadline', e.target.value)}
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

export default ApplicationForm;
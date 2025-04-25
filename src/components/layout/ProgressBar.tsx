// src/components/layout/ProgressBar.tsx
import React from 'react';
import { useApplication } from '../../contexts/ApplicationContext';

const ProgressBar: React.FC = () => {
  const { stages } = useApplication();
  
  const completedStages = stages.filter(s => s.completed).length;
  const completionPercentage = (completedStages / stages.length) * 100;
  
  return (
    <div className="mb-6 bg-white p-6 rounded-lg shadow">
      <h3 className="text-lg font-medium mb-3">Application Progress</h3>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
      <div className="mt-2 text-sm text-gray-600">
        {completedStages} of {stages.length} stages completed
      </div>
    </div>
  );
};

export default ProgressBar;
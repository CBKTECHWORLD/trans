// src/components/layout/Sidebar.tsx
import React from 'react';
import { CheckCircle, Circle, ChevronRight } from 'lucide-react';
import { useApplication } from '../../contexts/ApplicationContext';

const Sidebar: React.FC = () => {
  const { stages, selectStage } = useApplication();
  
  return (
    <div className="w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h1 className="text-xl font-bold">Study Abroad</h1>
        <p className="text-sm text-gray-400">Application Tracker</p>
      </div>
      
      <div className="mt-4">
        {stages.map((stage) => (
          <div 
            key={stage.id}
            className={`flex items-center p-4 cursor-pointer ${stage.active ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => selectStage(stage.id)}
          >
            {stage.completed ? (
              <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
            ) : (
              <Circle className="h-5 w-5 text-gray-500 mr-3" />
            )}
            <span>{stage.name}</span>
            {stage.active && <ChevronRight className="ml-auto h-5 w-5" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
// src/components/layout/Header.tsx
import React, { useState } from 'react';
import { User, Settings, LogOut, ChevronDown } from 'lucide-react';
import { useApplication } from '../../contexts/ApplicationContext';

const Header: React.FC = () => {
  const [profileOpen, setProfileOpen] = useState<boolean>(false);
  const { stages } = useApplication();
  
  const activeStage = stages.find(stage => stage.active);
  
  return (
    <header className="bg-white shadow-sm z-10">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900">
          {activeStage?.name || 'Dashboard'}
        </h2>
        
        <div className="relative">
          <div 
            className="flex items-center space-x-4 cursor-pointer"
            onClick={() => setProfileOpen(!profileOpen)}
          >
            <span className="text-sm font-medium text-gray-700">User</span>
            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
              <User className="h-5 w-5 text-gray-600" />
            </div>
            <ChevronDown className="h-4 w-4 text-gray-500" />
          </div>
          
          {profileOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                <User className="h-4 w-4 mr-2" />
                Profile
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center">
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
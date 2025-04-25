// src/pages/Dashboard.tsx
import React from 'react';
import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import ProgressBar from '../components/layout/ProgressBar';
import DocumentationForm from '../components/forms/DocumentationForm';
import ApplicationForm from '../components/forms/ApplicationForm';
import VisaForm from '../components/forms/VisaForm';
import FinancesForm from '../components/forms/FinancesForm';
import AccommodationForm from '../components/forms/AccommodationForm';
import { useApplication } from '../contexts/ApplicationContext';
import PersonalInformationForm from '../components/forms/PersonalInformationForm';
import EducationHistoryForm from '../components/forms/EducationHistoryForm';

const Dashboard: React.FC = () => {
  const { stages } = useApplication();
  
  // Find the active stage
  const activeStage = stages.find(stage => stage.active);
  
  // Render the appropriate form based on the active stage
  const renderActiveForm = () => {
    if (!activeStage) return null;
    
    switch (activeStage.id) {

      case 'personal':
        return <PersonalInformationForm/>;
      case 'education':
        return <EducationHistoryForm/>;
      case 'documentation':
        return <DocumentationForm />;
      case 'application':
        return <ApplicationForm />;
      case 'visa':
        return <VisaForm />;
      case 'finances':
        return <FinancesForm />;
      case 'accommodation':
        return <AccommodationForm />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header />
        
        {/* Main content area */}
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            {/* Progress bar */}
            <ProgressBar />
            
            {/* Form area */}
            {renderActiveForm()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
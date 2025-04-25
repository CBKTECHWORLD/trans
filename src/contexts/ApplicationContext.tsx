// src/contexts/ApplicationContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define types for our application
type Stage = {
  id: string;
  name: string;
  completed: boolean;
  active: boolean;
};

type SectionData = {
  [key: string]: boolean | string | number | object;
  completedFields: number;
  totalFields: number;
};

// New Personal Information type
type PersonalInfoData = {
  firstName: string;
  middleName: string;
  lastName: string;
  dateOfBirth: string;
  firstLanguage: string;
  citizenship: string;
  passportNumber: string;
  passportExpiryDate: string;
  maritalStatus: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  email: string;
  phoneNumber: string;
};

// New Education History type
type EducationData = {
  countryOfEducation: string;
  highestLevelOfEducation: string;
  institutionName: string;
  fieldOfStudy: string;
  degreeAwarded: string;
  startDate: string;
  endDate: string;
  gpaScale: string;
  gpaScore: string;
};

type FormData = {
  [key: string]: SectionData;
  personalInfo: SectionData & {
    data: PersonalInfoData;
  };
  educationHistory: SectionData & {
    data: EducationData;
  };
  documentation: SectionData;
  application: SectionData;
  visa: SectionData;
  finances: SectionData;
  accommodation: SectionData;
};

type ApplicationContextType = {
  stages: Stage[];
  formData: FormData;
  handleCheckboxChange: (section: string, field: string) => void;
  handleInputChange: (section: string, field: string, value: string) => void;
  handlePersonalInfoChange: (field: keyof PersonalInfoData, value: string) => void;
  handleEducationChange: (field: keyof EducationData, value: string) => void;
  selectStage: (id: string) => void;
};

interface ApplicationProviderProps {
  children: ReactNode;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export function useApplication(): ApplicationContextType {
  const context = useContext(ApplicationContext);
  if (context === undefined) {
    throw new Error('useApplication must be used within an ApplicationProvider');
  }
  return context;
}

export const ApplicationProvider: React.FC<ApplicationProviderProps> = ({ children }) => {
  // Application stages and their status
  const [stages, setStages] = useState<Stage[]>([
    { id: 'personalInfo', name: 'Personal Information', completed: false, active: true },
    { id: 'educationHistory', name: 'Education History', completed: false, active: false },
    { id: 'documentation', name: 'Documentation', completed: false, active: false },
    { id: 'application', name: 'Application', completed: false, active: false },
    { id: 'visa', name: 'Visa Process', completed: false, active: false },
    { id: 'finances', name: 'Financial Documentation', completed: false, active: false },
    { id: 'accommodation', name: 'Accommodation', completed: false, active: false }
  ]);

  // State for tracking form completion in each section
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      data: {
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        firstLanguage: '',
        citizenship: '',
        passportNumber: '',
        passportExpiryDate: '',
        maritalStatus: '',
        gender: '',
        address: '',
        city: '',
        state: '',
        zipCode: '',
        country: '',
        email: '',
        phoneNumber: '',
      },
      completedFields: 0,
      totalFields: 16 // Middle name is optional
    },
    educationHistory: {
      data: {
        countryOfEducation: '',
        highestLevelOfEducation: '',
        institutionName: '',
        fieldOfStudy: '',
        degreeAwarded: '',
        startDate: '',
        endDate: '',
        gpaScale: '',
        gpaScore: '',
      },
      completedFields: 0,
      totalFields: 7 // GPA fields are optional
    },
    documentation: {
      passport: false,
      transcripts: false,
      recommendation: false,
      englishTest: '',
      personalStatement: '',
      completedFields: 0,
      totalFields: 5
    },
    application: {
      university1: '',
      program1: '',
      university2: '',
      program2: '',
      university3: '',
      program3: '',
      applicationDeadline: '',
      completedFields: 0,
      totalFields: 7
    },
    visa: {
      visaType: '',
      appointmentDate: '',
      financialDocuments: false,
      healthInsurance: false,
      completedFields: 0,
      totalFields: 4
    },
    finances: {
      bankStatement: false,
      sponsorLetter: false,
      scholarshipApplication: false,
      completedFields: 0,
      totalFields: 3
    },
    accommodation: {
      accommodationType: '',
      address: '',
      moveInDate: '',
      completedFields: 0,
      totalFields: 3
    }
  });

  // Function to handle checkbox changes
  const handleCheckboxChange = (section: string, field: string): void => {
    const updatedFormData = { ...formData };
    updatedFormData[section][field] = !updatedFormData[section][field] as boolean;
    
    // Count completed fields
    let completedFields = 0;
    Object.keys(updatedFormData[section]).forEach(key => {
      if (key !== 'completedFields' && key !== 'totalFields' && key !== 'data') {
        if (typeof updatedFormData[section][key] === 'boolean' && updatedFormData[section][key]) {
          completedFields++;
        } else if (typeof updatedFormData[section][key] === 'string' && (updatedFormData[section][key] as string).trim() !== '') {
          completedFields++;
        }
      }
    });
    
    updatedFormData[section].completedFields = completedFields;
    setFormData(updatedFormData);
    
    // Update stage completion status
    updateStageCompletion(section, updatedFormData);
  };

  // Function to handle text input changes
  const handleInputChange = (section: string, field: string, value: string): void => {
    const updatedFormData = { ...formData };
    updatedFormData[section][field] = value;
    
    // Count completed fields
    let completedFields = 0;
    Object.keys(updatedFormData[section]).forEach(key => {
      if (key !== 'completedFields' && key !== 'totalFields' && key !== 'data') {
        if (typeof updatedFormData[section][key] === 'boolean' && updatedFormData[section][key]) {
          completedFields++;
        } else if (typeof updatedFormData[section][key] === 'string' && (updatedFormData[section][key] as string).trim() !== '') {
          completedFields++;
        }
      }
    });
    
    updatedFormData[section].completedFields = completedFields;
    setFormData(updatedFormData);
    
    // Update stage completion status
    updateStageCompletion(section, updatedFormData);
  };

  // Function to handle personal information changes
  const handlePersonalInfoChange = (field: keyof PersonalInfoData, value: string): void => {
    const updatedFormData = { ...formData };
    updatedFormData.personalInfo.data[field] = value;
    
    // Count completed required fields (all except middleName)
    let completedFields = 0;
    Object.entries(updatedFormData.personalInfo.data).forEach(([key, value]) => {
      if (key !== 'middleName' && typeof value === 'string' && value.trim() !== '') {
        completedFields++;
      }
    });
    
    updatedFormData.personalInfo.completedFields = completedFields;
    setFormData(updatedFormData);
    
    // Update stage completion status
    updateStageCompletion('personalInfo', updatedFormData);
  };

  // Function to handle education history changes
  const handleEducationChange = (field: keyof EducationData, value: string): void => {
    const updatedFormData = { ...formData };
    updatedFormData.educationHistory.data[field] = value;
    
    // Count completed required fields (excluding optional GPA fields)
    let completedFields = 0;
    const requiredFields: Array<keyof EducationData> = [
      'countryOfEducation', 
      'highestLevelOfEducation', 
      'institutionName', 
      'fieldOfStudy', 
      'degreeAwarded', 
      'startDate', 
      'endDate'
    ];
    
    requiredFields.forEach(key => {
      if (updatedFormData.educationHistory.data[key] && 
          typeof updatedFormData.educationHistory.data[key] === 'string' && 
          (updatedFormData.educationHistory.data[key] as string).trim() !== '') {
        completedFields++;
      }
    });
    
    updatedFormData.educationHistory.completedFields = completedFields;
    setFormData(updatedFormData);
    
    // Update stage completion status
    updateStageCompletion('educationHistory', updatedFormData);
  };

  // Helper function to update stage completion
  const updateStageCompletion = (section: string, updatedFormData: FormData): void => {
    const updatedStages = [...stages];
    const stageIndex = updatedStages.findIndex(stage => stage.id === section);
    
    if (stageIndex !== -1) {
      updatedStages[stageIndex].completed = 
        updatedFormData[section].completedFields === updatedFormData[section].totalFields;
      setStages(updatedStages);
    }
  };

  // Function to select a stage
  const selectStage = (id: string): void => {
    const updatedStages = stages.map(stage => ({
      ...stage,
      active: stage.id === id
    }));
    setStages(updatedStages);
  };

  const value: ApplicationContextType = {
    stages,
    formData,
    handleCheckboxChange,
    handleInputChange,
    handlePersonalInfoChange,
    handleEducationChange,
    selectStage
  };

  return (
    <ApplicationContext.Provider value={value}>
      {children}
    </ApplicationContext.Provider>
  );
};
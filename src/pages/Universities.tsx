import React, { useState } from 'react';
import BenefitsSection from '../components/University/BenefitsSection';
import CountryTabs from '../components/University/CountryTabs';
import SearchBox from '../components/University/SearchBox';
import FilterSection from '../components/University/FilterSection';
import UniversityList from '../components/University/UniversityList';
// import { University } from '../components/types/University';
import ApplicationProgressStatic from '../components/layout/ApplicationProgressStatic';
import sampleUniversities from '../data/universities';

const Universities: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('uk');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedIntakes, setSelectedIntakes] = useState<string[]>([]);
  const [selectedCities, setSelectedCities] = useState<string[]>([]);
  const [selectedPrograms, setSelectedPrograms] = useState<string[]>([]);

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleIntakeChange = (intakes: string[]) => {
    setSelectedIntakes(intakes);
  };

  const handleCityChange = (cities: string[]) => {
    setSelectedCities(cities);
  };

  const handleProgramChange = (programs: string[]) => {
    setSelectedPrograms(programs);
  };

  // Filter universities based on selected filters
  const filteredUniversities = sampleUniversities[selectedCountry]?.filter(university => {
    // Filter by search query
    if (searchQuery && !university.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    // Filter by intake
    if (selectedIntakes.length > 0 && !university.intake.some(intake => selectedIntakes.includes(intake))) {
      return false;
    }
    
    // Filter by city
    if (selectedCities.length > 0 && !selectedCities.includes(university.city)) {
      return false;
    }
    
    // Filter by program
    if (selectedPrograms.length > 0 && !university.programs.some(program => selectedPrograms.includes(program))) {
      return false;
    }
    
    return true;
  }) || [];

  // Get unique cities for the selected country
  const availableCities = [...new Set(sampleUniversities[selectedCountry]?.map(uni => uni.city) || [])];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 xlg:px-8 py-8 bg-blue-200">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 ">University Details</h1>
      
      <BenefitsSection />
      <ApplicationProgressStatic />
      
      <div className="mt-8">
        <CountryTabs selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />
        
        <div className="mt-6 bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <SearchBox onSearchChange={handleSearchChange} />
              
              <FilterSection 
                availableIntakes={['January', 'May', 'September']}
                availableCities={availableCities}
                availablePrograms={['Bachelor', 'Master', 'PhD']}
                selectedIntakes={selectedIntakes}
                selectedCities={selectedCities}
                selectedPrograms={selectedPrograms}
                onIntakeChange={handleIntakeChange}
                onCityChange={handleCityChange}
                onProgramChange={handleProgramChange}
              />
            </div>
            
            <div className="lg:col-span-3">
              <UniversityList universities={filteredUniversities} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universities;
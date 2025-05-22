import React, { useState } from 'react';
// import BenefitsSection from '../components/University/BenefitsSection';
import CountryTabs from '../components/University/CountryTabs';
import SearchBox from '../components/University/SearchBox';
// import FilterSection from '../components/University/FilterSection';
import UniversityList from '../components/University/UniversityList';
// import { University } from '../components/types/University';
import ApplicationProgressStatic from '../components/layout/ApplicationProgressStatic';
import sampleUniversities from '../data/universities';

const Universities: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string>('uk');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleCountryChange = (country: string) => {
    setSelectedCountry(country);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const filteredUniversities = sampleUniversities[selectedCountry]?.filter(university => {
    if (searchQuery && !university.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  }) || [];

  return (
    <div className="min-h-screen bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 xlg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-100 mb-8">University Details</h1>
        {/* <BenefitsSection /> */}
        <ApplicationProgressStatic />

        <div className="mt-8">
          <CountryTabs selectedCountry={selectedCountry} onCountryChange={handleCountryChange} />

          <div className="mt-6 bg-white rounded-lg shadow p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <SearchBox onSearchChange={handleSearchChange} />
                {/* <FilterSection ... /> */}
              </div>
              <div className="lg:col-span-3">
                <UniversityList universities={filteredUniversities} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Universities;
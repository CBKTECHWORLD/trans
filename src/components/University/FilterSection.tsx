import React from 'react';

interface FilterSectionProps {
  availableIntakes: string[];
  availableCities: string[];
  availablePrograms: string[];
  selectedIntakes: string[];
  selectedCities: string[];
  selectedPrograms: string[];
  onIntakeChange: (intakes: string[]) => void;
  onCityChange: (cities: string[]) => void;
  onProgramChange: (programs: string[]) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  availableIntakes,
  availableCities,
  availablePrograms,
  selectedIntakes,
  selectedCities,
  selectedPrograms,
  onIntakeChange,
  onCityChange,
  onProgramChange
}) => {
  
  const handleIntakeChange = (intake: string) => {
    const newIntakes = selectedIntakes.includes(intake)
      ? selectedIntakes.filter(i => i !== intake)
      : [...selectedIntakes, intake];
    onIntakeChange(newIntakes);
  };

  const handleCityChange = (city: string) => {
    const newCities = selectedCities.includes(city)
      ? selectedCities.filter(c => c !== city)
      : [...selectedCities, city];
    onCityChange(newCities);
  };

  const handleProgramChange = (program: string) => {
    const newPrograms = selectedPrograms.includes(program)
      ? selectedPrograms.filter(p => p !== program)
      : [...selectedPrograms, program];
    onProgramChange(newPrograms);
  };

  return (
    <div className="mt-6 space-y-6">
      {/* Intake Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Intake Month</h3>
        <div className="space-y-2">
          {availableIntakes.map(intake => (
            <div key={intake} className="flex items-center">
              <input
                id={`intake-${intake}`}
                name={`intake-${intake}`}
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                checked={selectedIntakes.includes(intake)}
                onChange={() => handleIntakeChange(intake)}
              />
              <label htmlFor={`intake-${intake}`} className="ml-2 text-sm text-gray-700">
                {intake}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* City Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">City</h3>
        <div className="space-y-2">
          {availableCities.map(city => (
            <div key={city} className="flex items-center">
              <input
                id={`city-${city}`}
                name={`city-${city}`}
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                checked={selectedCities.includes(city)}
                onChange={() => handleCityChange(city)}
              />
              <label htmlFor={`city-${city}`} className="ml-2 text-sm text-gray-700">
                {city}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Program Level Filter */}
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Program Level</h3>
        <div className="space-y-2">
          {availablePrograms.map(program => (
            <div key={program} className="flex items-center">
              <input
                id={`program-${program}`}
                name={`program-${program}`}
                type="checkbox"
                className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                checked={selectedPrograms.includes(program)}
                onChange={() => handleProgramChange(program)}
              />
              <label htmlFor={`program-${program}`} className="ml-2 text-sm text-gray-700">
                {program}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
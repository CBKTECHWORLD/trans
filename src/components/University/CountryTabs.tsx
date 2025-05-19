import React from 'react';

interface CountryTabsProps {
  selectedCountry: string;
  onCountryChange: (country: string) => void;
}

const countries = [
  { id: 'uk', name: 'United Kingdom' },
  // { id: 'us', name: 'United States' },
  // { id: 'au', name: 'Australia' },
  // { id: 'ca', name: 'Canada' }
];

const CountryTabs: React.FC<CountryTabsProps> = ({ selectedCountry, onCountryChange }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8" aria-label="Country Tabs">
        {countries.map((country) => (
          <button
            key={country.id}
            onClick={() => onCountryChange(country.id)}
            className={`
              whitespace-nowrap py-4 px-1 border-b-2 font-medium text-m
              ${selectedCountry === country.id
                ? 'border-indigo-500 text-white'
                : 'border-transparent text-gray-900 hover:text-gray-700 hover:border-gray-300'}
            `}
          >
            {country.name}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default CountryTabs;
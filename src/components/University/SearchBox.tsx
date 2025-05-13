import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface SearchBoxProps {
  onSearchChange: (query: string) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSearchChange }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearchChange(e.target.value);
  };

  return (
    <div className="mb-6">
      <label htmlFor="university-search" className="block text-sm font-medium text-gray-700 mb-1">
        Search University
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search size={18} className="text-gray-400" />
        </div>
        <input
          type="text"
          id="university-search"
          className="block w-full pl-10 pr-3 py-2 border border-blue-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-blue-900"
          placeholder="University name..."
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default SearchBox;
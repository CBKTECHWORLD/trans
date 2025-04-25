import React from 'react';
import { useApplication } from '../../contexts/ApplicationContext';

const PersonalInformationForm: React.FC = () => {
  const { formData, handlePersonalInfoChange } = useApplication();
  const personalData = formData.personalInfo.data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    handlePersonalInfoChange(name as any, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to next stage
    // This could be implemented using React Router or state management
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Personal Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name*
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              placeholder="Enter your first name"
              value={personalData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
              Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              name="middleName"
              placeholder="Optional"
              value={personalData.middleName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name*
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              placeholder="Enter your last name"
              value={personalData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        {/* Personal Details Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
              Date of Birth*
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              required
              value={personalData.dateOfBirth}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="firstLanguage" className="block text-sm font-medium text-gray-700">
              First Language*
            </label>
            <input
              type="text"
              id="firstLanguage"
              name="firstLanguage"
              required
              placeholder="Your first/native language"
              value={personalData.firstLanguage}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        {/* Citizenship & Passport Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="citizenship" className="block text-sm font-medium text-gray-700">
              Citizenship*
            </label>
            <input
              type="text"
              id="citizenship"
              name="citizenship"
              required
              placeholder="Country of citizenship"
              value={personalData.citizenship}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="passportNumber" className="block text-sm font-medium text-gray-700">
              Passport Number*
            </label>
            <input
              type="text"
              id="passportNumber"
              name="passportNumber"
              required
              placeholder="Enter your passport number"
              value={personalData.passportNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="passportExpiryDate" className="block text-sm font-medium text-gray-700">
              Passport Expiry Date*
            </label>
            <input
              type="date"
              id="passportExpiryDate"
              name="passportExpiryDate"
              required
              value={personalData.passportExpiryDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        {/* Status Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="maritalStatus" className="block text-sm font-medium text-gray-700">
              Marital Status*
            </label>
            <select
              id="maritalStatus"
              name="maritalStatus"
              required
              value={personalData.maritalStatus}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
              <option value="widowed">Widowed</option>
              <option value="separated">Separated</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender*
            </label>
            <select
              id="gender"
              name="gender"
              required
              value={personalData.gender}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
              <option value="prefer_not_to_say">Prefer not to say</option>
            </select>
          </div>
        </div>
        
        {/* Address Section */}
        <div>
          <h3 className="text-lg font-medium mb-2 text-gray-800">Address Information</h3>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                Street Address*
              </label>
              <input
                type="text"
                id="address"
                name="address"
                required
                placeholder="Enter your street address"
                value={personalData.address}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                  City*
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  placeholder="Enter city"
                  value={personalData.city}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                  State/Province*
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  required
                  placeholder="Enter state or province"
                  value={personalData.state}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              
              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                  ZIP/Postal Code*
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  required
                  placeholder="Enter postal code"
                  value={personalData.zipCode}
                  onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country*
              </label>
              <input
                type="text"
                id="country"
                name="country"
                required
                placeholder="Enter country"
                value={personalData.country}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="your.email@example.com"
              value={personalData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
              Phone Number*
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              required
              placeholder="Include country code (e.g., +1 234 567 8900)"
              value={personalData.phoneNumber}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Save & Continue
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonalInformationForm;
import React from 'react';
import { useApplication } from '../../contexts/ApplicationContext';

const EducationHistoryForm: React.FC = () => {
  const { formData, handleEducationChange } = useApplication();
  const educationData = formData.educationHistory.data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    handleEducationChange(name as any, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to next stage
    // This could be implemented using React Router or state management
  };

  const educationLevels = [
    { value: 'high_school', label: 'High School / Secondary School' },
    { value: 'associates_degree', label: 'Associate\'s Degree / Foundation' },
    { value: 'bachelors_degree', label: 'Bachelor\'s Degree' },
    { value: 'masters_degree', label: 'Master\'s Degree' },
    { value: 'doctoral_degree', label: 'Doctoral Degree (PhD, etc.)' },
    { value: 'professional_degree', label: 'Professional Degree (MD, JD, etc.)' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">Education History</h2>
      <p className="text-gray-600 mb-6">Please enter information for the highest academic level that you have completed.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Country and Education Level */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="countryOfEducation" className="block text-sm font-medium text-gray-700">
              Country of Education*
            </label>
            <input
              type="text"
              id="countryOfEducation"
              name="countryOfEducation"
              required
              placeholder="Country where you received your education"
              value={educationData.countryOfEducation}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="highestLevelOfEducation" className="block text-sm font-medium text-gray-700">
              Highest Level of Education*
            </label>
            <select
              id="highestLevelOfEducation"
              name="highestLevelOfEducation"
              required
              value={educationData.highestLevelOfEducation}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select education level</option>
              {educationLevels.map((level) => (
                <option key={level.value} value={level.value}>
                  {level.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Institution and Field Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="institutionName" className="block text-sm font-medium text-gray-700">
              Institution Name*
            </label>
            <input
              type="text"
              id="institutionName"
              name="institutionName"
              required
              placeholder="Name of school, college, or university"
              value={educationData.institutionName}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="fieldOfStudy" className="block text-sm font-medium text-gray-700">
              Field of Study*
            </label>
            <input
              type="text"
              id="fieldOfStudy"
              name="fieldOfStudy"
              required
              placeholder="Major or area of concentration"
              value={educationData.fieldOfStudy}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        {/* Degree and Dates */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label htmlFor="degreeAwarded" className="block text-sm font-medium text-gray-700">
              Degree Awarded*
            </label>
            <input
              type="text"
              id="degreeAwarded"
              name="degreeAwarded"
              required
              placeholder="Full name of degree or diploma"
              value={educationData.degreeAwarded}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
              Start Date*
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              required
              value={educationData.startDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
              End Date*
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              required
              value={educationData.endDate}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        {/* GPA Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="gpaScale" className="block text-sm font-medium text-gray-700">
              GPA Scale
            </label>
            <select
              id="gpaScale"
              name="gpaScale"
              value={educationData.gpaScale}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select scale (optional)</option>
              <option value="4.0">4.0 Scale</option>
              <option value="5.0">5.0 Scale</option>
              <option value="10.0">10.0 Scale</option>
              <option value="100">100 Point Scale</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label htmlFor="gpaScore" className="block text-sm font-medium text-gray-700">
              GPA Score
            </label>
            <input
              type="text"
              id="gpaScore"
              name="gpaScore"
              placeholder="Your GPA or grade average (optional)"
              value={educationData.gpaScore}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        
        {/* Upload Transcript Option */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Academic Transcript (Optional)
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="transcript-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                >
                  <span>Upload a file</span>
                  <input id="transcript-upload" name="transcript-upload" type="file" className="sr-only" />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
            </div>
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

export default EducationHistoryForm;
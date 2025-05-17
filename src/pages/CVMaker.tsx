// FIXED CVMaker.tsx
import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';

interface CVFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  education: string;
  softwareSkills: string;
  profile: string;
  templateType: string; // Added template type selection
  experiences: {
    position: string;
    company: string;
    duration: string;
    responsibilities: string;
  }[];
}

const CVMaker: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, control } = useForm<CVFormData>({
    defaultValues: {
      templateType: 'blue', // Default template
      experiences: [{
        position: '',
        company: '',
        duration: '',
        responsibilities: ''
      }]
    }
  });
  const [formData, setFormData] = useState<CVFormData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  
  // Add field array control for experiences
  const { fields, append, remove } = useFieldArray({
    control,
    name: "experiences"
  });
  
  const onSubmit = async (data: CVFormData) => {
    setFormData(data);
    setIsGenerating(true);
    
    try {
      // Updated port to match server port (4000)
      const response = await fetch('http://localhost:4000/generate-cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate CV');
      }
      
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    } catch (error) {
      console.error('Error generating CV:', error);
      alert('Failed to generate CV. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };
  
  const resetForm = () => {
    setFormData(null);
    if (pdfUrl) {
      URL.revokeObjectURL(pdfUrl);
      setPdfUrl(null);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">CV Maker</h1>
      
      {!formData ? (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
          <h2 className="text-xl font-semibold mb-6">Enter Your CV Information</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register('fullName', { required: 'Full name is required' })}
              />
              {errors.fullName && (
                <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: 'Invalid email format'
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('phone', { required: 'Phone number is required' })}
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register('address', { required: 'Address is required' })}
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>
                )}
              </div>
            </div>
            
            {/* Added Template Type Selection */}
            <div>
              <label htmlFor="templateType" className="block text-sm font-medium text-gray-700 mb-1">
                CV Template Style
              </label>
              <select
                id="templateType"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400"
                {...register('templateType', { required: 'Template style is required' })}
              >
                <option value="blue">Blue Professional</option>
                <option value="orange">Orange Modern</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="education" className="block text-sm font-medium text-gray-700 mb-1">
                Education
              </label>
              <textarea
                id="education"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32 text-gray-400"
                {...register('education', { required: 'Education is required' })}
                placeholder="Bachelor of Science in Computer Science&#10;University of Technology - 2015-2019"
              />
              {errors.education && (
                <p className="mt-1 text-sm text-red-600">{errors.education.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="softwareSkills" className="block text-sm font-medium text-gray-700 mb-1">
                Software Skills (comma separated)
              </label>
              <input
                id="softwareSkills"
                type="text"
                className="w-full px-3 py-2 border text-gray-400 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register('softwareSkills', { required: 'Software skills are required' })}
                placeholder="JavaScript, React.js, TypeScript, Node.js, HTML, CSS"
              />
              {errors.softwareSkills && (
                <p className="mt-1 text-sm text-red-600">{errors.softwareSkills.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="profile" className="block text-sm font-medium text-gray-700 mb-1">
                Professional Profile
              </label>
              <textarea
                id="profile"
                className="w-full px-3 py-2 border text-gray-400 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32"
                {...register('profile', { required: 'Profile is required' })}
                placeholder="Detail-oriented software engineer with 5+ years of experience in full-stack development. Proficient in modern JavaScript frameworks with a focus on building scalable web applications."
              />
              {errors.profile && (
                <p className="mt-1 text-sm text-red-600">{errors.profile.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Work Experience
              </label>
              <div className="space-y-4">
                {fields.map((field, index) => (
                  <div key={field.id} className="border text-gray-400  border-gray-200 rounded p-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor={`experiences.${index}.position`} className="block text-sm font-medium text-gray-700 mb-1">
                          Position
                        </label>
                        <input
                          id={`experiences.${index}.position`}
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          {...register(`experiences.${index}.position`, { required: 'Position is required' })}
                          placeholder="Senior Frontend Developer"
                        />
                        {errors.experiences?.[index]?.position && (
                          <p className="mt-1 text-sm text-red-600">{errors.experiences[index]?.position?.message}</p>
                        )}
                      </div>
                      <div>
                        <label htmlFor={`experiences.${index}.company`} className="block text-sm font-medium text-gray-700 mb-1">
                          Company
                        </label>
                        <input
                          id={`experiences.${index}.company`}
                          type="text"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          {...register(`experiences.${index}.company`, { required: 'Company is required' })}
                          placeholder="Tech Solutions Inc."
                        />
                        {errors.experiences?.[index]?.company && (
                          <p className="mt-1 text-sm text-red-600">{errors.experiences[index]?.company?.message}</p>
                        )}
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor={`experiences.${index}.duration`} className="block text-sm font-medium text-gray-700 mb-1">
                        Duration (e.g., Jan 2019 to Dec 2023)
                      </label>
                      <input
                        id={`experiences.${index}.duration`}
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        {...register(`experiences.${index}.duration`, { required: 'Duration is required' })}
                        placeholder="January 2020 to Present"
                      />
                      {errors.experiences?.[index]?.duration && (
                        <p className="mt-1 text-sm text-red-600">{errors.experiences[index]?.duration?.message}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor={`experiences.${index}.responsibilities`} className="block text-sm font-medium text-gray-700 mb-1">
                        Responsibilities (one per line)
                      </label>
                      <textarea
                        id={`experiences.${index}.responsibilities`}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-32"
                        {...register(`experiences.${index}.responsibilities`, { required: 'Responsibilities are required' })}
                        placeholder="Led development of company's customer portal using React and TypeScript&#10;Implemented CI/CD pipeline reducing deployment time by 40%&#10;Mentored junior developers and conducted code reviews"
                      />
                      {errors.experiences?.[index]?.responsibilities && (
                        <p className="mt-1 text-sm text-red-600">{errors.experiences[index]?.responsibilities?.message}</p>
                      )}
                    </div>
                    {fields.length > 1 && (
                      <div className="mt-4 flex justify-end">
                        <button
                          type="button"
                          onClick={() => remove(index)}
                          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                          Remove Experience
                        </button>
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex justify-center">
                  <button
                    type="button"
                    onClick={() => append({ position: '', company: '', duration: '', responsibilities: '' })}
                    className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    + Add Another Experience
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Generate CV
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          {isGenerating ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-lg">Generating your CV...</p>
            </div>
          ) : (
            <>
              {pdfUrl ? (
                <div className="space-y-6">
                  <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <iframe 
                      src={pdfUrl} 
                      className="w-full h-128" 
                      style={{ height: '70vh' }}
                      title="CV Preview" 
                    />
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={pdfUrl}
                      download={`CV_${formData.fullName.replace(/\s+/g, '_')}.pdf`}
                      className="px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                    >
                      Download CV
                    </a>
                    
                    <button
                      onClick={resetForm}
                      className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                    >
                      Create Another CV
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-lg text-red-600">Failed to generate CV. Please try again.</p>
                  <button
                    onClick={resetForm}
                    className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Back to Form
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default CVMaker;
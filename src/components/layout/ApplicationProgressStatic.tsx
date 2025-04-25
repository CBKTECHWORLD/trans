import React from 'react';

const ApplicationProcessSteps: React.FC = () => {
  return (
    <div className="w-full py-12 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="relative flex justify-between items-start mb-16">
          {/* Connecting line - more prominent */}
          <div 
            className="absolute h-[2px] bg-gray-300" 
            style={{ 
              top: "32px",
              left: "56px", 
              right: "56px",
              zIndex: 0
            }}
          ></div>
          
          {/* Step 1 */}
          <div className="flex flex-col items-center relative z-10">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white mb-3 shadow-md">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">STEP 1</p>
              <h3 className="text-blue-500 font-medium">Check Your</h3>
              <p className="text-blue-500">Eligibility</p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center relative z-10">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white mb-3 shadow-md">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                <path d="M9 14l2 2 4-4" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">STEP 2</p>
              <h3 className="text-blue-500 font-medium">Submit Your</h3>
              <p className="text-blue-500">Application</p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex flex-col items-center relative z-10">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white mb-3 shadow-md">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <line x1="3" y1="9" x2="21" y2="9" />
                <path d="M9 14h6" />
                <path d="M9 18h6" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">STEP 3</p>
              <h3 className="text-blue-500 font-medium">Get a Letter</h3>
              <p className="text-blue-500">of Acceptance</p>
            </div>
          </div>
          
          {/* Step 4 */}
          <div className="flex flex-col items-center relative z-10">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white mb-3 shadow-md">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">STEP 4</p>
              <h3 className="text-blue-500 font-medium">Apply for</h3>
              <p className="text-blue-500">Your Visa</p>
            </div>
          </div>
          
          {/* Step 5 */}
          <div className="flex flex-col items-center relative z-10">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-500 text-white mb-3 shadow-md">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22.08 12.53c.02-.2.03-.4.03-.63C22.1 6.4 17.6 2 12.05 2c-5.05 0-9.27 3.68-10.03 8.5" />
                <path d="M22.08 19.53c.02-.2.03-.4.03-.63C22.1 13.4 17.6 9 12.05 9c-5.05 0-9.27 3.68-10.03 8.5" />
                <path d="M5.78 20.53l4.26.73L11.46 17" />
              </svg>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 mb-1">STEP 5</p>
              <h3 className="text-blue-500 font-medium">Start Your</h3>
              <p className="text-blue-500">Journey</p>
            </div>
          </div>
        </div>
        
        {/* Explore Button */}
        <div className="flex justify-center">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-md shadow-md transition-colors">
            Explore now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcessSteps;
import { useState } from 'react';
import { BookOpen, Search, Globe, Award } from 'lucide-react';

const Best = () => {
  const [activeTab, setActiveTab] = useState('consultation');

  const tabs = [
    { 
      id: 'consultation', 
      icon: <BookOpen className="w-5 h-5 mr-2" />, 
      label: 'Consultation Session',
      content: (
        <div className="flex items-center">
          <div className="w-1/2 pr-8">
            <h3 className="text-xl font-bold text-blue-500 mb-4">Consultation Session</h3>
            <p className="text-gray-600 mb-4">
              Expert guidance that proves to be of immense benefit while you make critical decisions about your educational and career aspirations. Get all your questions about the selection of study destination, the right course, as well as choosing your educational institution answered by our professional team.
            </p>
            <div className="space-y-3 text-gray-900">
              <div className="flex items-center ">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <span>Goal-oriented counselling</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <span>School/university insights-rankings, courses, and scholarships offered</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <span>Choose from 10000+ course options and study destinations</span>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img 
              src="/images/B2.jpg" 
              alt="Consultation Session" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )
    },
    { 
      id: 'test-preparation', 
      icon: <Search className="w-5 h-5 mr-2" />, 
      label: 'Test Preparation',
      content: (
        <div className="flex items-center">
          <div className="w-1/2 pr-8">
            <h3 className="text-xl font-bold text-green-500 mb-4">Test Preparation</h3>
            <p className="text-gray-600 mb-4">
              Preparing for tests is one of the most significant milestones in your journey abroad. Get mentored by a certified and dedicated team of tutors and accomplish your desired score smoothly.
            </p>
            <div className="space-y-3 text-gray-900">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <span>Effectual preparation material for practice</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <span>Learn from certified trainers in interactive classrooms and free demo sessions</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full mr-3"></div>
                <span>Mock tests for performance evaluation</span>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img 
              src="/images/B1.jpg" 
              alt="Test Preparation" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )
    },
    { 
      id: 'program-selection', 
      icon: <Globe className="w-5 h-5 mr-2" />, 
      label: 'Program Selection',
      content: (
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Program Selection</h3>
          <p className="text-gray-600">
            Discover the perfect academic program tailored to your career goals and personal aspirations. Our expert counselors help you navigate through numerous options to find your ideal study path.
          </p>
        </div>
      )
    },
    { 
      id: 'scholarship-guidance', 
      icon: <Award className="w-5 h-5 mr-2" />, 
      label: 'Scholarship Guidance',
      content: (
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold text-red-900 mb-4">Scholarship Guidance</h3>
          <p className="text-gray-600">
            Unlock financial opportunities with our comprehensive scholarship guidance. We help you identify, apply for, and secure scholarships that can make your international education dreams a reality.
          </p>
        </div>
      )
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">WHY WE ARE THE BEST?</h2>
      <p className="text-center text-gray-600 mb-12">
        You are taken care of all your requirements as we assist you at every step of your journey to your desired study abroad destination.
      </p>

      <div className="flex flex-col">
        {/* Horizontal Tabs */}
        <div className="flex mb-6 space-x-2 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center p-3 rounded-lg transition-colors duration-200 whitespace-nowrap ${
                activeTab === tab.id 
                  ? 'bg-blue-900 text-white' 
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-6 bg-grey-300 rounded-lg shadow-md">
          {tabs.find(tab => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default Best;
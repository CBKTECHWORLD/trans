import React from 'react';
import { Globe, GraduationCap, IndianRupee, Lightbulb } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Global Exposure',
    description: 'Gain international experience and build a global network.',
    icon: Globe
  },
  {
    id: 2,
    title: 'Quality Education',
    description: 'Access world-class academic programs and research opportunities.',
    icon: GraduationCap
  },
  {
    id: 3,
    title: 'Career Advancement',
    description: 'Enhance your career prospects and earning potential.',
    icon: IndianRupee
  },
  {
    id: 4,
    title: 'Personal Growth',
    description: 'Develop independence, cultural awareness, and adaptability.',
    icon: Lightbulb
  }
];

const BenefitsSection = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefits of Studying Abroad</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="flex flex-col items-center text-center p-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-100 text-indigo-600 mb-4">
              <benefit.icon size={24} />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-500">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsSection;
import React from 'react';
import { Clock, Users, Award, ExternalLink, Globe } from 'lucide-react';

const LanguageCourseCards = () => {
const languages = [
    // {
    //     name: 'Spanish',
    //     flag: '🇪🇸',
    //     gradient: 'from-red-500 to-yellow-500',
    //     bgColor: 'bg-red-50',
    //     textColor: 'text-red-800',
    //     buttonGradient: 'from-red-600 to-yellow-600 hover:from-red-700 hover:to-yellow-700',
    //     description: 'Master the world\'s 2nd most spoken language. Perfect for business and travel.',
    //     level: 'Beginner to Advanced',
    //     students: '500+ enrolled'
    // },
    {
        name: 'French',
        flag: '🇫🇷',
        gradient: 'from-blue-500 to-purple-500',
        bgColor: 'bg-blue-50',
        textColor: 'text-blue-800',
        buttonGradient: 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700',
        description: 'Learn the language of love and diplomacy. Essential for European opportunities.',
        level: 'Beginner to Advanced',
        students: '350+ enrolled'
    },
    {
        name: 'German',
        flag: '🇩🇪',
        gradient: 'from-gray-600 to-red-600',
        bgColor: 'bg-gray-50',
        textColor: 'text-gray-800',
        buttonGradient: 'from-gray-600 to-red-600 hover:from-gray-700 hover:to-red-700',
        description: 'Gateway to Europe\'s strongest economy. High demand in tech and engineering.',
        level: 'Beginner to Advanced',
        students: '280+ enrolled'
    },
    {
        name: 'English (IELTS)',
        flag: '🇬🇧',
        gradient: 'from-green-500 to-blue-500',
        bgColor: 'bg-green-50',
        textColor: 'text-green-800',
        buttonGradient: 'from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700',
        description: 'Prepare for the IELTS exam. Improve your English for study, work, and migration.',
        level: 'Beginner to Advanced',
        students: '600+ enrolled'
    }

];

  const handleBookNow = (language: string) => {
    // Replace with your actual Google Form URL for each language
    // You can use different forms for each language or pass the language as a parameter
    window.open(`https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc?language=${language.toLowerCase()}`, '_blank');
  };

  return (
    <div className="w-full bg-white">
        <div className="max-w-7xl mx-auto p-6">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                    Foreign Language Certificate Courses
                </h2>
                <p className="text-gray-600">
                    Choose your language and start your journey to global communication
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {languages.map((language, index) => (
                    <div
                        key={language.name}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 w-64"
                    >
                        {/* Language Header */}
                        <div className={`h-20 bg-gradient-to-br ${language.gradient} relative`}>
                            <div className="absolute inset-0 bg-amber-600 bg-opacity-10"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center text-white">
                                    {/* <div className="text-2xl mb-1">{language.flag}</div> */}
                                    <h3 className="text-lg font-bold">{language.name}</h3>
                                </div>
                            </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-4">
                            <div className="mb-3">
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    {language.description}
                                </p>
                            </div>

                            {/* Course Stats */}
                            <div className="space-y-2 mb-3">
                                {/* <div className="flex items-center justify-between text-xs">
                                    <div className="flex items-center space-x-1 text-gray-600">
                                        <Clock className="w-3 h-3 text-blue-500" />
                                        <span>6 Months</span>
                                    </div>
                                    <div className="flex items-center space-x-1 text-gray-600">
                                        <Award className="w-3 h-3 text-green-500" />
                                        <span>Certificate</span>
                                    </div>
                                </div> */}
                                
                                <div className="flex items-center justify-between text-xs">
                                    {/* <div className="flex items-center space-x-1 text-gray-600">
                                        <Users className="w-3 h-3 text-purple-500" />
                                        <span>{language.students}</span>
                                    </div> */}
                                    <span className={`px-2 py ${language.bgColor} ${language.textColor} rounded-full text-xs font-medium`}>
                                        {language.level}
                                    </span>
                                </div>
                            </div>

                            {/* Pricing */}
                            {/* <div className="mb-3 p-2 bg-gray-50 rounded-lg">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-lg font-bold text-gray-800">₹12,999</span>
                                        <span className="text-xs text-gray-500 line-through ml-1">₹18,999</span>
                                    </div>
                                    <div className="text-xs text-green-600 font-semibold">30% OFF</div>
                                </div>
                            </div> */}

                            {/* Book Now Button */}
                            <button
                                onClick={() => handleBookNow(language.name)}
                                className={`w-full bg-gradient-to-r ${language.buttonGradient} text-white font-semibold py-2 px-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm`}
                            >
                                <span>Book {language.name}</span>
                                <ExternalLink className="w-3 h-3" />
                            </button>

                            {/* Additional Info */}
                            {/* <div className="mt-2 text-center">
                                <p className="text-xs text-gray-400">
                                    Free demo • Money-back guarantee
                                </p>
                            </div> */}
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Can't decide? Get a free consultation!
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                    Our language experts will help you choose the perfect course for your goals
                </p>
                <button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    onClick={() => window.open('https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc', '_blank')}
                >
                    Get Free Consultation
                </button>
            </div>
        </div>
    </div>
  );
};

export default LanguageCourseCards;
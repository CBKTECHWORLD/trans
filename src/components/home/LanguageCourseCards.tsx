import React from 'react';
import { BookOpen, Landmark, GraduationCap } from 'lucide-react';

const GOOGLE_FORM_URL = 'http://academy.transitley.com/';

const languages = [
    { name: 'French', icon: <Landmark className="w-10 h-10 text-green-500" />, url: GOOGLE_FORM_URL },
    { name: 'German', icon: <Landmark className="w-10 h-10 text-green-500" />, url: GOOGLE_FORM_URL },
    { name: 'IELTS Academic and General', icon: <GraduationCap className="w-10 h-10 text-green-500" />, url: GOOGLE_FORM_URL },    
    { name: 'GMAT', icon: <GraduationCap className="w-10 h-10 text-green-500" />, url: GOOGLE_FORM_URL },
    { name: 'TOEFL', icon: <BookOpen className="w-10 h-10 text-green-500" />, url: GOOGLE_FORM_URL },
    { name: 'PTE', icon: <BookOpen className="w-10 h-10 text-green-500" />, url: GOOGLE_FORM_URL },
    { name: 'SAT', icon: <GraduationCap className="w-10 h-10 text-green-500" />, url: GOOGLE_FORM_URL },    
    { name: 'GRE', icon: <GraduationCap className="w-10 h-10 text-green-500" />, url: GOOGLE_FORM_URL },
];

const LanguageCourseCards = () => (
    <div className="w-full bg-white">
        <div className="max-w-4xl mx-auto p-6">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    Foreign Language Certificate Courses
                </h2>
                <p className="text-gray-600">
                    Choose your language and start your journey to global communication
                </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
                {languages.map((language) => (
                    <a
                        key={language.name}
                        href={language.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center border-2 border-green-500 rounded-xl p-6 w-48 bg-white shadow hover:border-green-400 transition no-underline"
                    >
                        <div className="mb-3">
                            {language.icon}
                        </div>
                        <div className="text-lg font-semibold text-green-800">{language.name}</div>
                    </a>
                ))}
            </div>
        </div>
    </div>
);

export default LanguageCourseCards;

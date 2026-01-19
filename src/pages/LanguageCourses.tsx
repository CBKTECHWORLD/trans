import React, { useState } from 'react';
import { Globe, ArrowRight, CheckCircle2, Clock, Users, Award, Search } from 'lucide-react';

interface Course {
  id: string;
  name: string;
  category: 'language' | 'test' | 'technical';
  description: string;
  highlights: string[];
}

const LanguageCourses: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const courses: Course[] = [
    // IELTS Courses
    {
      id: 'ielts-academic',
      name: 'IELTS Academic',
      category: 'test',
      description: 'Comprehensive IELTS Academic preparation with self-prep, champion, and specialized marathon programs.',
      highlights: ['Self Prep & Champion', 'Reading/Writing/Speaking Marathons', '8-Week Program']
    },
    {
      id: 'ielts-general',
      name: 'IELTS General',
      category: 'test',
      description: 'Complete IELTS General Training preparation including champion courses and skill-specific marathons.',
      highlights: ['Champion Program', 'Skill Marathons', '6-Week Duration']
    },
    // Other English Tests
    {
      id: 'duolingo',
      name: 'Duolingo English Test',
      category: 'test',
      description: 'Focused preparation for Duolingo English Test certification.',
      highlights: ['Champion Program', '60-Day Access', 'Quick Results']
    },
    {
      id: 'pte',
      name: 'PTE Academic & Core',
      category: 'test',
      description: 'PTE Academic and PTE Core preparation with live classes, self-prep, and champion programs.',
      highlights: ['Live & Self Prep', 'Champion Course', '6-Week Program']
    },
    {
      id: 'toefl',
      name: 'TOEFL iBT',
      category: 'test',
      description: 'Complete TOEFL iBT preparation with live interactive classes.',
      highlights: ['Live Classes', '12-Week Program', 'iBT Format']
    },
    {
      id: 'celpip',
      name: 'CELPIP',
      category: 'test',
      description: 'CELPIP test preparation with self-prep and champion programs.',
      highlights: ['Self Prep & Champion', 'Canadian English', '6-Week Course']
    },
    // French Language
    {
      id: 'french',
      name: 'French',
      category: 'language',
      description: 'Complete French language courses from Basic to TEF including A1, A2, B1, and B2 levels.',
      highlights: ['Basic to B2 Levels', 'TEF Preparation', 'Weekend Batches']
    },
    {
      id: 'tef',
      name: 'TEF Champion',
      category: 'test',
      description: 'Specialized preparation for Test d\'Évaluation de Français (TEF).',
      highlights: ['4-Week Program', 'Expert Training', '60-Day Access']
    },
    // German Language
    {
      id: 'german',
      name: 'German',
      category: 'language',
      description: 'German language courses covering Basic to B1 levels including A1, A2, and B1 certifications.',
      highlights: ['Basic to B1 Levels', 'Flexible Timings', 'Structured Learning']
    },
    // Competitive Exams
    {
      id: 'gre',
      name: 'Shorter GRE',
      category: 'test',
      description: 'Complete GRE preparation with live classes, self-prep, and champion programs.',
      highlights: ['Live & Self Prep', 'Champion Course', '12-Week Program']
    },
    {
      id: 'sat',
      name: 'Digital SAT',
      category: 'test',
      description: 'Digital SAT preparation with multiple learning options including live classes and self-study.',
      highlights: ['Live Classes', 'Champion Program', '12-Week Duration']
    },
    {
      id: 'gmat',
      name: 'GMAT',
      category: 'test',
      description: 'Focused GMAT preparation for business school admissions.',
      highlights: ['8-Week Program', 'Comprehensive Prep', 'Expert Guidance']
    },
    // Additional Courses
    {
      id: 'spoken-english',
      name: 'Spoken English',
      category: 'language',
      description: 'Enhance your English speaking skills with our champion program.',
      highlights: ['Champion Program', '10-Week Course', 'Practical Training']
    },
    {
      id: 'career',
      name: 'Career & Technical Skills',
      category: 'technical',
      description: 'Professional development courses including Career Essentials, Google Workspace, Bizz Tech, and Skill Catalyst.',
      highlights: ['Google Workspace', 'Career Essentials', 'Skill Development']
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Compact Hero Section */}
      <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <Globe className="w-10 h-10 flex-shrink-0" />
              <div>
                <h1 className="text-3xl font-bold">Professional Certificate Courses</h1>
                <p className="text-teal-50 text-sm mt-1">Languages • Competitive Exams • Technical Skills</p>
              </div>
            </div>
            <div className="flex gap-3">
              <a
                href="http://academy.transitley.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border border-white/30 px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Login
              </a>
              <a
                href="http://academy.transitley.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 inline-flex items-center gap-2 bg-white text-teal-900 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors"
              >
                Register Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <p className="text-teal-50 text-sm mt-4 max-w-4xl">
            Join thousands of successful students achieving academic and professional goals through expert-led programs with flexible schedules, experienced instructors, and proven strategies.
          </p>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-teal-700" />
              <span className="text-sm text-gray-700">Flexible Schedule</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-teal-700" />
              <span className="text-sm text-gray-700">Expert Instructors</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-teal-700" />
              <span className="text-sm text-gray-700">High Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Courses */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Box */}
          <div className="mb-6">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-600 focus:border-transparent outline-none"
              />
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="border border-gray-200 rounded-lg p-4 hover:border-teal-600 hover:shadow-md transition-all"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {course.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                  {course.description}
                </p>
                <div className="space-y-1">
                  {course.highlights.map((highlight, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              No courses found matching "{searchQuery}"
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Ready to Advance Your Career?</h2>
          <p className="text-gray-300 mb-4">Take the first step towards achieving your certification goals today.</p>
          <a
            href="http://academy.transitley.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
          >
            Enroll Now
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default LanguageCourses;
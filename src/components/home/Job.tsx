import React, { useState } from 'react';
import { Briefcase, Clock, Users, Target, FileText, Globe, CheckCircle, Calendar, ArrowRight, Phone } from 'lucide-react';

export default function Job() {
  const [selectedJobType, setSelectedJobType] = useState('part-time');

  const partTimePhases = [
    {
      phase: 'Phase 1: Understand the Landscape',
      days: 'Days 1-7',
      color: 'bg-blue-600',
      items: [
        'Know working limits for your visa type',
        'Research top hiring sectors',
        'Understand hourly wage expectations (£10.42-£14/hr)'
      ]
    },
    {
      phase: 'Phase 2: Prepare Your Tools',
      days: 'Days 8-15',
      color: 'bg-green-600',
      items: [
        'Create UK-ready CV (one page)',
        'Write general cover letter template',
        'Gather required documents'
      ]
    },
    {
      phase: 'Phase 3: Build Online Visibility',
      days: 'Days 16-25',
      color: 'bg-purple-600',
      items: [
        'Register on job platforms',
        'Optimize LinkedIn profile',
        'Set up job alerts'
      ]
    },
    {
      phase: 'Phase 4: Apply & Network',
      days: 'Days 26-45',
      color: 'bg-orange-600',
      items: [
        'Apply 5-10 jobs daily',
        'Do walk-ins at retail/restaurants',
        'Leverage networking groups'
      ]
    },
    {
      phase: 'Phase 5: Interview & Start',
      days: 'Days 45-60',
      color: 'bg-red-600',
      items: [
        'Prepare for basic interviews',
        'Complete right-to-work documentation',
        'Secure job offers'
      ]
    }
  ];

  const fullTimeMonths = [
    {
      month: 'Month 1: Foundation',
      color: 'bg-indigo-600',
      tasks: [
        'Research UK job market & visa requirements',
        'Choose 3-4 target job titles',
        'Build UK-standard CV and cover letter',
        'Understand Shortage Occupation List'
      ]
    },
    {
      month: 'Month 2: Visibility',
      color: 'bg-emerald-600',
      tasks: [
        'Optimize LinkedIn for UK market',
        'Start purposeful networking',
        'Join industry groups and events',
        'Connect with UK recruiters'
      ]
    },
    {
      month: 'Month 3: Action',
      color: 'bg-amber-600',
      tasks: [
        'Apply to 20-30 targeted positions weekly',
        'Follow up strategically',
        'Track applications systematically',
        'Secure interviews and offers'
      ]
    }
  ];

  const partTimeSectors = [
    { sector: 'Retail', companies: 'Tesco, Sainsbury\'s, Primark, Asda', wage: '£10.42-£12/hr' },
    { sector: 'Hospitality', companies: 'Costa Coffee, Greggs, KFC, Wetherspoons', wage: '£10.42-£13/hr' },
    { sector: 'Warehousing', companies: 'Amazon, DPD, Royal Mail', wage: '£11-£14/hr' },
    { sector: 'Delivery', companies: 'Uber Eats, Deliveroo, Just Eat', wage: '£12-£15/hr' },
    { sector: 'Customer Service', companies: 'Call centres, Universities', wage: '£10.42-£12/hr' }
  ];

  const jobPlatforms = [
    { name: 'Indeed UK', type: 'General', best: 'Wide variety of roles' },
    { name: 'LinkedIn Jobs', type: 'Professional', best: 'Networking & skilled roles' },
    { name: 'Reed.co.uk', type: 'General', best: 'UK-focused with CV tools' },
    { name: 'TotalJobs', type: 'General', best: 'Comprehensive search filters' },
    { name: 'Glassdoor UK', type: 'Research', best: 'Company reviews & salaries' },
    { name: 'StudentJob UK', type: 'Part-time', best: 'Student-friendly roles' }
  ];

  const visaRequirements = [
    { visa: 'Tier 4/Student', hours: '20 hours/week (term time)', holiday: 'Full-time during holidays' },
    // { visa: 'Skilled Worker', hours: 'No restrictions', holiday: 'Full-time allowed' },
    { visa: 'Dependents', hours: 'Usually no restrictions', holiday: 'Check visa conditions' }
  ];

  const requiredDocuments = [
    'Right to Work letter or visa/BRP',
    'National Insurance Number',
    'Bank account details',
    'Proof of address',
    'CV and cover letter',
    'References (if available)'
  ];

  const networkingTips = [
    'Join Facebook groups for your community/location',
    'Attend industry meetups and webinars',
    'Connect with UK professionals on LinkedIn',
    'Ask classmates and acquaintances for leads',
    'Message recruiters directly but respectfully',
    'Join professional associations in your field'
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-2">
            UK Job Search Guide
          </h1>
          <p className="text-xl text-slate-700">
            Strategic approaches for landing part-time and full-time positions
          </p>
        </header>

        <div className="mb-8">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setSelectedJobType('part-time')}
              className={`px-6 py-3 rounded-lg font-semibold ${
                selectedJobType === 'part-time'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              Part-Time Jobs (30-60 Days)
            </button>
            <button
              onClick={() => setSelectedJobType('full-time')}
              className={`px-6 py-3 rounded-lg font-semibold ${
                selectedJobType === 'full-time'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100'
              }`}
            >
              Full-Time Jobs (3 Months)
            </button>
          </div>
        </div>

        {selectedJobType === 'part-time' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-blue-600 px-6 py-4 flex items-center">
                <Calendar className="text-white mr-2" size={24} />
                <h2 className="text-xl font-semibold text-white">Part-Time Job Strategy Timeline</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {partTimePhases.map((phase, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                      <div className={`${phase.color} px-4 py-3 flex items-center justify-between`}>
                        <h3 className="text-white font-semibold">{phase.phase}</h3>
                        <span className="text-white text-sm">{phase.days}</span>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2">
                          {phase.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 mt-0.5" size={16} />
                              <span className="text-slate-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-emerald-600 px-6 py-4 flex items-center">
                  <Briefcase className="text-white mr-2" size={24} />
                  <h2 className="text-xl font-semibold text-white">Top Hiring Sectors</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {partTimeSectors.map((sector, index) => (
                      <div key={index} className="border-l-4 border-emerald-500 pl-4">
                        <h3 className="font-semibold text-slate-800">{sector.sector}</h3>
                        <p className="text-sm text-slate-600 mb-1">{sector.companies}</p>
                        <p className="text-sm font-medium text-emerald-700">{sector.wage}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-amber-600 px-6 py-4 flex items-center">
                  <Clock className="text-white mr-2" size={24} />
                  <h2 className="text-xl font-semibold text-white">Working Hours by Visa</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {visaRequirements.map((visa, index) => (
                      <div key={index} className="bg-amber-50 p-4 rounded-lg">
                        <h3 className="font-semibold text-amber-800 mb-2">{visa.visa}</h3>
                        <p className="text-sm text-slate-700 mb-1">
                          <span className="font-medium">Regular:</span> {visa.hours}
                        </p>
                        <p className="text-sm text-slate-700">
                          <span className="font-medium">Holidays:</span> {visa.holiday}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedJobType === 'full-time' && (
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-indigo-600 px-6 py-4 flex items-center">
                <Target className="text-white mr-2" size={24} />
                <h2 className="text-xl font-semibold text-white">3-Month Full-Time Job Strategy</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {fullTimeMonths.map((month, index) => (
                    <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                      <div className={`${month.color} px-4 py-3`}>
                        <h3 className="text-white font-semibold">{month.month}</h3>
                      </div>
                      <div className="p-4">
                        <ul className="space-y-2">
                          {month.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-start">
                              <CheckCircle className="text-green-500 mr-2 mt-0.5" size={16} />
                              <span className="text-slate-700 text-sm">{task}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-purple-600 px-6 py-4 flex items-center">
                <FileText className="text-white mr-2" size={24} />
                <h2 className="text-xl font-semibold text-white">Key Requirements for Full-Time Roles</h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3">Visa Requirements:</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5" size={16} />
                        <span className="text-slate-700">Valid job offer from licensed sponsor</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5" size={16} />
                        <span className="text-slate-700">Minimum salary £26,200 per annum or £10.75/hour</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5" size={16} />
                        <span className="text-slate-700">English language proficiency</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5" size={16} />
                        <span className="text-slate-700">Job-specific qualifications</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800 mb-3">Expected Outcomes (Week 12):</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5" size={16} />
                        <span className="text-slate-700">Multiple screening calls</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5" size={16} />
                        <span className="text-slate-700">2-4 second-stage interviews</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5" size={16} />
                        <span className="text-slate-700">1-2 serious job offers</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5" size={16} />
                        <span className="text-slate-700">Strong professional network</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-teal-600 px-6 py-4 flex items-center">
              <Globe className="text-white mr-2" size={24} />
              <h2 className="text-xl font-semibold text-white">Essential Job Platforms</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {jobPlatforms.map((platform, index) => (
                  <div key={index} className="border border-slate-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-slate-800">{platform.name}</h3>
                      <span className="text-xs bg-teal-100 text-teal-800 px-2 py-1 rounded">
                        {platform.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600">{platform.best}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-rose-600 px-6 py-4 flex items-center">
              <FileText className="text-white mr-2" size={24} />
              <h2 className="text-xl font-semibold text-white">Required Documents</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {requiredDocuments.map((doc, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5" size={16} />
                    <span className="text-slate-700">{doc}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-rose-50 rounded-lg">
                <p className="text-sm text-rose-800">
                  <span className="font-semibold">Tip:</span> If you don't have a National Insurance Number, 
                  apply via gov.uk as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-8">
          <div className="bg-indigo-800 px-6 py-4 flex items-center">
            <Users className="text-white mr-2" size={24} />
            <h2 className="text-xl font-semibold text-white">Networking Strategies</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {networkingTips.map((tip, index) => (
                <div key={index} className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-indigo-600 text-white rounded-full h-6 w-6 text-xs font-bold mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-slate-800 text-sm">{tip}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-slate-100 rounded-lg">
              <p className="text-sm text-slate-600 italic">
                <span className="font-semibold">Remember:</span> 80% of job placements involve networking. 
                Building relationships is as important as having the right skills.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-100 rounded-lg p-5 text-slate-600 text-sm mt-8">
          <h3 className="font-semibold mb-2">Success Factors:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium mb-1">Part-Time Jobs (30-60 days):</h4>
              <ul className="space-y-1">
                <li>• Interviews within 2-3 weeks</li>
                <li>• Job offers in 4-6 weeks</li>
                <li>• Strong in retail, delivery, warehousing</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-1">Full-Time Jobs (3 months):</h4>
              <ul className="space-y-1">
                <li>• Strategy beats luck every time</li>
                <li>• Focus on shortage occupation roles</li>
                <li>• Consistency and persistence are key</li>
              </ul>
            </div>
          </div>
        </div>

          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find your job in UK?</h2>
            <p className="text-lg mb-6">
            Whether you're seeking your first part-time job or aiming for a full-time role, 
            Transitley guides you every step of the way in your UK job search journey.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mani@transitley.com?subject=Free%20Business%20Consultation"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center"
            >
              <Phone className="mr-2" size={20} />
              Free Consultation
            </a>
            <a
              href="https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
            >
              Learn More
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
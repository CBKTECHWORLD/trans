import React from 'react';
import { GraduationCap, Award, DollarSign, Briefcase, MapPin, CheckCircle, Clock, Globe, Users, TrendingUp, Target, Book } from 'lucide-react';

const StudyUSA: React.FC = () => {
  const universities = [
    { name: "MIT", qs: "#1", the: "#3", location: "Massachusetts" },
    { name: "Stanford University", qs: "#2", the: "#2", location: "California" },
    { name: "Harvard University", qs: "#3", the: "#4", location: "Massachusetts" },
    { name: "California Institute of Technology", qs: "#5", the: "#7", location: "California" },
    { name: "University of Chicago", qs: "#14", the: "#13", location: "Illinois" },
    { name: "University of Pennsylvania", qs: "#16", the: "#14", location: "Pennsylvania" }
  ];

  const courses = [
    { name: "Computer Science & AI", fee: "$25K-55K", duration: "2 Years", stemOpt: "3 Years" },
    { name: "Data Science & Analytics", fee: "$25K-55K", duration: "2 Years", stemOpt: "3 Years" },
    { name: "Engineering (Mechanical, Electrical)", fee: "$25K-55K", duration: "2 Years", stemOpt: "3 Years" },
    { name: "Business Administration (MBA)", fee: "$35K-90K", duration: "1-2 Years", stemOpt: "1 Year" },
    { name: "Health Sciences", fee: "$25K-55K", duration: "2 Years", stemOpt: "3 Years" },
    { name: "Business Analytics", fee: "$30K-60K", duration: "2 Years", stemOpt: "3 Years" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-purple-600 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs mb-2">
            <Globe className="w-3 h-3" />
            <span>Study in USA 2026-2027</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Study in United States</h1>
          <p className="text-base mb-4">World's #1 Study Destination | 7 of Top 10 Universities | 3-Year STEM OPT | 240K+ Indian Students</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-3xl mx-auto">
            <div className="bg-white/20 backdrop-blur rounded-lg p-2">
              <div className="text-lg font-bold">240K+</div>
              <div className="text-xs">Indian Students</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-2">
              <div className="text-lg font-bold">5,000+</div>
              <div className="text-xs">Universities</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-2">
              <div className="text-lg font-bold">3 Years</div>
              <div className="text-xs">STEM OPT</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-2">
              <div className="text-lg font-bold">$70K-120K</div>
              <div className="text-xs">Avg Salary</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why USA */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-4 text-gray-900">Why Choose USA?</h2>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-white rounded-lg p-2.5 shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-1.5">
                <div className="w-7 h-7 bg-blue-100 rounded flex items-center justify-center text-blue-600 mr-2">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Top Rankings</h3>
              </div>
              <p className="text-xs text-gray-600">7 of world's top 10 universities. MIT #1, Stanford #2, Harvard #3 globally (QS 2026).</p>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-1.5">
                <div className="w-7 h-7 bg-purple-100 rounded flex items-center justify-center text-purple-600 mr-2">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">3-Year STEM OPT</h3>
              </div>
              <p className="text-xs text-gray-600">Work in USA for 3 years after graduation in STEM (CS, Engineering, Data Science). High ROI.</p>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-1.5">
                <div className="w-7 h-7 bg-green-100 rounded flex items-center justify-center text-green-600 mr-2">
                  <DollarSign className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">High Salaries</h3>
              </div>
              <p className="text-xs text-gray-600">Starting salaries $70K-120K for STEM. Investment recovered in 2-3 years for tech graduates.</p>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md border-l-4 border-orange-600">
              <div className="flex items-center mb-1.5">
                <div className="w-7 h-7 bg-orange-100 rounded flex items-center justify-center text-orange-600 mr-2">
                  <Book className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Flexible Education</h3>
              </div>
              <p className="text-xs text-gray-600">Choose majors, minors, electives freely. Switch streams even after enrolling. Liberal arts approach.</p>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md border-l-4 border-red-600">
              <div className="flex items-center mb-1.5">
                <div className="w-7 h-7 bg-red-100 rounded flex items-center justify-center text-red-600 mr-2">
                  <Target className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Research Excellence</h3>
              </div>
              <p className="text-xs text-gray-600">$700B annually on R&D. Access cutting-edge labs, Silicon Valley, and global innovation hubs.</p>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md border-l-4 border-indigo-600">
              <div className="flex items-center mb-1.5">
                <div className="w-7 h-7 bg-indigo-100 rounded flex items-center justify-center text-indigo-600 mr-2">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Diverse Community</h3>
              </div>
              <p className="text-xs text-gray-600">1M+ international students from 200+ countries. Vibrant multicultural campuses and networking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Table */}
      <section className="py-5 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-3 text-gray-900">Top US Universities</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-md border">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-blue-700 to-purple-600 text-white">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold">University</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold">QS 2026</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold">THE 2025</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {universities.map((uni, idx) => (
                  <tr key={idx} className="hover:bg-blue-50">
                    <td className="px-4 py-2 text-xs font-semibold text-gray-900">{uni.name}</td>
                    <td className="px-4 py-2"><span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">{uni.qs}</span></td>
                    <td className="px-4 py-2"><span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-xs">{uni.the}</span></td>
                    <td className="px-4 py-2 text-xs text-gray-600">{uni.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 text-center mt-2">
            <strong>Note:</strong> 27 US universities in global top 100 (QS 2026)
          </p>
        </div>
      </section>

      {/* Courses Table */}
      <section className="py-5 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-3 text-gray-900">High-Demand Courses with STEM OPT</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-md border">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-blue-700 to-purple-600 text-white">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold">Course</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold">Annual Fee</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold">Duration</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold">STEM OPT</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {courses.map((course, idx) => (
                  <tr key={idx} className="hover:bg-blue-50">
                    <td className="px-4 py-2 text-xs font-semibold text-gray-900">{course.name}</td>
                    <td className="px-4 py-2 text-blue-600 text-xs font-medium">{course.fee}</td>
                    <td className="px-4 py-2 text-xs text-gray-700">{course.duration}</td>
                    <td className="px-4 py-2"><span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-medium">{course.stemOpt}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 text-center mt-2">
            <strong>Note:</strong> STEM graduates get 36 months total OPT (12 months + 24 months extension)
          </p>
        </div>
      </section>

      {/* Intakes */}
      <section className="py-5 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-3 text-gray-900">USA Intakes 2026-2027</h2>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 border-2 border-green-300">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-green-600 mr-2" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Fall (Main)</h3>
                  <p className="text-xs text-gray-600">Most Popular - 90%+ Programs</p>
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between py-0.5 border-b border-green-200">
                  <span className="font-medium text-gray-700">Start Date:</span>
                  <span className="text-gray-900">August/September</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-green-200">
                  <span className="font-medium text-gray-700">Application:</span>
                  <span className="text-gray-900">Sep - Jan</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="font-medium text-gray-700">Deadline:</span>
                  <span className="text-red-600 font-semibold">Dec - Feb</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-3 border-2 border-blue-300">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Spring</h3>
                  <p className="text-xs text-gray-600">Limited Programs</p>
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between py-0.5 border-b border-blue-200">
                  <span className="font-medium text-gray-700">Start Date:</span>
                  <span className="text-gray-900">January/February</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-blue-200">
                  <span className="font-medium text-gray-700">Application:</span>
                  <span className="text-gray-900">June - Sep</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="font-medium text-gray-700">Deadline:</span>
                  <span className="text-red-600 font-semibold">Aug - Oct</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 border-2 border-orange-300">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-orange-600 mr-2" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Summer</h3>
                  <p className="text-xs text-gray-600">Very Limited</p>
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between py-0.5 border-b border-orange-200">
                  <span className="font-medium text-gray-700">Start Date:</span>
                  <span className="text-gray-900">May/June</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-orange-200">
                  <span className="font-medium text-gray-700">Application:</span>
                  <span className="text-gray-900">Jan - Mar</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="font-medium text-gray-700">Deadline:</span>
                  <span className="text-red-600 font-semibold">Feb - Apr</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-5 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-3 text-gray-900">Application Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {[
              { num: "1", title: "Research Universities", desc: "Shortlist 8-12 universities based on program, location, ROI." },
              { num: "2", title: "Standardized Tests", desc: "Take GRE/GMAT, TOEFL/IELTS 6-12 months before deadline." },
              { num: "3", title: "Prepare Documents", desc: "SOP, LORs, transcripts, resume, financial documents." },
              { num: "4", title: "Submit Applications", desc: "Apply via university portals. Pay application fees ($50-150)." },
              { num: "5", title: "Get Admission", desc: "Receive I-20 form from university after acceptance." },
              { num: "6", title: "F-1 Student Visa", desc: "Pay SEVIS fee, DS-160 form, visa interview at US Embassy." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-lg p-2.5 shadow-md">
                <div className="w-7 h-7 bg-gradient-to-br from-blue-700 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xs mb-1.5 mx-auto">
                  {step.num}
                </div>
                <h3 className="text-xs font-bold text-center mb-1 text-gray-900">{step.title}</h3>
                <p className="text-xs text-gray-600 text-center leading-snug">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Requirements */}
          <div className="mt-4 bg-white rounded-lg p-3 shadow-md border-2 border-blue-200">
            <h3 className="text-sm font-bold mb-2 flex items-center text-gray-900">
              <Book className="w-4 h-4 text-blue-600 mr-2" />
              Key Requirements
            </h3>
            <div className="grid md:grid-cols-2 gap-3 text-xs">
              <div>
                <h4 className="font-semibold text-blue-600 mb-1">Academic:</h4>
                <ul className="space-y-0.5 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />UG: Class XII 70-85%</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />PG: Bachelor's GPA 3.0/4.0</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />Transcripts & certificates</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-1">Tests:</h4>
                <ul className="space-y-0.5 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />TOEFL 79-100 / IELTS 6.5-7.5</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />GRE 320+ / GMAT 650+</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />SOP, 2-3 LORs, Resume</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-5 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-3 text-gray-900">Cost of Studying in USA</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-3 border-2 border-blue-300">
              <h3 className="text-sm font-bold mb-2 flex items-center text-gray-900">
                <DollarSign className="w-4 h-4 text-blue-600 mr-2" />
                Tuition Fees (Annual)
              </h3>
              <div className="space-y-1.5">
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="font-medium text-gray-700">Community College:</span>
                  <span className="font-semibold text-gray-900">$6K-20K</span>
                </div>
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="font-medium text-gray-700">Undergraduate:</span>
                  <span className="font-semibold text-gray-900">$20K-45K</span>
                </div>
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="font-medium text-gray-700">Master's:</span>
                  <span className="font-semibold text-gray-900">$25K-55K</span>
                </div>
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="font-medium text-gray-700">MBA:</span>
                  <span className="font-semibold text-gray-900">$35K-90K</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-100 rounded-lg p-3 border-2 border-purple-300">
              <h3 className="text-sm font-bold mb-2 flex items-center text-gray-900">
                <MapPin className="w-4 h-4 text-purple-600 mr-2" />
                Living Costs (Annual)
              </h3>
              <div className="space-y-1.5">
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="text-gray-700">Accommodation:</span>
                  <span className="font-semibold text-gray-900">$8K-15K</span>
                </div>
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="text-gray-700">Food & Groceries:</span>
                  <span className="font-semibold text-gray-900">$3K-6K</span>
                </div>
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="text-gray-700">Transport & Others:</span>
                  <span className="font-semibold text-gray-900">$2K-4K</span>
                </div>
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="font-medium text-gray-700">Total:</span>
                  <span className="font-bold text-purple-600">$13K-25K</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 bg-yellow-50 rounded-lg p-2.5 border-2 border-yellow-300 text-xs">
            <p className="text-gray-700"><strong>Total Annual Cost:</strong> $37K-85K (₹32.7L-₹75.3L) including tuition + living expenses</p>
          </div>
        </div>
      </section>

      {/* Work & Career */}
      <section className="py-5 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-3 text-gray-900">Work Opportunities & Salaries</h2>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-white rounded-lg p-2.5 shadow-md">
              <div className="w-7 h-7 bg-purple-100 rounded flex items-center justify-center text-purple-600 mb-1.5">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-gray-900">On-Campus (F-1 Visa)</h3>
              <ul className="text-xs text-gray-700 space-y-0.5">
                <li>• Work up to 20 hrs/week</li>
                <li>• $10-18/hour wages</li>
                <li>• Library, admin, research roles</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md">
              <div className="w-7 h-7 bg-green-100 rounded flex items-center justify-center text-green-600 mb-1.5">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-gray-900">CPT & OPT</h3>
              <ul className="text-xs text-gray-700 space-y-0.5">
                <li>• CPT: During studies (internships)</li>
                <li>• OPT: 12 months post-graduation</li>
                <li>• STEM OPT: +24 months (total 36)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md">
              <div className="w-7 h-7 bg-blue-100 rounded flex items-center justify-center text-blue-600 mb-1.5">
                <TrendingUp className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-gray-900">Starting Salaries</h3>
              <ul className="text-xs text-gray-700 space-y-0.5">
                <li>• CS/AI: $115K-170K</li>
                <li>• Engineering: $70K-100K</li>
                <li>• Business: $65K-90K</li>
              </ul>
            </div>
          </div>

          {/* Scholarships */}
          <div className="mt-3 bg-white rounded-lg p-3 shadow-md border-2 border-yellow-300">
            <h3 className="text-sm font-bold mb-2 flex items-center text-gray-900">
              <Award className="w-4 h-4 text-yellow-600 mr-2" />
              Top Scholarships for Indian Students
            </h3>
            <div className="grid md:grid-cols-3 gap-2 text-xs">
              <div className="bg-yellow-50 rounded p-2">
                <h4 className="font-semibold mb-0.5 text-gray-900">Fulbright-Nehru</h4>
                <p className="text-gray-600">$7K-9.2K monthly. Full funding for master's students from India.</p>
              </div>
              <div className="bg-yellow-50 rounded p-2">
                <h4 className="font-semibold mb-0.5 text-gray-900">Tata Scholarship</h4>
                <p className="text-gray-600">Full tuition + living at Cornell University for Indian undergrads.</p>
              </div>
              <div className="bg-yellow-50 rounded p-2">
                <h4 className="font-semibold mb-0.5 text-gray-900">Merit Scholarships</h4>
                <p className="text-gray-600">$5K-50K. University-specific merit and need-based aid available.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 px-4 bg-gradient-to-r from-blue-700 to-purple-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <GraduationCap className="w-8 h-8 mx-auto mb-2" />
          <h2 className="text-xl font-bold mb-2">Ready to Study in USA?</h2>
          <p className="text-sm mb-3">Join 240,000+ Indian students pursuing world-class education and career opportunities</p>
           <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center space-x-2">
              <span>Get Free Consultation</span>
          
            </a>
         
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyUSA;
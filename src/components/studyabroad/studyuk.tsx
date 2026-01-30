import React from 'react';
import { GraduationCap, Award, DollarSign, Briefcase, MapPin, CheckCircle, Clock, Globe, Users, TrendingUp, Target, Book } from 'lucide-react';

const StudyUK: React.FC = () => {
  const universities = [
    { name: "Imperial College London", qs: "#2", the: "#8", location: "London" },
    { name: "University of Oxford", qs: "#4", the: "#1", location: "Oxford" },
    { name: "University of Cambridge", qs: "#6", the: "#4", location: "Cambridge" },
    { name: "UCL (University College London)", qs: "#9", the: "#22", location: "London" },
    { name: "King's College London", qs: "#31", the: "#38", location: "London" },
    { name: "University of Edinburgh", qs: "#34", the: "#29", location: "Edinburgh" }
  ];

  const courses = [
    { name: "Business & Management (MBA)", fee: "£30K - £60K", duration: "1 Year" },
    { name: "Computer Science & IT", fee: "£25K - £35K", duration: "1 Year" },
    { name: "Engineering", fee: "£25K - £32K", duration: "1 Year" },
    { name: "Data Science & Analytics", fee: "£24K - £30K", duration: "1 Year" },
    { name: "Law (LLM)", fee: "£26K - £35K", duration: "1 Year" },
    { name: "Health Sciences", fee: "£25K - £30K", duration: "1 Year" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-700 to-red-600 text-white py-6 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs mb-2">
            <Globe className="w-3 h-3" />
            <span>Study in UK 2026-2027</span>
          </div>
          <h1 className="text-3xl font-bold mb-2">Study in United Kingdom</h1>
          <p className="text-base mb-4">World-Class Education | 1-Year Master's | 2-Year Post-Study Work Visa | 99K+ Indian Students</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-3xl mx-auto">
            <div className="bg-white/20 backdrop-blur rounded-lg p-2">
              <div className="text-lg font-bold">99K+</div>
              <div className="text-xs">Indian Students</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-2">
              <div className="text-lg font-bold">17</div>
              <div className="text-xs">Top 100 Unis</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-2">
              <div className="text-lg font-bold">1 Year</div>
              <div className="text-xs">Master's</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-2">
              <div className="text-lg font-bold">2 Years</div>
              <div className="text-xs">Work Visa</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why UK */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-4 text-gray-900">Why Choose UK?</h2>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-white rounded-lg p-2.5 shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-1.5">
                <div className="w-7 h-7 bg-blue-100 rounded flex items-center justify-center text-blue-600 mr-2">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Top Rankings</h3>
              </div>
              <p className="text-xs text-gray-600">4 UK universities in global top 10. Imperial #2, Oxford #4, Cambridge #6, UCL #9 (QS 2026).</p>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md border-l-4 border-red-600">
              <div className="flex items-center mb-1.5">
                <div className="w-7 h-7 bg-red-100 rounded flex items-center justify-center text-red-600 mr-2">
                  <Clock className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">1-Year Master's</h3>
              </div>
              <p className="text-xs text-gray-600">Complete your master's in just 1 year. Save time and money while earning a globally recognized degree.</p>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-1.5">
                <div className="w-7 h-7 bg-green-100 rounded flex items-center justify-center text-green-600 mr-2">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Graduate Route Visa</h3>
              </div>
              <p className="text-xs text-gray-600">2-year post-study work visa. Average starting salary £29K (₹34L). Strong job market.</p>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-1.5">
                <div className="w-7 h-7 bg-purple-100 rounded flex items-center justify-center text-purple-600 mr-2">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Global Recognition</h3>
              </div>
              <p className="text-xs text-gray-600">UK degrees recognized worldwide. Strong alumni networks and industry connections globally.</p>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md border-l-4 border-yellow-600">
              <div className="flex items-center mb-1.5">
                <div className="w-7 h-7 bg-yellow-100 rounded flex items-center justify-center text-yellow-600 mr-2">
                  <DollarSign className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Scholarships Available</h3>
              </div>
              <p className="text-xs text-gray-600">Chevening, Commonwealth, and university scholarships. Fully-funded options for exceptional students.</p>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md border-l-4 border-orange-600">
              <div className="flex items-center mb-1.5">
                <div className="w-7 h-7 bg-orange-100 rounded flex items-center justify-center text-orange-600 mr-2">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Rich Culture</h3>
              </div>
              <p className="text-xs text-gray-600">Historic cities, vibrant student life, multicultural environment. London, Manchester, Edinburgh.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Table */}
      <section className="py-5 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-3 text-gray-900">Top UK Universities</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-md border">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-blue-700 to-red-600 text-white">
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
                    <td className="px-4 py-2"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">{uni.the}</span></td>
                    <td className="px-4 py-2 text-xs text-gray-600">{uni.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 text-center mt-2">
            <strong>Note:</strong> 17 UK universities in global top 100 (QS 2026)
          </p>
        </div>
      </section>

      {/* Courses Table */}
      <section className="py-5 px-4 bg-gradient-to-br from-blue-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-3 text-gray-900">Popular Courses for Indian Students</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-md border">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-blue-700 to-red-600 text-white">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold">Course</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold">Annual Fee</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {courses.map((course, idx) => (
                  <tr key={idx} className="hover:bg-blue-50">
                    <td className="px-4 py-2 text-xs font-semibold text-gray-900">{course.name}</td>
                    <td className="px-4 py-2 text-blue-600 text-xs font-medium">{course.fee}</td>
                    <td className="px-4 py-2 text-xs text-gray-700">{course.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 text-center mt-2">
            <strong>Note:</strong> Most UK master's programs are completed in 1 year (UG: 3 years)
          </p>
        </div>
      </section>

      {/* Intakes */}
      <section className="py-5 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-3 text-gray-900">UK Intakes 2026-2027</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-3 border-2 border-green-300">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-green-600 mr-2" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">September Intake (Main)</h3>
                  <p className="text-xs text-gray-600">Most Popular - 90%+ Programs</p>
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between py-0.5 border-b border-green-200">
                  <span className="font-medium text-gray-700">Start Date:</span>
                  <span className="text-gray-900">September 2026</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-green-200">
                  <span className="font-medium text-gray-700">Application:</span>
                  <span className="text-gray-900">October - June</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="font-medium text-gray-700">Deadline:</span>
                  <span className="text-red-600 font-semibold">June - July 2026</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-3 border-2 border-orange-300">
              <div className="flex items-center mb-2">
                <Clock className="w-5 h-5 text-orange-600 mr-2" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">January Intake</h3>
                  <p className="text-xs text-gray-600">Limited Programs Available</p>
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between py-0.5 border-b border-orange-200">
                  <span className="font-medium text-gray-700">Start Date:</span>
                  <span className="text-gray-900">January 2027</span>
                </div>
                <div className="flex justify-between py-0.5 border-b border-orange-200">
                  <span className="font-medium text-gray-700">Application:</span>
                  <span className="text-gray-900">June - October</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="font-medium text-gray-700">Deadline:</span>
                  <span className="text-red-600 font-semibold">October - November 2026</span>
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
              { num: "1", title: "Research & Select", desc: "Choose programs and universities via UCAS or direct application." },
              { num: "2", title: "Prepare Documents", desc: "Transcripts, CV, SOP, 2 LORs, English test scores (IELTS/TOEFL)." },
              { num: "3", title: "Apply Online", desc: "Submit via UCAS (UG) or university portal (PG). Pay application fees." },
              { num: "4", title: "Receive Offer", desc: "Get conditional/unconditional offer. Accept and receive CAS letter." },
              { num: "5", title: "Arrange Finances", desc: "Show proof of funds: tuition + £1,483/month (London) or £1,136/month." },
              { num: "6", title: "Student Visa", desc: "Apply for UK Student Visa with CAS. Process takes 3-4 weeks." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-lg p-2.5 shadow-md">
                <div className="w-7 h-7 bg-gradient-to-br from-blue-700 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xs mb-1.5 mx-auto">
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
                <h4 className="font-semibold text-blue-600 mb-1">Undergraduate (3 years):</h4>
                <ul className="space-y-0.5 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />Class XII: 70-85% marks</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />IELTS 6.0-6.5 / TOEFL 80-90</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />Personal statement, reference letter</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-1">Master's (1 year):</h4>
                <ul className="space-y-0.5 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />Bachelor's degree (2:1 or higher)</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />IELTS 6.5-7.0 / TOEFL 90-100</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />SOP, 2 LORs, CV, work exp (for some)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-5 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-3 text-gray-900">Cost of Studying in UK</h2>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-3 border-2 border-blue-300">
              <h3 className="text-sm font-bold mb-2 flex items-center text-gray-900">
                <DollarSign className="w-4 h-4 text-blue-600 mr-2" />
                Tuition Fees (Annual)
              </h3>
              <div className="space-y-1.5">
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="font-medium text-gray-700">Undergraduate:</span>
                  <span className="font-semibold text-gray-900">£13K - £18K</span>
                </div>
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="font-medium text-gray-700">Master's:</span>
                  <span className="font-semibold text-gray-900">£17K - £31K</span>
                </div>
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="font-medium text-gray-700">MBA:</span>
                  <span className="font-semibold text-gray-900">£30K - £60K</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-1.5">*1 GBP = ₹117 (approx.)</p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-100 rounded-lg p-3 border-2 border-red-300">
              <h3 className="text-sm font-bold mb-2 flex items-center text-gray-900">
                <MapPin className="w-4 h-4 text-red-600 mr-2" />
                Living Costs (Monthly)
              </h3>
              <div className="space-y-1.5">
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="text-gray-700">London:</span>
                  <span className="font-semibold text-gray-900">£1,483 (₹1.77L)</span>
                </div>
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="text-gray-700">Outside London:</span>
                  <span className="font-semibold text-gray-900">£1,136 (₹1.36L)</span>
                </div>
                <div className="bg-white rounded p-1.5 flex justify-between items-center text-xs">
                  <span className="text-gray-700">Total/Year:</span>
                  <span className="font-semibold text-gray-900">£10K - £13K</span>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-1.5">*Includes accommodation, food, transport</p>
            </div>
          </div>

          <div className="mt-3 bg-yellow-50 rounded-lg p-2.5 border-2 border-yellow-300 text-xs">
            <p className="text-gray-700"><strong>Total Cost:</strong> £21K-34K (₹25-40L) for UG/year, £17K-31K (₹20-36L) for PG/year including tuition + living</p>
          </div>
        </div>
      </section>

      {/* Work & Career */}
      <section className="py-5 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xl font-bold text-center mb-3 text-gray-900">Work Opportunities & Career</h2>
          <div className="grid md:grid-cols-3 gap-2">
            <div className="bg-white rounded-lg p-2.5 shadow-md">
              <div className="w-7 h-7 bg-purple-100 rounded flex items-center justify-center text-purple-600 mb-1.5">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-gray-900">During Studies</h3>
              <ul className="text-xs text-gray-700 space-y-0.5">
                <li>• Work 20 hours/week during term</li>
                <li>• Full-time during holidays</li>
                <li>• Min. wage: £11.44/hour (₹1,339)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md">
              <div className="w-7 h-7 bg-green-100 rounded flex items-center justify-center text-green-600 mb-1.5">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-gray-900">Graduate Route Visa</h3>
              <ul className="text-xs text-gray-700 space-y-0.5">
                <li>• 2 years post-study work visa</li>
                <li>• Avg. salary: £29K (₹34L)</li>
                <li>• No job offer required</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-2.5 shadow-md">
              <div className="w-7 h-7 bg-blue-100 rounded flex items-center justify-center text-blue-600 mb-1.5">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-gray-900">High-Demand Sectors</h3>
              <ul className="text-xs text-gray-700 space-y-0.5">
                <li>• Finance & Banking</li>
                <li>• Technology & IT</li>
                <li>• Healthcare & Medicine</li>
              </ul>
            </div>
          </div>

          {/* Scholarships */}
          <div className="mt-3 bg-white rounded-lg p-3 shadow-md border-2 border-yellow-300">
            <h3 className="text-sm font-bold mb-2 flex items-center text-gray-900">
              <Award className="w-4 h-4 text-yellow-600 mr-2" />
              Major Scholarships for Indian Students
            </h3>
            <div className="grid md:grid-cols-3 gap-2 text-xs">
              <div className="bg-yellow-50 rounded p-2">
                <h4 className="font-semibold mb-0.5 text-gray-900">Chevening Scholarship</h4>
                <p className="text-gray-600">Fully-funded: tuition + £1,452-1,781/month stipend + flights</p>
              </div>
              <div className="bg-yellow-50 rounded p-2">
                <h4 className="font-semibold mb-0.5 text-gray-900">Commonwealth Scholarship</h4>
                <p className="text-gray-600">Full tuition + living costs for master's & PhD students</p>
              </div>
              <div className="bg-yellow-50 rounded p-2">
                <h4 className="font-semibold mb-0.5 text-gray-900">GREAT Scholarships</h4>
                <p className="text-gray-600">£10K minimum per scholarship across 50+ UK universities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-8 px-4 bg-gradient-to-r from-blue-700 to-red-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <GraduationCap className="w-8 h-8 mx-auto mb-2" />
          <h2 className="text-xl font-bold mb-2">Ready to Study in UK?</h2>
          <p className="text-sm mb-3">Join 99,000+ Indian students pursuing excellence in the United Kingdom</p>
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

export default StudyUK;
import React from 'react';
import { GraduationCap, Award, DollarSign, Briefcase, MapPin, CheckCircle, Clock, Globe, Users, TrendingUp, Target, Book, ArrowRight } from 'lucide-react';

const StudyGermany: React.FC = () => {
  const universities = [
    { name: "Technical University of Munich", qs: "#22", the: "#27", location: "Munich" },
    { name: "LMU Munich", qs: "#54", the: "#34", location: "Munich" },
    { name: "Heidelberg University", qs: "#82", the: "#69", location: "Heidelberg" },
    { name: "Humboldt University Berlin", qs: "#120", the: "#89", location: "Berlin" },
    { name: "RWTH Aachen University", qs: "#100", the: "#141", location: "Aachen" },
    { name: "University of Mannheim", qs: "#150+", the: "#-", location: "Mannheim" }
  ];

  const courses = [
    { name: "Engineering (Mechanical, Electrical, Automotive)", fee: "Free - €350/sem", duration: "2 Years" },
    { name: "Computer Science & IT", fee: "Free - €350/sem", duration: "2 Years" },
    { name: "Business Administration", fee: "Free - €350/sem", duration: "2 Years" },
    { name: "Data Science & AI", fee: "Free - €350/sem", duration: "2 Years" },
    { name: "Psychology", fee: "Free - €350/sem", duration: "2 Years" },
    { name: "Environmental Sciences", fee: "Free - €350/sem", duration: "2 Years" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-red-600 to-yellow-600 text-white py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs mb-3">
            <Globe className="w-3 h-3" />
            <span>Study in Germany</span>
          </div>
          <h1 className="text-4xl font-bold mb-3">Study in Germany</h1>
          <p className="text-lg mb-5">World-Class Education with Free Tuition | 60K+ Indian Students | 18-Month Work Visa</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            <div className="bg-white/20 backdrop-blur rounded-lg p-2.5">
              <div className="text-xl font-bold">60K+</div>
              <div className="text-xs">Indian Students</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-2.5">
              <div className="text-xl font-bold">FREE</div>
              <div className="text-xs">Public Tuition</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-2.5">
              <div className="text-xl font-bold">18 Mo</div>
              <div className="text-xs">Work Visa</div>
            </div>
            <div className="bg-white/20 backdrop-blur rounded-lg p-2.5">
              <div className="text-xl font-bold">€49K</div>
              <div className="text-xs">Avg Salary</div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Germany */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-5 text-gray-900">Why Choose Germany?</h2>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 shadow-md border-l-4 border-red-600">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center text-red-600 mr-2">
                  <DollarSign className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Free Education</h3>
              </div>
              <p className="text-xs text-gray-600">Public universities charge zero tuition. Only €150-430 semester fees covering admin and public transport.</p>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-md border-l-4 border-yellow-600">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-yellow-100 rounded flex items-center justify-center text-yellow-600 mr-2">
                  <Award className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Top Rankings</h3>
              </div>
              <p className="text-xs text-gray-600">TUM ranks #22, LMU Munich #54 globally. 5 universities in top 100 with world-class research facilities.</p>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-md border-l-4 border-green-600">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-green-600 mr-2">
                  <Briefcase className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">18-Month Work Visa</h3>
              </div>
              <p className="text-xs text-gray-600">Job search after graduation. Work part-time 20 hrs/week during studies. EU Blue Card pathway.</p>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-md border-l-4 border-blue-600">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 mr-2">
                  <Globe className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">English Programs</h3>
              </div>
              <p className="text-xs text-gray-600">300+ master's programs in English. Study without IELTS using MOI certificate. Learn German for integration.</p>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-md border-l-4 border-purple-600">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center text-purple-600 mr-2">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Strong Economy</h3>
              </div>
              <p className="text-xs text-gray-600">Europe's largest economy. High job demand in automotive, engineering, IT. Average starting salary €49K.</p>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-md border-l-4 border-orange-600">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-orange-100 rounded flex items-center justify-center text-orange-600 mr-2">
                  <MapPin className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">Quality of Life</h3>
              </div>
              <p className="text-xs text-gray-600">Safe cities, excellent infrastructure. Living costs 21.5% lower than USA. Access to 27 Schengen countries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Universities Table */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Top Universities in Germany</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-md border">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-red-600 to-yellow-600 text-white">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold">University</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold">QS 2026</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold">THE 2025</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold">Location</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {universities.map((uni, idx) => (
                  <tr key={idx} className="hover:bg-red-50">
                    <td className="px-4 py-2 text-xs font-semibold text-gray-900">{uni.name}</td>
                    <td className="px-4 py-2"><span className="bg-red-100 text-red-700 px-2 py-0.5 rounded text-xs">{uni.qs}</span></td>
                    <td className="px-4 py-2"><span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs">{uni.the}</span></td>
                    <td className="px-4 py-2 text-xs text-gray-600">{uni.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Courses Table */}
      <section className="py-8 px-4 bg-gradient-to-br from-red-50 to-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Popular Courses for Indian Students</h2>
          <div className="overflow-x-auto bg-white rounded-lg shadow-md border">
            <table className="w-full text-sm">
              <thead className="bg-gradient-to-r from-red-600 to-yellow-600 text-white">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold">Course</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold">Semester Fee</th>
                  <th className="px-4 py-2 text-left text-xs font-semibold">Duration</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {courses.map((course, idx) => (
                  <tr key={idx} className="hover:bg-red-50">
                    <td className="px-4 py-2 text-xs font-semibold text-gray-900">{course.name}</td>
                    <td className="px-4 py-2 text-green-600 text-xs font-medium">{course.fee}</td>
                    <td className="px-4 py-2 text-xs text-gray-700">{course.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Intakes */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Germany Intakes 2026-2027</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 border-2 border-blue-300">
              <div className="flex items-center mb-2">
                <Clock className="w-6 h-6 text-blue-600 mr-2" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Winter Intake (Main)</h3>
                  <p className="text-xs text-gray-600">Most Popular - 80%+ Programs</p>
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between py-1 border-b border-blue-200">
                  <span className="font-medium text-gray-700">Start Date:</span>
                  <span className="text-gray-900">Sep/Oct 2026</span>
                </div>
                <div className="flex justify-between py-1 border-b border-blue-200">
                  <span className="font-medium text-gray-700">Application:</span>
                  <span className="text-gray-900">June - July 2026</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium text-gray-700">Deadline:</span>
                  <span className="text-red-600 font-semibold">May 15 - Jul 15, 2026</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 border-2 border-orange-300">
              <div className="flex items-center mb-2">
                <Clock className="w-6 h-6 text-orange-600 mr-2" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Summer Intake</h3>
                  <p className="text-xs text-gray-600">Limited Programs</p>
                </div>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between py-1 border-b border-orange-200">
                  <span className="font-medium text-gray-700">Start Date:</span>
                  <span className="text-gray-900">Mar/Apr 2027</span>
                </div>
                <div className="flex justify-between py-1 border-b border-orange-200">
                  <span className="font-medium text-gray-700">Application:</span>
                  <span className="text-gray-900">Nov - Jan</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="font-medium text-gray-700">Deadline:</span>
                  <span className="text-red-600 font-semibold">Nov - Jan 15, 2027</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-8 px-4 bg-gradient-to-br from-gray-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Application Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {[
              { num: "1", title: "Research & Select", desc: "Choose programs via DAAD/Uni-Assist. Check requirements." },
              { num: "2", title: "APS Certificate", desc: "Mandatory verification. Apply 3-4 months before deadline." },
              { num: "3", title: "Language Test", desc: "IELTS 6.5/TOEFL 90+ or TestDaF/DSH. MOI accepted." },
              { num: "4", title: "Submit Application", desc: "Via Uni-Assist or university portal. Include all docs." },
              { num: "5", title: "Blocked Account", desc: "Open with €11,904. €934 monthly withdrawal allowed." },
              { num: "6", title: "Student Visa", desc: "Apply 3-4 months early. 90% approval. 6-12 weeks processing." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-lg p-3 shadow-md">
                <div className="w-8 h-8 bg-gradient-to-br from-red-600 to-yellow-600 rounded-full flex items-center justify-center text-white font-bold text-sm mb-2 mx-auto">
                  {step.num}
                </div>
                <h3 className="text-xs font-bold text-center mb-1 text-gray-900">{step.title}</h3>
                <p className="text-xs text-gray-600 text-center">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Requirements */}
          <div className="mt-6 bg-white rounded-lg p-4 shadow-md border-2 border-red-200">
            <h3 className="text-sm font-bold mb-3 flex items-center text-gray-900">
              <Book className="w-4 h-4 text-red-600 mr-2" />
              Key Requirements
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div>
                <h4 className="font-semibold text-red-600 mb-1">Bachelor's Programs:</h4>
                <ul className="space-y-0.5 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />Class XII: 50%+ marks</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />1 year bachelor's in India OR Studienkolleg</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />APS Certificate (mandatory)</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />IELTS 6.0+ or equivalent</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-600 mb-1">Master's Programs:</h4>
                <ul className="space-y-0.5 text-gray-700">
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />4-year bachelor's degree</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />Good academic record (relevant field)</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />APS Certificate (mandatory)</li>
                  <li className="flex items-start"><CheckCircle className="w-3 h-3 text-green-600 mr-1 mt-0.5 flex-shrink-0" />IELTS 6.5+ / TOEFL 90+</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Cost of Studying in Germany</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-4 border-2 border-green-300">
              <h3 className="text-sm font-bold mb-3 flex items-center text-gray-900">
                <DollarSign className="w-5 h-5 text-green-600 mr-2" />
                Tuition & Fees
              </h3>
              <div className="space-y-2">
                <div className="bg-white rounded p-2 flex justify-between items-center text-xs">
                  <span className="font-medium text-gray-700">Public Universities</span>
                  <span className="text-lg font-bold text-green-600">FREE</span>
                </div>
                <div className="bg-white rounded p-2 flex justify-between items-center text-xs">
                  <span className="font-medium text-gray-700">Semester Fee</span>
                  <span className="font-semibold text-gray-900">€150 - €430</span>
                </div>
                <div className="bg-white rounded p-2 flex justify-between items-center text-xs">
                  <span className="font-medium text-gray-700">Private Universities</span>
                  <span className="font-semibold text-gray-900">€10K - €30K/year</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-4 border-2 border-blue-300">
              <h3 className="text-sm font-bold mb-3 flex items-center text-gray-900">
                <MapPin className="w-5 h-5 text-blue-600 mr-2" />
                Living Costs (Monthly)
              </h3>
              <div className="space-y-2">
                <div className="bg-white rounded p-2 flex justify-between items-center text-xs">
                  <span className="text-gray-700">Accommodation</span>
                  <span className="font-semibold text-gray-900">€300 - €700</span>
                </div>
                <div className="bg-white rounded p-2 flex justify-between items-center text-xs">
                  <span className="text-gray-700">Food</span>
                  <span className="font-semibold text-gray-900">€150 - €250</span>
                </div>
                <div className="bg-white rounded p-2 flex justify-between items-center text-xs">
                  <span className="text-gray-700">Transport & Others</span>
                  <span className="font-semibold text-gray-900">€150 - €250</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work & Career */}
      <section className="py-8 px-4 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">Work Opportunities & Career</h2>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white rounded-lg p-3 shadow-md">
              <div className="w-8 h-8 bg-purple-100 rounded flex items-center justify-center text-purple-600 mb-2">
                <Users className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-gray-900">During Studies</h3>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• 20 hours/week during semester</li>
                <li>• Full-time during breaks</li>
                <li>• Min. wage: €12.82/hour</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-md">
              <div className="w-8 h-8 bg-green-100 rounded flex items-center justify-center text-green-600 mb-2">
                <Briefcase className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-gray-900">After Graduation</h3>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• 18-month job search visa</li>
                <li>• Avg. salary: €49K (INR 46L)</li>
                <li>• EU Blue Card pathway</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-3 shadow-md">
              <div className="w-8 h-8 bg-blue-100 rounded flex items-center justify-center text-blue-600 mb-2">
                <Target className="w-4 h-4" />
              </div>
              <h3 className="text-xs font-bold mb-1 text-gray-900">High-Demand Sectors</h3>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Engineering & Manufacturing</li>
                <li>• IT & Data Science</li>
                <li>• Automotive Industry</li>
              </ul>
            </div>
          </div>

          {/* Scholarships */}
          <div className="mt-4 bg-white rounded-lg p-4 shadow-md border-2 border-yellow-300">
            <h3 className="text-sm font-bold mb-2 flex items-center text-gray-900">
              <Award className="w-4 h-4 text-yellow-600 mr-2" />
              Major Scholarships
            </h3>
            <div className="grid md:grid-cols-3 gap-3 text-xs">
              <div className="bg-yellow-50 rounded p-2">
                <h4 className="font-semibold mb-1 text-gray-900">DAAD Scholarships</h4>
                <p className="text-gray-600">Monthly stipends + travel for master's/PhD</p>
              </div>
              <div className="bg-yellow-50 rounded p-2">
                <h4 className="font-semibold mb-1 text-gray-900">Erasmus+</h4>
                <p className="text-gray-600">€186M available for student exchanges</p>
              </div>
              <div className="bg-yellow-50 rounded p-2">
                <h4 className="font-semibold mb-1 text-gray-900">Heinrich Böll</h4>
                <p className="text-gray-600">For students with social commitment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 bg-gradient-to-r from-red-600 to-yellow-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <GraduationCap className="w-10 h-10 mx-auto mb-3" />
          <h2 className="text-2xl font-bold mb-2">Ready to Study in Germany?</h2>
          <p className="text-sm mb-4">Join 60,000+ Indian students pursuing world-class education with free tuition</p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all flex items-center justify-center space-x-2">
              <span>Get Free Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            {/* <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all">
              Download Guide
            </button> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyGermany;
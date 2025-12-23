import React, { useState } from 'react';
import { BookOpen, GraduationCap, Globe, Award, DollarSign, Heart, MapPin, Users, CheckCircle, ArrowRight, Menu, X, Briefcase, TrendingUp, Shield } from 'lucide-react';

const StudyCanada: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const universities = [
    { name: "University of Toronto", qs: "#29", the: "#21", location: "Toronto, ON" },
    { name: "McGill University", qs: "#27", the: "#45", location: "Montreal, QC" },
    { name: "University of British Columbia", qs: "#40", the: "#41", location: "Vancouver, BC" },
    { name: "University of Alberta", qs: "#94", the: "#116", location: "Edmonton, AB" },
    { name: "University of Waterloo", qs: "#119", the: "#163", location: "Waterloo, ON" },
    { name: "McMaster University", qs: "#173", the: "#116", location: "Hamilton, ON" }
  ];

  const quickFacts = [
    { icon: <Users className="w-5 h-5" />, label: "Indian Students", value: "3.2L+" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "Universities", value: "220+" },
    { icon: <DollarSign className="w-5 h-5" />, label: "Avg. Tuition", value: "$10K-40K" },
    { icon: <Briefcase className="w-5 h-5" />, label: "Avg. Salary", value: "$50K-60K" }
  ];

  const whyCanada = [
    { icon: <Award />, title: "World-Class Education", desc: "Top-ranked universities with globally recognized degrees" },
    { icon: <DollarSign />, title: "Affordable Tuition", desc: "More affordable than USA and UK with excellent ROI" },
    { icon: <Heart />, title: "Safe & Welcoming", desc: "Multicultural society with low crime rates" },
    { icon: <Briefcase />, title: "Work Opportunities", desc: "PGWP allows up to 3 years work permit" },
    { icon: <TrendingUp />, title: "PR Pathway", desc: "Clear immigration routes to permanent residency" },
    { icon: <Shield />, title: "Quality of Life", desc: "High living standards and beautiful landscapes" }
  ];

  const applicationSteps = [
    { num: "1", title: "Research", desc: "Shortlist programs and universities" },
    { num: "2", title: "Prepare Docs", desc: "Transcripts, SOP, LORs, English tests" },
    { num: "3", title: "Apply", desc: "Submit applications before deadlines" },
    { num: "4", title: "Get Offer", desc: "Receive Letter of Acceptance" },
    { num: "5", title: "Funding", desc: "Arrange finances & scholarships" },
    { num: "6", title: "Study Permit", desc: "Apply for Canadian visa" }
  ];

  const popularCourses = [
    { course: "Computer Science", duration: "2 Years", fee: "$18K-35K" },
    { course: "Business Administration", duration: "1-2 Years", fee: "$30K-60K" },
    { course: "Engineering", duration: "1-2 Years", fee: "$20K-40K" },
    { course: "Data Science", duration: "1-2 Years", fee: "$17K-30K" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50">
   

      {/* Hero Section - Compact */}
      <section className="pt-16 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Globe className="w-4 h-4" />
              <span>Your Canadian Education Journey </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Study in <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Canada</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
              Experience world-class education with affordable tuition, work opportunities, and clear pathways to PR in one of the world's most welcoming countries.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a href="#contact" className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-medium hover:shadow-lg transition-all flex items-center space-x-2">
                <span>Start Application</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              {/* <a href="#why" className="border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-full font-medium hover:bg-orange-50 transition-colors">
                Learn More
              </a> */}
            </div>

            {/* Quick Facts Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {quickFacts.map((fact, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="flex items-center justify-center text-orange-600 mb-2">
                    {fact.icon}
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{fact.value}</div>
                  <div className="text-xs text-gray-600">{fact.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Canada - Compact Grid */}
      <section id="why" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Why Choose Canada?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyCanada.map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-5 hover:shadow-lg transition-all border border-orange-100 group">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-orange-600 mb-3 group-hover:scale-110 transition-transform shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Universities Table */}
      <section id="universities" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-orange-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Top Canadian Universities
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">#</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">University</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">QS Rank 2026</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">THE Rank 2025</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Location</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {universities.map((uni, idx) => (
                    <tr key={idx} className="hover:bg-orange-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{idx + 1}</td>
                      <td className="px-6 py-4 text-sm font-semibold text-gray-900">{uni.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-medium">{uni.qs}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-700">
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs font-medium">{uni.the}</span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 flex items-center">
                        <MapPin className="w-4 h-4 mr-1 text-orange-500" />
                        {uni.location}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Courses - Compact Table */}
      <section id="courses" className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Popular Courses for Indian Students
          </h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Course</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Duration</th>
                  <th className="px-6 py-3 text-left text-sm font-semibold">Annual Fee (CAD)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {popularCourses.map((course, idx) => (
                  <tr key={idx} className="hover:bg-orange-50 transition-colors">
                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">{course.course}</td>
                    <td className="px-6 py-4 text-sm text-gray-700">{course.duration}</td>
                    <td className="px-6 py-4 text-sm font-medium text-orange-600">{course.fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm text-gray-600 mt-4">
            <strong>Note:</strong> Tuition ranges from $10K-40K annually depending on program level
          </p>
        </div>
      </section>

      {/* Application Process - Compact Boxes */}
      <section id="apply" className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Application Process
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {applicationSteps.map((step, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-md hover:shadow-xl transition-all border border-orange-100 group">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-3 mx-auto group-hover:scale-110 transition-transform shadow-lg">
                  {step.num}
                </div>
                <h3 className="text-sm font-bold text-gray-900 text-center mb-2">{step.title}</h3>
                <p className="text-xs text-gray-600 text-center leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Key Requirements */}
          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg border border-orange-100">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Requirements</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-orange-600">Academic:</strong>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Class XII: 70-85% for UG</li>
                  <li>Bachelor's: GPA 2.5-3.0 for PG</li>
                  <li>Transcripts & Certificates</li>
                </ul>
              </div>
              <div>
                <strong className="text-orange-600">English Proficiency:</strong>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>IELTS: 6.5 (no band &lt; 6.0)</li>
                  <li>TOEFL: 80+</li>
                  <li>PTE/Duolingo accepted</li>
                </ul>
              </div>
              <div>
                <strong className="text-orange-600">Documents:</strong>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Valid Passport</li>
                  <li>Statement of Purpose (SOP)</li>
                  <li>2-3 Letters of Recommendation</li>
                </ul>
              </div>
              <div>
                <strong className="text-orange-600">Financial:</strong>
                <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                  <li>Proof of funds: CAD 20K-25K/year</li>
                  <li>GIC: CAD 20,635 (2025)</li>
                  <li>Application Fee: CAD 50-150</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Costs Overview - Compact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Cost Overview
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-lg border border-orange-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <DollarSign className="w-6 h-6 text-orange-600 mr-2" />
                Tuition Fees (Annual)
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-700">Bachelor's:</span><span className="font-semibold text-gray-900">CAD 13K - 40K</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Master's:</span><span className="font-semibold text-gray-900">CAD 17K - 50K</span></div>
                <div className="flex justify-between"><span className="text-gray-700">MBA:</span><span className="font-semibold text-gray-900">CAD 30K - 70K</span></div>
                <div className="flex justify-between"><span className="text-gray-700">PhD:</span><span className="font-semibold text-gray-900">CAD 7K - 20K</span></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="w-6 h-6 text-blue-600 mr-2" />
                Living Costs (Monthly)
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between"><span className="text-gray-700">Accommodation:</span><span className="font-semibold text-gray-900">CAD 600 - 1,200</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Food:</span><span className="font-semibold text-gray-900">CAD 200 - 400</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Transportation:</span><span className="font-semibold text-gray-900">CAD 80 - 150</span></div>
                <div className="flex justify-between"><span className="text-gray-700">Utilities & Misc:</span><span className="font-semibold text-gray-900">CAD 200 - 500</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work & PR - Compact */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Post-Study Opportunities
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-green-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-3">
                  <Briefcase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Work Permit (PGWP)</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Up to 3 years work permit after graduation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No job offer required to apply</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Work for any employer across Canada</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Gain valuable Canadian experience</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-3">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Permanent Residency</h3>
              </div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Canadian Experience Class (CEC) pathway</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Provincial Nominee Programs (PNP)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Points-based Express Entry system</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Clear route to citizenship</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Salary Expectations */}
          <div className="mt-6 bg-white rounded-xl p-6 shadow-lg border border-orange-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Average Salaries After Graduation</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">$40-65K</div>
                <div className="text-gray-600">Technology</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">$35-70K</div>
                <div className="text-gray-600">Healthcare</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">$40-70K</div>
                <div className="text-gray-600">Engineering</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">$30-55K</div>
                <div className="text-gray-600">Business</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Canadian Journey?
          </h2>
          <p className="text-lg text-orange-100 mb-8">
            Join 3.2 lakh+ Indian students studying in Canada. Get expert guidance for your application.
          </p>
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

export default StudyCanada;
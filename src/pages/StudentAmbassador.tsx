import React from 'react';
import { Users, Award, Briefcase, Star, TrendingUp, Gift, FileText, Trophy, MessageSquare } from 'lucide-react';

const StudentAmbassador: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950">
        <div className="absolute inset-0 bg-blue-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
          <h1 className="text-6xl font-bold text-white mb-4 tracking-tight">
            STUDENT<br/>AMBASSADOR
          </h1>
          <p className="text-2xl text-blue-200 font-light">Dream. Lead. Connect. Grow.</p>
        </div>
      </section>

     
      {/* About Student Ambassador */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-12 shadow-2xl">
          <h2 className="text-3xl font-bold text-white mb-6">Ever thought of doing something that makes your college experience stand out?</h2>
          <p className="text-2xl text-blue-100 mb-6">Something that helps you learn, lead, and earn — all at once?</p>
          <p className="text-lg text-blue-50 leading-relaxed">
            You'll learn, network, and grow gaining leadership skills, industry exposure, and experiences that'll make your resume shine.
          </p>
        </div>
      </section>

      {/* About the Program */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-8 text-center">About Student Ambassador Program</h2>
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-10 border border-blue-200 shadow-lg">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The Transitley Student Ambassador Program is your chance to become the face of career growth on your Student. As an ambassador, you'll help students discover opportunities, connect them with professional learning programs, and represent Transitley.
          </p>
         
        </div>
      </section>

      {/* Program Structure */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-950 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Program Structure</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">Duration</h3>
              <p className="text-blue-200">Flexible - work at your own pace</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">Goal</h3>
              <p className="text-blue-200">Build your skills while helping others build their careers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-3">Mode</h3>
              <p className="text-blue-200">Fully Remote (No fixed hours)</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-lg text-blue-100 leading-relaxed">
              The Transitley Student Ambassador Program connects passionate students from colleges across India. As a part of this program, you'll represent your Student, participate in interactive campaigns, and collaborate directly with the Transitley team.
            </p>
          </div>
        </div>
      </section>

      {/* Perks & Incentives */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">PERKS & INCENTIVES</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <TrendingUp className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Earn Stipend for Referrals</h3>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <Star className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Flexible Work - No fixed hours, no office</h3>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <Briefcase className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Lifetime Job Assistance</h3>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <Gift className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Goodies, Rewards & Exclusive Transitley Merchandise</h3>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <FileText className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Internship + Certificate + Offer Letter</h3>
          </div>
          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
            <Trophy className="w-12 h-12 text-white mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Free Crash Courses (Power BI, Tableau, Product Management)</h3>
          </div>
        </div>
      </section>

      {/* Your Role */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Your Role as an Ambassador</h2>
          <div className="bg-white rounded-2xl p-10 shadow-lg border border-blue-200">
            <p className="text-xl text-blue-800 mb-8 font-semibold">As a Student Ambassador, you'll:</p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Share Transitley brochures, posters & reels in your college</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Educate classmates about our Career Launchpad programs</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Invite students via your unique referral form or WhatsApp link</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Collect leads, feedback, and connect students with our team</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-3 h-3 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-lg text-gray-700">Collaborate with Transitley on events and campaigns</p>
              </div>
            </div>
            <p className="text-xl text-blue-900 mt-8 font-bold">
              In short, you'll be the face of Transitley in your college - leading, learning, and making an impact!
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">What Ambassadors Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <MessageSquare className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-gray-700 mb-4 italic">"I earned ₹8,000 stipend in just 1 week and all I did was share links and help my friends join."</p>
            <p className="text-blue-900 font-bold">— Mansi</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <MessageSquare className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-gray-700 mb-4 italic">"It helped me grow my network and build real-world experience. Joining Transitley was the best decision of my semester."</p>
            <p className="text-blue-900 font-bold">— Harsha</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <MessageSquare className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-gray-700 mb-4 italic">"I earned good stipend and learned how real marketing works."</p>
            <p className="text-blue-900 font-bold">— Jitendra</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-200 shadow-lg hover:shadow-xl transition-shadow">
            <MessageSquare className="w-10 h-10 text-blue-600 mb-4" />
            <p className="text-gray-700 mb-4 italic">"This program gave me both confidence and income. I grew my network, improved my communication, and earned rewards."</p>
            <p className="text-blue-900 font-bold">— Harshal</p>
          </div>
        </div>
      </section> */}

      {/* Important Note */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-2xl p-8 border-2 border-yellow-400 shadow-lg">
          <h3 className="text-2xl font-bold text-yellow-900 mb-4">IMPORTANT NOTE</h3>
          <p className="text-lg text-gray-800 leading-relaxed">
            Your performance as a Student Ambassador will determine your incentives and rewards. Consistent engagement, communication, and initiative are key to maximizing your benefits.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-white mb-6">Ready to Lead?</h2>
          <p className="text-xl text-blue-200 mb-8">Still have some queries?</p>
          <div className="space-y-4">
            
            <p className="text-lg text-blue-100">Mail at <a href="mailto:info@transitley.com" className="text-blue-300 hover:text-blue-200 underline font-semibold">info@transitley.com</a></p>
            
          </div>
        </div>
    <div className="mt-8 flex justify-center">
        <a
            href="https://forms.gle/PcHHAh4W9o6QUpEY8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-lg font-bold text-lg hover:bg-blue-50 transition-colors"
        >
            Join Now
        </a>
    </div>
      </section>
    </div>
  );
};

export default StudentAmbassador;
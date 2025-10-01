import React from "react";
import { 
  Globe, 
  Users, 
  GraduationCap, 
  Briefcase, 
  Home, 
  Plane, 
  DollarSign, 
  BookOpen,
  Shield,
  Heart,
  Target,
  Eye,
  CheckCircle,
  Star
} from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-8 py-16">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Users className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold tracking-wider">About Us</h1>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="p-8">
            {/* Introduction */}
            <div className="mb-8">
              <p className="text-gray-600 text-lg leading-relaxed">
                <span className="text-blue-600 font-semibold">Welcome to Transitley</span> – Your Trusted Companion in Your Global Journey.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                At Transitley, we believe that starting a new life in a new country should be exciting—not overwhelming. Whether you're moving to the UK, Canada, or Europe for education, work, or a better future, we're here to simplify your journey.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Founded with the vision to be the most supportive one-stop portal for immigrants, Transitley helps you move smarter, settle faster, and live better. From applying to universities to finding jobs and accommodation—we walk with you, every step of the way.
              </p>
            </div>

            {/* What We Do */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Star className="w-5 h-5 text-indigo-600" />
              </div>
              <h2 className="text-indigo-700 font-semibold text-2xl">What We Do</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-center space-x-2 mb-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <span className="font-bold text-blue-900">University Admissions</span>
                </div>
                <p className="text-blue-800 text-sm">Expert support for applying to top UK universities.</p>
              </div>
              {/* <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
                <div className="flex items-center space-x-2 mb-2">
                <BookOpen className="w-5 h-5 text-green-600" />
                <span className="font-bold text-green-900">IELTS Coaching</span>
                </div>
                <p className="text-green-800 text-sm">Online classes to boost your English skills and secure your required scores.</p>
              </div> */}
              <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
                <div className="flex items-center space-x-2 mb-2">
                <Briefcase className="w-5 h-5 text-purple-600" />
                <span className="font-bold text-purple-900">Jobs Portal</span>
                </div>
                <p className="text-purple-800 text-sm">Explore verified part-time and full-time job opportunities tailored for new arrivals.</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <div className="flex items-center space-x-2 mb-2">
                <Home className="w-5 h-5 text-orange-600" />
                <span className="font-bold text-orange-900">Accommodation Help</span>
                </div>
                <p className="text-orange-800 text-sm">Find shared housing, student rooms, or private rentals before you arrive.</p>
              </div>
              {/* <div className="bg-indigo-50 p-4 rounded-lg border-l-4 border-indigo-400">
                <div className="flex items-center space-x-2 mb-2">
                <Plane className="w-5 h-5 text-indigo-600" />
                <span className="font-bold text-indigo-900">Flight Bookings</span>
                </div>
                <p className="text-indigo-800 text-sm">Get affordable international travel options, booked with ease.</p>
              </div> */}
              <div className="bg-emerald-50 p-4 rounded-lg border-l-4 border-emerald-400">
                <div className="flex items-center space-x-2 mb-2">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                <span className="font-bold text-emerald-900">Forex Services</span>
                </div>
                <p className="text-emerald-800 text-sm">Safe and simple currency exchange services in India before you depart.</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
                <div className="flex items-center space-x-2 mb-2">
                <Briefcase className="w-5 h-5 text-pink-600" />
                <span className="font-bold text-pink-900">Business Services</span>
                </div>
                <p className="text-pink-800 text-sm">Guidance and resources for entrepreneurs and business setup in your new country.</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center space-x-2 mb-2">
                <Star className="w-5 h-5 text-yellow-600" />
                <span className="font-bold text-yellow-900">Global Talent Visa</span>
                </div>
                <p className="text-yellow-800 text-sm">Personalized support for Global Talent Visa applications and relocation.</p>
              </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="mb-12">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-indigo-600" />
                </div>
                <h2 className="text-indigo-700 font-semibold text-2xl">Why Choose Us?</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg">
                  <Globe className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900">All-in-One Platform</span>
                    <span className="text-gray-600"> – No more juggling between apps and agents. Transitley brings everything to one place.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg">
                  <Users className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900">Built by Immigrants, for Immigrants</span>
                    <span className="text-gray-600"> – We understand your pain points because we've been through them.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                  <Globe className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900">Global Network</span>
                    <span className="text-gray-600"> – Partnerships across India, the UK, and the EU to support your transition smoothly.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-red-50 to-orange-50 rounded-lg">
                  <Shield className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900">Data-Secure & Transparent</span>
                    <span className="text-gray-600"> – Your privacy and trust matter. We follow UK and Indian data laws strictly.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-lg">
                  <Heart className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-gray-900">Real Human Support</span>
                    <span className="text-gray-600"> – Behind every service is a team of real people who genuinely care.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl border border-blue-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                  <h2 className="text-indigo-700 font-semibold text-xl">Our Mission</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To empower immigrants with tools, knowledge, and support to thrive in a new country. We don't just help you move—we help you build a future.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-100 p-6 rounded-xl border border-purple-200">
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-purple-600" />
                  <h2 className="text-indigo-700 font-semibold text-xl">Our Vision</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become the most trusted digital platform for immigrants globally—where every journey begins with confidence and ends with success.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-semibold mb-4">Let's Move Forward, Together.</h2>
              <p className="text-indigo-100 mb-6 leading-relaxed">
                Wherever you are in your journey—whether planning to move, just landed, or trying to settle in—Transitley is your all-in-one partner. Join thousands of users who trust us to guide them toward a brighter future.
              </p>
              <p className="font-bold text-yellow-300 text-2xl">
                Transitley – Your Journey Starts Here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
import React, { useState, useEffect } from 'react';
import { Building2, Lightbulb, FileCheck, Banknote, Truck, Globe, Users, CheckCircle, Star, ArrowRight, Phone } from 'lucide-react';

export default function Business() {
  const [selectedStep, setSelectedStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const businessSteps = [
    {
      step: 1,
      title: 'Refine Your Idea & Market Fit',
      icon: Lightbulb,
      description: 'Validate your business idea and understand market demand',
      details: [
        'Market demand analysis',
        'Competitor research',
        'Unique value proposition development',
        'Business model refinement'
      ],
      transitleyAdvantage: 'Our expert business consultants analyze market data, trends, and competitive gaps to refine your concept into something viable and investor-ready.'
    },
    {
      step: 2,
      title: 'Choose Business Structure',
      icon: Building2,
      description: 'Select the right legal structure for your business',
      details: [
        'Sole Trader - Simple, personal liability',
        'Limited Company (Ltd) - Tax advantages, credibility',
        'Partnership - Shared ownership',
        'Legal compliance requirements'
      ],
      transitleyAdvantage: 'We help you choose the best legal structure tailored to your industry, vision, and goals. No jargon. No confusion.'
    },
    {
      step: 3,
      title: 'Register Your Business',
      icon: FileCheck,
      description: 'Complete all legal registration requirements',
      details: [
        'Companies House registration',
        'Business bank account setup',
        'HMRC tax registration',
        'Corporation Tax and VAT registration'
      ],
      transitleyAdvantage: 'We handle the entire registration process for you. From submitting documents to setting up your business bank account, we make it seamless.'
    },
    {
      step: 4,
      title: 'Sourcing & Supply Chain',
      icon: Truck,
      description: 'Set up reliable suppliers and distribution networks',
      details: [
        'Domestic and international sourcing',
        'Supplier verification and contracts',
        'Warehousing solutions',
        'Distribution and logistics setup'
      ],
      transitleyAdvantage: 'We offer sourcing support from India, Europe, and Asia. Our integrated logistics includes warehousing, packaging, and delivery.'
    },
    {
      step: 5,
      title: 'Accounting & Financial Planning',
      icon: Banknote,
      description: 'Manage finances, compliance, and tax efficiency',
      details: [
        'Daily bookkeeping systems',
        'HMRC compliance',
        'Tax planning and efficiency',
        'Financial reporting and analysis'
      ],
      transitleyAdvantage: 'Our in-house certified accountants provide startup-friendly services. From bookkeeping to year-end tax returns, we make finances clear and manageable.'
    },
    {
      step: 6,
      title: 'Build Online Presence',
      icon: Globe,
      description: 'Establish your digital footprint and online visibility',
      details: [
        'Professional website development',
        'E-commerce integration',
        'SEO optimization',
        'Social media management'
      ],
      transitleyAdvantage: 'Our team helps you launch a professional website, integrate e-commerce features, and support your digital marketing from SEO to social media.'
    }
  ];

  const businessTypes = [
    { type: 'Sole Trader', pros: ['Simple setup', 'Complete control', 'Lower costs'], cons: ['Personal liability', 'Limited growth potential'] },
    { type: 'Limited Company', pros: ['Tax advantages', 'Professional credibility', 'Limited liability'], cons: ['More paperwork', 'Compliance requirements'] },
    { type: 'Partnership', pros: ['Shared responsibility', 'Combined skills', 'Shared costs'], cons: ['Joint liability', 'Profit sharing'] }
  ];

  const services = [
    { service: 'Business Idea Consultation', icon: Lightbulb, description: 'Expert guidance to refine and validate your business concept' },
    { service: 'Market & Competitor Analysis', icon: Users, description: 'Comprehensive market research and competitive landscape analysis' },
    { service: 'Business Registration', icon: FileCheck, description: 'Complete registration process for Ltd, Sole Trader, and other structures' },
    { service: 'Product Sourcing', icon: Globe, description: 'Sourcing support from India, EU, and UK suppliers' },
    { service: 'Warehousing & Logistics', icon: Truck, description: 'Integrated logistics solutions' },
    { service: 'Accounting & Tax Compliance', icon: Banknote, description: 'Professional bookkeeping and HMRC compliance services' },
    { service: 'Website & E-commerce', icon: Globe, description: 'Digital presence and online store development' },
    { service: 'Legal & Immigration Advice', icon: Building2, description: 'Affordable legal guidance for business and immigration matters' }
  ];

  const whyTransitley = [
    'All-in-one platform for business setup',
    'Tailored for students, immigrants, and new entrepreneurs',
    'Expert guidance at every step',
    'Affordable and transparent pricing',
    'Integrated logistics',
    'In-house certified accountants',
    'Digital marketing and web development',
    'Ongoing support and consultation'
  ];

  return (
    <div className="bg-gray-50 min-h-screen">

       <section className="bg-gradient-to-r from-teal-700 to-teal-900 text-white py-8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  {/* Left Side - Text Content */}
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      {/* <Globe className="w-10 h-10 flex-shrink-0" /> */}
                      <div>
                        <h1 className="text-3xl font-bold">Launch Your Business in the UK</h1>
                       
                      </div>
                    </div>
                    
                    <p className="text-teal-50 text-sm mb-6">
                     From idea to operation - Transitley guides you every step of the way
                    </p>
      
                    {/* Buttons */}
                     <a
                      href="https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center"
                    >
                      Get Free Consultation
                      <ArrowRight className="ml-2" size={20} />
                    </a>
      
                  </div>
      
                  {/* Right Side - Image */}
                  <div className="hidden md:block">
                    <img 
                      src="/images/business.jpg" 
                      alt="start business in uk" 
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
              </div>
            </section>


      <div className="max-w-7xl mx-auto px-4 py-6">
      

        {/* Why UK Section */}
        <div className={`mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
            <h2 className="text-lg md:text-xl font-bold mb-3 text-center text-gray-900">Why Start a Business in the UK?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { title: 'Stable Economy', desc: 'Access to established markets and financial systems' },
                { title: 'Innovation Hub', desc: 'Entrepreneur-friendly ecosystem with government support' },
                { title: 'Global Access', desc: 'Gateway to European and international markets' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="border border-gray-200 rounded-lg p-3 hover:border-emerald-400 hover:shadow-md transition-all duration-300"
                >
                  <h3 className="font-semibold text-sm mb-1 text-gray-900">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps Section */}
        <div className={`mb-6 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-center">
            6-Step Business Launch Process
          </h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            {/* Step Tabs */}
            <div className="flex overflow-x-auto border-b border-gray-200">
              {businessSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedStep(index)}
                    className={`flex-shrink-0 p-2.5 transition-all duration-300 border-b-2 ${
                      selectedStep === index
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-600'
                        : 'bg-white text-gray-600 border-transparent hover:bg-gray-50'
                    }`}
                    style={{ minWidth: '120px' }}
                  >
                    <div className="flex flex-col items-center">
                      <IconComponent size={18} className="mb-1" />
                      <span className="text-xs font-semibold">STEP {step.step}</span>
                      <span className="text-xs text-center mt-0.5 leading-tight">{step.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Step Content */}
            <div className="p-4">
              <div className="flex items-center mb-3 animate-fadeIn">
                {React.createElement(businessSteps[selectedStep].icon, {
                  size: 28,
                  className: `text-emerald-600 mr-3`
                })}
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900">
                    {businessSteps[selectedStep].title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-0.5">{businessSteps[selectedStep].description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <h4 className="font-semibold text-gray-900 mb-2 text-xs">What's Involved:</h4>
                  {businessSteps[selectedStep].details.map((detail, index) => (
                    <div 
                      key={index} 
                      className="flex items-start p-2 rounded-lg hover:bg-gray-50 transition-all duration-300"
                    >
                      <CheckCircle className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0" size={14} />
                      <span className="text-xs text-gray-700">{detail}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center text-xs">
                    <Star className="mr-1.5 text-emerald-600" size={16} />
                    Transitley Advantage
                  </h4>
                  <p className="text-xs text-gray-700 leading-relaxed">{businessSteps[selectedStep].transitleyAdvantage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Types & Why Transitley */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
          {/* Business Structure */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="bg-gray-900 px-4 py-2.5 flex items-center">
              <Building2 className="text-white mr-2" size={18} />
              <h2 className="text-base font-bold text-white">Business Structure</h2>
            </div>
            <div className="p-4">
              <div className="space-y-2.5">
                {businessTypes.map((type, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-3 hover:border-emerald-400 hover:shadow-md transition-all duration-300">
                    <h3 className="font-semibold text-gray-900 mb-2 text-xs">{type.type}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      <div>
                        <h4 className="text-xs font-semibold text-emerald-700 mb-1">Pros:</h4>
                        <ul className="text-xs text-gray-600 space-y-0.5">
                          {type.pros.map((pro, proIndex) => (
                            <li key={proIndex} className="flex items-center">
                              <span className="text-emerald-500 mr-1">✓</span>
                              {pro}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {/* <div>
                        <h4 className="text-xs font-semibold text-red-600 mb-1">Cons:</h4>
                        <ul className="text-xs text-gray-600 space-y-0.5">
                          {type.cons.map((con, conIndex) => (
                            <li key={conIndex} className="flex items-center">
                              <span className="text-red-400 mr-1">✗</span>
                              {con}
                            </li>
                          ))}
                        </ul>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Why Transitley */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <div className="bg-emerald-600 px-4 py-2.5 flex items-center">
              <CheckCircle className="text-white mr-2" size={18} />
              <h2 className="text-base font-bold text-white">Why Choose Transitley?</h2>
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-700 mb-3">
                We are not just consultants. We are co-pilots on your business journey.
              </p>
              <ul className="space-y-1.5">
                {whyTransitley.map((reason, index) => (
                  <li key={index} className="flex items-start group">
                    <CheckCircle className="text-emerald-600 mr-2 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={14} />
                    <span className="text-xs text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6 border border-gray-200">
          <div className="bg-gray-900 px-4 py-2.5">
            <h2 className="text-base font-bold text-white flex items-center">
              <Star className="mr-2" size={18} />
              Complete Service Portfolio
            </h2>
          </div>
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div 
                    key={index} 
                    className="bg-gray-50 p-2.5 rounded-lg hover:shadow-md hover:bg-white transition-all duration-300 border border-gray-200"
                  >
                    <div className="flex items-center mb-1.5">
                      <IconComponent className="text-emerald-600 mr-1.5" size={16} />
                      <CheckCircle className="text-emerald-600" size={12} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 text-xs leading-tight">{service.service}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-emerald-600 rounded-lg p-5 text-white text-center shadow-md mb-6">
          <h2 className="text-lg md:text-xl font-bold mb-2">Ready to Start Your Business Journey?</h2>
          <p className="text-xs md:text-sm mb-4">
            Whether you're building a fashion brand, launching a tech startup, or running a food business - 
            Transitley is your one-stop solution.
          </p>
          <div className="flex flex-col sm:flex-row gap-2.5 justify-center">
            <a
                         href="https://docs.google.com/forms/d/1-fOcqfMKJXuq7wHnUhZ3xjYxY3_jPFSuE6-ml9o3hSc"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center"
                       >
                         Get Free Consultation
                         <ArrowRight className="ml-2" size={20} />
                       </a>
          </div>
        </div>

        {/* Footer Note */}
        <div className="bg-white rounded-lg p-3 text-gray-700 border border-gray-200">
          <h3 className="font-semibold mb-1.5 text-gray-900 text-xs">Success Starts Here</h3>
          <p className="mb-1.5 text-xs leading-relaxed">
            Starting a business in a new country can be overwhelming. But with the right guidance, tools, 
            and a support network that understands your background and vision, you can succeed.
          </p>
          <p className="italic text-gray-600 text-xs leading-relaxed">
            Transitley provides personalized support whether you're a student, new immigrant, 
            or seasoned professional starting fresh in the UK.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
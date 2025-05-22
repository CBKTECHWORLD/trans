import React, { useState } from 'react';
import { Building2, Lightbulb, FileCheck, Banknote, Truck, Globe, Users, CheckCircle, Star, ArrowRight, Phone } from 'lucide-react';

export default function Business() {
  const [selectedStep, setSelectedStep] = useState(0);

  const businessSteps = [
    {
      step: 1,
      title: 'Refine Your Idea & Market Fit',
      icon: Lightbulb,
      color: 'bg-blue-600',
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
      color: 'bg-green-600',
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
      color: 'bg-purple-600',
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
      color: 'bg-orange-600',
      description: 'Set up reliable suppliers and distribution networks',
      details: [
        'Domestic and international sourcing',
        'Supplier verification and contracts',
        'Warehousing solutions',
        'Distribution and logistics setup'
      ],
      transitleyAdvantage: 'We offer sourcing support from India, Europe, and Asia. Our integrated logistics includes warehousing, packaging, and delivery via DTA Express.'
    },
    {
      step: 5,
      title: 'Accounting & Financial Planning',
      icon: Banknote,
      color: 'bg-red-600',
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
      color: 'bg-teal-600',
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
    { service: 'Warehousing & Logistics', icon: Truck, description: 'Integrated logistics solutions via DTA Express' },
    { service: 'Accounting & Tax Compliance', icon: Banknote, description: 'Professional bookkeeping and HMRC compliance services' },
    { service: 'Website & E-commerce', icon: Globe, description: 'Digital presence and online store development' },
    { service: 'Legal & Immigration Advice', icon: Building2, description: 'Affordable legal guidance for business and immigration matters' }
  ];

  const whyTransitley = [
    'All-in-one platform for business setup',
    'Tailored for students, immigrants, and new entrepreneurs',
    'Expert guidance at every step',
    'Affordable and transparent pricing',
    'Integrated logistics via DTA Express',
    'In-house certified accountants',
    'Digital marketing and web development',
    'Ongoing support and consultation'
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-2">
            Launch Your Business in the UK
          </h1>
          <p className="text-xl text-slate-700 mb-4">
            From idea to operation - Transitley guides you every step of the way
          </p>
          <div className="flex justify-center">
            <a
              href="mailto:mani@transitley.com?subject=Free%20Business%20Consultation"
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-indigo-700 transition-colors"
            >
              <Phone className="mr-2" size={20} />
              Start Free Consultation
            </a>
          </div>
        </header>

        <div className="mb-10">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white text-center">
            <h2 className="text-2xl font-bold mb-2">Why Start a Business in the UK?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-1">Stable Economy</h3>
                <p className="text-sm">Access to established markets and financial systems</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-1">Innovation Hub</h3>
                <p className="text-sm">Entrepreneur-friendly ecosystem with government support</p>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <h3 className="font-semibold mb-1">Global Access</h3>
                <p className="text-sm">Gateway to European and international markets</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">6-Step Business Launch Process</h2>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex overflow-x-auto">
              {businessSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedStep(index)}
                    className={`flex-shrink-0 p-4 border-b-4 transition-colors ${
                      selectedStep === index
                        ? `${step.color} text-white border-transparent`
                        : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
                    }`}
                    style={{ minWidth: '160px' }}
                  >
                    <div className="flex flex-col items-center">
                      <IconComponent size={24} className="mb-2" />
                      <span className="text-sm font-medium text-center">Step {step.step}</span>
                      <span className="text-xs text-center mt-1">{step.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
            <div className="p-6">
              <div className="flex items-center mb-4">
                {React.createElement(businessSteps[selectedStep].icon, {
                  size: 32,
                  className: `${businessSteps[selectedStep].color.replace('bg-', 'text-')} mr-3`
                })}
                <div>
                  <h3 className="text-xl font-bold text-slate-800">
                    Step {businessSteps[selectedStep].step}: {businessSteps[selectedStep].title}
                  </h3>
                  <p className="text-slate-600">{businessSteps[selectedStep].description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-slate-800 mb-3">What's Involved:</h4>
                  <ul className="space-y-2">
                    {businessSteps[selectedStep].details.map((detail, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 mt-0.5" size={16} />
                        <span className="text-slate-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2 flex items-center">
                    <Star className="mr-2" size={18} />
                    Transitley Advantage:
                  </h4>
                  <p className="text-slate-700 text-sm">{businessSteps[selectedStep].transitleyAdvantage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-emerald-600 px-6 py-4 flex items-center">
              <Building2 className="text-white mr-2" size={24} />
              <h2 className="text-xl font-semibold text-white">Business Structure Comparison</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {businessTypes.map((type, index) => (
                  <div key={index} className="border border-slate-200 rounded-lg p-4">
                    <h3 className="font-semibold text-slate-800 mb-2">{type.type}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm font-medium text-green-700 mb-1">Pros:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {type.pros.map((pro, proIndex) => (
                            <li key={proIndex}>• {pro}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-red-700 mb-1">Cons:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {type.cons.map((con, conIndex) => (
                            <li key={conIndex}>• {con}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-purple-600 px-6 py-4 flex items-center">
              <CheckCircle className="text-white mr-2" size={24} />
              <h2 className="text-xl font-semibold text-white">Why Choose Transitley?</h2>
            </div>
            <div className="p-6">
              <p className="text-slate-700 mb-4">
                We are not just consultants. We are co-pilots on your business journey.
              </p>
              <ul className="space-y-3">
                {whyTransitley.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 mt-0.5" size={16} />
                    <span className="text-slate-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-10">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
            <h2 className="text-xl font-semibold text-white flex items-center">
              <Star className="mr-2" size={24} />
              Complete Service Portfolio
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={index} className="bg-slate-50 p-4 rounded-lg hover:bg-slate-100 transition-colors">
                    <div className="flex items-center mb-2">
                      <IconComponent className="text-indigo-600 mr-2" size={20} />
                      <CheckCircle className="text-green-500" size={16} />
                    </div>
                    <h3 className="font-semibold text-slate-800 text-sm mb-1">{service.service}</h3>
                    <p className="text-xs text-slate-600">{service.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Business Journey?</h2>
          <p className="text-lg mb-6">
            Whether you're building a fashion brand, launching a tech startup, or running a food business - 
            Transitley is your one-stop solution.
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

        <div className="bg-slate-100 rounded-lg p-5 text-slate-600 text-sm mt-8">
          <h3 className="font-semibold mb-2">Success Starts Here:</h3>
          <p className="mb-2">
            Starting a business in a new country can be overwhelming. But with the right guidance, tools, 
            and a support network that understands your background and vision, you can succeed.
          </p>
          <p className="italic">
            Transitley provides personalized support whether you're a student, new immigrant, 
            or seasoned professional starting fresh in the UK.
          </p>
        </div>
      </div>
    </div>
  );
}
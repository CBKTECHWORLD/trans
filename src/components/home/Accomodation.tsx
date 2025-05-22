import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Home, Shield, FileText, Users, AlertTriangle, CheckCircle, Star, MapPin, Clock } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
  icon: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, children, isOpen, onToggle, icon }) => (
  <div className="bg-white rounded-xl shadow-lg mb-6 overflow-hidden border border-gray-100">
    <button
      onClick={onToggle}
      className="w-full px-8 py-6 text-left bg-gradient-to-r from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 flex justify-between items-center"
    >
      <div className="flex items-center">
        <div className="mr-4 text-blue-600">{icon}</div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      </div>
      <div className="text-blue-600">
        {isOpen ? <ChevronUp className="h-6 w-6" /> : <ChevronDown className="h-6 w-6" />}
      </div>
    </button>
    {isOpen && (
      <div className="px-8 py-6 bg-white">
        {children}
      </div>
    )}
  </div>
);

const Accommodation: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    budget: true,
    search: false,
    viewing: false,
    applying: false,
    signing: false,
    rights: false,
    terms: false
  });

  const toggleSection = (section: string) => {
    setOpenSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                <Home className="h-12 w-12 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              UK Rental Guide
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your complete guide to renting in the UK - designed for international students, skilled workers, and newcomers
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center">
                <Star className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Step-by-Step Process</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Know Your Rights</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span className="text-sm font-medium">Start 1-2 Months Early</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="max-w-6xl mx-auto px-6 -mt-10 relative z-10">
        <div className="bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl shadow-lg p-6 border border-amber-200">
          <div className="flex items-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-2 mr-4">
              <AlertTriangle className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-white font-bold text-lg">Important Reminder</h3>
              <p className="text-white/90 text-sm">
                Start your search 1-2 months before you need to move. Never pay money without signing a contract first.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Introduction Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-10 border border-gray-100">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome to UK Rental Market</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed text-center max-w-4xl mx-auto">
            Finding a place to rent in the UK can feel overwhelming, especially for newcomers. This comprehensive guide walks you through 
            the entire process, from budgeting to moving in. Most rentals in the UK use an Assured Shorthold Tenancy (AST), 
            typically lasting 6-12 months before becoming a monthly rolling contract.
          </p>
        </div>

        {/* Step-by-step Guide */}
        <div className="space-y-6">
          
          {/* Budget Section */}
          <AccordionItem
            title="Determine Your Budget and Costs"
            isOpen={openSections.budget}
            onToggle={() => toggleSection('budget')}
            icon={<MapPin className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-100">
                <h4 className="font-bold text-blue-900 text-lg mb-4 flex items-center">
                  <div className="bg-blue-500 rounded-full p-1 mr-3">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  Key Costs to Consider
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-center text-blue-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="font-semibold">Monthly rent</span> - Your main ongoing cost
                    </div>
                    <div className="flex items-center text-blue-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="font-semibold">Security deposit</span> - Capped at 5 weeks' rent
                    </div>
                    <div className="flex items-center text-blue-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="font-semibold">First month's rent</span> - Paid upfront
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center text-blue-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="font-semibold">Utilities</span> - Electricity, gas, water
                    </div>
                    <div className="flex items-center text-blue-800">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="font-semibold">Council tax</span> - Students often exempt
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900 text-lg">Good News: No Hidden Fees!</h4>
                    <p className="text-green-800 mt-2 leading-relaxed">
                      UK law prohibits letting agents from charging tenants for viewings, references, or tenancy setup. 
                      The only permitted fees are a holding deposit (≤ one week's rent) and the security deposit.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-slate-50 p-6 rounded-xl border border-gray-200">
                <h4 className="font-bold text-gray-900 text-lg mb-4">Example Budget Calculation</h4>
                <div className="bg-white rounded-lg p-4 border border-gray-100">
                  <p className="text-gray-800 font-semibold mb-3">Monthly rent: £1,000</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-700">
                      <span>Maximum deposit (5 weeks):</span>
                      <span className="font-semibold">£1,154</span>
                    </div>
                    <div className="flex justify-between text-gray-700">
                      <span>First month's rent:</span>
                      <span className="font-semibold">£1,000</span>
                    </div>
                    <div className="border-t border-gray-200 pt-2">
                      <div className="flex justify-between text-gray-900 font-bold">
                        <span>Total upfront:</span>
                        <span>£2,154</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>

          {/* Search Section */}
          <AccordionItem
            title="Search for Properties and Agents"
            isOpen={openSections.search}
            onToggle={() => toggleSection('search')}
            icon={<Home className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
                <h4 className="font-bold text-purple-900 text-lg mb-4">Popular Property Websites</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Rightmove', 'Zoopla', 'OnTheMarket', 'OpenRent'].map((site) => (
                    <div key={site} className="bg-white rounded-lg p-4 text-center border border-purple-100 hover:shadow-md transition-shadow">
                      <div className="text-purple-800 font-semibold">{site}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="bg-red-500 rounded-full p-2 mr-4">
                    <AlertTriangle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-red-900 text-lg">Watch Out for Scams!</h4>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <div className="space-y-2">
                        <div className="flex items-center text-red-800">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          Be wary of impossibly low rents
                        </div>
                        <div className="flex items-center text-red-800">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          Never send money without meeting in person
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center text-red-800">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          Always verify landlord's identity
                        </div>
                        <div className="flex items-center text-red-800">
                          <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                          Get landlord's legal name and UK address
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-100">
                  <h5 className="font-bold text-blue-900 text-lg mb-3">Letting Agents</h5>
                  <p className="text-blue-800 leading-relaxed">
                    Professional companies that manage properties. Look for ARLA or RICS registration. 
                    Provide regulatory oversight and advocacy.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-xl border border-green-100">
                  <h5 className="font-bold text-green-900 text-lg mb-3">Direct Landlords</h5>
                  <p className="text-green-800 leading-relaxed">
                    Rent directly from property owners. Can be found on OpenRent or through word-of-mouth. 
                    Often more flexible but less regulatory protection.
                  </p>
                </div>
              </div>
            </div>
          </AccordionItem>

          {/* Viewing Section */}
          <AccordionItem
            title="Viewing the Property"
            isOpen={openSections.viewing}
            onToggle={() => toggleSection('viewing')}
            icon={<Shield className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <h4 className="font-bold text-gray-900 text-xl text-center mb-6">What to Check During Viewings</h4>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200">
                  <h5 className="font-bold text-yellow-900 text-lg mb-4 flex items-center">
                    <div className="bg-yellow-500 rounded-full p-1 mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    General Condition
                  </h5>
                  <div className="space-y-2">
                    {['Test lights, taps, toilets', 'Check for damp or mold', 'Verify heating works', 'Note any existing damage'].map((item) => (
                      <div key={item} className="flex items-center text-yellow-800">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-red-50 to-rose-50 p-6 rounded-xl border border-red-200">
                  <h5 className="font-bold text-red-900 text-lg mb-4 flex items-center">
                    <div className="bg-red-500 rounded-full p-1 mr-3">
                      <Shield className="h-4 w-4 text-white" />
                    </div>
                    Safety Requirements
                  </h5>
                  <div className="space-y-2">
                    {['Smoke alarm on every floor', 'Carbon monoxide alarms', 'Valid Gas Safety Certificate', 'Energy Performance Certificate'].map((item) => (
                      <div key={item} className="flex items-center text-red-800">
                        <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-violet-50 p-6 rounded-xl border border-purple-200">
                <h5 className="font-bold text-purple-900 text-lg mb-4">Important Questions to Ask</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  {['Are pets allowed?', 'What are the rules on guests?', 'Who pays which bills?', 'Is there an HMO license (if sharing)?'].map((question) => (
                    <div key={question} className="flex items-center text-purple-800">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      {question}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionItem>

          {/* Applying Section */}
          <AccordionItem
            title="Applying and Referencing"
            isOpen={openSections.applying}
            onToggle={() => toggleSection('applying')}
            icon={<FileText className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
                <h4 className="font-bold text-blue-900 text-lg mb-4">Required Documents</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <h5 className="font-bold text-blue-800 mb-3">Identity & Immigration</h5>
                    <div className="space-y-2">
                      {['Valid passport', 'Visa or BRP', 'Government "share code" if needed'].map((doc) => (
                        <div key={doc} className="flex items-center text-blue-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {doc}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-100">
                    <h5 className="font-bold text-blue-800 mb-3">Financial Proof</h5>
                    <div className="space-y-2">
                      {['Employment letter or uni confirmation', '3-6 months bank statements', 'Recent payslips'].map((doc) => (
                        <div key={doc} className="flex items-center text-blue-700">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                          {doc}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="bg-orange-500 rounded-full p-2 mr-4">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-900 text-lg">Guarantor Requirements</h4>
                    <p className="text-orange-800 mt-2 leading-relaxed">
                      Many landlords require a UK-based guarantor for newcomers without credit history. 
                      This person legally promises to pay your rent if you can't. They must pass credit checks 
                      and usually own property or have good income.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="bg-green-500 rounded-full p-2 mr-4">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-green-900 text-lg">Your Rights</h4>
                    <div className="grid md:grid-cols-1 gap-2 mt-3">
                      {[
                        'Reference checks are FREE - agents cannot charge you',
                        'Landlords cannot discriminate based on nationality', 
                        'Credit checks must be "soft" checks with your permission'
                      ].map((right) => (
                        <div key={right} className="flex items-center text-green-800">
                          <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                          {right}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionItem>

          {/* Signing Section */}
          <AccordionItem
            title="Signing the Tenancy Agreement"
            isOpen={openSections.signing}
            onToggle={() => toggleSection('signing')}
            icon={<FileText className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border border-indigo-200">
                <h4 className="font-bold text-indigo-900 text-lg mb-4">Common Tenancy Terms</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-indigo-100">
                    <h5 className="font-bold text-indigo-800 mb-2">Fixed Term</h5>
                    <p className="text-indigo-700">Usually 6 or 12 months. Neither party can end early unless agreed.</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-indigo-100">
                    <h5 className="font-bold text-indigo-800 mb-2">Periodic Tenancy</h5>
                    <p className="text-indigo-700">Month-to-month after fixed term ends. Still requires 6 months minimum overall.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 p-6 rounded-xl">
                <div className="flex items-start">
                  <div className="bg-yellow-500 rounded-full p-2 mr-4">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-yellow-900 text-lg">Required Landlord Documents</h4>
                    <div className="grid md:grid-cols-2 gap-2 mt-3">
                      {[
                        'Copy of signed tenancy agreement',
                        'Energy Performance Certificate',
                        'Current Gas Safety Certificate',
                        'Official "How to Rent" guide',
                        'Deposit protection scheme details'
                      ].map((doc) => (
                        <div key={doc} className="flex items-center text-yellow-800">
                          <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                          {doc}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-rose-50 border border-red-200 p-6 rounded-xl">
                <h4 className="font-bold text-red-900 text-lg mb-3">Critical: Deposit Protection</h4>
                <p className="text-red-800 leading-relaxed">
                  Your deposit MUST be placed in an official protection scheme within 30 days. 
                  If not, you can claim up to 3x the deposit amount and the landlord cannot evict you with Section 21.
                </p>
              </div>
            </div>
          </AccordionItem>

          {/* Rights Section */}
          <AccordionItem
            title="Moving In and Tenant Rights"
            isOpen={openSections.rights}
            onToggle={() => toggleSection('rights')}
            icon={<Shield className="h-6 w-6" />}
          >
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
                <h4 className="font-bold text-green-900 text-xl mb-6 text-center">Your Rights as a Tenant</h4>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border-l-4 border-green-500">
                    <h5 className="font-bold text-green-800 mb-2">Repairs & Maintenance</h5>
                    <p className="text-green-700">
                      Landlord responsible for structure, plumbing, heating, gas, and electrical systems. 
                      Notify in writing; they must fix within reasonable time.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500">
                    <h5 className="font-bold text-blue-800 mb-2">Quiet Enjoyment</h5>
                    <p className="text-blue-700">
                      Landlord must give 24 hours notice before visiting. Cannot enter arbitrarily 
                      or pressure you to leave without proper legal process.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border-l-4 border-purple-500">
                    <h5 className="font-bold text-purple-800 mb-2">Security of Tenure</h5>
                    <p className="text-purple-700">
                      Landlord needs 2 months notice to evict without fault (Section 21). 
                      You can typically end periodic tenancy with 1 month notice.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-6 rounded-xl border border-yellow-200">
                <h4 className="font-bold text-yellow-900 text-lg mb-4">Moving In Checklist</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Check and sign inventory carefully',
                    'Take photos/video of property condition',
                    'Keep copies of all safety certificates',
                    'Note any existing damage immediately'
                  ].map((item) => (
                    <div key={item} className="flex items-center text-yellow-800">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AccordionItem>

          {/* Terms Section */}
          <AccordionItem
            title="Common Terms Explained"
            isOpen={openSections.terms}
            onToggle={() => toggleSection('terms')}
            icon={<FileText className="h-6 w-6" />}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                {[
                  { term: 'AST', definition: 'Assured Shorthold Tenancy - standard UK rental contract' },
                  { term: 'Letting Agent', definition: 'Professional who handles rentals for landlords' },
                  { term: 'Guarantor', definition: 'Someone who promises to pay rent if you default' },
                  { term: 'HMO', definition: 'House in Multiple Occupation - 3+ unrelated sharers' }
                ].map((item) => (
                  <div key={item.term} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                    <h5 className="font-bold text-gray-900 mb-2">{item.term}</h5>
                    <p className="text-gray-700 text-sm">{item.definition}</p>
                  </div>
                ))}
              </div>
              
              <div className="space-y-4">
                {[
                  { term: 'Periodic Tenancy', definition: 'Rolling month-to-month contract' },
                  { term: 'Referencing', definition: 'Background checks on potential tenants (free)' },
                  { term: 'Break Clause', definition: 'Option to end fixed-term contract early' },
                  { term: 'Inventory', definition: 'List documenting property condition at move-in' }
                ].map((item) => (
                  <div key={item.term} className="bg-white rounded-lg p-4 border border-gray-200 shadow-sm">
                    <h5 className="font-bold text-gray-900 mb-2">{item.term}</h5>
                    <p className="text-gray-700 text-sm">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          </AccordionItem>
        </div>

        {/* Success Tips Card */}
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl shadow-lg p-8 mt-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">Final Tips for Success</h3>
            <div className="w-24 h-1 bg-white/30 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-bold mb-3">Before You Start</h4>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Start searching 1-2 months early
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Visit properties with a friend
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-bold mb-3">During Process</h4>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Never pay without signed contract
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Keep copies of all paperwork
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <h4 className="font-bold mb-3">Moving In</h4>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Verify safety certificates
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  Know your rights
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Resources Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-8 border border-gray-100">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Helpful Resources</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border border-blue-100">
              <div className="bg-blue-500 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-blue-900 mb-2">Government</h4>
              <p className="text-blue-700 text-sm">gov.uk - "How to Rent" guide</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-100">
              <div className="bg-green-500 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Home className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-green-900 mb-2">Housing Charity</h4>
              <p className="text-green-700 text-sm">england.shelter.org.uk</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-100">
              <div className="bg-purple-500 rounded-full p-3 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h4 className="font-bold text-purple-900 mb-2">Advice</h4>
              <p className="text-purple-700 text-sm">citizensadvice.org.uk</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 py-8">
          <p className="text-gray-600">
            Remember: You have rights as a tenant. Get help from Shelter or Citizens Advice if you need support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accommodation;
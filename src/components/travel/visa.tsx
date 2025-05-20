import React from 'react';

const VisaInfoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 text-white p-6">
            <h1 className="text-3xl font-bold mb-2">🛂 How to Settle in the UK</h1>
            <p className="text-xl">A Complete Guide to Immigration Visa Types and Pathways to Permanent Residency</p>
          </div>
          
          <div className="p-6 text-black">
            <p className="mb-6 ">
              Settling in the United Kingdom is a long-term aspiration for many migrants globally. Whether you're coming for work, study, business, or family, the UK offers several immigration routes that can lead to Indefinite Leave to Remain (ILR) — a crucial milestone on the path to British citizenship.
            </p>
            <p className="mb-6 k">
              This guide outlines the key UK visa types, their eligibility criteria, duration, and how they can transition into permanent settlement.
            </p>
            
            <hr className="my-8 border-gray-200" />
            
            <div className="mb-8 text-black">
              <h2 className="text-2xl font-semibold mb-3">1. Skilled Worker Visa (formerly Tier 2 General)</h2>
              <p className="text-blue-600 font-medium mb-2">✅ Best for: Professionals with a job offer in the UK</p>
              
              <h3 className=" text-lg font-medium mt-4">Overview:</h3>
              <p className="mb-2 ">
                The Skilled Worker visa allows you to live and work in the UK with a licensed employer sponsor. It replaced the Tier 2 General visa in December 2020.
              </p>
              
              <h3 className="text-lg font-medium mt-4">Key Criteria:</h3>
              <ul className="text-black list-disc pl-6 mb-4">
                <li>Job offer from a Home Office-licensed sponsor</li>
                <li>Job must be on the Skilled Occupation List</li>
                <li>Minimum salary: Usually £26,200/year or £10.75/hour, subject to job type</li>
              </ul>
              
              <h3 className=" text-black text-lg font-medium mt-4">Path to Settlement:</h3>
              <ul className="text-black list-disc pl-6 mb-4">
                <li>After 5 years on this visa, you can apply for Indefinite Leave to Remain</li>
                <li>Must meet salary threshold and continuous residency rules</li>
              </ul>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-black text-sm">📚 Reference:</p>
                <p className="text-black text-sm">UK Gov – Skilled Worker visa</p>
                <a href="https://www.gov.uk/skilled-worker-visa" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                  https://www.gov.uk/skilled-worker-visa
                </a>
              </div>
            </div>
            
            <hr className="my-8 border-gray-200" />
            
            <div className="mb-8 text-black">
              <h2 className="text-2xl font-semibold mb-3">🎓 2. Graduate Route (Post-Study Work Visa)</h2>
              <p className="text-blue-600 font-medium mb-2">✅ Best for: International students who completed a UK degree</p>
              
              <h3 className=" text-black text-lg font-medium mt-4">Overview:</h3>
              <p className=" text-black mb-2">
                This visa gives students up to 2 years (or 3 years for PhD graduates) to stay and work (or look for work) in the UK after completing a degree.
              </p>
              
              <h3 className=" text-black text-lg font-medium mt-4">Key Points:</h3>
              <ul className="text-black list-disc pl-6 mb-4">
                <li>No sponsorship required</li>
                <li>Cannot be extended, but you can switch to Skilled Worker or other routes</li>
              </ul>
              
              <h3 className="text-black text-lg font-medium mt-4">Path to Settlement:</h3>
              <ul className="text-black list-disc pl-6 mb-4">
                <li>Cannot directly lead to ILR, but can switch to eligible routes like Skilled Worker</li>
              </ul>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-black text-sm">📚 Reference:</p>
                <p className="text-black text-sm">UK Gov – Graduate visa</p>
                <a href="https://www.gov.uk/graduate-visa" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                  https://www.gov.uk/graduate-visa
                </a>
              </div>
            </div>
            
            <hr className="my-8 border-gray-200" />
            
            <div className="mb-8 text-black">
              <h2 className="text-black text-2xl font-semibold mb-3">💼 3. Innovator Founder Visa</h2>
              <p className="text-blue-600 font-medium mb-2">✅ Best for: Entrepreneurs with an innovative business idea</p>
              
              <h3 className="text-black text-lg font-medium mt-4">Overview:</h3>
              <p className="mb-2">
                Launched in April 2023, it replaced the older Innovator and Start-Up visas. Designed for founders with scalable business models.
              </p>
              
              <h3 className="text-black text-lg font-medium mt-4">Key Criteria:</h3>
              <ul className="text-black list-disc pl-6 mb-4">
                <li>Must have a UK-approved endorsing body</li>
                <li>Business idea must be innovative, viable, and scalable</li>
                <li>No minimum investment required</li>
              </ul>
              
              <h3 className="text-black text-lg font-medium mt-4">Path to Settlement:</h3>
              <ul className="text-black list-disc pl-6 mb-4">
                <li>Apply for ILR after 3 years, if business shows significant growth and job creation</li>
              </ul>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-black text-sm">📚 Reference:</p>
                <p className="text-black text-sm">UK Gov – Innovator Founder visa</p>
                <a href="https://www.gov.uk/innovator-founder-visa" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                  https://www.gov.uk/innovator-founder-visa
                </a>
              </div>
            </div>
            
            <hr className="my-8 border-gray-200" />
            
            <div className="mb-8">
              <h2 className="text-black text-2xl font-semibold mb-3">🏥 4. Health and Care Worker Visa</h2>
              <p className="text-blue-600 font-medium mb-2">✅ Best for: Doctors, nurses, and care workers</p>
              
              <h3 className="text-black text-lg font-medium mt-4">Overview:</h3>
              <p className="text-black mb-2">
                A fast-track subcategory of the Skilled Worker visa, created to address NHS staffing needs.
              </p>
              
              <h3 className="text-black text-lg font-medium mt-4">Key Benefits:</h3>
              <ul className="text-black list-disc pl-6 mb-4">
                <li>Lower visa fees and fast processing</li>
                <li>Exemption from Immigration Health Surcharge (IHS)</li>
              </ul>
              
              <h3 className="text-black text-lg font-medium mt-4">Path to Settlement:</h3>
              <ul className="text-black list-disc pl-6 mb-4">
                <li>Eligible for ILR after 5 years, same as Skilled Worker route</li>
              </ul>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-black text-sm">📚 Reference:</p>
                <p className="text-black text-sm">UK Gov – Health and Care Worker visa</p>
                <a href="https://www.gov.uk/health-care-worker-visa" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                  https://www.gov.uk/health-care-worker-visa
                </a>
              </div>
            </div>
            
            <hr className="my-8 border-gray-200" />
            
            <div className="mb-8">
              <h2 className="text-black text-2xl font-semibold mb-3">💑 5. Family Route Visa (Spouse, Partner, Parent)</h2>
              <p className="text-blue-600 font-medium mb-2">✅ Best for: Joining a British citizen or person with ILR</p>
              
              <h3 className="text-black text-lg font-medium mt-4">Overview:</h3>
              <p className="text-black mb-2">
                Allows family members to join their partner or parent in the UK.
              </p>
              
              <h3 className="text-black text-lg font-medium mt-4">Key Criteria:</h3>
              <ul className="text-black list-disc pl-6 mb-4">
                <li>Genuine relationship proof</li>
                <li>Minimum income threshold: £29,000 (from April 2024), rising to £38,700 (by early 2025)</li>
              </ul>
              
              <h3 className="text-black text-lg font-medium mt-4">Path to Settlement:</h3>
              <ul className="text-black list-disc pl-6 mb-4">
                <li>Eligible for ILR after 5 years (or 10 years in some cases)</li>
              </ul>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-black text-sm">📚 Reference:</p>
                <p className="text-black text-sm">UK Gov – Family visas</p>
                <a href="https://www.gov.uk/uk-family-visa" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                  https://www.gov.uk/uk-family-visa
                </a>
              </div>
            </div>
            
            <hr className="my-8 border-gray-200" />
            
            <div className="mb-8">
              <h2 className="text-black text-2xl font-semibold mb-3">🌍 6. Global Talent Visa</h2>
              <p className="text-blue-600 font-medium mb-2">✅ Best for: High achievers in tech, science, arts, and academia</p>
              
              <h3 className="text-black text-lg font-medium mt-4">Overview:</h3>
              <p className="mb-2 text-black">
                No job offer required. You must be a leader or emerging leader in your field, endorsed by an official body like Tech Nation (now Tech Nation Founders), Arts Council, etc.
              </p>
              
              <h3 className="text-black text-lg font-medium mt-4">Path to Settlement:</h3>
              <ul className="text-black list-disc pl-6 mb-4">
                <li>ILR after 3 years (fast-track) or 5 years depending on achievements</li>
              </ul>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-black text-sm">📚 Reference:</p>
                <p className="text-black text-sm">UK Gov – Global Talent visa</p>
                <a href="https://www.gov.uk/global-talent" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                  https://www.gov.uk/global-talent
                </a>
              </div>
            </div>
            
            <hr className="my-8 border-gray-200" />
            
            <div className="mb-8 text-black">
              <h2 className="text-2xl font-semibold mb-3">🏢 7. Start a Business via UK Expansion Worker or Sponsor License</h2>
              <p className="text-blue-600 font-medium mb-2">✅ Best for: Businessmen expanding overseas operations to the UK</p>
              
              <p className="mb-2">Options include:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>UK Expansion Worker visa (part of Global Business Mobility route)</li>
                <li>Innovator Founder visa</li>
                <li>Apply for a sponsor license and sponsor yourself under Skilled Worker (complex but possible)</li>
              </ul>
              
              <div className="bg-gray-50 p-4 rounded-md text-black">
                <p className="text-sm">📚 Reference:</p>
                <p className="text-sm">UK Gov – Global Business Mobility visas</p>
                <a href="https://www.gov.uk/uk-expansion-worker-visa" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                  https://www.gov.uk/uk-expansion-worker-visa
                </a>
              </div>
            </div>
            
            <hr className="my-8 border-gray-200" />
            
            <div className="mb-8 text-black">
              <h2 className="text-2xl font-semibold mb-3">🛬 8. Asylum or Humanitarian Protection</h2>
              <p className="text-blue-600 font-medium mb-2">✅ Best for: Refugees or individuals fleeing persecution</p>
              
              <ul className="list-disc pl-6 mb-4">
                <li>After 5 years of protection in the UK, you may apply for ILR</li>
                <li>Subject to strict eligibility and evidence requirements</li>
              </ul>
              
              <div className="bg-gray-50 p-4 rounded-md text-black">
                <p className="text-sm">📚 Reference:</p>
                <p className="text-sm">UK Gov – Claim asylum in the UK</p>
                <a href="https://www.gov.uk/claim-asylum" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                  https://www.gov.uk/claim-asylum
                </a>
              </div>
            </div>
            
            <hr className="my-8 border-gray-200" />
            
            <div className="mb-8 text-black">
              <h2 className="text-2xl font-semibold mb-3">✅ What is Indefinite Leave to Remain (ILR)?</h2>
              <p className="mb-4">
                It is the UK equivalent of permanent residency. Once you have ILR, you:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>Can live and work in the UK with no time limit</li>
                <li>Can apply for British Citizenship after 1 year (if eligible)</li>
                <li>Can access public funds (subject to restrictions)</li>
              </ul>
              
              <div className="bg-gray-50 p-4 rounded-md">
                <p className="text-sm">📚 UK ILR eligibility</p>
                <a href="https://www.gov.uk/indefinite-leave-to-remain" className="text-blue-600 hover:underline text-sm" target="_blank" rel="noopener noreferrer">
                  https://www.gov.uk/indefinite-leave-to-remain
                </a>
              </div>
            </div>
            
            <div className="mt-10 border-t border-gray-200 pt-6 text-black">
              <p className="text-sm text-gray-600">
                Last updated: May 2025. Information on this page is for guidance only and subject to change.
                Please always refer to the official UK government website for the most current visa regulations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaInfoPage;
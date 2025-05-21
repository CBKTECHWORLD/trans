import React, { useState } from 'react';
import { DollarSign, PiggyBank, TrendingUp, BarChart4, CreditCard } from 'lucide-react';

type CityKey =
  | 'London'
  | 'Manchester'
  | 'Birmingham'
  | 'Leeds'
  | 'Glasgow/Edinburgh'
  | 'Sheffield/Nottingham';

type LivingCost = {
  rent: string;
  food: string;
  transport: string;
  others: string;
  total: string;
};

export default function Finance() {
  const [selectedCity, setSelectedCity] = useState<CityKey>('London');

  const cities: CityKey[] = [
    'London',
    'Manchester',
    'Birmingham',
    'Leeds',
    'Glasgow/Edinburgh',
    'Sheffield/Nottingham'
  ];

  const livingCosts: Record<CityKey, LivingCost> = {
    'London': {
      rent: '£700 – £1,200',
      food: '£150 – £250',
      transport: '£100 – £140',
      others: '£100 – £200',
      total: '£1,050 – £1,800'
    },
    'Manchester': {
      rent: '£450 – £750',
      food: '£130 – £200',
      transport: '£60 – £90',
      others: '£80 – £150',
      total: '£720 – £1,200'
    },
    'Birmingham': {
      rent: '£450 – £700',
      food: '£130 – £190',
      transport: '£60 – £90',
      others: '£80 – £140',
      total: '£720 – £1,120'
    },
    'Leeds': {
      rent: '£400 – £700',
      food: '£120 – £180',
      transport: '£60 – £80',
      others: '£80 – £120',
      total: '£660 – £1,080'
    },
    'Glasgow/Edinburgh': {
      rent: '£400 – £700',
      food: '£130 – £200',
      transport: '£60 – £90',
      others: '£80 – £130',
      total: '£670 – £1,120'
    },
    'Sheffield/Nottingham': {
      rent: '£350 – £600',
      food: '£120 – £180',
      transport: '£50 – £80',
      others: '£70 – £120',
      total: '£590 – £980'
    }
  };

  const universities = [
    { name: 'University of Oxford', ug: '£28,000–£44,000', pg: '£30,000–£46,000' },
    { name: 'University of Cambridge', ug: '£24,000–£42,000', pg: '£27,000–£40,000' },
    { name: 'Imperial College London', ug: '£29,000–£38,000', pg: '£30,000–£45,000' },
    { name: 'University College London (UCL)', ug: '£23,000–£34,000', pg: '£25,000–£38,000' },
    { name: 'University of Manchester', ug: '£20,000–£26,000', pg: '£22,000–£30,000' }
  ];

  const tuitionFees = [
    { level: 'Undergraduate (Bachelor\'s)', fees: '£11,000 – £25,000' },
    { level: 'Postgraduate (Master\'s)', fees: '£13,000 – £30,000' },
    { level: 'MBA Programs', fees: '£20,000 – £50,000+' },
    { level: 'PhD/Research Degrees', fees: '£15,000 – £25,000' }
  ];

  const setupCosts = [
    { item: 'Student visa & IHS fees', cost: '£1,000 – £1,500' },
    { item: 'Flight tickets', cost: '£400 – £700' },
    { item: 'Initial rent deposit', cost: '£500 – £1,000' },
    { item: 'Basic essentials (bedding, cookware)', cost: '£150 – £300' }
  ];

  const savingTips = [
    'Use 18+ Student Oyster card in London (30% discount)',
    'Opt for university-managed accommodation initially',
    'Cook meals instead of eating out frequently',
    'Use UNiDAYS or Student Beans for shopping discounts'
  ];

  const totalCosts = [
    { location: 'London', cost: '£25,000 – £42,000' },
    { location: 'Other Cities', cost: '£20,000 – £35,000' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <header className="mb-10 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-2">
            Cost of Living & Tuition Fees
          </h1>
          <p className="text-xl text-slate-700">
            For International Students in the UK (2025)
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-indigo-600 px-6 py-4 flex items-center">
              <DollarSign className="text-white mr-2" size={24} />
              <h2 className="text-xl font-semibold text-white">Average Tuition Fees</h2>
            </div>
            <div className="p-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="pb-3 text-slate-700">Study Level</th>
                    <th className="pb-3 text-slate-700">Tuition Fees (per year)</th>
                  </tr>
                </thead>
                <tbody>
                  {tuitionFees.map((item, index) => (
                    <tr key={index} className="border-b border-slate-100">
                      <td className="py-3 text-slate-800 font-medium">{item.level}</td>
                      <td className="py-3 text-slate-800">{item.fees}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="mt-4 text-sm text-slate-600 italic">
                Note: Medicine and engineering programs may cost more, often between £30,000 and £58,000/year.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden lg:col-span-2">
            <div className="bg-emerald-600 px-6 py-4 flex items-center">
              <BarChart4 className="text-white mr-2" size={24} />
              <h2 className="text-xl font-semibold text-white">Top Universities & Average Tuition</h2>
            </div>
            <div className="p-6 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="pb-3 text-slate-700">University</th>
                    <th className="pb-3 text-slate-700">UG Tuition</th>
                    <th className="pb-3 text-slate-700">PG Tuition</th>
                  </tr>
                </thead>
                <tbody>
                  {universities.map((uni, index) => (
                    <tr key={index} className="border-b border-slate-100">
                      <td className="py-3 text-slate-800 font-medium">{uni.name}</td>
                      <td className="py-3 text-slate-800">{uni.ug}</td>
                      <td className="py-3 text-slate-800">{uni.pg}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mb-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-amber-600 px-6 py-4 flex items-center">
              <TrendingUp className="text-white mr-2" size={24} />
              <h2 className="text-xl font-semibold text-white">Monthly Living Costs by City</h2>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <label htmlFor="city-select" className="block text-sm font-medium text-slate-700 mb-2">
                  Select City:
                </label>
                <div className="flex flex-wrap gap-2">
                  {cities.map((city) => (
                    <button
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={`px-4 py-2 rounded text-sm font-medium ${
                        selectedCity === city
                          ? 'bg-amber-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-amber-800 mb-1">Rent (Shared/Studio)</h3>
                  <p className="text-lg font-bold text-slate-800">{livingCosts[selectedCity].rent}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-amber-800 mb-1">Food & Groceries</h3>
                  <p className="text-lg font-bold text-slate-800">{livingCosts[selectedCity].food}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-amber-800 mb-1">Transport</h3>
                  <p className="text-lg font-bold text-slate-800">{livingCosts[selectedCity].transport}</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-amber-800 mb-1">Others (Bills, etc.)</h3>
                  <p className="text-lg font-bold text-slate-800">{livingCosts[selectedCity].others}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-slate-800">Total Monthly Estimate:</h3>
                  <p className="text-xl font-bold text-amber-700">{livingCosts[selectedCity].total}</p>
                </div>
              </div>
              
              {selectedCity === 'London' && (
                <p className="mt-4 text-sm text-slate-600 italic">
                  Students in London typically spend <span className="font-semibold">30%–50% more</span> than those in other cities, mainly due to higher rent.
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-rose-600 px-6 py-4 flex items-center">
              <CreditCard className="text-white mr-2" size={24} />
              <h2 className="text-xl font-semibold text-white">Initial Setup Costs</h2>
            </div>
            <div className="p-6">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="pb-3 text-slate-700">Item</th>
                    <th className="pb-3 text-slate-700">Estimated Cost</th>
                  </tr>
                </thead>
                <tbody>
                  {setupCosts.map((item, index) => (
                    <tr key={index} className="border-b border-slate-100">
                      <td className="py-3 text-slate-800 font-medium">{item.item}</td>
                      <td className="py-3 text-slate-800">{item.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="bg-teal-600 px-6 py-4 flex items-center">
              <PiggyBank className="text-white mr-2" size={24} />
              <h2 className="text-xl font-semibold text-white">Money-Saving Tips</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {savingTips.map((tip, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-teal-100 text-teal-800 rounded-full h-5 w-5 text-xs font-bold mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-slate-800">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="bg-indigo-800 px-6 py-4 flex items-center">
            <DollarSign className="text-white mr-2" size={24} />
            <h2 className="text-xl font-semibold text-white">Average Total Cost per Year (All-Inclusive)</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {totalCosts.map((item, index) => (
                <div key={index} className="bg-indigo-50 p-4 rounded-lg flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-indigo-900">{item.location}</h3>
                  <p className="text-lg font-bold text-indigo-800">{item.cost}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-slate-100 rounded-lg p-5 text-slate-600 text-sm">
          <h3 className="font-semibold mb-2">Sources:</h3>
          <ul className="space-y-1">
            <li>• UKCISA (UK Council for International Student Affairs)</li>
            <li>• Numbeo Cost of Living Index (2025)</li>
            <li>• UCAS & University Websites (2025 intake data)</li>
            <li>• Times Higher Education & QS Rankings</li>
            <li>• Mintel Student Spending UK Reports (2024/2025)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
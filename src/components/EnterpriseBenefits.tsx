import { TrendingUp, MapPin, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const regions = [
  {
    name: 'Maharashtra',
    city: 'Mumbai',
    carModel: 'Mahindra 3 XO top model',
    exShowroom: 'INR 1439800',
    benefits: [
      { label: 'Car Scrap Value (15 Yr old Sedan)', cero: 30000, unorganised: 33000, highlight: false },
      { label: 'Road Tax Rebate', cero: 25916, unorganised: 0, highlight: false },
      { label: 'Registration Fees Waiver', cero: 6006, unorganised: 0, highlight: false },
      { label: 'Additional OEM/Dealer Discount', cero: 28796, unorganised: 0, highlight: false },
    ],
    total: 70718,
    totalUnorganised: 33000,
    savings: 37718,
    notes: [
      '15% rebate on pending COD on 12% applicable road tax',
      '100% Registration fees waiver',
      'Additional discount provided by dealer upto 2-4% on ex-showroom',
    ],
  },
  {
    name: 'Madhya Pradesh',
    city: 'Indore',
    carModel: 'Mahindra 3 XO top model',
    exShowroom: 'INR 1439800',
    benefits: [
      { label: 'Car Scrap Value (15 Yr old Sedan)', cero: 30000, unorganised: 33000, highlight: false },
      { label: 'Road Tax Rebate', cero: 35995, unorganised: 0, highlight: false },
      { label: 'Registration Fees Waiver', cero: 6006, unorganised: 0, highlight: false },
      { label: 'Additional OEM/Dealer Discount', cero: 28796, unorganised: 0, highlight: false },
    ],
    total: 80797,
    totalUnorganised: 33000,
    savings: 47797,
    notes: [
      '25% rebate on pending COD on 10% applicable road tax',
      '100% Registration fees waiver',
      'Additional discount provided by dealer upto 2-4% on ex-showroom',
    ],
  },
];

function formatCurrency(value: number): string {
  return `₹${(value / 1000).toFixed(0)}K`;
}

function formatCurrencyFull(value: number): string {
  if (value >= 100000) {
    return `₹${(value / 100000).toFixed(2)}L`;
  }
  return `₹${value.toLocaleString('en-IN')}`;
}

export default function EnterpriseBenefits() {
  const [activeRegion, setActiveRegion] = useState(0);
  const current = regions[activeRegion];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 rounded-full mb-4">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">CERO Commercial Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Maximum Value For Your Old Vehicle
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how much more you save with CERO compared to unorganized scrapping agencies, plus additional benefits for your next vehicle purchase.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-3 justify-center">
          {regions.map((region, index) => (
            <button
              key={index}
              onClick={() => setActiveRegion(index)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                activeRegion === index
                  ? 'bg-emerald-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-300'
              }`}
            >
              <MapPin className="w-4 h-4" />
              {region.name}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 lg:p-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-emerald-100 mb-1">New Vehicle</p>
                <p className="text-lg font-semibold mb-3">{current.carModel}</p>
                <p className="text-sm text-emerald-100">Ex-showroom: <span className="font-semibold text-white">{current.exShowroom}</span></p>
              </div>
              <div className="sm:text-right">
                <p className="text-sm text-emerald-100 mb-1">Your Total Benefit</p>
                <p className="text-4xl font-bold text-emerald-50 mb-2">
                  {formatCurrencyFull(current.savings)}
                </p>
                <p className="text-sm text-emerald-100">vs unorganized agencies</p>
              </div>
            </div>
          </div>

          <div className="p-6 lg:p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold text-gray-900">Benefit</th>
                    <th className="text-right py-4 px-4 font-semibold text-emerald-600">CERO</th>
                    <th className="text-right py-4 px-4 font-semibold text-gray-500">Unorganized</th>
                    <th className="text-right py-4 px-4 font-semibold text-emerald-600">Your Gain</th>
                  </tr>
                </thead>
                <tbody>
                  {current.benefits.map((benefit, index) => {
                    const gain = benefit.cero - benefit.unorganised;
                    return (
                      <tr key={index} className="border-b border-gray-100 hover:bg-emerald-50 transition-colors">
                        <td className="py-4 px-4 text-gray-700 font-medium">{benefit.label}</td>
                        <td className="text-right py-4 px-4 text-emerald-600 font-semibold">
                          {formatCurrency(benefit.cero)}
                        </td>
                        <td className="text-right py-4 px-4 text-gray-500">
                          {formatCurrency(benefit.unorganised)}
                        </td>
                        <td className="text-right py-4 px-4">
                          <span className={`font-semibold ${gain > 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                            {gain > 0 ? '+' : ''}{formatCurrency(gain)}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                  <tr className="bg-gradient-to-r from-emerald-50 to-teal-50 font-bold">
                    <td className="py-5 px-4 text-gray-900">Total Envisaged Benefits</td>
                    <td className="text-right py-5 px-4 text-emerald-700">{formatCurrency(current.total)}</td>
                    <td className="text-right py-5 px-4 text-gray-600">
                      {formatCurrency(current.totalUnorganised)}
                    </td>
                    <td className="text-right py-5 px-4">
                      <span className="text-emerald-700 px-3 py-1 bg-emerald-200 rounded-lg">
                        +{formatCurrency(current.savings)}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {current.notes.map((note, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <ChevronRight className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Ready To Unlock Maximum Value of Your Old Vehicle</p>
          <button className="group bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-2">
            Get Your Personalized Quote
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

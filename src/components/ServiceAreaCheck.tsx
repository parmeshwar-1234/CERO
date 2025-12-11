import { MapPin, Check } from 'lucide-react';
import { useState } from 'react';

const cities = [
  'Mumbai', 'Delhi', 'Bangalore', 'Pune', 'Hyderabad',
  'Chennai', 'Kolkata', 'Ahmedabad', 'Surat', 'Jaipur'
];

export default function ServiceAreaCheck() {
  const [selectedCity, setSelectedCity] = useState('');
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    if (selectedCity) {
      setChecked(true);
    }
  };

  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              Check Service Availability
            </h2>
            <p className="text-gray-600">We're expanding across India. See if we serve your area.</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1 relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <select
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setChecked(false);
                }}
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-lg text-gray-900 font-medium focus:border-emerald-500 focus:outline-none appearance-none cursor-pointer"
              >
                <option value="">Select your city</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleCheck}
              disabled={!selectedCity}
              className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-8 py-4 rounded-lg font-semibold transition-all whitespace-nowrap"
            >
              Check Availability
            </button>
          </div>

          {checked && selectedCity && (
            <div className="mt-6 p-4 bg-white rounded-lg border-2 border-emerald-200 flex items-center gap-3 max-w-2xl mx-auto animate-fade-in">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Great news!</p>
                <p className="text-gray-600">We serve {selectedCity}. Free pickup available.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

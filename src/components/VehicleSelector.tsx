import { Car, Bike, Truck, Building2 } from 'lucide-react';

const vehicles = [
  {
    icon: Car,
    title: 'Cars',
    description: 'Sedan, SUV, Hatchback',
  },
  {
    icon: Bike,
    title: 'Two-Wheelers',
    description: 'Bikes & Scooters',
  },
  {
    icon: Truck,
    title: 'Commercial Vehicles',
    description: 'Trucks, Buses, Vans',
  },
  {
    icon: Building2,
    title: 'Fleet Management',
    description: 'Bulk vehicle disposal',
  },
];

export default function VehicleSelector() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What We Scrap
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Select your vehicle type to get started with an instant estimate.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((vehicle, index) => {
            const Icon = vehicle.icon;
            return (
              <button
                key={index}
                className="group bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-emerald-500 hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {vehicle.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {vehicle.description}
                </p>
                <span className="inline-flex items-center text-emerald-600 font-semibold group-hover:gap-2 transition-all">
                  Start Estimate
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

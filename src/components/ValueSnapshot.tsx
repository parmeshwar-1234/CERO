import { Shield, Truck, FileCheck, Heart } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Legal Protection',
    description: 'Complete compliance with government regulations. No legal hassles, ever.',
  },
  {
    icon: Truck,
    title: 'Doorstep Pickup',
    description: 'Free pickup from your location. We handle the towing and logistics.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Process',
    description: 'Real-time updates, fair pricing, and complete documentation support.',
  },
  {
    icon: Heart,
    title: 'Social Impact',
    description: 'Every scrap supports girl child education via Nanhi Kali initiative.',
  },
];

export default function ValueSnapshot() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose CERO?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make vehicle scrapping simple, safe, and socially responsible.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                  <Icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

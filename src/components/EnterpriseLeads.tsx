import { Building2, CheckCircle, ArrowRight } from 'lucide-react';

const features = [
  'Pan-India bulk pickup services',
  'Fleet compliance management',
  'Dedicated enterprise support',
  'Volume-based pricing',
];

const metrics = [
  { value: '500+', label: 'Fleets Served' },
  { value: '15+', label: 'Cities' },
  { value: '100%', label: 'Compliant' },
];

export default function EnterpriseLeads() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-emerald-900 to-teal-800 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="flex flex-col">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-800 rounded-full mb-6 w-fit">
              <Building2 className="w-4 h-4" />
              <span className="text-sm font-medium">Enterprise Solutions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Have a Fleet or <br className="hidden sm:block" />Commercial Vehicles?
            </h2>

            <p className="text-lg text-emerald-100 mb-8 leading-relaxed max-w-lg">
              We specialize in bulk vehicle disposal with complete compliance support, transparent pricing, and pan-India servicing for enterprises and fleet operators.
            </p>

            <ul className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span className="text-emerald-50 font-medium">{feature}</span>
                </li>
              ))}
            </ul>

            <button className="group bg-white hover:bg-emerald-50 text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2 w-fit">
              Talk to Our Enterprise Desk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="flex flex-col lg:sticky lg:top-20">
            <div className="bg-gradient-to-br from-white/10 via-white/5 to-white/5 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border border-white/20 shadow-2xl">
              <img
                src="/public/fleet.png"
                alt="Fleet management"
                className="rounded-xl shadow-2xl mb-8 w-full object-cover aspect-video"
              />

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-6">Fleet Management</h3>

                <div className="grid grid-cols-3 gap-3">
                  {metrics.map((metric, index) => (
                    <div
                      key={index}
                      className="group bg-gradient-to-br from-emerald-300/10 to-teal-300/10 backdrop-blur-sm rounded-xl p-3 sm:p-5 border border-emerald-300/20 hover:border-emerald-300/40 transition-all text-center"
                    >
                      <div className="text-2xl sm:text-4xl font-bold text-white mb-2 leading-none">
                        {metric.value}
                      </div>
                      <div className="text-sm text-emerald-200 font-medium">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="text-sm text-emerald-200 text-center">
                  Trusted by India's leading fleet operators and logistics companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

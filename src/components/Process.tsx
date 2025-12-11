import { Calculator, Truck, FileText, Award } from 'lucide-react';

const steps = [
  {
    icon: Calculator,
    title: 'Instant Estimate',
    description: 'Get a fair price quote instantly based on your vehicle details.',
    step: '01',
  },
  {
    icon: Truck,
    title: 'Free Pickup',
    description: 'We arrange free doorstep pickup at your convenience.',
    step: '02',
  },
  {
    icon: FileText,
    title: 'RC Cancellation & Docs',
    description: 'Complete documentation support and RC cancellation assistance.',
    step: '03',
  },
  {
    icon: Award,
    title: 'Certificate Issued',
    description: 'Receive your official vehicle scrapping certificate.',
    step: '04',
  },
];

export default function Process() {
  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Here's How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, transparent 4-step process from quote to certificate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative">
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-200 via-emerald-400 to-emerald-200"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-xl text-center">
                  <div className="relative inline-flex items-center justify-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-full flex items-center justify-center relative z-10 border-4 border-white shadow-lg">
                      <Icon className="w-9 h-9 text-emerald-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg z-20">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:gap-3 transition-all">
            Learn More About Our Process
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

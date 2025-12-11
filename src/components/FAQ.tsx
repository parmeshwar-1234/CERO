import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'How is the vehicle price determined?',
    answer: 'Pricing is based on vehicle weight, age, condition, and current scrap metal rates. We provide transparent, market-competitive quotes with no hidden charges.',
  },
  {
    question: 'Is pickup really free?',
    answer: 'Yes, we offer completely free doorstep pickup across all serviceable cities. Our team handles all towing and logistics at no additional cost to you.',
  },
  {
    question: 'What documents do I need?',
    answer: 'You need your Registration Certificate (RC), a valid ID proof, and authorization if you are not the registered owner. We assist with all documentation requirements.',
  },
  {
    question: 'How long does the process take?',
    answer: 'From quote to certificate, the process typically takes 7-10 business days. Pickup is scheduled within 48-72 hours of confirmation.',
  },
  {
    question: 'Will I get an official certificate?',
    answer: 'Yes, you receive an official vehicle scrapping certificate from CERO, which is government-recognized and can be used for RC cancellation and other formalities.',
  },
  {
    question: 'Is this legal and compliant?',
    answer: 'Absolutely. CERO is India\'s first government-authorized vehicle recycler. We ensure 100% compliance with all environmental and legal regulations.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about scrapping your vehicle with CERO.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-emerald-200 transition-colors"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4"
              >
                <span className="font-semibold text-gray-900 text-lg pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-6 h-6 text-emerald-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-48' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
          <p className="text-gray-700 mb-4">
            <strong>Still have questions?</strong> We're here to help!
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}

import { Star, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: 'Rajesh Kumar',
    city: 'Mumbai',
    vehicle: 'Maruti Swift 2010',
    rating: 5,
    text: 'The entire process was so smooth. Got a fair price and they handled all the paperwork. Highly recommend!',
  },
  {
    name: 'Priya Sharma',
    city: 'Bangalore',
    vehicle: 'Honda Activa 2012',
    rating: 5,
    text: 'I was worried about scrapping my old scooter, but CERO made it hassle-free. Free pickup was a bonus!',
  },
  {
    name: 'Amit Patel',
    city: 'Pune',
    vehicle: 'Tata Indica 2008',
    rating: 5,
    text: 'Professional service and transparent pricing. They even helped with RC cancellation. Very satisfied.',
  },
];

const reels = [
  {
    title: 'Our Recycling Facility Tour',
    thumbnail: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Customer Pickup Experience',
    thumbnail: 'https://images.pexels.com/photos/5214413/pexels-photo-5214413.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'How We Process Vehicles',
    thumbnail: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentReel, setCurrentReel] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextReel = () => {
    setCurrentReel((prev) => (prev + 1) % reels.length);
  };

  const prevReel = () => {
    setCurrentReel((prev) => (prev - 1 + reels.length) % reels.length);
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real Stories from Real Customers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers say and experience our process firsthand.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Customer Testimonials</h3>
            <div className="relative bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonials[currentTestimonial].text}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</p>
                <p className="text-gray-600 text-sm">
                  {testimonials[currentTestimonial].city} • {testimonials[currentTestimonial].vehicle}
                </p>
              </div>

              <div className="flex gap-2 mt-6">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-emerald-100 flex items-center justify-center transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 rounded-full bg-gray-100 hover:bg-emerald-100 flex items-center justify-center transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <div className="flex gap-2 mt-4">
                {testimonials.map((_, index) => (
                  <div
                    key={index}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentTestimonial ? 'w-8 bg-emerald-600' : 'w-1.5 bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Behind the Scenes</h3>
            <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="relative aspect-video group cursor-pointer">
                <img
                  src={reels[currentReel].thumbnail}
                  alt={reels[currentReel].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-emerald-600 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h4 className="font-bold text-gray-900 text-lg mb-4">
                  {reels[currentReel].title}
                </h4>

                <div className="flex gap-2">
                  <button
                    onClick={prevReel}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-emerald-100 flex items-center justify-center transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-600" />
                  </button>
                  <button
                    onClick={nextReel}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-emerald-100 flex items-center justify-center transition-colors"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-600" />
                  </button>
                </div>

                <div className="flex gap-2 mt-4">
                  {reels.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all ${
                        index === currentReel ? 'w-8 bg-emerald-600' : 'w-1.5 bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

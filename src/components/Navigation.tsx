import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { label: 'About', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Enterprise', href: '#' },
  { label: 'FAQs', href: '#' },
  { label: 'Contact', href: '#' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="/" className="flex items-center gap-2 flex-shrink-0">
            <img
              src="/cero_logo.png"
              alt="CERO Logo"
              className="h-10 sm:h-12 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-all text-sm">
              Get Quote
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-emerald-600 rounded-lg font-medium text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-all text-sm">
              Get Quote
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

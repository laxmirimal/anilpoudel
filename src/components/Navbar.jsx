import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-4 border-b border-slate-800' 
        : 'bg-slate-900/80 backdrop-blur-sm py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-2 text-2xl font-extrabold tracking-tight text-white">
            <span>ANIL</span>
            <span className="text-amber-400 font-black">POUDEL</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 font-medium transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="tel:+9779807937130"
              className="flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-semibold px-4 py-2 rounded-xl transition-all shadow-md hover:shadow-amber-500/20 text-sm"
            >
              <Phone className="w-4 h-4" />
              <span>+977 980-7937130</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2 rounded-lg focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-7 h-7 text-amber-400" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-4 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-slate-200 hover:text-amber-400 text-lg font-medium py-2 px-3 rounded-md hover:bg-slate-800 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-800 flex flex-col space-y-3">
            <a
              href="tel:+9779807937130"
              className="flex items-center justify-center space-x-2 bg-amber-500 text-slate-950 font-semibold py-3 rounded-xl"
            >
              <Phone className="w-5 h-5" />
              <span>Call: +977 980-7937130</span>
            </a>
            <a
              href="mailto:info.anilpoudel@gmail.com"
              className="flex items-center justify-center space-x-2 bg-slate-800 text-slate-200 font-medium py-3 rounded-xl border border-slate-700"
            >
              <Mail className="w-5 h-5 text-amber-400" />
              <span>info.anilpoudel@gmail.com</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

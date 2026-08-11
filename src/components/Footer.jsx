import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="text-2xl font-black text-white tracking-tight flex items-center space-x-2">
              <span>ANIL</span>
              <span className="text-amber-400">POUDEL</span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed font-light max-w-sm">
              Registered Accountant & Professional Auditor in Birtamode, Jhapa. Providing transparent corporate finance, tax solutions, and business registration services.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-amber-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-amber-400 transition-colors">About Anil Poudel</a></li>
              <li><a href="#services" className="hover:text-amber-400 transition-colors">Auditing Services</a></li>
              <li><a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-200">Direct Contact</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="tel:+9779807937130" className="hover:text-amber-400 transition-colors">+977 980-7937130</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href="mailto:info.anilpoudel@gmail.com" className="hover:text-amber-400 transition-colors break-all">info.anilpoudel@gmail.com</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>Birtamode, Jhapa, Nepal</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
          <p>© {currentYear} Anil Poudel. Registered Accountant & Auditor. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import React from 'react';
import { Briefcase, FileText, TrendingUp, SearchCheck, BookOpen, CalendarCheck, FileCheck, ShieldAlert, ArrowRight } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Briefcase,
      title: 'Company Registration',
      description: 'Complete end-to-end guidance and documentation support for registering new private limited, sole proprietorship, or partnership entities.',
      tag: 'Business Setup'
    },
    {
      icon: FileText,
      title: 'PAN/VAT Compliance',
      description: 'Hassle-free registration for PAN and VAT numbers, ensuring ongoing compliance with Inland Revenue Department (IRD) regulations.',
      tag: 'Tax Registration'
    },
    {
      icon: TrendingUp,
      title: 'Tax Planning & Solutions',
      description: 'Strategic advisory for tax optimization, dispute resolutions, and annual income tax filing for both individuals and corporate firms.',
      tag: 'Advisory'
    },
    {
      icon: SearchCheck,
      title: 'Financial Auditing',
      description: 'Rigorous and independent audit assurance services designed to verify accuracy, prevent discrepancies, and ensure full regulatory compliance.',
      tag: 'Assurance'
    },
    {
      icon: BookOpen,
      title: 'Accounting & Bookkeeping',
      description: 'Structured day-to-day record maintenance, transaction logging, cash flow management, and financial statement generation.',
      tag: 'Bookkeeping'
    },
    {
      icon: CalendarCheck,
      title: 'Monthly Filings ("Maskebari")',
      description: 'Timely handling of mandatory monthly VAT returns, withholding tax filings, and regular IRD portal compliance submissions.',
      tag: 'Regular Filing'
    },
    {
      icon: FileCheck,
      title: 'Audit Report Preparation',
      description: 'Professional compilation of financial audit reports, balance sheets, and profit & loss statements tailored for banks and authorities.',
      tag: 'Financial Reports'
    },
    {
      icon: ShieldAlert,
      title: 'IRD Audit Representation',
      description: 'Expert representation and technical support during Inland Revenue Department tax assessments and tax audit reviews.',
      tag: 'Representation'
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-amber-400 mb-2">
            What We Offer
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            Professional Accounting & Auditing Services
          </p>
          <div className="w-16 h-1 bg-amber-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-400 text-sm mt-4">
            Tailored financial solutions for small businesses, corporate entities, and entrepreneurs in Birtamode, Jhapa.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const whatsappText = `Hi Anil! I would like to inquire about your ${service.title} services.`;
            return (
              <div
                key={index}
                className="bg-slate-800/80 border border-slate-700/70 hover:border-amber-400/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-amber-500/5 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-amber-400/10 text-amber-400 rounded-xl flex items-center justify-center group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-slate-700 text-slate-300 rounded-md">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-slate-300 text-sm font-light leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <a
                  href={`https://wa.me/9779807937130?text=${encodeURIComponent(whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs font-semibold text-amber-400 hover:text-amber-300 group-hover:translate-x-1 transition-all pt-4 border-t border-slate-700/50"
                >
                  <span>Inquire via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

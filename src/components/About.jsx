import React from 'react';
import { GraduationCap, MapPin, CheckCircle, Award, FileText, TrendingUp } from 'lucide-react';

export default function About() {
  const highlights = [
    'Comprehensive corporate & individual tax planning',
    'Auditing compliance in accordance with NFRS / NAS standards',
    'Fast-track Company Registration and PAN/VAT registration',
    'Accurate daily bookkeeping and financial ledger maintenance',
    'Timely monthly filings ("Maskebari") and return submissions',
    'Financial dispute advisory and official audit representations'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-amber-600 mb-2">
            Get To Know Me
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            About Anil Poudel
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Experience Badge Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden border border-slate-800">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 text-center space-y-4">
                <span className="inline-block p-4 bg-amber-500/20 text-amber-400 rounded-2xl">
                  <Award className="w-12 h-12" />
                </span>
                
                <h3 className="text-5xl font-black text-amber-400">5+</h3>
                <p className="text-xl font-bold text-slate-100">Years of Professional Excellence</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Delivering top-tier accounting, auditing, and tax advisory services to businesses and professionals across Birtamode & Jhapa district.
                </p>

                <div className="pt-6 border-t border-slate-800 grid grid-cols-2 gap-4 text-left">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-6 h-6 text-amber-400 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-400">Degree</div>
                      <div className="text-sm font-semibold text-white">BBS Graduate</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="w-6 h-6 text-amber-400 flex-shrink-0" />
                    <div>
                      <div className="text-xs text-slate-400">Pursuing</div>
                      <div className="text-sm font-semibold text-white">MBA Candidate</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-2 pt-4 text-slate-300 text-sm">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Birtamode, Jhapa, Nepal</span>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Core Expertise */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 leading-snug">
              Dedicated Financial Strategist & Registered Auditor for Growing Businesses
            </h3>
            
            <p className="text-slate-600 leading-relaxed font-light">
              I am <strong className="text-slate-900 font-semibold">Anil Poudel</strong>, an accounting and auditing professional operating in Birtamode, Jhapa. I specialize in navigating the financial complexities of corporate tax laws, audit compliance, financial statement preparation, and administrative filings.
            </p>

            <p className="text-slate-600 leading-relaxed font-light">
              My mission is to help business owners achieve 100% tax compliance, optimize financial structures, and safeguard business growth with completely transparent financial records.
            </p>

            {/* Highlights List */}
            <div className="pt-4">
              <h4 className="text-sm uppercase font-bold tracking-wider text-slate-800 mb-4">
                Core Specializations:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

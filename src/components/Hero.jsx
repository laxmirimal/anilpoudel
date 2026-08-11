import React from 'react';
import { ShieldCheck, ArrowRight, MessageSquare, Award, CheckCircle2 } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-900 overflow-hidden text-white">
      {/* Subtle background glow graphics */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-amber-400/10 border border-amber-400/30 px-4 py-2 rounded-full text-amber-400 text-xs sm:text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Trusted Financial & Auditing Partner</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500">Auditing</span> & Tax Solutions.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Empowering individuals, firms, and corporations across <strong className="text-white font-semibold">Birtamode, Jhapa</strong> with precise bookkeeping, PAN/VAT filings, audit assurance, and expert financial strategy.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-950 font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>Consult Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="https://wa.me/9779807937130?text=Hi%20Anil!%20I%20would%20like%20to%20inquire%20about%20your%20auditing%20and%20tax%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Message</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="pt-8 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">5+</div>
                <div className="text-xs sm:text-sm text-slate-400">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
                <div className="text-xs sm:text-sm text-slate-400">Tax Compliance</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">Birtamode</div>
                <div className="text-xs sm:text-sm text-slate-400">Jhapa, Nepal</div>
              </div>
            </div>
          </div>

          {/* Profile Image Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-amber-300 rounded-3xl blur-2xl opacity-20 transform scale-95"></div>
              
              <div className="relative bg-slate-800 p-3 rounded-3xl border border-slate-700 shadow-2xl">
                <img
                  src="/anil.png"
                  alt="Anish Poudel Portrait"
                  className="w-full h-auto rounded-2xl object-cover shadow-md"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-5 -left-5 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-4 rounded-2xl shadow-xl flex items-center space-x-3">
                  <div className="bg-amber-400/20 p-2 rounded-xl text-amber-400">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold tracking-wider">Qualification</div>
                    <div className="text-sm font-bold text-white">BBS Graduate & MBA Candidate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

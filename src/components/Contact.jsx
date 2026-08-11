import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare, Clock, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Auditing',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "9779807937130";
    const text = `Hi Anil Poudel!%0A%0A*Name:* ${encodeURIComponent(formData.name)}%0A*Phone:* ${encodeURIComponent(formData.phone)}%0A*Service Requested:* ${encodeURIComponent(formData.service)}%0A%0A*Message:* ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-amber-600 mb-2">
            Get In Touch
          </h2>
          <p className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Contact Anil Poudel
          </p>
          <div className="w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-slate-600 text-sm mt-4">
            Have tax questions, need company registration, or require official auditing? Reach out today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-xl border border-slate-800 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Contact Information</h3>
                <p className="text-slate-400 text-sm">
                  Visit our office in Birtamode, Jhapa or get in touch directly via call, email, or WhatsApp.
                </p>
              </div>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-400/10 text-amber-400 rounded-2xl flex items-center justify-center flex-shrink-0 border border-amber-400/20">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Contact Number</div>
                    <a href="tel:+9779807937130" className="text-lg font-bold text-white hover:text-amber-400 transition-colors">
                      +977 980-7937130
                    </a>
                    <div className="text-xs text-emerald-400 flex items-center space-x-1 mt-0.5">
                      <CheckCircle className="w-3 h-3" />
                      <span>Available on WhatsApp</span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-400/10 text-amber-400 rounded-2xl flex items-center justify-center flex-shrink-0 border border-amber-400/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Email Address</div>
                    <a href="mailto:info.anilpoudel@gmail.com" className="text-base font-bold text-white hover:text-amber-400 transition-colors break-all">
                      info.anilpoudel@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-amber-400/10 text-amber-400 rounded-2xl flex items-center justify-center flex-shrink-0 border border-amber-400/20">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Office Location</div>
                    <div className="text-base font-bold text-white">
                      Birtamode, Jhapa, Nepal
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start space-x-4 pt-4 border-t border-slate-800">
                  <div className="w-12 h-12 bg-slate-800 text-slate-300 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">Working Hours</div>
                    <div className="text-sm font-semibold text-slate-200">
                      Sun - Fri: 9:00 AM - 6:00 PM
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Direct WhatsApp Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">Send WhatsApp Message</h3>
                  <p className="text-slate-500 text-sm">Fill out the form to launch a instant structured chat.</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Shrestha"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-800 outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase font-bold text-slate-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +977 9800000000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-800 outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-slate-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-800 outline-none transition-all bg-white"
                  >
                    <option value="Company Registration">Company Registration & Business Setup</option>
                    <option value="PAN/VAT Compliance">PAN / VAT Compliance & Filing</option>
                    <option value="Auditing">Financial Auditing & Assurance</option>
                    <option value="Tax Solutions">Tax Solutions & Advisory</option>
                    <option value="Bookkeeping">Bookkeeping & Financial Records</option>
                    <option value="Monthly Filings">Monthly Filing ("Maskebari")</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase font-bold text-slate-700 mb-2">
                    Message / Business Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your inquiry or requirement..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 text-slate-800 outline-none transition-all"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-emerald-600/30 transition-all flex items-center justify-center space-x-3 text-base"
                >
                  <Send className="w-5 h-5" />
                  <span>Send via WhatsApp (+977 980-7937130)</span>
                </button>
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

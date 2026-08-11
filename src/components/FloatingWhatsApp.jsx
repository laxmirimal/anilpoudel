import React from 'react';
import { MessageSquare } from 'lucide-react';

export default function FloatingWhatsApp() {
  const phone = "9779807937130";
  const defaultText = encodeURIComponent("Hi Anil! I would like to consult regarding your auditing and tax services.");

  return (
    <a
      href={`https://wa.me/${phone}?text=${defaultText}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-emerald-500 hover:bg-emerald-600 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      aria-label="Direct WhatsApp Contact"
    >
      <MessageSquare className="w-7 h-7 fill-white text-emerald-500" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs group-hover:ml-3 transition-all duration-300 ease-in-out text-sm font-bold">
        Chat on WhatsApp
      </span>
    </a>
  );
}

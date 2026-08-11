import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-400 selection:text-slate-950">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}

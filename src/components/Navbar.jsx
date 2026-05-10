import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about', num: '01.' },
    { name: 'Projects', href: '#projects', num: '02.' },
    { name: 'Experience', href: '#experience', num: '03.' },
    { name: 'Contact', href: '#contact', num: '04.' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl py-4 shadow-[0_4px_30px_rgba(0,0,0,0.03)] border-b border-slate-200' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="group flex items-center px-4 py-1.5 border border-slate-200 rounded-[10px] bg-white/50 backdrop-blur-md shadow-sm hover:border-accent-500/40 hover:bg-white transition-all duration-300">
          <span className="text-2xl font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-accent-500">
            Bhanu <span className="text-accent-500">Yadav</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="group flex items-center text-sm font-semibold text-slate-600 hover:text-accent-500 px-4 py-2 border border-slate-200/80 rounded-full hover:border-accent-500/30 hover:bg-white/50 transition-all duration-300 shadow-sm hover:shadow"
            >
              <span>{link.name}</span>
            </a>
          ))}
          <a href="https://github.com/dev-bhanuyadav" target="_blank" rel="noopener noreferrer" className="p-2 text-slate-600 hover:text-accent-500 hover:bg-slate-100 rounded-full transition-all duration-300 ml-2" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
          </a>
          <a href="#contact" className="btn-outline py-2 px-5 text-sm ml-2 border-2">
            Resume
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button 
          className="md:hidden relative z-50 text-accent-500 p-2 rounded-lg bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu Overlay */}
      <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 md:hidden flex flex-col items-center justify-center transition-all duration-500 ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center space-y-6 w-full px-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="flex items-center justify-center text-xl font-bold w-full max-w-xs py-3 group border border-slate-200/80 rounded-full hover:border-accent-500/40 hover:bg-slate-50 transition-all shadow-sm"
              onClick={() => setIsOpen(false)}
            >
              <span className="text-slate-700 group-hover:text-accent-500 transition-colors">{link.name}</span>
            </a>
          ))}
          <a href="#contact" className="btn-primary w-full max-w-xs mt-6 py-3" onClick={() => setIsOpen(false)}>
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 py-10 mt-auto overflow-hidden">
      {/* Subtle Background Glow for Light Theme */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-accent-500/10 rounded-t-full blur-[80px] pointer-events-none z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center relative z-10">
        {/* Social Links for Desktop and Mobile Footer */}
        <div className="flex gap-8 mb-8">
          <a href="https://github.com/dev-bhanuyadav" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-accent-500 hover:-translate-y-1 transition-all duration-300" aria-label="GitHub">
            <Github size={22} />
          </a>
          <a href="#" className="text-slate-500 hover:text-accent-500 hover:-translate-y-1 transition-all duration-300" aria-label="LinkedIn">
            <Linkedin size={22} />
          </a>
          <a href="#" className="text-slate-500 hover:text-accent-500 hover:-translate-y-1 transition-all duration-300" aria-label="Twitter">
            <Twitter size={22} />
          </a>
          <a href="#" className="text-slate-500 hover:text-accent-500 hover:-translate-y-1 transition-all duration-300" aria-label="Instagram">
            <Instagram size={22} />
          </a>
        </div>
        
        <a href="#" className="group flex flex-col items-center">
          <p className="text-slate-500 text-sm font-mono font-semibold mb-2 group-hover:text-accent-500 transition-colors">
            Designed & Built by Bhanu Yadav
          </p>
          <div className="flex items-center gap-2 text-slate-400 font-medium text-xs">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="w-1 h-1 rounded-full bg-accent-500/80"></span>
            <span>All rights reserved</span>
          </div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden section-container pt-32">
      {/* Advanced Animated Background Blobs for Light Theme */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent-500/15 rounded-full filter blur-[100px] animate-blob z-0"></div>
      <div className="absolute top-1/3 -left-20 w-[30rem] h-[30rem] bg-orange-400/15 rounded-full filter blur-[120px] animate-blob animation-delay-2000 z-0"></div>
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-yellow-400/15 rounded-full filter blur-[100px] animate-blob animation-delay-4000 z-0"></div>
      
      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 z-10 relative">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-slate-900 leading-tight">
            Hi, I'm <br />
            <span className="text-gradient">Bhanu Yadav.</span>
          </h1>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-600">
            I engineer web experiences.
          </h2>
          
          <p className="text-slate-600 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl mt-6 leading-relaxed">
            I'm a Junior Web Developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on creating accessible, human-centered products using 
            <span className="text-slate-900 font-semibold"> React, Node.js & Firebase</span>.
          </p>
          
          <div className="flex flex-wrap gap-5 justify-center lg:justify-start pt-8">
            <a href="#projects" className="btn-primary group">
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </a>
            <a href="#contact" className="btn-outline group">
              Contact Me
              <Mail className="ml-2" size={20} />
            </a>
          </div>
        </div>
        
        {/* Next-Level Avatar for Light Theme */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 animate-float lg:ml-10">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent-500 to-orange-300 rounded-3xl rotate-6 opacity-40 blur-xl"></div>
          <div className="absolute inset-0 border-2 border-accent-500/20 rounded-3xl translate-x-4 translate-y-4 transition-transform hover:translate-x-2 hover:translate-y-2"></div>
          <div className="absolute inset-0 bg-white backdrop-blur-md rounded-3xl flex items-center justify-center border border-white shadow-2xl overflow-hidden group hover:-translate-y-2 hover:rotate-0 transition-all duration-500 z-10 rotate-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,138,0,0.05)_0,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src="/icon1.png" 
              alt="Bhanu Yadav" 
              className="w-full h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

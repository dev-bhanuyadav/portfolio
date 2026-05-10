import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // We don't prevent default here if we want to use the iframe trick
    // But since we want a better UX, we'll use a hidden iframe to submit
    const form = e.target;
    const iframe = document.getElementById('hidden_iframe');
    
    // Show a success message after a brief delay (when we assume it's submitted)
    setTimeout(() => {
      alert('Thank you for your message! It has been sent successfully.');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const GOOGLE_FORM_ACTION = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSeKgAecfrjslReePPYLYgqAvjPHuqgIbd6mElu5a6Hdcld9qg/formResponse";
  const ACTION_URL = GOOGLE_FORM_ACTION;

  return (
    <section id="contact" className="section-container max-w-4xl pt-32 pb-48 relative">
      {/* Hidden iframe to prevent redirect */}
      <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
      
      {/* Background Glow for Light Theme */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg h-96 bg-accent-500/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
      
      <div className="text-center mb-16 reveal relative z-10">
        <h2 className="text-accent-500 font-mono mb-4 text-sm md:text-base tracking-widest uppercase">What's Next?</h2>
        <h3 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">Get In Touch</h3>
        <p className="text-slate-600 max-w-xl mx-auto text-lg leading-relaxed">
          My inbox is always open. Whether you have a question, a project proposal, 
          or just want to say hi, I'll try my best to get back to you!
        </p>
      </div>

      <div className="glass-card bg-white p-8 md:p-12 reveal delay-100 relative z-10 mx-auto max-w-2xl">
        <form 
          action={ACTION_URL}
          method="POST"
          target="hidden_iframe"
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group">
              <label htmlFor="name" className="block text-sm font-mono font-semibold text-slate-600 mb-2 group-focus-within:text-accent-500 transition-colors">Name</label>
              <input 
                type="text" 
                id="name" 
                name="entry.649031035" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-slate-800 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:bg-white transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            <div className="group">
              <label htmlFor="email" className="block text-sm font-mono font-semibold text-slate-600 mb-2 group-focus-within:text-accent-500 transition-colors">Email</label>
              <input 
                type="email" 
                id="email" 
                name="entry.1080746806" 
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-slate-800 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:bg-white transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
          </div>
          <div className="group">
            <label htmlFor="message" className="block text-sm font-mono font-semibold text-slate-600 mb-2 group-focus-within:text-accent-500 transition-colors">Message</label>
            <textarea 
              id="message" 
              name="entry.1811411251" 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              rows="5"
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3.5 text-slate-800 focus:outline-none focus:border-accent-500 focus:ring-1 focus:ring-accent-500 focus:bg-white transition-all duration-300 resize-none"
              placeholder="Hello Bhanu, I'd like to talk about..."
            ></textarea>
          </div>
          <div className="pt-2 text-center">
            <button type="submit" className="btn-primary w-full md:w-auto md:px-12 py-4">
              Send Message
              <Send size={18} className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

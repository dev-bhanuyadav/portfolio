import React from 'react';
import { Terminal, Database, Wrench } from 'lucide-react';

const About = () => {
  const skillCategories = [
    { 
      title: 'Frontend Architecture', 
      icon: <Terminal size={20} className="text-accent-500" />,
      items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'Framer Motion'] 
    },
    { 
      title: 'Backend Engineering', 
      icon: <Database size={20} className="text-accent-500" />,
      items: ['Node.js', 'Express', 'MongoDB', 'Firebase', 'PostgreSQL', 'REST APIs'] 
    },
    { 
      title: 'DevOps & Tools', 
      icon: <Wrench size={20} className="text-accent-500" />,
      items: ['Git', 'Docker', 'AWS (S3, EC2)', 'Vercel', 'Postman', 'Webpack'] 
    },
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="heading-secondary reveal">
        About Me
      </h2>
      
      <div className="grid lg:grid-cols-5 gap-16 items-start">
        <div className="lg:col-span-2 space-y-6 text-slate-600 text-lg leading-relaxed reveal delay-100">
          <p>
            Hello! I'm Bhanu, a passionate software engineer focused on building robust, scalable, and visually stunning web applications. 
            My interest in web development sparked when I first tried to modify the CSS of a Tumblr theme—turns out, hacking together custom layouts taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I’ve had the privilege of building software for a variety of clients. 
            My main focus these days is building accessible, inclusive products and digital experiences that delight users.
          </p>
          <p>
            When I'm not at the computer, I'm usually exploring new tech frameworks, reading sci-fi novels, or trying out new coffee recipes.
          </p>
        </div>
        
        <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6 reveal delay-200">
          {skillCategories.map((category, idx) => (
            <div key={idx} className={`glass-card p-6 ${idx === 2 ? 'sm:col-span-2 sm:w-1/2 sm:mx-auto lg:w-full' : ''}`}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-slate-100 rounded-lg border border-slate-200">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.items.map((item, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 bg-slate-100 border border-slate-200 text-slate-700 font-medium text-sm rounded-md hover:border-accent-500/50 hover:text-accent-500 hover:bg-orange-50 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;

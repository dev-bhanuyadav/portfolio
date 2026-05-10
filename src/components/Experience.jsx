import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Studio X',
      date: '2023 - Present',
      description: [
        'Spearheaded the development of a design system used across 4 internal products.',
        'Migrated legacy jQuery codebase to React/Next.js, improving load times by 40%.',
        'Implemented complex animations for the flagship landing page.'
      ]
    },
    {
      title: 'Web Developer Intern',
      company: 'Tech Solutions Inc.',
      date: '2022 - 2023',
      description: [
        'Collaborated with designers to build accessible, responsive components.',
        'Wrote unit tests using Jest and React Testing Library, achieving 85% coverage.',
        'Integrated RESTful APIs using Node.js and Express.'
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="heading-secondary reveal">
        Where I've Worked
      </h2>
      
      <div className="max-w-3xl mx-auto">
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active reveal" style={{ transitionDelay: `${idx * 150}ms` }}>
              
              {/* Timeline dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 bg-white text-accent-500 shadow-md shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 group-hover:bg-accent-500 group-hover:text-white transition-colors duration-300 z-10 relative">
                <div className="absolute inset-0 rounded-full bg-accent-500/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="w-2.5 h-2.5 bg-current rounded-full relative z-10"></div>
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card bg-white p-6 group-hover:-translate-y-1 transition-transform duration-300 relative">
                {/* Connecting Line (Mobile) */}
                <div className="absolute top-5 -left-4 w-4 h-0.5 bg-slate-300 md:hidden"></div>
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-5 w-5 h-0.5 bg-slate-300 group-odd:-right-5 group-even:-left-5"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                  <span className="text-sm font-mono font-bold text-accent-600 bg-orange-50 px-3 py-1 rounded-full whitespace-nowrap border border-accent-500/20">{exp.date}</span>
                </div>
                
                <h4 className="text-lg font-bold text-slate-600 mb-4">{exp.company}</h4>
                
                <ul className="space-y-2 text-slate-600 text-sm list-none p-0">
                  {exp.description.map((item, i) => (
                    <li key={i} className="relative pl-5 before:content-['▹'] before:absolute before:left-0 before:text-accent-500 before:font-bold">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          ))}
          
        </div>
      </div>
    </section>
  );
};

export default Experience;

import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'EduTech Platform',
      description: 'A comprehensive learning management system featuring real-time video streaming, interactive quizzes, and student progress tracking. Built with focus on scalability and accessibility.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      github: '#',
      live: '#',
    },
    {
      title: 'DevSpace Dashboard',
      description: 'An advanced analytics dashboard for developer metrics. Includes drag-and-drop widgets, light mode support, and seamless integration with GitHub and Jira APIs.',
      tech: ['Next.js', 'Tailwind CSS', 'Recharts', 'Prisma'],
      github: '#',
      live: '#',
    },
    {
      title: 'FinTech Wallet',
      description: 'A secure crypto wallet interface with real-time price charts, transaction history, and multi-currency support. Features an incredibly smooth onboarding flow.',
      tech: ['React Native', 'TypeScript', 'Web3.js', 'Firebase'],
      github: '#',
      live: '#',
    }
  ];

  return (
    <section id="projects" className="section-container">
      <h2 className="heading-secondary reveal">
        Featured Projects
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div 
            key={idx} 
            className="glass-card p-8 group reveal relative overflow-hidden flex flex-col h-full bg-white"
            style={{ transitionDelay: `${idx * 100}ms` }}
          >
            {/* Glowing Spotlight Effect for Light Theme */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-500/10 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

            <div className="flex justify-between items-center mb-8 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-accent-500 group-hover:-translate-y-1 transition-transform duration-300 shadow-sm">
                <Folder size={24} />
              </div>
              <div className="flex gap-4">
                <a href={project.github} className="text-slate-500 hover:text-accent-500 transition-colors" aria-label="GitHub Link">
                  <Github size={22} />
                </a>
                <a href={project.live} className="text-slate-500 hover:text-accent-500 transition-colors" aria-label="Live Demo Link">
                  <ExternalLink size={22} />
                </a>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-accent-500 transition-colors relative z-10">
              {project.title}
            </h3>
            
            <p className="text-slate-600 text-base mb-8 leading-relaxed relative z-10 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-3 mt-auto relative z-10">
              {project.tech.map((tech, i) => (
                <span key={i} className="text-xs font-mono font-bold text-accent-600 bg-orange-50/80 px-3 py-1 rounded-full border border-accent-500/20">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;

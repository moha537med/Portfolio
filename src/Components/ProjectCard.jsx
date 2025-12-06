import React from 'react';

export default function ProjectCard({ project, reverse }) {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-10 rounded-xl shadow-2xl overflow-hidden`}>
      
      {/* Image */}
      <img src={project.image} alt={project.title} className="w-full md:w-1/2 h-64 md:h-80 object-cover" />

      {/* Content */}
      <div className="p-6 md:w-1/2 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-purple-400 mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <a 
          href={project.link} 
          target="_blank" 
          className="px-4 py-2 self-start bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
        >
          View Project
        </a>
      </div>

    </div>
  );
}

import React from 'react';

export default function SkillsSection() {
  const skills = [
    "HTML", "CSS", "JavaScript",
    "Bootstrap", "Tailwind CSS", "React", "Next.js"
  ];

  return (
    <section className="py-24  text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Skills</h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto px-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="bg-linear-to-r from-blue-500 via-purple-500 to-indigo-500 text-white px-6 py-3 cursor-pointer rounded-xl shadow-2xl hover:scale-110 hover:shadow-blue-600/50 transition transform font-semibold text-lg"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

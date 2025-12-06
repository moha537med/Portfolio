import ProjectCard from './ProjectCard';
import movieNest from '../assets/movieNest.png'; 
import taskManager from '../assets/taskManager.png';


export default function ProjectsSection() {
  const projects = [
    {
      title: "Movie App",
      description: "A dynamic Movie App built with React and API integration, featuring search, filter, and details pages.",
      image: movieNest,
      link: "https://movie-app-2-n3v5pzfw7-mohamed-hussein-s-projects-821059b1.vercel.app/",
    },
    {
      title: "Task Manager",
      description: "Interactive Task Manager built with React and Tailwind CSS, featuring add, delete, edit, filter, and progress tracking.",
      image: taskManager,
      link: "https://task-manager-glybijjvo-mohamed-hussein-s-projects-821059b1.vercel.app/",
    }
  ];

  return (
    <section id="projects" className="py-24 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="flex flex-col gap-16 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
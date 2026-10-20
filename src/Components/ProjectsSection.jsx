import ProjectCard from './ProjectCard';
import movieNest from '../assets/movieNest.png'; 
import cleaningSite from '../assets/Q8Cleaning.png';
import eCommerceNextjs from '../assets/eCommerceNextjs.png';


export default function ProjectsSection() {
  const projects = [
    {
      title: "Movie App",
      description: "A dynamic Movie App built with React and API integration, featuring search, filter, and details pages.",
      image: movieNest,
      link: "https://movie-app-2-n3v5pzfw7-mohamed-hussein-s-projects-821059b1.vercel.app/",
    },
    {
      title: "Q8 Cleaning Products E-commerce ",
      description: "A responsive Arabic RTL e-commerce website built with React, Vite, Tailwind CSS, and Redux Toolkit. Browse cleaning products and perfumes, filter by category, manage shopping cart items, and place orders directly through WhatsApp. Features reusable components, responsive layouts, and seamless navigation with React Router.",
      image: cleaningSite,
      link: "https://q8-cleaning-products-website.vercel.app/",
    },
    {
      title: "E-Commerce-Nextjs",
      description: "A modern E-Commerce web application built with Next.js, Redux Toolkit, and Tailwind CSS, featuring user authentication, product listings, cart management, and secure checkout.",
      image: eCommerceNextjs,
      link: "https://e-commerce-nextjs-murex-one.vercel.app/",
    }
  ];

  return (
    <section id="projects" className="py-24 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">My Projects</h2>

      <div className="flex flex-col gap-25 max-w-6xl mx-auto px-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
}
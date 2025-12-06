import React from 'react';
import profileImg from '../assets/me.jpg'; 
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <section className="py-24  text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">

        {/* صورة شخصية */}
        <div className="flex justify-center md:w-1/2">
          <img 
            src={profileImg} 
            alt="Mohamed Hussein" 
            className="w-64 h-64 md:w-72 md:h-72 rounded-full object-cover shadow-2xl"
          />
        </div>

        {/* النص */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-4">About Me</h1>
          <p className="text-gray-300 mb-4">
            Hi! I’m Mohamed Hussein, an IT Graduate and passionate Front-End Web Developer.
            I specialize in building responsive and modern web applications using React, 
            Tailwind CSS, JavaScript, and other web technologies.
          </p>
          <p className="text-gray-300 mb-4">
            I love learning new technologies, solving challenging problems, 
            and creating projects that help improve my skills and contribute to the web development community.
          </p>

          {/* Buttons / Links */}
          <div className="flex gap-4 mt-6 flex-wrap">
            <Link 
              to={"/"} 
              className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Go to Home
            </Link>
            <Link 
              to={"/contact"} 
              className="px-6 py-3 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500 hover:text-white transition"
            >
              Contact Me
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

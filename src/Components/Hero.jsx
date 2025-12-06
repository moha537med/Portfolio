import React from 'react';
import image from '../assets/me.jpg';
import { NavLink } from 'react-router-dom';

function Hero() {
  return (
    <section className="py-24 flex items-center min-h-[70vh]  px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto">

        {/* Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Hi, I’m <span className="text-purple-400">Mohamed Hussein</span>
          </h1>

          <h2 className="mt-4 text-xl text-slate-400">
            IT Graduate • Front-End Web Developer
          </h2>

          <p className="mt-6 text-slate-400 max-w-xl">
            Computer Science graduate specialized in IT, focused on building
            clean, responsive, and modern web applications using
            React, Tailwind CSS, and JavaScript.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600 transition"
            >
              View Projects
            </a>

            <NavLink
              to={"/contact"}
              className="px-6 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-purple-400 hover:text-purple-400 transition"
            >
              Contact Me
            </NavLink>
          </div>
        </div>

        {/* Image*/}
        <div className=" md:flex justify-center relative">
        <img 
            src={image} 
            alt="Profile" 
            className="w-full h-80 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-2xl object-cover shadow-2xl"
        />
        </div>


      </div>
    </section>
  );
}

export default Hero;

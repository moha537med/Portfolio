import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-purple-400">Mohamed Hussein</h2>
          <p className="text-gray-400 mt-1">&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/moha537med?tab=repositories" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/mohamed-hussein-a297162a8" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
            <FaLinkedin />
          </a>

        </div>

      </div>
    </footer>
  );
}

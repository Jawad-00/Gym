// === src/components/Hero.jsx ===
import React, { useState } from 'react';
import img from '../assets/img2.png';
const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="bg-gray-900 text-white min-h-screen">
      {/* NavBar */}
      <nav className="w-full px-6 py-4 flex items-center justify-between bg-gray-900 shadow-md fixed top-0 left-0 z-50">
        <div className="text-xl font-bold text-neon">FitZone Gym</div>
        <div className="hidden md:flex space-x-6">
          <a href="#about" className="text-gray-300 hover:text-neon font-medium">About</a>
          <a href="#contact" className="text-gray-300 hover:text-neon font-medium">Contact</a>
          <a href="#register" className="text-gray-300 hover:text-neon font-medium">Register</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-gray-300 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 py-4 bg-gray-800 flex flex-col space-y-4">
          <a href="#about" className="text-gray-300 hover:text-neon">About</a>
          <a href="#contact" className="text-gray-300 hover:text-neon">Contact</a>
          <a href="#register" className="text-gray-300 hover:text-neon">Register</a>
        </div>
      )}

      {/* Hero Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between py-32 px-6 max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Level Up Your Fitness</h1>
          <p className="text-gray-300 text-lg mb-6">
            Join our community of dedicated athletes and transform your life.
          </p>
          <a href="#register" className="inline-block px-8 py-3 bg-neon text-black font-bold rounded-lg shadow-lg hover:opacity-90 transition">
            Register Now
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <img src={img} alt="Gym" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>

      {/* Neon Button Style */}
      <style>{`
        .bg-neon {
          background: linear-gradient(90deg, #39ff14, #0ff);
          box-shadow: 0 0 10px #39ff14, 0 0 40px #0ff;
        }
        .text-neon {
          color: #39ff14;
        }
      `}</style>
    </section>
  );
};

export default Hero;


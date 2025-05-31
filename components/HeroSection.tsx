'use client';

import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [sticky, setSticky] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        setSticky(window.scrollY >= heroHeight);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assests/background1.jpg')" }}
    >
      {/* darkoverlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* navbar:tobe modified */}
      <nav
        className={`left-0 right-0 z-50 transition-all duration-300 ${
          sticky
            ? 'fixed top-0 shadow-md bg-white'
            : 'relative bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-24 pt-10 pb-10 flex items-center justify-between">
          <ul className="flex space-x-6 text-gray-800 font-medium overflow-x-auto">
            {[
              'Home',
              'About Us',
              'Services',
              'Approach',
              'Cases',
              'Our Blog',
              'Contact Us',
            ].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:text-pink-600 whitespace-nowrap"
              >
                {item}
              </li>
            ))}
          </ul>
          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded whitespace-nowrap">
            Get a Quote
          </button>
        </div>
      </nav>
      {/* content inside */}
   <div className="relative z-10 flex items-center justify-start h-full px-56">
        <div className="max-w-lg w-full text-white text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
            Welcome to Konnect Books
          </h1>
          <div className="flex justify-start gap-4">
            <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-8 rounded shadow-lg">
              Contact Us
            </button>
            <button className="bg-transparent border-2 border-white hover:border-pink-600 hover:text-pink-600 text-white font-semibold py-3 px-8 rounded shadow-lg">
              Learn More
            </button>
          </div>
        </div>

        
      </div>
</section>)
}

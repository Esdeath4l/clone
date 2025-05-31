'use client';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [sticky, setSticky] = useState(false);
  const [active, setActive] = useState('Home'); // Default active link

  useEffect(() => {
    const onScroll = () => {
      setSticky(window.scrollY > 96);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    'Home',
    'About Us',
    'Services',
    'Approach',
    'Cases',
    'Our Blog',
    'Contact Us',
  ];

  return (
    <section
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/assests/background1.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Sticky Navbar */}
      <nav
        className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
          sticky ? 'top-0 shadow-md bg-white' : 'top-[150px] bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-24 pt-5 pb-5 flex items-center justify-between">
          <ul className="flex space-x-6 text-gray-800 font-medium relative">
  {navItems.map((item) =>
    item === 'About Us' ? (
      <li
        key={item}
        className="relative group cursor-pointer pb-2"
        onClick={() => setActive(item)}
      >
        <span
          className={`hover:text-pink-600 ${
            active === item ? 'text-pink-600' : ''
          }`}
        >
          {item}
        </span>

        {/* Dots on hover and active */}
        <div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-1 -mb-2 transition-opacity duration-300
            ${
              active === item || (item === 'Home' && active === 'Home')
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-100'
            }`}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="w-1 h-1 bg-pink-600 rounded-full"
            ></span>
          ))}
        </div>

        {/* Dropdown on hover */}
        <div className="absolute top-full left-0 mt-2 w-52 bg-white text-gray-800 shadow-lg rounded-md z-50 hidden group-hover:block">
          {['About Us', 'Why Konnect', 'Careers', 'Corporate Events'].map(
            (subItem) => (
              <div
                key={subItem}
                className="px-4 py-2 hover:bg-pink-100 hover:text-pink-600 cursor-pointer text-sm"
              >
                {subItem}
              </div>
            )
          )}
        </div>
      </li>
    ) : (
      <li
        key={item}
        onClick={() => setActive(item)}
        className="relative group cursor-pointer hover:text-pink-600 pb-2"
      >
        <span className={`${active === item ? 'text-pink-600' : ''}`}>
          {item}
        </span>

        {/* Dots on hover and active */}
        <div
          className={`absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-1 -mb-2 transition-opacity duration-300
            ${
              active === item || (item === 'Home' && active === 'Home')
                ? 'opacity-100'
                : 'opacity-0 group-hover:opacity-100'
            }`}
        >
          {[...Array(4)].map((_, i) => (
            <span
              key={i}
              className="w-1 h-1 bg-pink-600 rounded-full"
            ></span>
          ))}
        </div>
      </li>
    )
  )}
</ul>

          <button className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-6 rounded whitespace-nowrap">
        GET A QUOTE
          </button>
        </div>
      </nav>

      {/* Content inside */}
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
    </section>
  );
}

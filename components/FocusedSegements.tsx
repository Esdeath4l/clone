'use client';

import { useState } from 'react';

export default function FocusedSegments() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="px-4 md:px-24 py-10 bg-white text-gray-800">
      {/* Section Title */}
      <div className="mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-1 bg-pink-600"></div>
          <h6 className="uppercase text-sm tracking-widest text-pink-600 font-semibold">
            Whom We Are Serving
          </h6>
        </div>
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl font-bold mb-12 pt-2">Focused Segments ...</h2>

      {/* Cards Row */}
      <div className="flex flex-col md:flex-row gap-[32px]">
        {/* Card 1 */}
        <div
          className={`flex flex-col rounded-xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer ${
            hovered === 1 ? 'flex-[1]' : hovered ? 'flex-[0.9]' : 'flex-[1]'
          }`}
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
          style={{ minWidth: 0 }}
        >
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
              alt="Segment 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent text-white p-6">
              <h3
                className={`text-xl font-bold mb-2 transition-all duration-500 transform ${
                  hovered === 1 ? '-translate-y-2' : 'translate-y-0'
                }`}
              >
                Retail & E-commerce
              </h3>
              <p
                className={`text-sm transition-all duration-500 transform ${
                  hovered === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Empowering e-commerce brands with digital tools that increase reach and enhance customer experience.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`flex flex-col rounded-xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer ${
            hovered === 2 ? 'flex-[1]' : hovered ? 'flex-[0.9]' : 'flex-[1]'
          }`}
          onMouseEnter={() => setHovered(2)}
          onMouseLeave={() => setHovered(null)}
          style={{ minWidth: 0 }}
        >
          <div className="relative h-[400px]">
            <img
              src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
              alt="Segment 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/60 to-transparent text-white p-6">
              <h3
                className={`text-xl font-bold mb-2 transition-all duration-500 transform ${
                  hovered === 2 ? '-translate-y-2' : 'translate-y-0'
                }`}
              >
                Startups & MSMEs
              </h3>
              <p
                className={`text-sm transition-all duration-500 transform ${
                  hovered === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Delivering cost-effective, scalable solutions for startups and small businesses to grow online.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-action Buttons */}
      <div className="flex flex-col md:flex-row gap-[400px] mt-12 justify-center items-center">
        <button className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 font-semibold shadow-lg transition">
          CHECK OUT OUR B2C OFFERINGS
        </button>
        <button className="border-2 border-pink-600 text-pink-600 px-6 py-3 rounded hover:bg-pink-50 font-semibold transition">
          CHECK OUT OUR B2B OFFERINGS
        </button>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';

export default function FocusedSegments() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="px-4 md:px-24 py-10 bg-white text-gray-800">
      {/* Heading Line + Small Title:done */}
      <div className="mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-1 bg-pink-600"></div>
          <h6 className="uppercase text-sm tracking-widest text-pink-600 font-semibold">
            Whom We Are Serving
          </h6>
        </div>
      </div>

      {/* Bold Main Title :done*/}
      <h2 className="text-4xl font-bold mb-12 pt-2">Focused Segments ...</h2>

      {/* Image Cards Grid:done */}
      <div className="flex gap-8">
        {/* Card 1:done */}
        <div
          className={`flex flex-col rounded-xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer ${
            hovered === 1 ? 'flex-[1]' : hovered ? 'flex-[0.8]' : 'flex-[1]'
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
                className={`text-xl font-bold mb-2 transition-transform duration-500 ${
                  hovered === 1 ? '-translate-y-6' : ''
                }`}
              >
                Retail & E-commerce
              </h3>
              <p
                className={`text-sm transition-all duration-500 opacity-0 translate-y-8 ${
                  hovered === 1 ? 'opacity-100 translate-y-0' : ''
                }`}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, est, voluptatem asperiores minus dolorem quia fugiat in eligendi unde vero nesciunt impedit aut accusamus repellat praesentium natus? Repellat, magnam neque.
              </p>
            </div>
          </div>
        </div>

        {/* Card 2:done */}
        <div
          className={`flex flex-col rounded-xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer ${
            hovered === 2 ? 'flex-[1]' : hovered ? 'flex-[0.8]' : 'flex-[1]'
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
                className={`text-xl font-bold mb-2 transition-transform duration-500 ${
                  hovered === 2 ? '-translate-y-6' : ''
                }`}
              >
                Startups & MSMEs
              </h3>
              <p
                className={`text-sm transition-all duration-500 opacity-0 translate-y-8 ${
                  hovered === 2 ? 'opacity-100 translate-y-0' : ''
                }`}
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam in incidunt nemo quibusdam nulla sunt ducimus ullam deserunt deleniti harum a impedit neque eos, repudiandae eius aliquid consequuntur, iste expedita.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Buttons aligned below the cards:to be completed */}
   <div className="flex flex-wrap gap-[400px] mt-4 justify-center">
  <button className="w-120 bg-pink-600 text-white px-3 py-3 rounded hover:bg-pink-700 font-semibold shadow-lg transition">
    CHECK OUT OUR B2C OFFERINGS
  </button>
  <button className="w-120 border-2 border-pink-600 text-pink-600 px-3 py-3 rounded hover:bg-pink-50 font-semibold transition">
    CHECK OUT OUR B2C OFFERINGS
  </button>
</div>

      </section>
  );
}

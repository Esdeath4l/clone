'use client';

import { useState } from 'react';

interface FocusedSegmentsProps {
  b2bRef?: React.RefObject<HTMLElement>;
  b2cRef?: React.RefObject<HTMLElement>;
}

export default function FocusedSegments({ b2bRef, b2cRef }: FocusedSegmentsProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  const scrollToRef = (ref?: React.RefObject<HTMLElement>) => {
    if (ref?.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                B2C Customer
              </h3>
              <p
                className={`text-sm transition-all duration-500 transform ${
                  hovered === 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                Catered to 500+ customers to date. Restaurants to e-Commerce companies. Individual Business Owners to SMEs
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
                B2B Customer
              </h3>
              <p
                className={`text-sm transition-all duration-500 transform ${
                  hovered === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                CPA and Bookkeeping Firms, Bookkeeping to Taxation Service Engagements, US to Middle East.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call-to-action Buttons */}
      <div className="flex flex-col md:flex-row gap-[400px] mt-12 justify-center items-center">
        <button
          onClick={() => scrollToRef(b2cRef)}
          className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 font-semibold shadow-lg transition"
        >
          CHECK OUT OUR B2C OFFERINGS
        </button>
        <button
          onClick={() => scrollToRef(b2bRef)}
          className="bg-pink-600 text-white px-6 py-3 rounded hover:bg-pink-700 font-semibold shadow-lg transition"
        >
          CHECK OUT OUR B2B OFFERINGS
        </button>
      </div>
    </section>
  );
}

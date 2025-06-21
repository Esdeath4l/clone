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
    <div className="bg-gradient-to-br from-[#FFF8E1] via-white to-[#F7F7F7] text-[#393E46]">
  <section className="max-w-7xl mx-auto py-24 px-6 sm:px-11">
      {/* Section Title */}
      <div className="mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-1 bg-[#FFD369]"></div>
          <h6 className="uppercase text-sm tracking-widest text-[#FFD369] font-semibold">
            Whom We Are Serving
          </h6>
        </div>
      </div>

      {/* Main Heading */}
      <h2 className="text-4xl font-bold mb-12 pt-2">Focused Segments ...</h2>

      {/* Cards + Buttons */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Card + Button 1 */}
        <div className="flex flex-col items-center flex-1 gap-4">
          <div
            className="flex flex-col rounded-xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer w-full transform-gpu"
            onMouseEnter={() => setHovered(1)}
            onMouseLeave={() => setHovered(null)}
            style={{ minWidth: 0 }}
          >
            <div className="relative min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
                alt="Segment 1"
                className={`w-full h-full object-cover transition-transform duration-700 ease-in-out origin-left ${
                  hovered === 1 ? 'scale-110' : 'scale-100'
                }`}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#393E46] via-[#393E46]/60 to-transparent text-white p-6">
                <h3
                  className={`text-xl font-bold mb-2 transition-all duration-500 ${
                    hovered === 1 ? 'scale-105' : 'scale-100'
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
          <button
            onClick={() => scrollToRef(b2cRef)}
            className="bg-[#FFD369] text-[#393E46] px-6 py-3 rounded hover:bg-[#e6bc4f] font-semibold shadow-md transition w-full sm:w-auto"
          >
            CHECK OUT OUR B2C OFFERINGS
          </button>
        </div>

        {/* Card + Button 2 */}
        <div className="flex flex-col items-center flex-1 gap-4">
          <div
            className="flex flex-col rounded-xl shadow-lg overflow-hidden transition-all duration-500 cursor-pointer w-full transform-gpu"
            onMouseEnter={() => setHovered(2)}
            onMouseLeave={() => setHovered(null)}
            style={{ minWidth: 0 }}
          >
            <div className="relative min-h-[400px]">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
                alt="Segment 2"
                className={`w-full h-full object-cover transition-transform duration-700 ease-in-out origin-right ${
                  hovered === 2 ? 'scale-110' : 'scale-100'
                }`}
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#393E46] via-[#393E46]/60 to-transparent text-white p-6">
                <h3
                  className={`text-xl font-bold mb-2 transition-all duration-500 ${
                    hovered === 2 ? 'scale-105' : 'scale-100'
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
          <button
            onClick={() => scrollToRef(b2bRef)}
            className="bg-[#FFD369] text-[#393E46] px-6 py-3 rounded hover:bg-[#e6bc4f] font-semibold shadow-md transition w-full sm:w-auto"
          >
            CHECK OUT OUR B2B OFFERINGS
          </button>
        </div>
      </div>

    </section>
    </div>
  );
}

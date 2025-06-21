'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function ApproachSection() {
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    '/assets/quickstart1.jpg',
    '/assets/quickstart2.jpg',
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;

    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    btn.style.setProperty('--hover-x', `${percentX}%`);
    btn.style.setProperty('--hover-y', `${percentY}%`);
  };

  return (
    <section className="bg-[#222831] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Line and Subtitle */}
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-1 bg-[#FFD369]"></div>
            <h6 className="uppercase text-sm tracking-widest font-semibold text-[#FFD369]">
              QUICK START OUTSOURCING
            </h6>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left: Image Carousel */}
          <div className="relative w-full lg:w-1/2 h-96">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Approach image ${index + 1}`}
                fill
                className={`object-contain rounded-lg transition-opacity duration-700 ${
                  index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3 z-20">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                    index === currentImage
                      ? 'bg-[#FFD369] border-[#FFD369] scale-110'
                      : 'border-white bg-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right: Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-1 bg-[#FFD369]"></div>
              <p className="text-sm uppercase tracking-widest text-[#FFD369] mb-2">
                Welcome to our company
              </p>
            </div>
            <h2 className="text-5xl font-extrabold leading-tight mb-4 text-[#EEEEEE]">
              Our Unique <br />
              Approach to <br />
              Delivering the Best
            </h2>
            <p className="text-base leading-relaxed text-[#EEEEEE] mb-6">
              The Konnect strategy is built on a universal process of business analysis,
              audit and control. Using this six-step approach, we create a pattern of routine
              towards holistic business and financial solutions.
            </p>

            {/* Fancy Button */}
   <Link
  href="#"
  ref={btnRef}
  onMouseMove={handleMouseMove}
  className="relative group overflow-hidden px-8 py-3 rounded-full font-semibold bg-[#FFD369] transition-colors duration-500 z-10 inline-block"
>
  {/* Text stays crisp white on hover */}
  <span className="relative z-30 text-[#222831] group-hover:text-white transition-colors duration-300">
    LEARN MORE
  </span>

  {/* Black slide-in overlay */}
  <span
    className="absolute inset-0 bg-black scale-x-0 origin-[var(--hover-x)_50%] group-hover:scale-x-100 transition-transform duration-500 ease-out z-20"
    style={{ transformOrigin: 'var(--hover-x) 50%' }}
  ></span>

  {/* Radial circle effect on hover */}
  <span
    className="absolute top-0 left-0 w-full h-full rounded-full pointer-events-none
                bg-black opacity-0 transform scale-0
                transition-[opacity,transform] duration-500 ease-out
                group-hover:opacity-80 group-hover:scale-[2.5]"
    style={{
      transformOrigin: 'var(--hover-x) var(--hover-y)',
      top: 'var(--hover-y)',
      left: 'var(--hover-x)',
      transform: 'translate(-50%, -50%) scale(0)',
    }}
  />
</Link>


          </div>
        </div>
      </div>
    </section>
  );
}

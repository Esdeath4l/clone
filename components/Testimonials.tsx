'use client';

import React from 'react';

const testimonials = [
  {
    name: 'Customer Feedback - Richard',
    videoId: 'dQw4w9WgXcQ',
  },
  {
    name: 'Customer Feedback - Phil',
    videoId: '9bZkp7q19f0',
  },
  {
    name: 'Customer Feedback - Sam',
    videoId: '9bZkp7q19f0',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-[#FFF8E1] via-white to-[#F5F5F5] text-[#222831] py-16 px-4">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        {/* Section Title */}
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-1 bg-[#FFD369]"></div>
            <h6 className="uppercase text-sm tracking-widest text-[#FFD369] font-semibold">
              Customer Testimonials
            </h6>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          What customers have to say?
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white text-[#222831] rounded-xl overflow-hidden 
                         shadow-[0_10px_25px_rgba(0,0,0,0.1)] 
                         hover:shadow-[0_16px_40px_rgba(0,0,0,0.15)] 
                         transition-all duration-300"
            >
              <div className="relative w-full pb-[56.25%]">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                  title={testimonial.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <p className="font-semibold text-lg text-center">
                  {testimonial.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

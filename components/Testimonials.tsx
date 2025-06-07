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
    <section className="bg-gradient-to-r from-slate-800 to-slate-600 text-white px-4 md:px-24 py-16">
      {/* Section Title */}
      <div className="mb-4">
            <div className="flex items-center space-x-4">
            <div className="w-12 h-1 bg-white"></div>
            <h6 className="uppercase text-sm tracking-widest text-white font-semibold">
                Customer testimonials
            </h6>
            </div>
        </div>

        {/* Bold Main Title :done*/}
        <h2 className="text-5xl font-bold mb-12 pt-2">What customers have to say?</h2>

      {/* Video Grid */}
      <div className="grid md:grid-cols-3 gap-8 justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-w-16 aspect-h-9 w-full">
              <iframe
                className="w-full h-56 md:h-64 lg:h-72"
                src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                title={testimonial.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-4">
              <p className="font-semibold text-lg">{testimonial.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
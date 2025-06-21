'use client';
import { motion } from 'framer-motion';
import { FaRegSquare } from 'react-icons/fa';

export default function OurHistorySection() {
  const history = [
    {
      year: '2009',
      description:
        'The company Konnect Books Pvt. Ltd. was established along with Konnect Technologies to cater to International Bookkeeping in the US and the UK.',
    },
    { year: '2010', description: '' },
    { year: '2012', description: '' },
    { year: '2015', description: '' },
    { year: '2017', description: '' },
    { year: '2018', description: '' },
    { year: '2020', description: '' },
  ];

  return (
    <section className="bg-[#EEEEEE] py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 items-start">
        
        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6">
          <div className="mb-3 text-sm text-[#393E46] tracking-widest uppercase font-semibold flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#FFD369] inline-block" />
            Know Us More
          </div>
          <h2 className="text-4xl font-bold text-[#222831]">Our History</h2>
          <p className="text-[#393E46]">
            We are happy to share with you the milestones that we have crossed in our journey.
            This would have never been possible without our people dedication and our clients faith in us.
          </p>

          {/* Timeline */}
          <div className="relative mt-10 pl-6">
            {history.map((item, index) => (
              <div className="relative pb-10 last:pb-0" key={index}>
                {/* Dot */}
                <div className="absolute left-0 top-1">
                  <div className="w-4 h-4 bg-[#FFD369] rounded-full border-4 border-[#EEEEEE] shadow-md" />
                </div>

                {/* Line */}
                {index !== history.length - 1 && (
                  <div className="absolute left-[7px] top-5 h-full w-[2px] border-l-2 border-dotted border-[#FFD369] z-0" />
                )}

                {/* Content */}
                <div className="ml-6 space-y-1 relative z-10">
                  <p className="text-sm font-semibold text-[#FFD369]">{item.year}</p>
                  {item.description && (
                    <p className="text-[#393E46] text-sm">{item.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src="/assets/history.jpg"
            alt="Our History"
            className="rounded-xl w-full h-auto object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

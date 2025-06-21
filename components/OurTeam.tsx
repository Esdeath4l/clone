'use client';

import { FaLinkedin } from 'react-icons/fa';

export default function OurTeam() {
  const teamMembers = [
    {
      name: 'Kavita Chakraborty',
      title: 'Co-Founder Director',
      image: '/assets/kavitha.jpg',
      linkedin: 'https://www.linkedin.com/in/kavita-chakraborty',
    },
    {
      name: 'Amritav Chakraborty',
      title: 'Co-Founder Director',
      image: '/assets/amitav.jpg',
      linkedin: 'https://www.linkedin.com/in/amritav-chakraborty',
    },
    {
      name: 'Nikhil Mehta',
      title: 'Vice President Delivery',
      image: '/assets/nikil.jpg',
      linkedin: 'https://www.linkedin.com/in/nikhil-mehta',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto py-16 px-11">
      {/* Heading Line + Small Title */}
      <div className="mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-1 bg-[#FFD369]"></div>
          <h6 className="uppercase text-sm tracking-widest text-[#393E46]  font-semibold">
            OUR TEAM
          </h6>
        </div>
      </div>

      {/* Main Title */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-12">
        <h2 className="text-5xl font-bold mb-12 pt-2">Leadership</h2>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-full max-w-[400px] border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 bg-white">
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-[420px] object-cover"
                />
              </div>
              <div className="p-5">
                {/* LinkedIn Icon on the left */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500  hover:text-[#FFD369] text-xl transition-colors duration-300"
                >
                  <FaLinkedin />
                </a>
                {/* Title and Name */}
                <h3 className="text-lg font-semibold text-gray-700 mt-4 mb-1">
                  {member.title}
                </h3>
                <p className="text-md text-gray-800 font-medium">{member.name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

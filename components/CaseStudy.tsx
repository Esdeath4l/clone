// 'use client';

// import Image from 'next/image';

// const caseStudies = [
//   { title: 'AQUA SPROUT LLC', image: '/assets/aqua.jpg' },
//   { title: 'FISHER BUSINESS MANAGEMENT', image: '/assets/fisher.jpg' },
//   { title: 'GOLDEN CROWN PANADERIA', image: '/assets/golden.jpg' },
//   { title: 'MARK ARON', image: '/assets/markaron.jpg' },
//   { title: 'COE & COE', image: '/assets/coe&coe.jpg' },
//   { title: 'FAIR PATTERN', image: '/assets/fairpattern.jpg' },
//   { title: 'NYC', image: '/assets/nyc.jpg' },
//   { title: 'THE NAKED DOG SHOP', image: '/assets/nakeddog.jpg' },
// ];

// export default function CaseStudies() {
//   return (
//     <section className="bg-white text-gray-900 px-4 md:px-24 py-16">
//       {/* Section Header */}
//       <div className="text-center mb-12">
//         <p className="uppercase text-sm text-gray-500 tracking-widest">Our Case Studies</p>
//         <h2 className="text-4xl font-bold mt-2">Few maybe of relevance to you</h2>
//         <div className="mt-2 w-20 h-1 mx-auto bg-pink-500 rounded-full"></div>
//       </div>

//       {/* Grid of Cards */}
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {caseStudies.map((item, index) => (
//           <div
//             key={index}
//             className="relative group h-48 md:h-56 lg:h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-500 cursor-pointer"
//           >
//             {/* Background Image */}
//             <Image
//               src={item.image}
//               alt={item.title}
//               fill
//               className="object-cover transition-transform duration-500 group-hover:scale-110"
//             />

//             {/* Gradient Overlay */}
//             <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-green-500 opacity-0 group-hover:opacity-60 transition duration-500"></div>

//             {/* White translucent box behind text */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <div className="bg-white bg-opacity-70 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
//             </div>

//             {/* Title Text */}
//             <div className="absolute inset-0 flex items-center justify-center">
//               <p className="text-gray-900 text-center font-bold text-sm md:text-base z-10 transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-md">
//                 {item.title}
//               </p>
//             </div>

//             {/* Fast border transition from center */}
//             <div className="absolute inset-0 rounded-lg border-2 border-white scale-0 group-hover:scale-100 origin-center transition-transform duration-200 ease-out pointer-events-none"></div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
'use client';

import Image from 'next/image';

const caseStudies = [
  { title: 'AQUA SPROUT LLC', image: '/assets/aqua.jpg' },
  { title: 'FISHER BUSINESS MANAGEMENT', image: '/assets/fisher.jpg' },
  { title: 'GOLDEN CROWN PANADERIA', image: '/assets/golden.jpg' },
  { title: 'MARK ARON', image: '/assets/markaron.jpg' },
  { title: 'COE & COE', image: '/assets/coe&coe.jpg' },
  { title: 'FAIR PATTERN', image: '/assets/fairpattern.jpg' },
  { title: 'NYC', image: '/assets/nyc.jpg' },
  { title: 'THE NAKED DOG SHOP', image: '/assets/nakeddog.jpg' },
];

export default function CaseStudies() {
  return (
    <section className="bg-white text-gray-900 px-4 md:px-24 py-16">
    
      {/* Section Header */}
      <div className="mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-1 bg-black"></div>
            <h6 className="uppercase text-sm tracking-widest text-black font-semibold">
                Our Case Studies
            </h6>
            </div>
          </div>

        <h2 className="text-5xl font-bold mb-12 pt-2">Few maybe of relevance to you</h2>

      {/* Grid of Cards */}
       <div className="grid grid-cols-1 md:grid-cols-4 gap-6 justify-center">        {caseStudies.map((item, index) => (
          <div
            key={index}
            className="relative group h-48 md:h-56 lg:h-64 overflow-hidden shadow-md hover:shadow-xl transition duration-500 cursor-pointer"
          >
            {/* Background Image */}
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-green-500 opacity-0 group-hover:opacity-60 transition duration-500"></div>

            {/* Title Text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-white text-center font-bold text-sm md:text-base z-10 transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-md">
                {item.title}
              </p>
            </div>

            {/* White border: low opacity by default, expands from center on hover */}
            <div className="absolute inset-0 rounded-lg border-2 border-white opacity-20 group-hover:opacity-100 scale-0 group-hover:scale-50 origin-center transition-all duration-100 ease-out pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
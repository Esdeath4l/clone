import CountUp from 'react-countup';

const stats = [
  { label: 'BOOKKEEPING PROJECTS', value: 10000 },
  { label: 'TAX RETURNS', value: 75000 },
  { label: 'PEOPLE', value: 160 },
  { label: 'SATISFIED CUSTOMERS', value: 1000 },
];

export default function CountUpComponent() {
  return (
    <div className="bg-gradient-to-br from-[#FFF8E1] via-white to-[#F7F7F7] text-[#222831]">
      <section className="py-16 px-4">
        {/* Heading and Button in same row */}
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto mb-12">
          <h2 className="text-5xl md:text-4xl font-bold text-center md:text-left mb-4 md:mb-0 text-[#222831]">
            And how did we <br className="md:hidden" /> reach here?
          </h2>

          <button className="relative group px-8 py-3 rounded-full border border-[#FFD369] bg-[#FFD369] overflow-hidden">
            {/* Background Wipe */}
            <span className="absolute inset-0 bg-[#222831] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>

            {/* Button Text */}
            <span className="relative z-10 text-[#222831] group-hover:text-[#FFD369] transition-colors duration-300 font-medium">
              KNOW US
            </span>
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-[#FFD369]">
                <CountUp end={stat.value} duration={3} />
                <span className="text-[#FFD369]">+</span>
              </h3>
              <p className="mt-2 text-sm md:text-base text-[#393E46] font-medium uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

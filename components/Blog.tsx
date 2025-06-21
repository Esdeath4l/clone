'use client';

const services = [
  {
    title: "Key Details to Help You Understand USA Taxation",
    buttonText: "TAX - UNCATEGORIZED",
    image: "/assets/bookkeeping.jpg",
  },
  {
    title: "Want to start a business in the USA – KNOW the C Corporation",
    buttonText: "C CORP",
    image: "/assets/taxation.jpg",
  },
  {
    title: "Tax Preparedness Series: 2016 (with the help of IRS blogs on the relevant subjects)",
    buttonText: "TAX",
    image: "/assets/cfo.jpg",
  },
];

export default function Blogs() {
  return (
    <section className="py-16 px-6 md:px-11 text-[#222831]">
      {/* Heading Line + Small Title */}
      <div className="mb-4">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-1 bg-[#FFD369]"></div>
          <h6 className="uppercase text-sm tracking-widest text-[#FFD369] font-semibold">
            Blogs
          </h6>
        </div>
      </div>

      {/* Main Title and Button */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 md:mb-0">Articles of Interest</h2>
        <button className="relative group px-8 py-3 rounded-full border border-[#FFD369] bg-[#FFD369] overflow-hidden transition-all duration-500">
          <span className="absolute inset-0 bg-[#222831] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></span>
          <span className="relative z-10 text-[#222831] group-hover:text-[#FFD369] transition-colors duration-300 font-medium">
            VIEW MORE
          </span>
        </button>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex justify-center">
            <div className="w-full max-w-[400px] bg-white border border-[#EEE] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[220px] object-cover"
                />
                <button className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-[#FFD369] text-[#222831] px-6 py-2 text-sm rounded-full hover:bg-[#e6b845] transition font-semibold shadow-md">
                  {service.buttonText}
                </button>
              </div>
              <div className="p-5 pt-10">
                <h3 className="text-lg font-semibold">{service.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

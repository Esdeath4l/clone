'use client';

const services = [
  {
    title: "Bookkeeping & Accounting Services",
    description: "Your daily transactional data managed",
    price: "starting at $12* per hour",
    image: "/assets/bookkeeping.jpg",
  },
  {
    title: "Taxation Services",
    description: "State & Federal taxes",
    price: "starting at $250* per return",
    image: "/assets/taxation.jpg",
  },
  {
    title: "CFO Services",
    description: "For Analysis & Decision Support",
    price: "starting at $500 per month",
    image: "/assets/cfo.jpg",
  },
  {
    title: "Managed Services",
    description: "Payroll, Statutory Compliance’s , Company incorporation’s",
    price: "starting at $12.12 per hour",
    image: "/assets/managed.jpg",
  },
];

export default function B2C() {
  return (
    <section className="bg-[#222831] text-[#EEEEEE] py-16 px-4">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-1 bg-[#FFD369]"></div>
            <h6 className="uppercase text-sm tracking-widest text-[#FFD369] font-semibold">
              B2C Customers
            </h6>
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-5xl font-bold mb-12 pt-2 text-white">
          Served 1000+ customers in these areas…
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex justify-center">
              <div className="w-full max-w-[400px] rounded-xl overflow-hidden bg-[#EEEEEE] text-[#222831]
                              border border-[#393E46]
                              shadow-[0_10px_25px_rgba(0,0,0,0.3)]
                              hover:shadow-[0_20px_45px_rgba(0,0,0,0.5)]
                              transform hover:scale-105
                              transition-all duration-500 ease-in-out group">
                
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <button className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-[#FFD369] text-[#222831] px-4 py-2 text-sm rounded-full shadow hover:bg-[#e6b845] hover:shadow-md transition-all duration-300">
                    Request for Quote
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                  <p className="text-[#393E46] mb-1">{service.description}</p>
                  <p className="text-sm text-[#393E46] font-medium">{service.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

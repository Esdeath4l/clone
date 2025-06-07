import Image from 'next/image';

const services1 = [
  {
    title: "Bookkeeping Services",
    icon: "/assets/b2b1-icon.jpg",
    desc: "Every company has to maintain its books. Konnect’s Accounting & Bookkeeping function just does that.",
  },
  {
    title: "Taxation",
    icon: "/assets/b2b2-icon.jpg",
    desc: "Increase in mainland costs are prompting CPA’s, Accountants and Companies to opt for outsourcing tax.",
  },
  {
    title: "Accounting",
    icon: "/assets/b2b3-icon.jpg",
    desc: "Cost, Time and Resource, are key factors for Individuals or a Company’s sustainability & growth.",
  },
  {
    title: "Reconciliation Services",
    icon: "/assets/b2b4-icon.jpg",
    desc: "Reconciliation Services are essential to verify consistency of the money coming in & going out.",
  },
  {
    title: "Financial Reporting",
    icon: "/assets/b2b5-icon.jpg",
    desc: "Financial reporting forms a very important part of every company’s daily operational requirement. especially SMEs.",
  },
  {
    title: "Cash Flow Management",
    icon: "/assets/b2b6-icon.jpg",
    desc: "Konnect offer’s Cash flow Accounting Services to diverse industries according to our esteemed client’s requirements.",
  },
];

const services2 = [
  {
    title: "Payroll Processing",
    icon: "/assets/b2b6-icon.jpg",
    desc: "Konnect has been catering to the Payroll Processing to more than 200 customers.",
  },
  {
    title: "Customer Order Processing",
    icon: "/assets/b2b7-icon.jpg",
    desc: "Konnect provides back-office & and sales ordering process support for their valuable customers.",
  },
];
export default function B2B() {
  return (
    <section className="bg-[#131c2b] text-white py-16 px-4">
    
      <div className="max-w-7xl mx-auto justify-center px-10">
        <div className="max-w-7xl mx-auto justify-center px-15">
            {/* Heading Line + Small Title:done */}
        <div className="mb-4">
            <div className="flex items-center space-x-4">
            <div className="w-12 h-1 bg-white"></div>
            <h6 className="uppercase text-sm tracking-widest text-white font-semibold pb-5">
                B2B Customers
            </h6>
            </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Offering solutions for Bookkeepers and Tax firms
        </h2>
        <h2 className="text-1xl mb-10">
            services we offer as a-la-carte offerings in finance and accounting.
        </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 justify-center">
          {services1.map((service, index) => (
            <div
              key={index}
              className=" bg-white text-black shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}
                  height={40}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-sm text-center">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto justify-center px-10">
       <div className="mb-4">
    
        <h2 className="text-3xl md:text-4xl font-bold mb-10 mt-10">
          business process outsourcing
        </h2>
        <h2 className="text-1xl mb-10">
            services we offer as a-la-carte offerings in business process outsourcing.
        </h2>
       </div>
     

     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services2.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black shadow-md p-6 hover:shadow-xl transition duration-300"
            >
              <div className="mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={60}
                  height={80}
                  className="mx-auto"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-sm text-center">{service.desc}</p>
            </div>
          ))}
      </div>
     </div>
    
  
        
    </section>
  );
}
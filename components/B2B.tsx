'use client';

import Image from 'next/image';
import Link from 'next/link';

const services1 = [
  {
    path:"/services/finance/bookkeeping",
    title: "Bookkeeping Services",
    icon: "/assets/b2b1-icon.jpg",
    desc: "Every company has to maintain its books. Konnect’s Accounting & Bookkeeping function just does that.",
  },
  {
    path:"/services/finance/taxation",
    title: "Taxation",
    icon: "/assets/b2b2-icon.jpg",
    desc: "Increase in mainland costs are prompting CPA’s, Accountants and Companies to opt for outsourcing tax.",
  },
  {
    path:"/services/finance/accounting",
    title: "Accounting",
    icon: "/assets/b2b3-icon.jpg",
    desc: "Cost, Time and Resource, are key factors for Individuals or a Company’s sustainability & growth.",
  },
  {
    path:"/services/finance/reconciliation",
    title: "Reconciliation Services",
    icon: "/assets/b2b4-icon.jpg",
    desc: "Reconciliation Services are essential to verify consistency of the money coming in & going out.",
  },
  {
    path:"/services/finance/financial-reporting",
    title: "Financial Reporting",
    icon: "/assets/b2b5-icon.jpg",
    desc: "Financial reporting forms a very important part of every company’s daily operational requirement. especially SMEs.",
  },
  {
    path:"/services/finance/cash-flow",
    title: "Cash Flow Management",
    icon: "/assets/b2b6-icon.jpg",
    desc: "Konnect offer’s Cash flow Accounting Services to diverse industries according to our esteemed client’s requirements.",
  },
];

const services2 = [
  {
    path:"/services/bpo/payroll",
    title: "Payroll Processing",
    icon: "/assets/b2b6-icon.jpg",
    desc: "Konnect has been catering to the Payroll Processing to more than 200 customers.",
  },
  {
    path:"/services/bpo/order-processing",
    title: "Customer Order Processing",
    icon: "/assets/b2b7-icon.jpg",
    desc: "Konnect provides back-office & and sales ordering process support for their valuable customers.",
  },
];

export default function B2B() {
  return (
    <section className="bg-gradient-to-br from-[#0B1220] to-[#111827] text-[#F5F5F5] py-16 px-4">
      <div className="max-w-7xl mx-auto px-10">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-1 bg-[#FFD369]"></div>
            <h6 className="uppercase text-sm tracking-widest font-semibold text-[#FFD369] pb-5">
              B2B Customers
            </h6>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Offering solutions for Bookkeepers and Tax firms
        </h2>
        <p className="text-base mb-10 text-gray-300">
          Services we offer as a-la-carte offerings in finance and accounting.
        </p>

        {/* Finance Services */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services1.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transform hover:scale-[1.02] transition duration-300"
            ><Link href={service.path}>
              <div className="mb-4 flex justify-center pt-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="cursor-pointer"
                />
              </div></Link>
              <div className="px-6 pb-6">
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-sm text-center text-gray-700">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BPO Section */}
      <div className="max-w-7xl mx-auto px-10 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Business Process Outsourcing
        </h2>
        <p className="text-base mb-10 text-gray-300">
          Services we offer as a-la-carte offerings in business process outsourcing.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services2.map((service, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] transform hover:scale-[1.02] transition duration-300"
            ><Link href={service.path}>
              <div className="mb-4 flex justify-center pt-6">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                  className="cursor-pointer"
                />
              </div></Link>
              <div className="px-6 pb-6">
                <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
                <p className="text-sm text-center text-gray-700">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

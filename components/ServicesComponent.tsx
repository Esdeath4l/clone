"use client";

import { useRouter } from "next/navigation";

const ServicesComponent = () => {
  const router = useRouter();

  const financeServices = [
    {
      title: "Bookkeeping Services",
      description:
        "Every company has to maintain its books. Konnect’s Accounting & Bookkeeping function just does that.",
      path: "/services/finance/bookkeeping",
    },
    {
      title: "Taxation",
      description:
        "Increase in mainland costs are prompting CPA’s, Accountants and Companies to opt for outsourcing tax.",
      path: "/services/finance/taxation",
    },
    {
      title: "Accounting",
      description:
        "Cost, Time and Resource, are key factors for Individuals or a Company’s sustainability & growth.",
      path: "/services/finance/accounting",
    },
    {
      title: "Reconciliation Services",
      description:
        "Reconciliation Services are essential to verify consistency of the money coming in & going out.",
      path: "/services/finance/reconciliation",
    },
    {
      title: "Financial Reporting",
      description:
        "Financial reporting forms a very important part of every company’s daily operational requirement. especially SMEs.",
      path: "/services/finance/financial-reporting",
    },
    {
      title: "Cash Flow Management",
      description:
        "Konnect offer’s Cash flow Accounting Services to diverse industries according to our esteemed client’s requirements.",
      path: "/services/finance/cash-flow",
    },
  ];

  const bpoServices = [
    {
      title: "Payroll Processing",
      description:
        "Konnect has been catering to the Payroll Processing to more than 200 customers.",
      path: "/services/bpo/payroll",
    },
    {
      title: "Customer Order Processing",
      description:
        "Konnect provides back-office & and sales ordering process support for their valuable customer",
      path: "/services/bpo/order-processing",
    },
  ];

  const renderCards = (services: typeof financeServices) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
      {services.map((service) => (
        <div
          key={service.title}
          onClick={() => router.push(service.path)}
          className="cursor-pointer border rounded-xl p-5 shadow-sm hover:shadow-md hover:border-[#FFD369] transition-all duration-300 bg-white"
        >
          <h3 className="text-lg font-semibold text-[#222831] mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-[#5A5A5A]">{service.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Finance and Accounting */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#222831]">
          B2B Services Offering Solutions for Bookkeepers and Tax Firms.
        </h2>
        <p className="mt-3 text-[#5A5A5A]">
          Services we offer as a-la-carte offerings in finance and accounting.
        </p>
      </div>

      {renderCards(financeServices)}

      {/* BPO */}
      <div className="text-center mt-20 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-[#222831]">
          Business Process Outsourcing
        </h2>
        <p className="mt-3 text-[#5A5A5A]">
          Services we offer as a-la-carte offerings in business process outsourcing.
        </p>
      </div>

      {renderCards(bpoServices)}
    </div>
  );
};

export default ServicesComponent;

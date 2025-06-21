'use client';

import { FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const services = [
  { name: 'Bookkeeping Services', path: '/services/finance/bookkeeping' },
  { name: 'Taxation', path: '/services/finance/taxation' },
  { name: 'Accounting', path: '/services/finance/accounting' },
  { name: 'M & A Advisory', path: '/services/finance/ma-advisory' },
  { name: 'Reconciliation Services', path: '/services/finance/reconciliation' },
  { name: 'Financial Reporting', path: '/services/finance/financial-reporting' },
  { name: 'Cash Flow Management', path: '/services/finance/cash-flow' },
  { name: 'Payroll Processing', path: '/services/bpo/payroll' },
  { name: 'Customer Order Processing', path: '/services/bpo/order-processing' },
];

export default function GoldernCrown() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Left Content */}
      <div className="lg:col-span-2 space-y-10 bg-[#EEEEEE] p-6 rounded-xl shadow-md">
        <div className="space-y-4">
          <img
            src="/assets/golden.jpg"
            alt="Golden Crown"
            className="w-full rounded-xl shadow-md"
          />
          <h1 className="text-4xl font-bold text-gray-800">Golden Crown</h1>
          <p className="text-gray-700">
            The Company is a mid-sized bookkeeping & financial analysis firm based in Portland, Oregon. They focus on project management, bookkeeping, and advisory services for law firms and restaurants to help streamline their business systems.
          </p>
        </div>

        {/* Challenge Section */}
        <div className="border-t pt-6 space-y-4">
          <h2 className="text-2xl font-semibold">Challenge</h2>
          <p className="text-gray-700">
            High product volume required complex inventory management. Lack of proper tagging and mapping caused inaccuracies in closing balances and COGS.
          </p>
        </div>

        {/* Huge Transactions Section */}
        <div className="border-t pt-6 space-y-4">
          <h2 className="text-2xl font-semibold">Huge Transactions</h2>
          <p className="text-gray-700">
            Selling on platforms like Shopify, Amazon, Etsy, and wholesale demanded accurate invoice classification and bookkeeping. Proper reporting was necessary to reflect profitability and financial health accurately.
          </p>
        </div>

        {/* Solution Section */}
        <div className="border-t pt-6 space-y-4">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-700">
            Standardized accounting practices and inventory categorization.<br /><br />
            Products re-classified for accurate tracking and reporting.<br /><br />
            Inventory tagged properly and reflected accurately in financial records.<br /><br />
            Sales booked by channel and reporting enabled per source.<br /><br />
            Channel-specific cost allocations to calculate profit accurately.<br /><br />
            Data analysis & financial modeling supported strategic decisions.
          </p>

          <h4 className="text-xl font-semibold text-gray-800 pt-6">Results</h4>
          <p className="text-gray-700">
            Faster visibility of transactions and smarter decision-making. Accurate, real-time bookkeeping and financial reporting.
          </p>
        </div>

        {/* Clients Slider */}
        <div className="pt-10">
          <h2 className="text-2xl font-bold mb-4">Our Valuable Clients</h2>
          <div className="flex gap-6 overflow-x-auto">
            {[1, 2, 3, 4, 5].map((i) => (
              <img
                key={i}
                src={`https://source.unsplash.com/100x100/?logo,brand${i}`}
                className="w-24 h-24 object-contain rounded-md shadow"
                alt={`Client ${i}`}
              />
            ))}
          </div>
        </div>

        {/* Social Icons Placeholder */}
        <div className="flex gap-4 pt-6 text-gray-500 hover:text-[#FFD369]">
          <FaSearch />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-10 bg-[#393E46] p-6 rounded-xl shadow-md text-[#EEEEEE]">
        {/* Search Box */}
        <div>
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-md shadow-sm bg-[#222831] text-[#EEEEEE] placeholder-gray-300 focus:outline-[#FFD369]"
          />
        </div>

        {/* Help Box */}
        <div className="bg-[#222831] p-6 rounded-lg shadow space-y-2 text-center">
          <p className="text-lg font-medium text-[#FFD369]">How can we help you?</p>
          <p className="text-sm text-gray-300">Contact us to know more about our services.</p>
          <button className="mt-4 px-6 py-2 bg-[#FFD369] text-black rounded hover:bg-yellow-400 transition">
            Contact Us
          </button>
        </div>

        {/* Testimonial Box */}
        <div className="bg-[#222831] p-6 rounded-lg shadow space-y-4">
          <h3 className="text-xl font-semibold text-[#FFD369]">Testimonials</h3>
          <p className="text-gray-300 italic">
            “We were amazed by how little effort was required on our part to have Consulting WP prepare these materials…”
          </p>
          <p className="text-[#EEEEEE] font-medium">Amanda Seyfried</p>
          <p className="text-sm text-gray-400">Founder & CEO, Arcade Systems</p>
        </div>

        {/* Latest Posts */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-[#FFD369]">Latest Posts</h3>
          {[
            ['12 Essential Steps Every CPA', 'October 29 2024'],
            ['The Hidden Complexity of Tax', 'October 06 2024'],
            ['The Guide to Bookkeeping for', 'November 21 2023'],
            ['Why Should CPA Firms Outsource', 'September 25 2023'],
            ['The Benefits of Working with', 'February 01 2023'],
          ].map(([title, date], idx) => (
            <div key={idx} className="text-sm">
              <p className="font-medium text-[#EEEEEE]">{title}</p>
              <p className="text-gray-400 text-xs">{date}</p>
            </div>
          ))}
        </div>

        {/* Our Services */}
        <div className="space-y-2 pt-4">
          <h3 className="text-xl font-semibold text-[#FFD369]">Our Services</h3>
          <ul className="space-y-1">
            {services.map((service, index) => (
              <li key={index} className="text-sm text-[#EEEEEE] hover:text-[#FFD369] hover:underline transition duration-200">
                <Link href={service.path}>
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

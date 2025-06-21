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

export default function NakedDogComponent() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Left Content */}
      <div className="lg:col-span-2 space-y-10 bg-[#EEEEEE] p-6 rounded-xl shadow-md">
        <div className="space-y-6">
          <img
            src="/assets/nakeddog.jpg"
            alt="Naked Dog"
            className="w-full rounded-xl shadow-md"
          />
          <p className="text-gray-700">
            The Company is a mid-sized bookkeeping & financial analysis firm based in Portland, Oregon. They manage projects and offer bookkeeping and advisory services to improve systems for law firms and restaurants.
          </p>
        </div>

        {/* Challenge Section */}
        <div className="border-t pt-6 space-y-4">
          <h3 className="text-2xl font-semibold text-[#FFD369]">Challenge</h3>
          <p className="text-gray-700">
            Large material volumes demanded proper inventory administration. Inadequate product tagging led to inaccurate closing balances and COGS reporting.
          </p>
        </div>

        {/* Huge Transactions Section */}
        <div className="border-t pt-6 space-y-4">
          <h3 className="text-2xl font-semibold text-[#FFD369]">Huge Transactions</h3>
          <p className="text-gray-700">
            E-commerce channels like Shopify, Amazon, Etsy, and Wholesale needed proper invoice classification and accurate booking of sales. Reporting accuracy was essential for reflecting profitability.
          </p>
        </div>

        {/* Solution Section */}
        <div className="border-t pt-6 space-y-4">
          <h3 className="text-2xl font-semibold text-[#FFD369]">Solution</h3>
          <p className="text-gray-700">
            Standardized inventory processes and re-categorized all products. Tagged inventory correctly for accurate reporting. Booked sales channel-wise and separated COGS/COS per channel. Used financial modeling for profitability analysis and better decision-making.
          </p>

          <h4 className="text-xl font-semibold text-gray-800 pt-6">Results</h4>
          <p className="text-gray-700">
            Timely reflection of transactions and efficient financial decision-making. Reliable and accurate bookkeeping.
          </p>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-10 bg-[#393E46] p-6 rounded-xl shadow-md text-[#EEEEEE]">
        {/* Search Box */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="w-full px-4 py-2 border border-gray-500 rounded-md shadow-sm bg-[#222831] text-[#EEEEEE] placeholder-gray-300"
          />
          <FaSearch className="absolute top-3 right-3 text-gray-400" />
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
            “We were amazed by how little effort was required on our part to have Consulting WP prepare these materials...”
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
                <Link href={service.path}>{service.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

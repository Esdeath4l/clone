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

export default function Fisher() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
      
      {/* Left Content */}
      <div className="lg:col-span-2 space-y-10 bg-[#EEEEEE] p-6 rounded-xl shadow-md">
        <div className="space-y-4">
          <img
            src="/assets/fisher.jpg"
            alt="Fisher"
            className="w-full rounded-xl shadow-md"
          />
          <h1 className="text-4xl font-bold text-gray-800">Fisher</h1>
          <p className="text-gray-700">
            The Company is a mid-sized bookkeeping & financial analysis firm based in Portland, Oregon. They specialize in managing projects, providing bookkeeping services, and advisory services to business owners to build more efficient business systems. Their clientele includes Law firms and Restaurants.
          </p>
        </div>

        {/* Challenge */}
        <div className="border-t pt-6 space-y-4">
          <h2 className="text-2xl font-semibold">Challenge</h2>
          <p className="text-gray-700">
            Managing high-volume materials and products required careful oversight, but inventory needed streamlined administration.
            <br /><br />
            Inadequate product tagging and mapping led to inaccuracies in closing balances and cost of goods sold (COGS).
          </p>
        </div>

        {/* Huge Transactions */}
        <div className="border-t pt-6 space-y-4">
          <h2 className="text-2xl font-semibold">Huge Transactions</h2>
          <p className="text-gray-700">
            Handling sales from platforms like Shopify, Amazon, Etsy, and wholesale required accurate classification of invoices.
            <br /><br />
            Precise reporting was essential for financial performance and profitability.
            <br /><br />
            Daily business activities were complex and needed careful evaluation and control.
          </p>
        </div>

        {/* Solution */}
        <div className="border-t pt-6 space-y-4">
          <h2 className="text-2xl font-semibold">Solution</h2>
          <p className="text-gray-700">
            Standardized accounting practices and inventory processes.
            <br /><br />
            Re-categorized products accurately and tagged inventory vs non-inventory properly.
            <br /><br />
            Distributed invoice and sales booking by channel to enable specific turnover analysis.
            <br /><br />
            Categorized expenses for precise COGS/COS allocation and profitability by channel.
            <br /><br />
            Financial modeling enhanced insights and decision-making.
          </p>

          <h4 className="text-xl font-semibold text-gray-800 pt-6">Results</h4>
          <p className="text-gray-700">
            Fast and accurate financial reflection and improved decision-making.
            <br />
            Clean and compliant books.
          </p>
        </div>

        {/* Clients Slider Placeholder */}
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

        {/* Social Icons */}
        <div className="flex gap-4 pt-6">
          <a href="#" className="text-gray-500 hover:text-[#FFD369]"><FaSearch /></a>
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

        {/* Testimonial */}
        <div className="bg-[#222831] p-4 rounded-lg space-y-4 shadow">
          <h3 className="text-xl font-semibold text-[#FFD369]">Testimonials</h3>
          <p className="italic text-gray-300">
            “We were amazed by how little effort was required on our part to have Consulting WP prepare these materials…”
          </p>
          <p className="font-medium">Amanda Seyfried</p>
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

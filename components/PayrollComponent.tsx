'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP } from 'react-icons/fa';

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

export default function PayrollComponent() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Left Content */}
      <div className="lg:col-span-2 space-y-10 bg-[#EEEEEE] p-6 rounded-xl shadow-md">
        <div className="space-y-4">
          <img
            src="/assets/fisher.jpg"
            alt="Payroll Processing"
            className="w-full rounded-xl shadow-md"
          />
          <h1 className="text-4xl font-bold text-[#222831]">Payroll Processing</h1>
          <p className="text-[#393E46]">
            Every company has to maintain its books. Konnect’s Accounting & Bookkeeping function just does that.
            <br /><br />
            At Konnect, we understand that bookkeeping is often viewed as a cost center and, as a result, frequently overlooked by organizations. However, whether for taxation, decision-making, or performance analysis, accurate and timely financial data is essential. That’s where we step in.
            <br /><br />
            Our expert bookkeeping services ensure that you have access to precise, reliable financial information in the format best suited for your needs. By outsourcing to Konnect, you not only reduce operational costs but also eliminate the burden of managing in-house bookkeeping, allowing you to focus on growing your business.
          </p>
          <ul className="list-disc pl-6 text-[#393E46]">
            <li>Accounts Payable Services</li>
            <li>Accounts Receivable Services</li>
          </ul>
        </div>

        <div className="border-t pt-6 space-y-4">
          <h2 className="text-2xl font-semibold text-[#222831]">Flexible and Software-Agnostic Solutions</h2>
          <p className="text-[#393E46]">
            Our team is equipped to work seamlessly with your existing systems. We can log in remotely to your desktop and efficiently manage your books, whether you use cloud-based or desktop software.
            <br />
            While you focus on your core business, we keep your financial records updated, accurate, and ready for review. With our expertise, we also generate insightful financial analytics to support informed decision-making.
          </p>
        </div>

        <div className="border-t pt-6 space-y-4">
          <h2 className="text-2xl font-semibold text-[#222831]">Software Proficiency</h2>
          <ul className="list-disc pl-6 text-[#393E46]">
            <li>Step 1: Invoice Receipt – Receive invoices (paper/electronic)</li>
            <li>Step 2: Image & Data Capture – Store and view invoice images</li>
            <li>Step 3: Process and Route – Approval routing to customer executives</li>
            <li>Step 4: Disburse and Archive – Upload to client A/P system for payment</li>
          </ul>
          <p className="text-[#393E46]">
            Our Accounts Receivable services enable clients to stay on top of their revenue stream. We handle everything from invoice generation to collections tracking, allowing clients to focus on operations while ensuring steady cash flow.
          </p>
        </div>

        {/* Clients Slider */}
        <div className="pt-10">
          <h2 className="text-2xl font-bold text-[#222831] mb-4">Our Valuable Clients</h2>
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
          <a href="#" className="text-gray-500 hover:text-[#FFD369]"><FaFacebookF /></a>
          <a href="#" className="text-gray-500 hover:text-[#FFD369]"><FaTwitter /></a>
          <a href="#" className="text-gray-500 hover:text-[#FFD369]"><FaLinkedinIn /></a>
          <a href="#" className="text-gray-500 hover:text-[#FFD369]"><FaPinterestP /></a>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="space-y-10 bg-[#393E46] p-6 rounded-xl shadow-md text-[#EEEEEE]">
        {/* Search */}
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
            “Outsourcing bookkeeping to Konnect has freed up so much of our internal bandwidth. Their team is reliable, precise, and always ahead of deadlines.”
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

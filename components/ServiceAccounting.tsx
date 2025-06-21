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

export default function Accounting() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
      {/* Left Content */}
      <div className="lg:col-span-2 space-y-10 bg-[#EEEEEE] p-6 rounded-xl shadow-md">
        <div className="space-y-4">
          <img
            src="/assets/fisher.jpg"
            alt="Accounting"
            className="w-full rounded-xl shadow-md"
          />
          <h1 className="text-4xl font-bold text-[#222831]">Accounting</h1>
          <p className="text-[#393E46]">
            Cost, Time and Resource, are key factors for Individuals or a Company’s sustainability & growth.
            <br /><br />
            Reduce Cost Center’s, More Time in Hand, and effective resources are buzz words. Konnect’s 360 degree Accounting Services provide exactly that, providing you with generous amount of time to spend on Strategies, with Low cost and effective analytical tools—such as Managing your Accounts in a Cost effective and JIT manner, and serving you with Value Added MIS Services.
            <br /><br />
            We Study, Analyse and Recommend. We understand your exact needs—by going through your data, analyse and consult the right solution—The Custom Solution.
          </p>
          <ul className="list-disc pl-6 text-[#393E46]">
            <li>Accounts payable services</li>
            <li>Accounts receivable services</li>
          </ul>
        </div>

        <div className="border-t pt-6 space-y-4">
          <h2 className="text-2xl font-semibold text-[#222831]">Post Process</h2>
          <p className="text-[#393E46]">
            Once the process is completed the invoices are filed as “normal” in General Ledger. Konnect performs disbursements and therefore the hard copies are stored at our facility & the e-images are visible online.
          </p>
          <h3 className="text-xl font-medium text-[#222831]">Accounts Payable Process in detail</h3>
          <ul className="list-disc pl-6 text-[#393E46]">
            <li>Data Capture</li>
            <li>Data Processing – Exception Management/Resolution</li>
            <li>Suspect Duplicate Analysis</li>
            <li>Disbursement Services</li>
            <li>Other Accounts Payable Outsourcing Services</li>
          </ul>
        </div>

        <div className="border-t pt-6 space-y-4">
          <h2 className="text-2xl font-semibold text-[#222831]">Services Include</h2>
          <p className="text-[#393E46]">
            Preparation of Bills (as required by TAD) and mailing on approval by the client...<br />
            Software’s used: QuickBooks, M.Y.O.B
          </p>
        </div>

        <div className="border-t pt-6 space-y-4">
          <h2 className="text-2xl font-semibold text-[#222831]">Accounts Payable Services Process</h2>
          <ul className="list-disc pl-6 text-[#393E46]">
            <li>Step 1: Invoice Receipt – Receive Invoices & Electronic invoices</li>
            <li>Step 2: Image and Data Capture – Documents stored as images and all the invoice images will be viewable</li>
            <li>Step 3: Process and Route – Processed and routed to the relevant customer executives for approval</li>
            <li>Step 4: Disburse and Archive – Uploaded to the customer’s A/P system for payment.</li>
          </ul>
          <p className="text-[#393E46]">
            Accounts Receivable enables our customers to effortlessly deal with this key finance function...
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
            “We were amazed by how little effort was required on our part to have Consulting WP prepare these materials. We exchanged a few phone calls and e-mails, and they… handled the rest.”
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

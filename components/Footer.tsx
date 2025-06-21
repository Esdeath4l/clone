'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A2E] text-[#EDEDED] font-sans pt-20 pb-32 px-6 relative">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 items-start">
        
        {/* Left Section */}
        <div className="space-y-8">
          <h2 className="text-5xl font-extrabold text-[#FFD369]">KONNECT</h2>
          <p className="text-lg leading-relaxed text-gray-300">
            The company Konect Books Pvt. Ltd. was established along with Konnect Technologies to cater to International Bookkeeping & Taxation requirements of US and India customers.
          </p>

          <div className="space-y-4">
            <p className="font-bold text-xl">Subscribe for Updates</p>
            <form className="flex max-w-sm border border-[#FFD369] rounded-full overflow-hidden">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 py-3 bg-[#1A1A2E] text-white placeholder:text-gray-400 focus:outline-none text-base"
              />
              <button
                type="submit"
                className="bg-[#FFD369] px-5 py-3 rounded-full text-[#1A1A2E] font-extrabold text-xl"
              >
                &gt;
              </button>
            </form>
          </div>
        </div>

        {/* Middle Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-[#FFD369]">Popular Posts</h3>
          <ul className="space-y-4 text-lg text-gray-300 list-disc list-inside">
            <li>12 Essential Steps Every CPA Should Take to Prepare for Tax Season</li>
            <li>The Hidden Complexity of Tax Season – A Guide for CPAs and Seasoned Tax Professionals</li>
            <li>The Guide to Bookkeeping for Remote Teams by Konnectbooks</li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="space-y-6 bg-[#16213E] p-8 rounded-md">
          <h3 className="text-2xl font-semibold mb-2">CONTACT US</h3>
          <h4 className="text-3xl font-bold mb-4">Get In Touch</h4>
          <div className="space-y-3 text-lg text-gray-300">
            <p className="flex items-start"><FiMapPin className="mt-1 mr-2 text-[#FFD369]" /> Office No. 3rd Floor, Konark Plaza, Lulla Nagar, Pune - 411040, India.</p>
            <p className="flex items-center"><FiMail className="mr-2 text-[#FFD369]" /> info@konnectbooks.com</p>
            <p className="flex items-center"><FiPhone className="mr-2 text-[#FFD369]" /> HR: +91 88885 18288</p>
            <p className="flex items-center"><FiPhone className="mr-2 text-[#FFD369]" /> Sales: +91 84466 19288</p>
            <p className="flex items-center"><FiMail className="mr-2 text-[#FFD369]" /> konnectbooks.com</p>
          </div>
          <div className="flex mt-4 space-x-6 text-[#FFD369] text-2xl">
            <Link href="#"><FaFacebookF /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#FFD369] py-6 px-6 md:px-20 flex flex-col md:flex-row justify-between items-center text-[#1A1A2E] text-lg font-medium">
        <p>© 2025 Konnect Books Pvt. Ltd.</p>
        <div className="flex space-x-5 mt-1 md:mt-0">
          <Link href="#">Privacy</Link>
          <Link href="#">Terms of Use</Link>
          <Link href="#">Site Map</Link>
        </div>
      </div>
    </footer>
  );
}

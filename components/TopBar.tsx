import { MdLocationOn, MdPhone } from 'react-icons/md';

export default function TopBar() {
  return (
    <div className="bg-[#EEEEEE] text-[#222831] text-sm py-4 flex justify-center">
      <div className="max-w-7xl w-full px-6 md:px-24 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0 text-center md:text-left">
        {/* Address */}
        <a
          href="https://www.google.com/maps?q=123+Main+Street,+Mumbai,+India"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center space-x-2 hover:text-[#FFD369] transition-colors"
        >
          <MdLocationOn className="text-[#FFD369]" size={20} />
          <span>123 Main Street, Mumbai, India</span>
        </a>

        {/* Phone Number */}
        <a
          href="tel:+919876543210"
          className="flex items-center justify-center space-x-2 hover:text-[#FFD369] transition-colors"
        >
          <MdPhone className="text-[#FFD369]" size={18} />
          <span>+91 98765 43210</span>
        </a>
      </div>
    </div>
  );
}

import { MdLocationOn, MdPhone } from 'react-icons/md';

export default function TopBar() {
  return (
    <div className="bg-pink-100 text-gray-700 text-sm py-4 flex justify-center">
      <div className="max-w-7xl w-full px-6 md:px-24 flex justify-between items-center">

        {/* Address:done */}
        <a
          href="https://www.google.com/maps?q=123+Main+Street,+Mumbai,+India"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 hover:text-pink-600 transition-colors"
        >
          <MdLocationOn className="text-gray-500" size={20} />
          <span>123 Main Street, Mumbai, India</span>
        </a>

        {/* phoneno:done */}
        <a
          href="tel:+919876543210"
          className="flex items-center space-x-2 hover:text-pink-600 transition-colors"
        >
          <MdPhone className="text-gray-500" size={18} />
          <span>+91 98765 43210</span>
        </a>
      </div>
    </div>
  );
}

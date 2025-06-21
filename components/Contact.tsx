'use client';

import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export default function Contact() {
  return (
    
    <div style={{ backgroundColor: '#EEEEEE', color: '#222831' }}>
  <section className="max-w-7xl mx-auto px-6 py-16">

      <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#222831' }}>Contact Us</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - Offices */}
        <div className="space-y-10">
          {/* Corporate Office */}
          <div>
            <h3 className="text-2xl font-semibold" style={{ color: '#222831' }}>Corporate Office</h3>
            <div className="mt-2 space-y-2">
              <p className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 text-[#FFD369]" />Konnect Books Pvt. Ltd., Office No. 1, 3rd Floor, Kothari Plaza, Lulla Nagar, Pune – 411040, India</p>
              <p className="flex items-center gap-2"><FaEnvelope className="text-[#FFD369]" />info@konnectbooks.com</p>
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-[#FFD369]" />Sales: +91 84465 10898​</p>
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-[#FFD369]" />HR: +91 90288 85648</p>
            </div>
          </div>

          {/* Bangalore Office */}
          <div>
            <h3 className="text-2xl font-semibold" style={{ color: '#222831' }}>Bangalore Office</h3>
            <div className="mt-2 space-y-2">
              <p className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 text-[#FFD369]" />V.K. Paradise 799, 19th Main, 80 Feet Road, Sector 2, HSR Layout, Bangalore – 560102, India</p>
              <p className="flex items-center gap-2"><FaEnvelope className="text-[#FFD369]" />info@konnectbooks.com</p>
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-[#FFD369]" />+91-20 26832117</p>
            </div>
          </div>

          {/* USA Office */}
          <div>
            <h3 className="text-2xl font-semibold" style={{ color: '#222831' }}>USA Office</h3>
            <div className="mt-2 space-y-2">
              <p className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1 text-[#FFD369]" />3600 WABEEK LAKE DR. W, BLOOMFIELD HILLS, MI, 48302</p>
              <p className="flex items-center gap-2"><FaEnvelope className="text-[#FFD369]" />info@konnectbooks.com</p>
              <p className="flex items-center gap-2"><FaPhoneAlt className="text-[#FFD369]" />+1-209-736-7541</p>
            </div>
          </div>
        </div>

        {/* Right - Contact Form */}
        <div>
          <div className="p-8 rounded-xl shadow space-y-6" style={{ backgroundColor: '#FFFFFF' }}>
            <p className="font-medium text-lg text-[#222831]">WE'LL GET BACK TO YOU WITHIN 48 HOURS.</p>

            <input type="text" placeholder="Please Enter Your Name" className="w-full px-4 py-2 border rounded-md border-[#393E46] text-[#222831]" />
            <input type="email" placeholder="Please Enter Your Email" className="w-full px-4 py-2 border rounded-md border-[#393E46] text-[#222831]" />
            <input type="tel" placeholder="Please Enter Your Contact Number" className="w-full px-4 py-2 border rounded-md border-[#393E46] text-[#222831]" />
            <input type="text" placeholder="Please Enter Mail Subject" className="w-full px-4 py-2 border rounded-md border-[#393E46] text-[#222831]" />

            <select className="w-full px-4 py-2 border rounded-md border-[#393E46] text-[#222831]">
              <option disabled selected>-- Select Reason --</option>
              <option>General Inquiry</option>
              <option>Sales</option>
              <option>Support</option>
            </select>

            <select className="w-full px-4 py-2 border rounded-md border-[#393E46] text-[#222831]">
              <option disabled selected>-- Select Service Type --</option>
              <option>Bookkeeping</option>
              <option>Accounting</option>
              <option>Payroll</option>
            </select>

            <textarea rows={4} placeholder="Please Enter Details" className="w-full px-4 py-2 border rounded-md border-[#393E46] text-[#222831]"></textarea>

            {/* Captcha - Simulated */}
            <div className="flex items-center justify-between gap-4">
              <div className="bg-[#EEEEEE] border px-4 py-2 rounded text-center text-lg font-bold tracking-widest shadow text-black">7GHD5</div>
              <input type="text" placeholder="Please Enter Captcha Shown Above" className="flex-1 px-4 py-2 border rounded-md border-[#393E46] text-[#222831]" />
            </div>

            <button className="w-full py-2 rounded text-black font-semibold transition" style={{ backgroundColor: '#FFD369' }}>Send Message</button>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-16">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1891.7304203049733!2d73.8785783!3d18.4887277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0f52c5ff457%3A0x1234567890abcdef!2sKothari%20Plaza%2C%20Lulla%20Nagar%2C%20Pune!5e0!3m2!1sen!2sin!4v1710000000000"
          width="100%"
          height="400"
          allowFullScreen
          loading="lazy"
          className="rounded-xl border-2 shadow"
          style={{ borderColor: '#393E46' }}
        ></iframe>
      </div>
    </section>
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import InfoTab from '../../components/InfoTab';
import TopBar from '../../components/TopBar';
import Navbar from '../../components/NavTab';
import Footer from '../../components/Footer';
import OurBlogComponent from '../../components/OurBlogComponent';

export default function OurBlogPage() {

  return (
      <>
        <TopBar />
        <InfoTab />
        <Navbar />

        {/* Hero Section */}
        
       <section className="relative h-screen bg-[#0D1B2A] text-white overflow-hidden">
      {/* Decorative Wave Background (Top) */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"
        preserveAspectRatio="none"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          d="M0,64L60,69.3C120,75,240,85,360,101.3C480,117,600,139,720,154.7C840,171,960,181,1080,186.7C1200,192,1320,192,1380,192L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
      </svg>

      {/* Subtle overlay for depth */}
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-start h-full px-6 sm:px-10 lg:px-20 xl:px-56">
        <div className="max-w-lg w-full text-left">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
           Our Blog
          </motion.h1>

          <motion.h6
            className="text-lg font-light mb-8 text-[#EEEEEE]"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            from SMEs and CPAs
          </motion.h6>

          <motion.div
            className="flex justify-start gap-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {/* Contact Us Button */}
            <button className="relative inline-block rounded-full text-[#0D1B2A] font-semibold py-3 px-8 overflow-hidden transition-all duration-500 bg-[#FFD369] hover:text-white group shadow-md">
              <span className="relative z-10">Contact Us</span>
              <span className="absolute inset-y-0 left-1/2 w-0 group-hover:w-full bg-[#e6b845] transition-all duration-500 origin-center transform -translate-x-1/2 rounded" />
            </button>

            {/* Learn More Button */}
            <button className="relative inline-block rounded-full text-white font-semibold py-3 px-8 border-2 border-white overflow-hidden group shadow-md">
              <span className="relative z-10 group-hover:text-white transition-all duration-500">
                Learn More
              </span>
              <span className="absolute inset-0 w-0 group-hover:w-full bg-[#FFD369] transition-all duration-500 rounded" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>

        {/* Our Blog Section */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <OurBlogComponent />
        </motion.section>
  
        {/* Footer Section */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Footer />
        </motion.section>
      </>
    );
  }
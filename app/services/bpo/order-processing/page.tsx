'use client';
import { motion } from 'framer-motion';
import InfoTab from '../../../../components/InfoTab';
import TopBar from '../../../../components/TopBar';
import Footer from '../../../../components/Footer';
import Navbar from '../../../../components/NavTab';
import CustomerOrder from '../../../../components/CustomerOrder';
import Link from 'next/link';

export default function CustomerOrderProcessing(){
  return(
    <>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <TopBar />
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <InfoTab />
      </motion.div>

      <Navbar />

      {/* Hero Section */}
       <section className="relative h-[70vh] bg-[#0D1B2A] text-white overflow-hidden">

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
    <div className="relative h-[70vh] bg-cover bg-center flex items-center justify-center text-center px-4">

  <div className="max-w-3xl w-full text-center mx-auto">
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >Customer Order Processing
          </motion.h1>

          <motion.h6
            className="text-lg md:text-2xl font-light text-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
             <Link href="/"> Home </Link> / <Link href="/services/bpo/order-processing">Services/ Customer Order Processing</Link>
          </motion.h6>
        </div>
        </div>
      </section>
       <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <CustomerOrder/>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Footer />
      </motion.div>
    </>
  );
}


    

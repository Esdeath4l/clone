'use client';

import Image from 'next/image';
import Link from 'next/link';
import TopBar from '../../../components/TopBar';
import InfoTab from '../../../components/InfoTab';
import Navbar from '../../../components/NavTab';
import Footer from '../../../components/Footer';
import { motion } from 'framer-motion';

export default function HiddenComplexity() {
  return (
    <>
    <TopBar />
    <InfoTab />
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
          >Hidden Complexity
          </motion.h1>

          <motion.h6
            className="text-lg md:text-2xl font-light text-gray-200"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
             <Link href="/"> Home </Link> / <Link href="/home/ourblogs">ourblogs</Link> / <Link href="/ourblogs/hiddencomplexity">Hidden Complexity</Link>
          </motion.h6>
        </div>
        </div>
      </section>




    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
          {/* Full Card 1 */}
          <div className="max-w-3xl w-full bg-white rounded-lg shadow-md overflow-hidden">

              {/* Top Bar */}
              <div className="w-full bg-white px-4 py-2 flex justify-between items-center text-sm text-gray-800 border-b">

                  <div className="flex items-center space-x-3 flex-wrap">
                      <span>NOVEMBER 09 2022</span>
                      <Link href="/admin" className="hover:underline font-medium">ADMIN</Link>
                      <span className="text-gray-400">|</span>
                      <Link href="/finance" className="hover:underline font-medium">FINANCE & ACCOUNTING</Link>
                      <span className="text-gray-400">|</span>
                      <Link href="/hr" className="hover:underline font-medium">HR</Link>
                  </div>
              </div>

              {/* Image Block */}
              <div className="relative">
                  <Image
                      src="/assets/payroll-image.jpg"
                      alt="Payroll Image"
                      width={800}
                      height={400}
                      className="w-full h-auto" />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                      <h1 className="text-white text-5xl font-bold tracking-wide">PAYROLL</h1>
                  </div>
              </div>

              {/* Text Section */}
              <div className="p-6">
                  <h1 className="text-3xl font-bold mb-4">The Hidden Complexity of Tax Season – A Guide for CPAs and Seasoned Tax Professionals</h1>
                  <p className="text-gray-700 text-sm mb-6">
                      Tax season may come just once a year, but preparing for it should be an ongoing process for CPAs. By planning ahead and keeping key considerations in mind, you can ensure a smoother, more efficient tax season when the time arrives.
                      Taking time now to streamline your processes, improve client communication, and review the latest tax law updates can significantly reduce stress during the busiest months of the year. Let’s explore 12 critical steps every CPA should follow to stay prepared for tax season, no matter when it begins.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">1. Stay Current with Tax Law Changes</h2>
                  <p className="text-gray-700 text-sm mb-6">
                    Tax laws are constantly evolving, and staying on top of them is crucial for providing accurate and compliant services to your clients. Review changes in tax regulations regularly and ensure that both you and your team are well-versed in these updates.
                    Conduct periodic training sessions to make sure everyone in your firm is knowledgeable and ready to implement new tax laws when needed.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">2. Keep Software & Systems Updated</h2>
                  <p className="text-gray-700 text-sm mb-6">
                    Tax laws are constantly evolving, and staying on top of them is crucial for providing accurate and compliant services to your clients. Review changes in tax regulations regularly and ensure that both you and your team are well-versed in these updates.
                    Conduct periodic training sessions to make sure everyone in your firm is knowledgeable and ready to implement new tax laws when needed.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">3. Regularly Review Your Fee Structure</h2>
                  <p className="text-gray-700 text-sm mb-6">
                    Tax laws are constantly evolving, and staying on top of them is crucial for providing accurate and compliant services to your clients. Review changes in tax regulations regularly and ensure that both you and your team are well-versed in these updates.
                    Conduct periodic training sessions to make sure everyone in your firm is knowledgeable and ready to implement new tax laws when needed.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">4. Continuously Improve Internal Processes</h2>
                  <p className="text-gray-700 text-sm mb-6">
                    Tax laws are constantly evolving, and staying on top of them is crucial for providing accurate and compliant services to your clients. Review changes in tax regulations regularly and ensure that both you and your team are well-versed in these updates.
                    Conduct periodic training sessions to make sure everyone in your firm is knowledgeable and ready to implement new tax laws when needed.
                  </p>
                  <h2 className="text-2xl font-bold mb-4">5. Prioritize Data Security</h2>
                  <p className="text-gray-700 text-sm mb-6">
                    Tax laws are constantly evolving, and staying on top of them is crucial for providing accurate and compliant services to your clients. Review changes in tax regulations regularly and ensure that both you and your team are well-versed in these updates.
                    Conduct periodic training sessions to make sure everyone in your firm is knowledgeable and ready to implement new tax laws when needed.
                  </p>
              </div>
          </div>
      </div>
      <Footer/>
      </>



  );
}
'use client';

import { motion } from 'framer-motion';
import TopBar from '../components/TopBar';
import InfoTab from '../components/InfoTab';
import Hero from '../components/HeroSection';
import ParentFocusedSegments from '../components/ParentFocusedSegments';
import Testimonials from '../components/Testimonials';
import CaseStudy from '../components/CaseStudy';
import QuickStart from '../components/QuickStart';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Navbar from '../components/NavTab';

export default function Home() {
  return (
    <>
      {/* TopBar slides in from top */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <TopBar />
      </motion.div>

      {/* InfoTab fades in */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <InfoTab />
      </motion.div>

      <Navbar />

      {/* HeroSection zoom in */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <Hero />
      </motion.div>

      {/* ParentFocusedSegments scroll animation */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <ParentFocusedSegments />
      </motion.div>

      {/* Testimonials fade in on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Testimonials />
      </motion.div>

      {/* CaseStudy slides up when visible */}
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <CaseStudy />
      </motion.div>

      {/* QuickStart animated entry */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <QuickStart />
      </motion.div>

      {/* Blog section fade in */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Blog />
      </motion.div>

      {/* Footer subtle entrance */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <Footer />
      </motion.div>
    </>
  );
}

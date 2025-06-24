'use client';

import { motion, HTMLMotionProps } from 'framer-motion';

export default function AboutIntro() {
  return (
    <section className="w-full bg-[#EEEEEE] py-16 px-4 sm:px-10 md:px-20 lg:px-28 xl:px-40">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* LEFT: YouTube Video */}
        <motion.div
          {...{
            initial: { x: -50, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { duration: 0.6 },
            className: "flex-1 w-full h-[300px] sm:h-[400px] lg:h-[360px]",
          } as HTMLMotionProps<'div'>}
        >
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="Konnect Books Intro"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>

        {/* RIGHT: Text Content */}
        <motion.div
          {...{
            initial: { x: 50, opacity: 0 },
            animate: { x: 0, opacity: 1 },
            transition: { duration: 0.6 },
            className: "flex-1",
          } as HTMLMotionProps<'div'>}
        >
          <div className="mb-3 text-sm text-[#393E46] tracking-widest uppercase font-semibold flex items-center gap-3">
            <span className="w-10 h-[2px] bg-[#FFD369] inline-block" />
            Welcome to our company
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#222831] leading-snug mb-4">
            Konnect Books & Taxes – <br />
            International Bookkeeping US & India
          </h2>

          <p className="text-[#393E46] text-base leading-relaxed">
            We are a Bookkeeping, Taxation & Advisory firm, that has catered to companies globally,
            with custom service lines that not only benefit the user in the short term, but whose
            impact can be seen even after a couple of years. We not only manage your books, but
            ensure that you receive consulting that benefits your overall operations. We take care
            of your taxes and compliances so that you can concentrate on your core business. We work
            with various industries including Real Estate, Health-care, Technology, Hospitality,
            e-Commerce & the Retail sector, with best in class Functional Consultants, Subject Matter
            Experts & Technologies. We believe that every customer is unique and therefore give its
            due when performing a review of our customers who trust in us.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
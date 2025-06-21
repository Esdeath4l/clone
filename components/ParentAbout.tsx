// app/about/page.tsx
'use client';

import AboutIntro from "./AboutIntro";
import OurHistorySection from "./OurHistorySection";
import CountUpComponent from "./CountUp";
export default function AboutPage() {
  return (
    <main>
      <div>
        <AboutIntro />
      </div>
      <div>
        <OurHistorySection />
      </div>
      <div>
        <CountUpComponent />
      </div>
    </main>
  );
}

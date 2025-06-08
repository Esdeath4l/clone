import TopBar from '../components/TopBar';
import InfoTab from '../components/InfoTab';
import Hero from '../components/HeroSection';
import FocusedSegments from '../components/FocusedSegments';
import ParentFocusedSegments from '../components/ParentFocusedSegments';
import Testimonials from '../components/Testimonials';
import CaseStudy from '../components/CaseStudy';

export default function Home() {
  return (
    <>
      <TopBar />
      <InfoTab />
      <Hero />
      <ParentFocusedSegments />
      <Testimonials />
      <CaseStudy />
      {/* Continue with other sections */}
    </>
  );
}

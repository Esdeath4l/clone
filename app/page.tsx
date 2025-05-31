import TopBar from '../components/TopBar';
import InfoTab from '../components/InfoTab';
import Hero from '../components/HeroSection';

import FocusedSegments from '../components/FocusedSegements';

export default function Home() {
  return (
    <>
      <TopBar />
      <InfoTab />
      <Hero />
      <FocusedSegments/>
      {/* Continue with other sections */}
    </>
  );
}


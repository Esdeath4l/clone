import TopBar from '/components/TopBar';
import InfoTab from '/components/InfoTab';

export default function AboutUsPage() {
  return (
    <>
      {/* Top bar with address & phone number */}
      <TopBar />

      {/* Info tab with working hours & email*/}
      <InfoTab />

      {/* Your about us content goes here */}
      <div className="max-w-7xl px-6 md:px-24 py-12">
        <h1>About Us</h1>
        <p>This is all about our company.</p>
      </div>
    </>
  );
}



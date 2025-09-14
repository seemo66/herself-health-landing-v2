// main entry point for the app
// imports top-level layout and section components
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import InsuranceSection from './components/InsuranceSection';
import MembershipSection from './components/MembershipSection';
import LocationSection from './components/LocationsSection';
import WaitingListSection from './components/WaitingListSection';

function App() {
  // define the order of sections for easy management
  const sections = [
    HeroSection, // hero section with primary call-to-action
    ServicesSection, // services offered by the company
    InsuranceSection, // insurance information
    MembershipSection, // membership or subscription information
    LocationSection, // location information
    WaitingListSection, // waiting list or sign-up form
  ];

  return (
    // container for the entire app, centers content horizontally
    <div className="mx-auto mt-[102px] lg:mt-[78px]">
      {/* site header, usually contains navigation */}
      <Header />

      {/* main content area, semantically marked as main */}
      <main className="max-w-[1728px] mx-auto" role="main">
        {sections.map((Section, index) => (
          // render each section in order
          <Section key={index} />
        ))}
      </main>

      {/* site footer, contains copyright, links, etc. */}
      <Footer />
    </div>
  );
}

export default App;

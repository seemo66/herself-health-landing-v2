// main entry point for the app
// imports top-level layout and section components
import Header from './components/Header';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import MembershipSection from './components/MembershipSection';
import WaitingListSection from './components/WaitingListSection';
import FaqSection from './components/FaqSection';

function App() {
  // define the order of sections for easy management
  const sections = [
    HeroSection, // hero section with primary call-to-action
    ServicesSection, // services offered by the company
    MembershipSection, // membership or subscription information
    WaitingListSection, // waiting list or sign-up form
    FaqSection, // frequently asked questions
  ];

  return (
    // container for the entire app, centers content horizontally
    <div className="mx-auto mt-[78px]">
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

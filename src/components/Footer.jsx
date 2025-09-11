// footer component, displayed at the bottom of the page
// contains site logo and optional links
export default function Footer() {
  return (
    // semantic footer element for accessibility
    <footer className="w-full z-[11] bg-pink flex items-center justify-center py-[45px]">
      {/* container for logo and optional navigation */}
      <div className="w-full mx-auto flex items-center justify-center">
        {/* site logo linking to home page */}
        <a href="/" aria-label="Herself Health home" className="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo-white.svg`} // logo image from public folder
            alt="Herself Health logo"
            className="h-auto w-auto"
          />
          {/* hidden text for screen readers */}
          <span className="sr-only">Herself Health</span>
        </a>
      </div>
    </footer>
  );
}

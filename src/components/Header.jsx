// header component, fixed at the top of the page
// contains site logo and main navigation (currently just logo)
export default function Header() {
  return (
    // semantic header, role banner for accessibility
    <header
      className="
        fixed w-full z-[11] top-0 bg-white 
        flex items-center justify-center py-[24px] 
        shadow-header
      "
      role="banner"
    >
      {/* container for logo and optional navigation */}
      <div className="w-full mx-auto flex items-center justify-center lg:justify-start lg:ml-[100px]">
        {/* site logo linking to home page */}
        <a href="/" aria-label="Herself Health home" className="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/images/logo-pink.svg`} // logo image from public folder
            alt="Herself Health logo"
            className="h-auto w-auto"
          />
          {/* hidden text for screen readers */}
          <span className="sr-only">Herself Health</span>
        </a>
      </div>
    </header>
  );
}

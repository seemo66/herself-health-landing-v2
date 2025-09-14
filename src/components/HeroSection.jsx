// HeroSection Component
// Displays a responsive hero image with overlay text and a call-to-action button.

export default function HeroSection() {
  return (
    <div className="relative bg-tan">
      {/* Hero Image */}
      <div className="relative w-full">
        <picture>
          {/* Desktop image */}
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/hero-desktop.webp`}
            media="(min-width: 768px)"
          />
          {/* Mobile fallback image */}
          <img
            src={`${process.env.PUBLIC_URL}/images/hero-mobile.webp`}
            alt="A woman and a child are smiling in a park with greenery and blue skies."
            className="block w-full md:min-h-[525px] object-cover"
          />
        </picture>
      </div>

      {/* Overlay Content */}
      <div
        className="relative z-10 px-[30px] pt-[25px] pb-[75px] 
                   md:absolute md:inset-0 md:flex md:items-center md:justify-start md:p-12 
                   lg:px-[100px]"
      >
        <div className="md:w-[65%] lg:w-[55%] xl:w-[50%] 2xl:w-[40%] md:max-w-7xl md:pr-8">
          {/* Headline */}
          <h1 className="mb-3 font-reckless text-pink text-[40px] leading-tight md:text-2xl xl:text-5xl">
            Finally,
            <br />
            Healthcare That Understands You.
          </h1>

          {/* Subheadline */}
          <h2 className="mb-3 font-untitled font-medium text-darkPink text-[24px] xl:text-[30px] xl:leading-tight">
            Expert care designed exclusively for women 60+
          </h2>

          {/* Description */}
          <p className="mb-3 font-untitled text-text text-[18px] md:text-base">
            As women age, healthcare needs shift. Post-menopausal changes, chronic conditions, and a
            lifetime of caregiving create unique challenges that deserve more than a rushed visit.
            At Herself Health, our providers listen deeply, create personalized care plans, and help
            you live your best life every day.
          </p>

          {/* Call-to-action Description */}
          <p className="mb-8 font-untitled text-text text-[18px] md:text-base lg:text-lg">
            Experience primary care that's designed around your life — not squeezed into someone
            else's schedule.
          </p>

          {/* Call-to-action Button */}
          <button
            className="w-full md:w-[242px] h-[67px] rounded-lg bg-purple px-8 py-3 font-untitled text-[22px] text-white shadow-lg transition-colors duration-300 hover:bg-purple-dark"
            onClick={() => {
              // Smoothly scroll to waiting list section
              document.getElementById('waiting-list')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Book a Visit
          </button>
        </div>
      </div>
    </div>
  );
}

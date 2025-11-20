// hero section component

// displays a responsive hero image with text overlay and call-to-action button
export default function HeroSection() {
  return (
    // main container with background color
    <div className="bg-tan relative">
      {/* hero image container */}
      <div className="relative w-full">
        <picture>
          {/* desktop image source with media query */}
          <source
            srcSet="/images/tv/new-hero-desktop.webp"
            media="(min-width: 768px)"
          />
          {/* mobile image (default) */}
          <img
            src="/images/tv/new-hero-mobile.webp"
            alt="A woman happily smiling."
            className="block w-full md:min-h-[525px] object-cover"
          />
        </picture>
      </div>

      {/* overlay text and button section */}
      <div
        className="relative pt-[25px] pb-0 px-[30px] lg:px-[100px] 
                      md:p-12 md:absolute md:inset-0 md:flex md:items-center md:justify-start z-10"
      >
        <div className="md:w-[55%] lg:w-[55%] xl:w-[50%] 2xl:w-[40%] md:max-w-7xl md:pr-8">
          {/* main headline */}
          <h1 className="font-reckless text-[40px] text-pink text-4xl leading-tight mb-3 md:text-2xl xl:text-5xl">
            Finally, &nbsp;
            <br className="md:hidden" />
            Healthcare That Understands You.
          </h1>

          {/* subheadline */}
          <h2 className="font-untitled text-[24px] text-darkPink text-lg font-medium mb-3 xl:text-[30px] xl:leading-tight">
            Expert care designed exclusively for women 65+
          </h2>

          {/* main descriptive paragraph */}
          <p className="font-untitled text-black text-[18px] mb-3 md:text-base">
            As women age, healthcare needs shift. Post-menopausal changes, chronic conditions, and a
            lifetime of caregiving create unique challenges that deserve more than a rushed visit.
            At Herself Health, our providers listen deeply, create personalized care plans, and help
            you live your best life every day.
          </p>

          {/* call-to-action paragraph */}
          <p className="font-untitled text-black text-[18px] font-bold mb-8 md:text-base lg:text-lg">
            Experience primary care that's designed around your life — not squeezed into someone
            else's schedule.
          </p>

          {/* call-to-action button */}
          <button
            className="w-full md:w-[385px] h-auto bg-purple text-white font-untitled text-[22px] 
                       py-3 px-4 rounded-lg shadow-lg hover:bg-purple-dark transition-colors duration-300 mb-8"
            onClick={() => {
              // scroll to waiting list section smoothly when button is clicked
              document.getElementById('call-now')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get My Free Guide & Next Steps
          </button>
        </div>
      </div>
    </div>
  );
}

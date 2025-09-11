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
            srcSet={`${process.env.PUBLIC_URL}/images/hero-desktop.webp`}
            media="(min-width: 768px)"
          />
          {/* mobile image (default) */}
          <img
            src={`${process.env.PUBLIC_URL}/images/hero-mobile.webp`}
            alt="A woman and a child are happily smiling in a park, with lush greenery and a clear blue sky in the background."
            className="block w-full md:min-h-[525px] object-cover"
          />
        </picture>
      </div>

      {/* overlay text and button section */}
      <div
        className="relative pt-[25px] pb-[39px] px-[30px] lg:px-[100px] 
                      md:p-12 md:absolute md:inset-0 md:flex md:items-center md:justify-start z-10"
      >
        <div className="md:w-[65%] lg:w-[55%] xl:w-[50%] 2xl:w-[40%] md:max-w-7xl md:pr-8">
          {/* main headline */}
          <h1 className="font-reckless text-[40px] text-pink text-4xl leading-tight mb-3 md:text-2xl xl:text-5xl">
            Finally, Healthcare That Understands You.
          </h1>

          {/* subheadline */}
          <h2 className="font-untitled text-[24px] text-darkPink text-lg font-medium mb-3 xl:text-[30px] xl:leading-tight">
            For women navigating the changes and challenges of 50-65.
          </h2>

          {/* main descriptive paragraph */}
          <p className="font-untitled text-text text-[18px] mb-3 md:text-base">
            You've spent decades caring for everyone else. Now it's time for healthcare that truly
            understands you. Our Women's Health Membership recognizes that your needs are
            unique—from hormone changes and sleep disruptions to managing stress and maintaining
            your vitality.
          </p>

          {/* call-to-action paragraph */}
          <p className="font-untitled text-text text-[18px] font-bold mb-8 md:text-base lg:text-lg">
            Ready to join our waitlist? Experience healthcare designed around your life, not
            squeezed into someone else's schedule.
          </p>

          {/* call-to-action button */}
          <button
            className="w-[285px] h-[67px] bg-purple text-white font-untitled text-[22px] 
                       py-3 px-8 rounded-lg shadow-lg hover:bg-purple-dark transition-colors duration-300"
            onClick={() => {
              // scroll to waiting list section smoothly when button is clicked
              document.getElementById('waiting-list')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </div>
  );
}

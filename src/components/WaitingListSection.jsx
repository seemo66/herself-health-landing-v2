// waiting list section component
// displays launch info, hero image, and form for users to join the waitlist
import WaitingListForm from './WaitingListForm';

export default function WaitingListSection() {
  return (
    // main section container
    <section id="waiting-list" className="bg-white">
      {/* launch info banner */}
      <div className="mx-auto bg-pink py-[34px] px-[30px] md:text-center">
        <h2
          className="text-[40px] text-white font-reckless mb-[16px] leading-[45px] 
                       md:mb-[20px] md:text-[50px]"
        >
          Launching in late 2025
        </h2>
        <h3
          className="font-untitled font-medium text-[20px] text-white leading-6 mb-[16px] 
                       md:mb-[18px] md:text-[30px]"
        >
          Care you can count on—right in your neighborhood or from the comfort of home.
        </h3>
      </div>

      {/* hero image and form container */}
      <div className="relative">
        {/* hero image */}
        <div className="w-full">
          <picture>
            {/* desktop image source */}
            <source
              srcSet={`${process.env.PUBLIC_URL}/images/waitlist-desktop.webp`}
              media="(min-width: 768px)"
            />
            {/* mobile image source */}
            <img
              src={`${process.env.PUBLIC_URL}/images/waitlist-mobile.webp`}
              alt="A woman wearing glasses stands in front of a closed door, looking directly at the camera"
              className="block w-full md:min-h-[694px] object-cover"
            />
          </picture>
        </div>

        {/* form overlay box */}
        <div
          className="w-full bg-white py-[34px] px-[30px] 
                        md:absolute md:left-[0px] md:top-1/2 md:-translate-y-1/2 
                        md:px-[83px] md:py-[61px] md:border-[2px] border-pink 
                        rounded-[10px] md:max-w-[822px] lg:left-[146px]"
        >
          {/* section headline */}
          <h2
            className="font-reckless font-medium text-[40px] text-pink mb-[16px] 
                         md:mb-[18px] md:text-[50px]"
          >
            Join Our Waitlist
          </h2>

          {/* descriptive paragraph */}
          <p className="font-untitled font-normal text-[18px] text-black leading-6 mb-[16px] lg:text-[20px]">
            Add your information below and we’ll add you to the waitlist.
          </p>

          {/* form component */}
          <WaitingListForm />
        </div>
      </div>
    </section>
  );
}

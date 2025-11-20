// WaitingListSection component
// Displays a hero image, testimonial, and a form for users to join the waitlist
import FormGuideSection from './FormGuideSection';
import WaitingListForm from './WaitingListForm';

export default function WaitingListSection() {
  return (
    <section className="bg-white">
      {/* Hero wrapper with relative positioning for overlay form */}
      <div className="relative">
        {/* Hero image */}
        <div className="w-full">
          <picture>
            {/* Desktop image */}
            <source
              srcSet="/images/email/waitlist-desktop.webp"
              media="(min-width: 768px)"
            />
            {/* Mobile fallback */}
            <img
              src="/images/email/waitlist-mobile.webp"
              alt="A woman wearing glasses stands in front of a closed door, looking directly at the camera"
              className="block w-full md:min-h-[694px] object-cover md:h-[877px]"
            />
          </picture>
        </div>

        {/* Overlay container for testimonial + form */}
        <div
          id="waiting-list"
          className="w-full py-[34px] px-[30px] 
                     md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 
                     lg:px-0 md:px-[30px] md:py-0 md:max-w-[822px] lg:left-[146px]"
        >
          {/* Testimonial block */}
          <div className="mb-[35px] lg:mb-[40px] md:text-center md:hidden">
            <img
              src="/images/email/quotations-icon.png"
              alt="Quotation mark icon"
              className="block w-[50px] h-full mb-[15px] md:mx-auto"
            />
            <blockquote className="font-untitled font-bold italic text-[18px] md:text-[20px] text-pink leading-6 mb-[16px]">
              I felt very valued and well cared for. It was a very good first appointment with the
              very thoughtful doctor.
            </blockquote>
            <p className="font-untitled font-normal text-[18px] text-black leading-6 mb-[16px] md:text-[20px]">
              – Herself Health Patient.
            </p>
          </div>

          {/* Headline */}
          <h2
            className="font-reckless font-medium text-[40px] text-pink mb-[35px] 
                          md:text-[50px] leading-[45px]"
          >
            Call Today to Schedule Your Appointment
          </h2>
          {/* Description */}
          <p
            id="call-now"
            className="font-untitled font-normal text-[18px] text-black leading-6 mb-[25px] lg:text-[20px]"
          >
            Join Herself Health today and experience primary care designed for you, and coordinated
            with your specialists, so your whole health feels connected.
          </p>

          <a href="tel:+18882091209" className="block w-fit mb-[35px]">
            <button className="h-[67px] w-full rounded-lg bg-purple px-8 py-3 font-untitled text-[18px] md:text-[22px] text-white shadow-lg transition-colors duration-300 hover:bg-purple-dark lg:w-[410px] flex items-center justify-center gap-4">
              <img
                src="/images/email/telephone-white.svg"
                alt="telephone icon"
                aria-hidden="true"
                className="h-auto w-[30px]"
              />
              Call Now: (888) 209-1209
            </button>
          </a>

          <h3 className="font-untitled font-semibold text-[18px] text-black leading-6 mb-[30px] lg:text-[20px] ">
            Want to connect online instead? Fill out the form below and we’ll be in touch promptly
            to help you get started.
          </h3>

          <FormGuideSection className="block md:hidden" />

          {/* Form box */}
          <div className="md:border-[2px] bg-white border-pink rounded-[10px] md:px-[83px] md:py-[61px]">
            {/* Embedded form */}
            <WaitingListForm />
          </div>
        </div>
      </div>
    </section>
  );
}

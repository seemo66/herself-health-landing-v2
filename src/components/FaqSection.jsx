// faq section component
// displays faq heading, description, and accordion with questions and answers
import FaqAccordion from './FaqAccordion';

export default function FaqSection() {
  return (
    // main faq section container
    <section
      className="bg-white px-[30px] py-[57px] pt-[15px] mx-auto 
                        md:py-[72px] md:text-center md:max-w-[834px]"
    >
      <div className="mx-auto">
        {/* section headline */}
        <h2
          className="text-[40px] text-pink font-reckless mb-[16px] leading-[45px] 
                       md:mb-[20px] md:text-[60px] md:leading-[70px]"
        >
          You Might Be Wondering…
        </h2>

        {/* section description */}
        <p
          className="font-untitled font-bold text-[18px] text-black leading-6 mb-[16px] 
                      md:mb-[18px] md:text-[20px]"
        >
          Frequently Asked Questions
        </p>

        {/* faq accordion component */}
        <FaqAccordion />
      </div>
    </section>
  );
}

// membership section component
// highlights the membership plan, pricing, and benefits
export default function MembershipSection() {
  return (
    // main section container with background color and padding
    <section className="bg-tan px-[30px] py-[57px] md:py-[72px] md:text-center">
      <div className="max-w-[1000px] mx-auto">
        {/* section headline */}
        <h2
          className="text-[40px] text-pink font-reckless mb-[16px] leading-[45px] 
                       md:mb-[20px] md:text-[60px] md:leading-[70px]"
        >
          One Membership.
          <br /> No Surprise Bills.
        </h2>

        {/* pricing highlight */}
        <p
          className="font-untitled font-bold text-[18px] text-black leading-6 mb-[16px] 
                      md:mb-[18px] md:text-[20px]"
        >
          $65/month or $700/year. No copays. No surprise bills. Just care that works for your life.
        </p>

        {/* benefits paragraph 1 */}
        <p
          className="font-untitled font-regular text-[18px] text-black leading-6 mb-[16px] 
                      md:mb-[18px] md:text-[20px]"
        >
          Your membership gives you full access to Herself Health as your primary care provider—no
          add-ons, no hidden fees, and no insurance games. Just consistent, connected care that
          includes longer visits, fast access when you need it, and real support for everything from
          menopause to mental health.
        </p>

        {/* benefits paragraph 2 */}
        <p
          className="font-untitled font-regular text-[18px] text-black leading-6 mb-[16px] 
                      md:mb-[18px] md:text-[20px]"
        >
          We bill monthly, or we bill annually at a discount. That’s it. The way care should be:
          clear, dependable, and designed to support your whole life—not just one part of it.
        </p>

        {/* availability paragraph */}
        <p
          className="font-untitled font-regular text-[18px] mb-[38px] text-black leading-6 
                      md:text-[20px]"
        >
          We’ll let you know as soon as membership is available in your area.
        </p>

        {/* call-to-action button */}
        <button
          className="w-[285px] h-[67px] bg-purple text-white font-untitled text-[22px] 
                     py-3 px-8 rounded-lg shadow-lg hover:bg-purple-dark transition-colors duration-300"
          onClick={() => {
            // scroll smoothly to the waiting list section
            document.getElementById('waiting-list')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Join the Waitlist
        </button>
      </div>
    </section>
  );
}

// WaitingListSection Component
// Displays accepted insurance plans, fallback info, and contact details.

export default function WaitingListSection() {
  return (
    <section className="bg-lightPink">
      {/* Insurance Plans Banner */}
      {/* <div className="mx-auto max-w-[1270px] px-[30px] pb-[62px] pt-[34px] md:pt-[62px] md:text-center">
        <h2
          className="mb-[35px] font-reckless text-[40px] leading-[45px] text-black 
                     md:mb-[50px] md:text-[50px] md:leading-[55px]"
        >
          We Accept Medicare and Many Medicare Advantage Plans, Including:
        </h2>
        <div className="flex flex-wrap items-center justify-start gap-10 md:justify-center lg:gap-14 lg:gap-x-20">
          <img
            src="images/landingpage/blue-cross-blue-shield-logo-black.png"
            alt="Blue Cross Blue Shield insurance logo"
            className="h-[30px] w-auto"
          />
          <img
            src="images/landingpage/united-healthcare-logo-black.png"
            alt="United Healthcare insurance logo"
            className="h-auto w-[130px]"
          />
          <img
            src="images/landingpage/allina-aetna-logo-black.png"
            alt="Allina Aetna insurance logo"
            className="h-auto w-[324px]"
          />
          <img
            src="images/landingpage/ucare-logo-black.png"
            alt="UCare insurance logo"
            className="h-auto w-[140px]"
          />
          <img
            src="images/landingpage/health-partners-logo-black.png"
            alt="Health Partners insurance logo"
            className="h-auto w-[300px]"
          />
          <img
            src="images/landingpage/humana-logo-black.png"
            alt="Humana insurance logo"
            className="h-auto w-[135px]"
          />
        </div>
      </div> */}

      {/* Coverage Fallback / Contact Section */}
      <div className="mx-auto max-w-[1728px] bg-lightPink px-[30px] py-[60px] md:text-center">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-[16px] font-reckless text-[40px] leading-tight text-pink md:mb-[30px] md:text-[60px]">
            Questions about coverage?
          </h2>
          <p className="font-untitled text-[18px] font-normal leading-6 text-black mb-8 md:mb-[40px] md:text-[20px]">
            We accept Original Medicare (Parts A & B) and many Medicare Advantage plans.
          </p>

          <a href="tel:+18882901209" className="block ml-0 md:m-auto w-fit">
            <button className="h-[67px] w-full rounded-lg bg-purple px-8 py-3 font-untitled text-[18px] md:text-[22px] text-white shadow-lg transition-colors duration-300 hover:bg-purple-dark lg:w-[410px] flex items-center justify-center gap-4">
              <img
                src="images/landingpage/telephone-white.svg"
                alt="telephone icon"
                aria-hidden="true"
                className="h-auto w-[30px]"
              />
              Call To Confirm Coverage
            </button>
          </a>

          <p className="font-untitled text-[14px] font-normal leading-6 text-black mt-8 md:text-[16px]">
            Coverage varies by plan—call and we’ll confirm in minutes.
          </p>
        </div>
      </div>
    </section>
  );
}

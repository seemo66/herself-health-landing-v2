// WaitingListSection Component
// Displays accepted insurance plans, fallback info, and contact details.

export default function WaitingListSection() {
  return (
    <section className="bg-pink">
      {/* Insurance Plans Banner */}
      <div className="mx-auto max-w-[1270px] px-[30px] pb-[62px] pt-[34px] md:pt-[62px] md:text-center">
        <h2
          className="mb-[35px] font-reckless text-[40px] leading-[45px] text-white 
                     md:mb-[20px] md:text-[50px] md:leading-[55px]"
        >
          We Accept Medicare and Many Medicare Advantage Plans, Including:
        </h2>
        <div className="flex flex-wrap items-center justify-start gap-8 md:justify-center md:gap-10 lg:gap-14 lg:gap-x-20">
          <img
            src={`${process.env.PUBLIC_URL}/images/blue-cross-blue-shield-logo.svg`}
            alt="Blue Cross Blue Shield insurance logo"
            className="h-[42px] w-auto md:h-[41px]"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/united-healthcare-logo.svg`}
            alt="United Healthcare insurance logo"
            className="h-auto w-[192px] md:w-[160px]"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/allina-aetna-logo.svg`}
            alt="Allina Aetna insurance logo"
            className="h-auto w-[324px] md:w-[498px]"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/ucare-logo.svg`}
            alt="UCare insurance logo"
            className="h-auto w-[179px] md:w-[211px]"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/health-partners-logo.svg`}
            alt="Health Partners insurance logo"
            className="h-auto w-[250px] md:w-[269px]"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/humana-logo.svg`}
            alt="Humana insurance logo"
            className="h-auto w-[194px] md:w-[206px]"
          />
        </div>
      </div>

      {/* Coverage Fallback / Contact Section */}
      <div className="mx-auto max-w-[1728px] bg-darkPink px-[30px] pb-[60px] pt-[34px] md:text-center">
        <div className="mx-auto max-w-[1100px]">
          <h2 className="mb-[16px] font-reckless text-[40px] leading-tight text-white md:mb-[20px] md:text-[60px]">
            Don’t See Your Plan?
          </h2>
          <div className="flex flex-col md:flex-row md:items-center md:justify-center">
            <img
              src={`${process.env.PUBLIC_URL}/images/telephone-white.svg`}
              alt="telephone icon"
              aria-hidden="true"
              className="mb-[10px] h-auto w-[45px] md:mb-0 md:mr-[20px] md:w-[80px]"
            />
            <p className="font-untitled text-[26px] font-normal leading-tight text-white md:mb-[20px] md:text-[40px]">
              Call us at <span className="font-bold">888-290-1209</span> to confirm coverage —
              <br />
              we’ll walk you through your options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

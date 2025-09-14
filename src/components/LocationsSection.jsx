// LocationSection component
// Displays a list of clinic locations with addresses
export default function LocationSection() {
  return (
    <section className="max-w-[1728px] mx-auto bg-pink px-[30px] py-[35px]">
      {/* Section Heading */}
      <h2 className="font-reckless text-[40px] text-white lg:text-center lg:text-[60px]">
        Locations
      </h2>

      {/* Locations List */}
      <ul
        className="flex flex-col font-untitled text-[18px] text-white leading-7 mt-6
                   lg:text-center lg:flex-row lg:flex-wrap lg:gap-x-12 lg:justify-center 
                   lg:items-start lg:text-[20px] lg:leading-8"
      >
        {/* Highland Park */}
        <li className="mb-[25px]">
          <span className="font-medium text-[22px]">Highland Park:</span>
          <br />
          2004 Ford Pkwy,
          <br />
          St Paul, MN 55116
        </li>

        {/* Crystal */}
        <li className="mb-[25px]">
          <span className="font-medium text-[22px]">Crystal:</span>
          <br />
          5200 Douglas Dr N,
          <br />
          Minneapolis, MN 55429
        </li>

        {/* Eagan */}
        <li className="mb-[25px]">
          <span className="font-medium text-[22px]">Eagan:</span>
          <br />
          2000 Rahncliff Ct #400,
          <br />
          Eagan, MN 55122
        </li>

        {/* Lyndale */}
        <li className="mb-[25px]">
          <span className="font-medium text-[22px]">Lyndale (South Minneapolis):</span>
          <br />
          5452 Lyndale Avenue S,
          <br />
          Minneapolis, MN 55419
        </li>

        {/* Rosedale */}
        <li className="mb-[25px]">
          <span className="font-medium text-[22px]">Rosedale:</span>
          <br />
          2401 Fairview Ave N #145,
          <br />
          Roseville, MN 55113
        </li>
      </ul>
    </section>
  );
}

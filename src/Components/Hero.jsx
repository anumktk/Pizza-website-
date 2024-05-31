import React from "react";
import banner from "../Assets/banner.webp";

const Hero = () => {
  return (
    <div className="bg-gradient-to-t from-blue-900 via-blue-500 to-blue-900 md:bg-none lg:bg-none min-h-screen">
      {/* shows only on medium and large screens */}
      <div
        className="hidden md:block bg-cover bg-center h-screen"
        style={{
          backgroundImage: `url(${banner})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          maxwidth: "1440px",
          minheight: "75vh",
        }}
      >
        {/* <img src={banner} alt="banner" /> */}
        <div className=" ml-12 pt-16 sm:flex-row mt-20">
          <h1 className="uppercase text-white Hero-heading md:text-7xl  ">
            Feel The <br />
            Cravings
          </h1>
          <p className="mb-4 text-white font-Dela Gothic One font-semibold mt-4 text-xl">
            Freshness and flavor come together at Mr. Cod’s, <br /> where we’re
            dedicated to serving the best food in
            <br /> town. Join our family, and we’ll make sure every
            <br /> visit you’ll never forget.
          </p>
          <button
            type="button"
            className="bg-yellow-500 text-white p-3 rounded-lg px-6 font-bold"
            data-twe-ripple-init
          >
            Order Now
          </button>
        </div>
      </div>
      {/* shows only on small screens */}
      <div className="md:hidden">
        <div className="flex items-center justify-center h-screen">
          <div className="pt-16 sm:flex-row flex flex-col items-center justify-center">
            <h1 className="uppercase text-white Hero-heading-sm text-center">
              Feel The <br />
              Cravings
            </h1>
            <p className="mb-4 text-white font-Dela Gothic One font-semibold mt-4 text-xl text-center ml-2 mr-2">
              Freshness and flavor come together at Mr. Cod’s, where we’re
              dedicated to serving the best food in town. Join our family, and
              we’ll make sure every visit you’ll never forget.
            </p>
            <button
              type="button"
              className="bg-yellow-500 text-white p-3 rounded-lg px-6 font-bold"
              data-twe-ripple-init
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

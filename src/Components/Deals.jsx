import React from "react";
import Slider from "react-slick";
import cart5 from "../Assets/cart5.png";
import deal1 from "../Assets/deal1.webp";
import deal2 from "../Assets/deal2.webp";
import deal3 from "../Assets/deal3.webp";
import deal4 from "../Assets/deal4.webp";
import deal5 from "../Assets/deal5.webp";
import deal6 from "../Assets/deal6.webp";
import banner2 from "../Assets/banner2.webp";

function Responsive() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" mt-20 ">
      <h2 className=" text-5xl mb-10 text-blue-700 uppercase Hero-heading-sm text-center">
        featured deals
      </h2>
      <div className="slider-container p-4">
        <Slider {...settings}>
          {/* Slider 1 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border  overflow-hidden shadow-lg  p-6">
              <img src={deal1} alt="deal1" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  CODRA CRUNCH
                </h1>
                <p className="text-gray-700 text-base">Rs 1,199</p>
                <button className="relative bg-yellow-500 text-white py-2 px-4 rounded mt-2 overflow-hidden">
                  <span className="block">ADD TO CART</span>
                  <span className="absolute inset-0 flex justify-center items-center bg-blue-600 opacity-0 hover:opacity-100 transition duration-300">
                    <img
                      src={cart5}
                      alt="cart5"
                      className="w-6 h-6 object-cover "
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Slider 2 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg p-6">
              <img src={deal2} alt="deal2" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  duo delight
                </h1>
                <p className="text-gray-700 text-base">Rs 1,199</p>
                <button className="relative bg-yellow-500 text-white py-2 px-4 rounded mt-2 overflow-hidden">
                  <span className="block">ADD TO CART</span>
                  <span className="absolute inset-0 flex justify-center items-center bg-blue-600 opacity-0 hover:opacity-100 transition duration-300">
                    <img
                      src={cart5}
                      alt="cart5"
                      className="w-6 h-6 object-cover "
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Slider 3 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg p-6">
              <img src={deal3} alt="deal3" className="rounded-3xl " />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  slice roll & combo
                </h1>
                <p className="text-gray-700 text-base">Rs 1,199</p>
                <button className="relative bg-yellow-500 text-white py-2 px-4 rounded mt-2 overflow-hidden">
                  <span className="block">ADD TO CART</span>
                  <span className="absolute inset-0 flex justify-center items-center bg-blue-600 opacity-0 hover:opacity-100 transition duration-300">
                    <img
                      src={cart5}
                      alt="cart5"
                      className="w-6 h-6 object-cover "
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Slider 4 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg p-6">
              <img src={deal4} alt="deal4" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  bouncer deal
                </h1>
                <p className="text-gray-700 text-base">Rs 1,199</p>
                <button className="relative bg-yellow-500 text-white py-2 px-4 rounded mt-2 overflow-hidden">
                  <span className="block">ADD TO CART</span>
                  <span className="absolute inset-0 flex justify-center items-center bg-blue-600 opacity-0 hover:opacity-100 transition duration-300">
                    <img
                      src={cart5}
                      alt="cart5"
                      className="w-6 h-6 object-cover "
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Slider 5 */}
          <div className="p-2 ">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg p-6">
              <img src={deal5} alt="deal5" className="rounded-3xl " />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  any 2 meals
                </h1>
                <p className="text-gray-700 text-base">Rs 1,199</p>
                <button className="relative bg-yellow-500 text-white py-2 px-4 rounded mt-2 overflow-hidden">
                  <span className="block">ADD TO CART</span>
                  <span className="absolute inset-0 flex justify-center items-center bg-blue-900 opacity-0 hover:opacity-100 transition duration-300">
                    <img
                      src={cart5}
                      alt="cart5"
                      className="w-6 h-6 object-cover "
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
          {/* Slider 6 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg p-6">
              <img src={deal6} alt="deal6" className="rounded-3xl " />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  bihari roll platter
                </h1>
                <p className="text-gray-700 text-base">Rs 1,199</p>
                <button className="relative bg-yellow-500 text-white py-2 px-4 rounded mt-2 overflow-hidden">
                  <span className="block">ADD TO CART</span>
                  <span className="absolute inset-0 flex justify-center items-center bg-blue-600 opacity-0 hover:opacity-100 transition duration-300">
                    <img
                      src={cart5}
                      alt="cart5"
                      className="w-6 h-6 object-cover "
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <div style={{ maxWidth: "100%", overflow: "hidden" }}>
        <img
          src={banner2}
          alt="banner2"
          className="mt-20 w-full"
          style={{ width: "100%", height: "auto", maxHeight: "500px" }}
        />
      </div>

      {/* <div>
        <img
          src={banner2}
          alt="banner2"
          className="mt-20 w-full"
          style={{ height: "500px" }}
        />
      </div> */}
    </div>
  );
}

export default Responsive;

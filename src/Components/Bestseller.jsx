import React from "react";
import Slider from "react-slick";
import cart5 from "../Assets/cart5.png";
import best1 from "../Assets/best1.png";
import best2 from "../Assets/best2.webp";
import best3 from "../Assets/best3.webp";
import best4 from "../Assets/best4.webp";
import best5 from "../Assets/best5.webp";
import best6 from "../Assets/best6.webp";
import best7 from "../Assets/best7.webp";
import best8 from "../Assets/bset8.png";
import best9 from "../Assets/best9.png";
import best10 from "../Assets/best10.webp";
import best11 from "../Assets/best11.webp";
import best12 from "../Assets/best12.webp";

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
    <div className=" mt-20">
      <h2 className=" text-5xl mb-10 text-blue-700 uppercase Hero-heading-sm text-center">
        best sellers
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {/* slider 1 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg  p-6">
              <img src={best1} alt="best1" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  finger fish
                </h1>
                <p className="text-gray-700 text-base">Rs 499 - Rs 599 </p>
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
          {/* slider 2 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg  p-6">
              <img src={best2} alt="best2" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  finger pieces
                </h1>
                <p className="text-gray-700 text-base">Rs 499 - Rs 2,249</p>
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
          {/* slider 3 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg  p-6">
              <img src={best3} alt="best3" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  tikka pizza
                </h1>
                <p className="text-gray-700 text-base">Rs 499 - Rs 1,699</p>
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
          {/* slider 4 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg  p-6">
              <img src={best4} alt="best4" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  chicken tower burger
                </h1>
                <p className="text-gray-700 text-base">Rs 649 - Rs 799</p>
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
          {/* slider 5 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg  p-6">
              <img src={best5} alt="best5" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  the kraken
                </h1>
                <p className="text-gray-700 text-base">Rs 749 - Rs 825</p>
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
          {/* slider 6 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg  p-6">
              <img src={best6} alt="best6" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  Crown special pizza
                </h1>
                <p className="text-gray-700 text-base">Rs 1,199 - Rs 1,899</p>
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
          {/* slider 7 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg  p-6">
              <img src={best7} alt="best7" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  supremo
                </h1>
                <p className="text-gray-700 text-base">Rs 499 - Rs 1,699</p>
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
          {/* slider 8 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg  p-6">
              <img src={best8} alt="best8" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  nuggets
                </h1>
                <p className="text-gray-700 text-base">Rs 399 - Rs 499</p>
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
          {/* slider 9 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg  p-6">
              <img src={best9} alt="best9" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  chicken strip
                </h1>
                <p className="text-gray-700 text-base">Rs 499</p>
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
          {/* slider 10 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg  p-6">
              <img src={best10} alt="best10" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  jawbraker burger
                </h1>
                <p className="text-gray-700 text-base">Rs 699 - Rs 799</p>
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
          {/* slider 11 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg  p-6">
              <img src={best11} alt="best11" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  fajita pizza
                </h1>
                <p className="text-gray-700 text-base">Rs 499 - Rs 1,699</p>
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
          {/* slider 12 */}
          <div className="p-2">
            <div className="max-w-md mx-auto bg-white rounded-3xl border overflow-hidden shadow-lg  p-6">
              <img src={best12} alt="best12" className="rounded-3xl" />
              <div className="flex flex-col px-6 py-4 items-center justify-center">
                <h1 className="text-blue-700 font-bold text-xl mb-2 Hero-heading-sm uppercase text-center">
                  COdzilla burger
                </h1>
                <p className="text-gray-700 text-base">Rs 699 - Rs 799</p>
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
      <div className="flex items-center justify-center mt-16 mb-20">
        <button className="relative bg-yellow-500 text-white py-2 px-4 rounded ">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default Responsive;

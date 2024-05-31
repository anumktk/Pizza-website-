import React from "react";
import Slider from "react-slick";
import googlelogo from "../Assets/googlelogo.png";
import feed1 from "../Assets/feed1.png";
import feed2 from "../Assets/feed2.png";
import feed3 from "../Assets/feed3.png";
import feed4 from "../Assets/feed4.png";
import feed5 from "../Assets/feed5.png";
import feed6 from "../Assets/feed6.png";
import feed7 from "../Assets/feed7.png";
import feed8 from "../Assets/feed8.png";

function Responsive() {
  var settings = {
    dots: false,
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
      <h2 className=" text-5xl mb-12 text-blue-700 uppercase Hero-heading-sm text-center">
        CUSTOMER FEEDBACK
      </h2>
      <div className="slider-container p-4">
        <Slider {...settings}>
          {/* slider 1 */}
          <div className="p-2">
            <div className="relative border shadow-lg rounded  max-w-md mx-auto mt-24">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-10 w-full flex justify-center">
                  <div className="h-20 w-20 relative">
                    <img
                      src={feed1}
                      alt="feed1"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />

                    <div className=" absolute -mt-20 bottom-0 right-0 ">
                      <img
                        src={googlelogo}
                        alt="Google Logo"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="text-black text-center font-Poppins font-bold">
                    Tips & Trips
                  </h1>
                  <h6 className="text-gray-700 text-base text-center">
                    February 6, 2024
                  </h6>
                  <div className="flex justify-center mb-16 mt-2">
                    {[...Array(5)].map((star, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 ms-1 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider 2 */}
          <div className="p-2">
            <div className="relative border shadow-lg rounded  max-w-md mx-auto mt-24">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-10 w-full flex justify-center">
                  <div className="h-20 w-20 relative">
                    <img
                      src={feed2}
                      alt="feed2"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />

                    <div className=" absolute -mt-20 bottom-0 right-0 ">
                      <img
                        src={googlelogo}
                        alt="Google Logo"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="text-black text-center font-Poppins font-bold">
                    Dr Saba
                  </h1>
                  <h6 className="text-gray-700 text-base text-center">
                    February 17, 2024
                  </h6>
                  <div className="flex justify-center mb-16 mt-2">
                    {[...Array(5)].map((star, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 ms-1 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider 3 */}
          <div className="p-2">
            <div className="relative border shadow-lg rounded  max-w-md mx-auto mt-24">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-10 w-full flex justify-center">
                  <div className="h-20 w-20 relative">
                    <img
                      src={feed3}
                      alt="feed3"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />

                    <div className=" absolute -mt-20 bottom-0 right-0 ">
                      <img
                        src={googlelogo}
                        alt="Google Logo"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="text-black text-center font-Poppins font-bold">
                    Zakir Khan
                  </h1>
                  <h6 className="text-gray-700 text-base text-center">
                    January 7, 2024
                  </h6>
                  <div className="flex justify-center mb-16 mt-2">
                    {[...Array(5)].map((star, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 ms-1 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider 4 */}
          <div className="p-2">
            <div className="relative border shadow-lg rounded  max-w-md mx-auto mt-24">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-10 w-full flex justify-center">
                  <div className="h-20 w-20 relative">
                    <img
                      src={feed4}
                      alt="feed4"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />

                    <div className=" absolute -mt-20 bottom-0 right-0 ">
                      <img
                        src={googlelogo}
                        alt="Google Logo"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="text-black text-center font-Poppins font-bold">
                    Jawad Khalil
                  </h1>
                  <h6 className="text-gray-700 text-base text-center">
                    March 5, 2024
                  </h6>
                  <div className="flex justify-center mb-16 mt-2">
                    {[...Array(5)].map((star, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 ms-1 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider 5 */}
          <div className="p-2">
            <div className="relative border shadow-lg rounded  max-w-md mx-auto mt-24">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-10 w-full flex justify-center">
                  <div className="h-20 w-20 relative">
                    <img
                      src={feed5}
                      alt="feed5"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />

                    <div className=" absolute -mt-20 bottom-0 right-0 ">
                      <img
                        src={googlelogo}
                        alt="Google Logo"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="text-black text-center font-Poppins font-bold">
                    Hammad Amanullah
                  </h1>
                  <h6 className="text-gray-700 text-base text-center">
                    January 7, 2024
                  </h6>
                  <div className="flex justify-center mb-16 mt-2">
                    {[...Array(5)].map((star, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 ms-1 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider 6 */}
          <div className="p-2">
            <div className="relative border shadow-lg rounded  max-w-md mx-auto mt-24">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-10 w-full flex justify-center">
                  <div className="h-20 w-20 relative">
                    <img
                      src={feed6}
                      alt="feed6"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />

                    <div className=" absolute -mt-20 bottom-0 right-0 ">
                      <img
                        src={googlelogo}
                        alt="Google Logo"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="text-black text-center font-Poppins font-bold">
                    Kamran Kakakhel
                  </h1>
                  <h6 className="text-gray-700 text-base text-center">
                    January 2, 2024
                  </h6>
                  <div className="flex justify-center mb-16 mt-2">
                    {[...Array(5)].map((star, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 ms-1 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider 7 */}
          <div className="p-2">
            <div className="relative border shadow-lg rounded  max-w-md mx-auto mt-24">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-10 w-full flex justify-center">
                  <div className="h-20 w-20 relative">
                    <img
                      src={feed7}
                      alt="feed7"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />

                    <div className=" absolute -mt-20 bottom-0 right-0 ">
                      <img
                        src={googlelogo}
                        alt="Google Logo"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="text-black text-center font-Poppins font-bold">
                    Muhammad Tayyeb Nauman
                  </h1>
                  <h6 className="text-gray-700 text-base text-center">
                    March 20, 2024
                  </h6>
                  <div className="flex justify-center mb-16 mt-2">
                    {[...Array(5)].map((star, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 ms-1 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* slider 8 */}
          <div className="p-2">
            <div className="relative border shadow-lg rounded  max-w-md mx-auto mt-24">
              <div className="rounded overflow-hidden shadow-md bg-white">
                <div className="absolute -mt-10 w-full flex justify-center">
                  <div className="h-20 w-20 relative">
                    <img
                      src={feed8}
                      alt="feed8"
                      className="rounded-full object-cover h-full w-full shadow-md"
                    />

                    <div className=" absolute -mt-20 bottom-0 right-0 ">
                      <img
                        src={googlelogo}
                        alt="Google Logo"
                        className="w-8 h-8 rounded-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="px-6 mt-16">
                  <h1 className="text-black text-center font-Poppins font-bold">
                    Shash Begum
                  </h1>
                  <h6 className="text-gray-700 text-base text-center">
                    March 27, 2024
                  </h6>
                  <div className="flex justify-center mb-16 mt-2">
                    {[...Array(5)].map((star, index) => (
                      <svg
                        key={index}
                        className="w-4 h-4 ms-1 text-yellow-300"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                      >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      <h1 className="text-black text-center font-Poppins">
        <span className="font-bold"> Google</span> rating score:{" "}
        <span className="font-bold">4.0</span> of 5,based on{" "}
        <span className="font-bold">705 reviews</span>
      </h1>
    </div>
  );
}

export default Responsive;

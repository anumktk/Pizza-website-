import React from "react";
import follow1 from "../Assets/follow1.jpg";
import follow2 from "../Assets/follow2.jpg";
import follow3 from "../Assets/follow3.jpg";
import follow4 from "../Assets/follow4.jpg";
import follow5 from "../Assets/follow5.jpg";
import follow6 from "../Assets/follow6.jpg";
import follow7 from "../Assets/follow7.jpg";
import follow8 from "../Assets/follow8.jpg";

const Followus = () => {
  return (
    <div className="mt-20 p-8">
      <h2 className="text-5xl mb-6 text-blue-700 uppercase Hero-heading-sm text-center">
        Follow Us on
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 ">
        {/* First Row */}
        {/* col 1 */}
        <div className="">
          <img src={follow1} alt="follow1" className="w-full" />
        </div>
        {/* col 2 */}
        <div className="">
          <img src={follow2} alt="follow2" className="w-full" />
        </div>
        {/* col 3 */}
        <div className="">
          <img src={follow3} alt="follow3" className="w-full" />
        </div>
        {/* col 4 */}
        <div className="">
          <img src={follow4} alt="follow4" className="w-full " />
        </div>

        {/* Second Row */}
        {/* col 5 */}
        <div className="">
          <img src={follow5} alt="follow5" className="w-full" />
        </div>
        {/* col 6 */}
        <div className="">
          <img src={follow6} alt="follow6" className="w-full" />
        </div>
        {/* col 7 */}
        <div className="">
          <img src={follow7} alt="follow7" className="w-full" />
        </div>
        {/* col 8 */}
        <div className="">
          <img src={follow8} alt="follow8" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Followus;

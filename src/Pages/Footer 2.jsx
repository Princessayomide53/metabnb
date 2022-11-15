import React from "react";
import Vector from "../Img/Vector 2.png";
import facebook from "../Img/facebook 2.png";
import instagram from "../Img/instagram 2.png";
import twitter from "../Img/twitter 2.png";

function Footer2() {
  return (
    <div className="overflow-hidden">
      <div className=" grid-cols-1">
        <div className=" bg-black grid lg:grid-cols-4 gap-8 lg:space-x-28 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4 xl:space-x-28 2xl:space-x-28">
          <div className="w-56 lg:h-72 h-48 pl-5 xl:pl-5 2xl:pl-5 md:pl-10">
            <div className="flex lg:p-5 lg:pl-12 lg:pt-14 pt-5">
              <img src={Vector} alt="" />
              <p className="text-white font-bold text-4xl">Metabnb</p>
            </div>

            <div className="flex gap-5 lg:p-5 lg:pl-12 lg:pt-14 pt-14 md:pt-14">
              <img src={facebook} alt="" />
              <img src={instagram} alt="" />
              <img src={twitter} alt="" />
            </div>

            <div className="text-white lg:pl-10 lg:pt-10 text-xs pt-10 md:pt-10">
              <p>&copy; 2022 metabnb</p>
            </div>
          </div>

          <div className="w-32 lg:h-72 h-44 text-white lg:pt-16 pl-5 lg:pl-0 xl:pl-0 2xl:pl-0 pt-5 md:pt-5">
            <p className="text-lg leading-5 font-bold pb-5">Community</p>
            <p className="text-sm leading-7 font-normal pb-2">Nfts</p>
            <p className="text-sm leading-7 font-normal pb-2">Tokens</p>
            <p className="text-sm leading-7 font-normal pb-2">Landlords</p>
            <p className="text-sm leading-7 font-normal pb-2">Discord</p>
          </div>

          <div className="w-32 lg:h-72 h-44 text-white lg:pt-16 pl-5 lg:pl-0 xl:pl-0 2xl:pl-0 md:pt-0 pt-0">
            <p className="text-lg leading-5 font-bold pb-5">Places</p>
            <p className="text-sm leading-7 font-normal pb-2">Castle</p>
            <p className="text-sm leading-7 font-normal pb-2">Farms</p>
            <p className="text-sm leading-7 font-normal pb-2">Beach</p>
            <p className="text-sm leading-7 font-normal pb-5">Learn more</p>
          </div>

          <div className="w-32 lg:h-72 h-44 text-white pl-5 lg:pl-0 xl:pl-0 2xl:pl-0 lg:pt-16 md:pt-0 pt-0">
            <p className="text-lg leading-5 font-bold pb-5">About us</p>
            <p className="text-sm leading-7 font-normal pb-2">Road map</p>
            <p className="text-sm leading-7 font-normal pb-2">Creators</p>
            <p className="text-sm leading-7 font-normal pb-2">Career</p>
            <p className="text-sm leading-7 font-normal pb-5">Contact us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer2;

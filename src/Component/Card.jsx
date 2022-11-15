import React from "react";
import Group from "../Img/Group 5.png";
import Icon from "../Img/Icon 8.png";
import Logo from "../Img/Logo 1.png";
import Nft from "../Img/Nft 1.png";
import Nft2 from "../Img/Nft2 2.png";
import Nft3 from "../Img/Nft3 3.png";
import Nft4 from "../Img/Nft4 4.png";
import Nft5 from "../Img/Nft5 5.png";
import Nft6 from "../Img/Nft6 6.png";
import Nft7 from "../Img/Nft7 7.png";
import Nft8 from "../Img/Nft8 8.png";
import star from "../Img/star 1.png";

function Card() {
  return (
    <div className="overflow-hidden">
      <div className=" mt-16 w-full h-14 bg-[#A02279]">
        <div className="flex justify-around text-white pt-4 md:pt-3 lg:pt-2 xl:pt-2 2xl:pt-2">
          <div className="flex">
            <img src={Group} alt="" className="lg:w-10 md:w-5 w-6 lg:-mt-2" />
            <h1 className="font-mono lg:text-2xl md:text-lg text-base font-bold">
              MBTOKEN
            </h1>
          </div>

          <div className="flex gap-1">
            <img src={Icon} alt="" className="lg:w-10 md:w-5 w-5" />
            <h1 className="lg:text-2xl md:text-lg text-base font-sans tracking-widest lg:mt-1 xl:mt-1 2xl:mt-">
              METAMASK
            </h1>
          </div>

          <div className="flex gap-1">
            <img src={Logo} alt="" className="lg:w-10 md:w-5 w-5" />
            <h1 className="lg:text-2xl md:text-lg text-base font-bold lg:mt-1 xl:mt-1 2xl:mt-1">
              OpenSea
            </h1>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center">
        <p className="text-[#000000] font-bold lg:text-3xl md:text-3xl text-2xl">
          Inspiration for your next adventure
        </p>
      </div>

      <div className="grid lg:grid-cols-4 xl:grid-cols-4 xl:gap-10 md:grid-cols-2 grid-cols-1 place-items-center md:gap-10 gap-14 p-5 lg:gap-10 lg:place-content-around mt-10">
        <div className="w-72 md:w-72 h-96 lg:h-80 lg:w-56 xl:w-72 2xl:w-72  bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={Nft}
              alt=""
              className="w-64 xl:w-60 xl:h-52 2xl:w-60 2xl:h-52 lg:w-48 lg:h-52 h-64 mt-5"
            />
          </center>
          <div className="flex justify-between p-3">
            <p className="text-[#434343] text-xs leading-3">Desert King</p>
            <p className="font-bold text-[#434343] text-xs leading-3">
              1MBT per night
            </p>
          </div>
          <div className="flex justify-between p-3 lg:-mt-2">
            <p className="text-[#434343] text-xs leading-3">2345km away</p>
            <p className="text-[#434343] text-xs text-right leading-3">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-2 2xl:-mt-2">
            <img src={star} alt="" />
          </div>
        </div>

        <div className="w-72 md:w-72 h-96 lg:h-80 lg:w-56 xl:w-72 2xl:w-72 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          <center>
            <img
              src={Nft2}
              alt=""
              className="w-64 lg:w-48 lg:h-52 xl:h-52 xl:w-60 2xl:h-52 2xl:w-60  h-64 mt-5"
            />
          </center>
          <div className="flex justify-between p-3">
            <p className="text-[#434343] text-xs leading-3">Desert King</p>
            <p className="font-bold text-[#434343] text-right text-xs leading-3">
              1MBT per night
            </p>
          </div>
          <div className="flex justify-between p-3 lg:-mt-2">
            <p className="text-[#434343] text-xs leading-3">2345km away</p>
            <p className="text-[#434343] text-xs text-right leading-3">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-2 2xl:-mt-2">
            <img src={star} alt="" />
          </div>
        </div>

        <div className="w-72 md:w-72 h-96 lg:w-56 lg:h-80 xl:w-72 2xl:w-72 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={Nft3}
              alt=""
              className="w-64 lg:w-48 lg:h-52 xl:h-52 xl:w-60 2xl:h-52 2xl:w-60 h-64 mt-5"
            />
          </center>
          <div className="flex justify-between p-3">
            <p className="text-[#434343] text-xs leading-3">Desert King</p>
            <p className="font-bold text-[#434343] text-xs leading-3">
              1MBT per night
            </p>
          </div>
          <div className="flex justify-between p-3 lg:-mt-2">
            <p className="text-[#434343] text-xs leading-3">2345km away</p>
            <p className="text-[#434343] text-xs text-right leading-3">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-2 2xl:-mt-2">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 md:w-72 h-96 lg:w-56 lg:h-80 xl:w-72 2xl:w-72 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={Nft4}
              alt=""
              className="w-64 lg:w-48 lg:h-52 xl:h-52 xl:w-60 2xl:h-52 2xl:w-60 h-64 mt-5"
            />
          </center>
          <div className="flex justify-between p-3">
            <p className="text-[#434343] text-xs leading-3">Desert King</p>
            <p className="font-bold text-[#434343] text-xs leading-3">
              1MBT per night
            </p>
          </div>
          <div className="flex justify-between p-3 lg:-mt-2 xl:-mt-2 2xl:-mt-2">
            <p className="text-[#434343] text-xs leading-3">2345km away</p>
            <p className="text-[#434343] text-xs text-right leading-3">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-2 2xl:-mt-2">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 md:w-72 lg:w-56 lg:h-80 h-96 xl:w-72 2xl:w-72 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={Nft5}
              alt=""
              className="w-64 h-64 lg:w-48 lg:h-52 xl:h-52 xl:w-60 2xl:h-52 2xl:w-60 mt-5"
            />
          </center>
          <div className="flex justify-between p-3">
            <p className="text-[#434343] text-xs leading-3">Desert King</p>
            <p className="font-bold text-[#434343] text-xs leading-3">
              1MBT per night
            </p>
          </div>
          <div className="flex justify-between p-3 lg:-mt-2">
            <p className="text-[#434343] text-xs leading-3">2345km away</p>
            <p className="text-[#434343] text-xs text-right leading-3">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-2 2xl:-mt-2">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 md:w-72 h-96 lg:w-56 lg:h-80 xl:w-72 2xl:w-72 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={Nft6}
              alt=""
              className="w-64 lg:w-48 lg:h-52 xl:h-52 xl:w-60 2xl:h-52 2xl:w-60 h-64 mt-5"
            />
          </center>
          <div className="flex justify-between p-3 font-Red Rose">
            <p className="text-[#434343] text-xs leading-3">Desert King</p>
            <p className="font-bold text-[#434343] text-xs leading-3">
              1MBT per night
            </p>
          </div>
          <div className="flex justify-between p-3 font-Red Rose lg:-mt-2">
            <p className="text-[#434343] text-xs leading-3">2345km away</p>
            <p className="text-[#434343] text-xs text-right leading-3">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-2 2xl:-mt-2">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 md:w-72 h-96 lg:w-56 lg:h-80 xl:w-72 2xl:w-72 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={Nft7}
              alt=""
              className="w-64 lg:w-48 lg:h-52 xl:h-52 xl:w-60 2xl:h-52 2xl:w-60 h-64 mt-5"
            />
          </center>
          <div className="flex justify-between p-3">
            <p className="text-[#434343] text-xs leading-3">Desert King</p>
            <p className="font-bold text-[#434343] text-xs leading-3">
              1MBT per night
            </p>
          </div>
          <div className="flex justify-between p-3 lg:-mt-2">
            <p className="text-[#434343] text-xs leading-3">2345km away</p>
            <p className="text-[#434343] text-xs text-right leading-3">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-2 2xl:-mt-2">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 md:w-72 h-96 lg:w-56 lg:h-80 xl:w-72 2xl:w-72 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={Nft8}
              alt=""
              className="w-64 lg:w-48 lg:h-52 xl:h-52 xl:w-60 2xl:h-52 2xl:w-60 h-64 mt-5"
            />
          </center>
          <div className="flex justify-between p-3">
            <p className="text-[#434343] text-xs leading-3">Desert King</p>
            <p className="font-bold text-[#434343] text-xs leading-3">
              1MBT per night
            </p>
          </div>
          <div className="flex justify-between p-3 -mt-2">
            <p className="text-[#434343] text-xs leading-3">2345km away</p>
            <p className="text-[#434343] text-xs text-right leading-3">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-2 2xl:-mt-2">
            <img src={star} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;

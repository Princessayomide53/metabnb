import React from "react";
import { GoSettings } from "react-icons/go";
import Nft5 from "../Img/Nft5 5.png";
import Nft6 from "../Img/Nft6 6.png";
import Nft7 from "../Img/Nft7 7.png";
import Nft8 from "../Img/Nft8 8.png";
import star from "../Img/star 1.png";
import Nft from "../Img/Nft 1.png";
import Nft2 from "../Img/Nft2 2.png";
import Nft3 from "../Img/Nft3 3.png";
import Nft4 from "../Img/Nft4 4.png";
import New1 from "../Img/New1 1.png";
import New2 from "../Img/New2 2.png";
import New3 from "../Img/New3 3.png";
import New4 from "../Img/New4 4.png";
import New5 from "../Img/New5 5.png";
import New6 from "../Img/New6 6.png";
import New7 from "../Img/New7 7.png";
import New8 from "../Img/New8 8.png";

function Card2() {
  return (
    <div className="overflow-hidden">

     <div className="lg:pt-32 xl:pt-32 2xl:pt-32 pt-20 gap-5 flex justify-center flex-wrap font-bold lg:justify-evenly text-[#434343] lg:text-base md:text-sm text-sm leading-5 lg:font-normal">
        <p>Restuarant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>fantast city</p>
        <p>beach</p>
        <p>Carbins</p>
        <p>Off-grid</p>
        <p>Farm</p>

        <div className="mt-1 lg:mt-0 md:-mt-2">
          <button className="lg:px-5 flex lg:gap-2 gap-1 font-bold lg:py-1 -mt-1 md:px-5 md:py-2 hover:underline decoration-white text-[#434343] lg:text-base  md:text-sm text-xs leading-4 lg:font-normal border-2 px-3 py-1 border-inherit">
            Location <GoSettings size={18} className="lg:mt-1" />
          </button>
        </div>
  

      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center md:gap-10 gap-14 p-5 lg:gap-12 lg:place-content-around mt-5 mb-20">
        <div className="w-72 h-96 xl:w-72 2xl:w-72 xl:h-96 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          <center>
            <img
              src={Nft5}
              alt=""
              className="w-64 h-64 xl:w-64 xl:h-64 2xl:w-64 2xl:h-64 lg:w-48 lg:h-52 mt-5"
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
            <p className="text-[#434343] text-right text-xs leading-3">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 h-96 xl:w-72 xl:h-96 2xl:h-96 2xl:w-72 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={Nft6}
              alt=""
              className="w-64 h-64 xl:w-64 xl:h-64 2xl:w-64 2xl:h-64 lg:w-48 lg:h-52 mt-5"
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
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 h-96 xl:h-96 2xl:h-96 lg:w-56 lg:h-80 xl:w-72 2xl:w-72 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={Nft7}
              alt=""
              className="w-64 h-64 xl:w-64 xl:h-64 2xl:w-64 2xl:h-64 lg:h-52 lg:w-48 mt-5"
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
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>

        <div className="w-72 h-96 xl:h-96 xl:w-72 2xl:h-96 2xl:w-72 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={Nft8}
              alt=""
              className="w-64 h-64 lg:h-52 lg:w-48 xl:w-64 xl:h-64 2xl:w-64  mt-5"
            />
          </center>
          <div className="flex justify-between p-3">
            <p className="text-[#434343] text-xs leading-3">Desert King</p>
            <p className="font-bold text-[#434343] text-xs leading-3">
              1MBT per night
            </p>
          </div>
          <div className="flex justify-between p-3 lg:-mt-2 ">
            <p className="text-[#434343] text-xs leading-3">2345km away</p>
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>

        <div className="w-72 h-96 xl:h-96 xl:w-72 2xl:h-96 2xl:w-72 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          <center>
            <img
              src={Nft}
              alt=""
              className="w-64 h-64 lg:h-52 lg:w-48 xl:w-64 xl:h-64 2xl:w-64 2xl:h-64 mt-5"
            />
          </center>
          <div className="flex justify-between p-3">
            <p className="text-[#434343] text-xs leading-3">Desert King</p>
            <p className="font-bold text-[#434343] text-xs leading-3">
              1MBT per night
            </p>
          </div>
          <div className="flex justify-between p-3 -mt-2 lg:-mt-2">
            <p className="text-[#434343] text-xs leading-3">2345km away</p>
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>

          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 h-96 xl:w-72 xl:h-96 2xl:w-72 2xl:h-96 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={Nft2}
              alt=""
              className="w-64 h-64 lg:h-52 lg:w-48 xl:w-64 xl:h-64 2xl:w-64 2xl:h-64 mt-5"
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
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 h-96 xl:w-72 xl:h-96 2xl:w-72 2xl:h-96 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={Nft3}
              alt=""
              className="w-64 lg:w-48 lg:h-52 xl:w-64 xl:h-64 2xl:w-64 2xl:h-64 h-64 mt-5"
            />
          </center>
          <div className="flex justify-between p-3">
            <p className="text-[#434343] text-xs leading-3">Desert King</p>
            <p className="font-bold text-[#434343] text-xs leading-3">
              1MBT per night
            </p>
          </div>
          <div className="flex justify-between p-3 lg:-mt-2 ">
            <p className="text-[#434343] text-xs leading-3">2345km away</p>
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 h-96 xl:w-72 xl:h-96 2xl:w-72 2xl:h-96 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={Nft4}
              alt=""
              className="w-64 h-64 lg:h-52 lg:w-48 2xl:w-64 2xl:h-64 xl:w-64 xl:h-64 mt-5"
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
            <p className="text-[#434343] text-xs leading-3">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>

        {/* section 2 */}

        <div className="w-72 h-96 xl:w-72 xl:h-96 2xl:w-72 2xl:h-96 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={New1}
              alt=""
              className="w-64 h-64 lg:h-52 lg:w-48 2xl:w-64 2xl:h-64 xl:w-64 xl:h-64 mt-5"
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
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 xl:w-72 xl:h-96 2xl:w-72 2xl:h-96 lg:w-56 lg:h-80 h-96 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={New2}
              alt=""
              className="w-64 h-64 lg:h-52 lg:w-48 2xl:w-64 2xl:h-64 xl:w-64 xl:h-64 mt-5"
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
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 h-96 xl:w-72 xl:h-96 2xl:w-72 2xl:h-96 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={New3}
              alt=""
              className="w-64 h-64 lg:h-52 lg:w-48 2xl:w-64 2xl:h-64 xl:w-64 xl:h-64 mt-5"
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
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>

        <div className="w-72 h-96 xl:w-72 xl:h-96 2xl:w-72 2xl:h-96 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={New4}
              alt=""
              className="w-64 h-64 lg:h-52 lg:w-48 2xl:w-64 2xl:h-64 xl:w-64 xl:h-64 mt-5"
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
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>

        <div className="w-72 h-96 xl:w-72 xl:h-96 2xl:w-72 2xl:h-96 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          <center>
            <img
              src={New5}
              alt=""
              className="w-64 h-64 lg:h-52 lg:w-48 2xl:w-64 2xl:h-64 xl:w-64 xl:h-64 mt-5"
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
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>

          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 h-96 xl:w-72 xl:h-96 2xl:w-72 2xl:h-96 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={New6}
              alt=""
              className="w-64 h-64 lg:h-52 lg:w-48 2xl:w-64 2xl:h-64 xl:w-64 xl:h-64 mt-5"
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
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 h-96 xl:w-72 xl:h-96 2xl:w-72 2xl:h-96 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={New7}
              alt=""
              className="w-64 h-64 lg:h-52 lg:w-48 2xl:w-64 2xl:h-64 xl:w-64 xl:h-64 mt-5"
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
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>
        <div className="w-72 h-96 xl:w-72 xl:h-96 2xl:w-72 2xl:h-96 lg:w-56 lg:h-80 bg-white border-2 border-[#D7D7D7] rounded-2xl">
          {" "}
          <center>
            <img
              src={New8}
              alt=""
              className="w-64 h-64 lg:h-52 lg:w-48 2xl:w-64 2xl:h-64 xl:w-64 xl:h-64 mt-5"
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
            <p className="text-[#434343] text-xs leading-3 text-right">
              available for 2weeks stay
            </p>
          </div>
          <div className="p-3 -mt-2 lg:-mt-3 xl:-mt-1 2xl:-mt-1">
            <img src={star} alt="" />
          </div>
        </div>
      </div>
      </div>
      </div>
  );
}
export default Card2;

import React from "react";
import Image1 from "../Img/Image1 66.png";
import Image from "../Img/Image 69.png";
import { BiChevronRight } from "react-icons/bi";
import "../App.css";

const Modal = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div className="flex flex-col justify-center items-center fixed bg-[#7c7979] bg-opacity-60 inset-0 w-full h-screen">
      <div className="absolute top-[28%] left-[14%] lg:top-[28%] lg:left-[31%] xl:top-[28%] xl:left-[31%] 2xl:top-[28%] 2xl:left-[31%] w-full">
        <div
          class="modal"
          className="lg:w-[45%] xl:w-[40%] w-[75%] fixed md:w-[60%] h-60 rounded-xl p-4 pt-3 bg-white"
        >
          <div className="flex justify-between border-full font-bold border-b-2 border-inherit">
            <p className="text-2xl leading-6 text-[#333333] pb-4 pl-5">
              Connect Wallet
            </p>

            <button onClick={onClose}>X</button>
          </div>
          <p className="text-xs leading-6 text-[#333333] pt-5 pb-2 pl-5">
            choose your preferred wallet
          </p>

          <div className="pl-5 space-y-5">
            <div className="w-[95%] h-12 bg-white border-2 border-[#CFD8DC] rounded-xl">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <img src={Image1} alt="" className="w-12" />
                  <p className="text-[#333333] font-semibold text-lg leading-4 mt-4">
                    Metamask
                  </p>
                </div>
                <div className="mt-3 mr-5">
                  <BiChevronRight size={20} />
                </div>
              </div>
            </div>

            <div className="w-[95%] h-12 bg-white border-2 border-[#CFD8DC] rounded-xl pl-1">
              <div className="flex justify-between">
                <div className="flex gap-2">
                  <img src={Image} alt="" className="w-10 mt-1" />
                  <p className="text-[#333333] font-semibold text-lg leading-4 mt-4">
                    Wallet Connect
                  </p>
                </div>
                <div className="mt-3 mr-5">
                  <BiChevronRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Modal;

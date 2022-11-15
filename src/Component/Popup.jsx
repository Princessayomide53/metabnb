import React from "react";
import Image1 from "../Img/Image1 66.png"
import Image from "../Img/Image 69.png"
import {AiOutlineClose} from 'react-icons/ai'
import {BiChevronRight} from 'react-icons/bi'



function Popup(props){
    return(
        <div className="flex flex-col justify-center items-center mt-10 mb-96">
            <div className="lg:w-[40%] w-[75%] md:w-[40%] xl:w-[40%] 2xl:w-[40%] h-60 bg-[#D7D7D7] rounded-xl p-2 pt-3">
                <div className="flex justify-between border-full font-bold border-b-2 border-inherit">
                <p className="text-2xl leading-6 text-[#333333] pb-4 pl-5">Connect Wallet</p>
                <div className="mt-2 mr-3 cursor-pointer">
                <AiOutlineClose  size={20}  onClick={props.handleclose}/>
                </div>
                </div>
                <p className="text-xs leading-6 text-[#333333] pt-5 pb-2 pl-5">choose your preferred wallet</p>

                <div className="pl-5 space-y-5">
                <div className="w-[95%] h-12 bg-white rounded-xl hover:bg-[#D7D7D7] ">
                <div className="flex justify-between">
                 <div className="flex gap-2">
                     <img src={Image1} alt="" className="w-12"/>
                    <p className="text-[#333333] font-semibold text-lg leading-4 mt-4">Metamask</p>
                    </div>
                    <div className="mt-4 mr-5">
                    <BiChevronRight size={20} />
                    </div>
                </div>
                </div>
                
                <div className="w-[95%] h-12 bg-white rounded-xl hover:bg-[#D7D7D7] pl-1">
                    <div className="flex justify-between">
                <div className="flex gap-2">
                    <img src={Image} alt="" className="w-10 mt-1"/>
                    <p className="text-[#333333] font-semibold text-lg leading-4 mt-4">WalletConnect</p>
                    </div>
                    <div className="mt-4 mr-5">
                    <BiChevronRight size={20} />
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default Popup
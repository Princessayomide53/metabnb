import React from "react";
import Vector from "../Img/Vector 1.png"
import {GoSettings} from 'react-icons/go'


function Nav2() {
    return(
        <div className="overflow-hidden">
            <div className="sm:flex-col space-y-5 lg:space-y-0 lg:flex pl-7 pt-1">
                <div className="lg:flex lg:gap-16 xl:gap-36 2xl:gap-36">
                <div className="flex">
                <img src={Vector} alt="" className="w-10 h-10 mt-2"/>
                <h1 className="font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-r from-[#DC3E88] to-[#843FE8] mt-2">Metabnb</h1>
                </div>

            <div className="flex-col">
                <ul className=" space-y-5 lg:space-y-0 lg:space-x-16 x:space-x-20 2xl:space-x-20 text-[#434343] font-normal text-xl leading-6 pt-3 lg:flex">
                    <li className="hover:underline decoration-inherit"><a href={`home`}>Home</a></li>
                    <li className="hover:underline decoration-inherit">Place to stay</li>
                    <li className="hover:underline decoration-inherit">NFTs</li>
                    <li className="hover:underline decoration-inherit">Comunity</li>
                </ul>
            </div>

            <div className="lg:p-2 lg:pt-2">
                <button className="px-5 py-2 rounded-lg bg-[#A02279] text-base leading-5 font-normal text-white">Connect wallet</button>
            </div>
            </div>
            </div>



            <div className="pt-20 gap-5 flex justify-center flex-wrap font-bold lg:justify-evenly text-[#434343] lg:text-base md:text-sm text-sm leading-5 lg:font-normal">
                <p>Restuarant</p>
                <p>Cottage</p>
                <p>Castle</p>
                <p>fantast city</p>
                <p>beach</p>
                <p>Carbins</p>
                <p>Off-grid</p>
                <p>Farm</p>

                <div className="mt-1 lg:mt-0 md:-mt-2">
                    <button className="lg:px-5 flex lg:gap-2 gap-1 font-bold lg:py-1 -mt-1 md:px-5 md:py-2 hover:underline decoration-white text-[#434343] lg:text-base  md:text-sm text-xs leading-4 lg:font-normal border-2 px-3 py-1 border-inherit">Location <GoSettings size={18} className="lg:mt-1" /></button>
                </div>
            </div>
            
        </div>


    )
}
export default Nav2
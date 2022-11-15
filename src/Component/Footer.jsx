import React from "react"
import Vector from "../Img/Vector 2.png"
import facebook from "../Img/facebook 2.png"
import instagram from "../Img/instagram 2.png"
import twitter from "../Img/twitter 2.png"


function Footer(){
    return(
        <div className="overflow-hidden">
        <div className="md:grid-cols-2 grid-cols-1">
        <div className=" bg-black grid lg:grid-cols-4 grid-cols- gap-8 place-items-center lg:space-x-28 md:grid-cols-2 grid-cols-2">
            <div className="w-56 lg:h-72 h-48 pl-5 md:pl-5">
                <div className="flex lg:p-5 lg:pl-12 lg:pt-14 pt-5 pl-1">
                <img src={Vector} alt="" />
                <p className="text-white font-bold text-4xl">Metabnb</p>
                </div>

             <div className="flex gap-5 lg:p-5 pl-5 lg:pl-12 lg:pt-14 pt-14 md:pt-14">
            <img src={facebook} alt="" />
             <img src={instagram} alt="" />
             <img src={twitter} alt="" />
            </div>

            <div className="text-white pl-5 lg:pl-10 lg:pt-10 text-xs pt-10 md:pt-10">
            <p>&copy; 2022 metabnb</p>
            </div>
            </div>

            <div className="w-32 lg:h-72 h-52 text-white lg:pt-16 pt-8 md:pt-5">
            <p className="text-lg leading-5 font-bold pb-5 pt-2">Community</p>
            <p className="text-sm leading-7 font-normal pb-2">Nfts</p>
            <p className="text-sm leading-7 font-normal pb-2">Tokens</p>
            <p className="text-sm leading-7 font-normal pb-2">Landlords</p>
            <p className="text-sm leading-7 font-normal pb-2">Discord</p>
            </div>

            <div className="w-32 lg:h-72 h-44 text-white lg:pt-16 md:pt-0 pt-0">
            <p className="text-lg leading-5 font-bold pb-5">Places</p>
            <p className="text-sm leading-7 font-normal pb-2">Castle</p>
            <p className="text-sm leading-7 font-normal pb-2">Farms</p>
            <p className="text-sm leading-7 font-normal pb-2">Beach</p>
            <p className="text-sm leading-7 font-normal pb-2">Learn more</p>
            </div>

            <div className="w-32 lg:h-72 h-44 md:h-44 text-white lg:pt-16 md:pt-0 pt-0">
            <p className="text-lg leading-5 font-bold pb-5">About us</p>
            <p className="text-sm leading-7 font-normal pb-2">Road map</p>
            <p className="text-sm leading-7 font-normal pb-2">Creators</p>
            <p className="text-sm leading-7 font-normal pb-2">Career</p>
            <p className="text-sm leading-7 font-normal">Contact us</p>
            </div>
        </div>
        </div>
        </div>
    )
}
    export default Footer
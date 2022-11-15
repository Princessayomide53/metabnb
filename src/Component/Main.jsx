import React from "react";
import Group from "../Img/Group 4.png"

function Main() {
    return(
        <div className="overflow-hidden">
     <div className="lg:flex justify-between  md:flex md:gap-2 p-3 lg:p-5 pl-7  xl:p-5 2xl:p-5">
    <div className="mt-10 block">
    <div className="font-bold lg:text-5xl pt-3 lg:pt-10 text-3xl md:text-3xl xl:text-5xl 2xl:text-5xl text-[#434343] leading-5 ">
    <h1 className="head1">Rent a <span className="text-[#A02279]">Place</span> away from <br /> <span className="text-[#A02279]">Home</span> in the <span className="text-[#A02279]">Metaverse</span></h1>
    </div>

    <div className="font-normal lg:text-xl xl:text-xl 2xl:text-xl text-[#434343] text-sm md:text-sm  mt-10">
        <p  className="leading-6 md:leading-9 lg:leading-loose 2xl:leading-loose xl:leading-loose">we provide you access to luxury and affordable houses<br /> in the multiverse, get a chance to turn your<br /> imagination to reality at your comfort zone</p>
     </div>

     <div className="mt-16 flex">
        <input type="text"  placeholder="Search for location" className="lg:w-80 md:w-56 w-48 h-10 outline-[#A3A3A3] p-5"/>
    
    <button className="text-white bg-[#A02279] px-10 py-2 rounded-r-md">Search</button>
    </div>
     </div>

    <div className="pt-14 md:w-80 w-80 lg:w-[40%] xl:w-[40%] 2xl:w-[40%] pl-5 lg:pl-0 xl:pl-0 2xl:pl-0">
        <img src={Group} alt="nft" />
    </div>
     </div>
     </div>
     
     
    )
}
export default Main
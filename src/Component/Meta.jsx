import React from "react"
import Bnb from "../Img/Bnb 1.png"


function Meta(){
    return (
      <div className="overflow-hidden">
        <div className="w-full h-full bg-[#A02279] mt-20 lg:flex lg:justify-around md:flex md:justify-around xl:gap-10 2xl:gap-10 xl:flex xl:justify-around 2xl:flex 2xl:justify-around">
          <div className="p-5 pl-5 text-center md:text-start lg:text-start xl:text-start 2xl:text-start justify-center">
            <div className="font-bold text-white text-4xl xl:text-5xl 2xl:text-5xl pt-10 md:text-4xl md:pt-10 lg:text-5xl lg:pt-32 xl:pt-38 2xl:pt-38 leading-9">
              <h1>Metabnb NFTs</h1>
            </div>
            <div className="pt-14 text-white text-base leading-7 font-normal">
              <p>
                Discover our NFT gift cards collection.Loyal
                <br /> customers gets amazing gift cards which are
                <br /> traded as NFTs. These NFTs gives our cutomer
                <br /> access to loads of our exclusive services.
              </p>
            </div>
            <div className="pt-10">
              <button className="px-7 py-2 bg-white text-[#A02279] rounded-lg hover:underline decoration-inherit">
                Learn more
              </button>
            </div>
          </div>

          
            <div className="mt-5 mx-auto md:mt-8 lg:pb-20 xl:pb-20 2xl:pb-20 md:pb-20 pb-10 md:w-96 lg:w-[60%] xl:w-[60%] 2xl:w-[70%] w-96">
              <img src={Bnb} alt="" />
            </div>
         
        </div>
      </div>
    );
}
export default Meta
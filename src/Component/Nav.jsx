import React from "react"
import Vector from "../Img/Vector 1.png"
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from "react"
import Button from "./Button"

function Nav(){

    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <div className="overflow-hidden relative">
            <div className="lg:space-y-0 lg:flex lg:pt-1 lg:pl-10">
                <div className="lg:flex lg:gap-24 xl:gap-32 2xl:gap-32">
                    <div className="flex justify-between">
                <div className="flex lg:pl-0 pl-5">
                <img src={Vector} alt="" className="w-10 h-10 lg:mt-3 mt-1"/>
                <h1 className="font-bold lg:text-4xl text-3xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-[#DC3E88] to-[#843FE8] mt-2">Metabnb</h1>
                </div>

                <div className="pt-4  lg:hidden xl:hidden 2xl:hidden p-2" onClick={handleNav}>
                    {!nav ? <AiOutlineMenu size={20}/> : <AiOutlineMenu size={20}/> }
            </div>
            </div>

            
            <div className="hidden lg:block xl:block 2xl:block">
                <ul className=" lg:space-y-0 lg:space-x-16 xl:space-x-28 2xl:space-x-28 text-[#434343] font-normal text-xl leading-6 pt-3 lg:flex">
                    <li className="hover:underline decoration-inherit">Home</li>
                    <li className="hover:underline decoration-inherit"><a href={`place`}>Place to stay</a></li>
                    <li className="hover:underline decoration-inherit">NFTs</li>
                    <li className="hover:underline decoration-inherit">Comunity</li>
                    <li><Button /></li>
                </ul>
                </div>

                
                <div className={!nav ? 'flex-col left-0 top-0 space-y-10 lg:hidden xl:hidden 2xl:hidden  w-[60%] h-[48%] fixed bg-white ease-in-out duration-500 p-5' : 'ease-0ut duration-500 fixed left-[-100%]'}>
                    <ul className="text-[#434343] font-normal text-xl  leading-6 pt-3">
                    <li className="hover:underline decoration-inherit pb-8">Home</li>
                    <li className="hover:underline decoration-inherit pb-8"><a href={`place`}>Place to stay</a></li>
                    <li className="hover:underline decoration-inherit pb-8">NFTs</li>
                    <li className="hover:underline decoration-inherit pb-8">Comunity</li>
                    <li className="pb-3"><button className="px-5 py-2 hover:underline decoration-white rounded-lg bg-[#A02279] text-base leading-5 font-normal text-white">Connect wallet</button></li>
                </ul>
                </div>
               
            </div>
            </div>
       </div>

    
    )
}
export default Nav
import React from "react";
import Card from "./Card";
import { TbGridDots } from "react-icons/tb";
import { GrSort } from "react-icons/gr";

import { Montserrat } from "next/font/google"
import { client } from "@/sanity/lib/client";
import Link from "next/link";
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})

export default async function Cards2(){
     const data = await client.fetch(`*[_type == 'product' ]{
     title,
      _id,
     price,
     'imageURL': productImage.asset -> url,
     "slug": slug.current}`);
return(
        <div className={`flex flex-col ${montserrat.className} w-full sm:w-full sm1:w-full sm2:w-full sm3:w-full sm4:w-full sm5:w-full sm6:w-full sm7:w-full gap-[10px] sm:pb-[48px]`}>
        <div className="w-auto h-auto flex sm:flex-row  flex-col px-[145px] sm:py-[24px] justify-between">
            <p className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373] mt-0 sm:mt-3">Showing all 16 results</p>
            <div className="flex flex-row gap-[15px]  ">
                <p className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#737373]  mt-0 sm:mt-3">Views:</p>
                <button className=" w-auto h-auto border-b-zinc-700 rounded-[1px]  shadow-sm ">
                <TbGridDots color="black"/>
                </button>
                <button className=" w-auto h-auto border-b-zinc-700 rounded-[1px]  shadow-sm ">
                <GrSort color="black"/>
                </button>

            </div>
            <div className="flex flex-row gap-[15px]">
                <input type="" placeholder="Popularity" className="w-[141px] h-[50px] bg-[#DDDDDD] text-center"/>
                <button className="bg-[#23A6F0] w-[94px] h-[50px] text-white font-bold text-[14px] leading-[24px] tracking-[0.2px]">
                  Filter
                </button>

            </div>

        </div>
        <div className="grid grid-cols-1 sm:grid-cols-4  px-[43px] sm:pl-[145px] sm:pr-[145px] py-[80px] gap-[30px] ">
          
          {data.map((elem:any)=>{
            return <Link key={elem._id} href={`products/${elem.slug}`}>
                <Card image={elem.imageURL} title={elem.title} price={elem.price} /> </Link>
          })}
            
            

        
        
       
    </div>
    <div className="w-auto flex flex-row justify-center  h-[74px]  ">
        <div className="" >
            <button className="w-[84px] h-[74px] bg-[#F3F3F3] border border-[#BDBDBD] font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#BDBDBD]">Prev</button>
        </div>
        <div className="">
            <button className="w-[46px] h-[74px] text-[#23A6F0]  border border-[#BDBDBD] font-bold text-[14px] leading-[24px] tracking-[0.2px]">1

            </button>
        </div>
        <div>
            <button className="w-[46px] h-[74px] text-white border border-[#BDBDBD] font-bold text-[14px] leading-[24px] tracking-[0.2px] bg-[#23A6F0]">2</button>
        </div>
        <div>
        <button className="w-[46px] h-[74px] text-[#23A6F0] border border-[#BDBDBD] font-bold text-[14px] leading-[24px] tracking-[0.2px]">3</button>
        </div>
        <div>
        <button className="w-[84px] h-[74px] bg-[#F3F3F3] border border-[#BDBDBD]  font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#BDBDBD]">Next</button>
        </div>
        

    </div>
    </div>
    )
}
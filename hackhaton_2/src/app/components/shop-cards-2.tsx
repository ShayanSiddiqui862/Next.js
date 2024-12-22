import React from "react";
import Card from "./Card";
import pic1 from "../images/product-cover-8.png"
import pic2 from "../images/product-cover-5 (1).png"
import pic3 from "../images/product-cover-5 (2).png"
import pic4 from "../images/product-cover-5 (3).png"
import pic5 from "../images/product-cover-5 (4).png"
import pic6 from "../images/product-cover-5 (5).png"
import pic7 from "../images/product-cover-5 (6).png"
import pic8 from "../images/product-cover-5 (7).png"
import pic9 from "../images/product-cover-5 (9).png"
import pic10 from "../images/product-cover-5 (10).png"
import pic11 from "../images/product-cover-5 (11).png"
import pic12 from "../images/product-cover-5 (12).png"
import pic13 from "../images/product-cover-5 (13).png"
import pic14 from "../images/product-cover-5 (14).png"
import pic15 from "../images/product-cover-5 (15).png"
import pic16 from "../images/product-cover-5 (16).png"
import pic17 from  "../images/product-cover-5 (17).png"
import pic18 from "../images/product-cover-5 (18).png"
import pic19 from "../images/product-cover-5 (19).png"
import pic20 from "../images/product-cover-5 (20).png"
import pic21 from "../images/product-cover-5 (21).png"
import pic22 from  "../images/product-cover-5 (22).png"
import pic23 from "../images/product-cover-5 (23).png"
import pic24 from  "../images/product-cover-5 (24).png"

import { TbGridDots } from "react-icons/tb";
import { GrSort } from "react-icons/gr";

import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})

export default function Cards2(){
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
          
            <Card  image={pic1}/>
            <Card  image={pic2}/>
            <Card  image={pic3}/>
            <Card  image={pic4}/>
            
            <Card  image={pic5}/>
            <Card  image={pic6}/>
            <Card  image={pic7}/>
            <Card  image={pic8}/> 
            <Card image={pic9} />
            <Card image={pic10} />
            <Card image={pic11} />
            <Card image={pic12} />
            <Card image={pic13} />
            <Card image={pic14} />
            <Card image={pic15} />
            <Card image={pic16} />
            <Card image={pic17} />
            <Card image={pic18} />
            <Card image={pic19} />
            <Card image={pic20} />
            <Card image={pic21} />
            <Card image={pic22} />
            <Card image={pic23} />
            <Card image={pic24} />

            
            

        
        
       
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
import { StaticImageData } from "next/image";
import  Image  from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import { PiGreaterThanThin } from "react-icons/pi";
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})

interface CardProps {
    image : StaticImageData
}
const Card2: React.FC<CardProps> = ({
    image
}) => {
    return(
        <div className={`${montserrat.className} w-[348px] h-[606px] overflow-hidden items-center shadow-md flex-col `}>
            <Image src={image} alt = "image.png" className="w-full object-cover h-[300px]"/>
            <div className=" flex flex-col gap-[10px] pt-[25px] pl-[25px] pr-[25px] pb-[35px] ">
                <div className="flex flex-row gap-[15px] items-start">
                    <p className="font-normal text-[#8EC2F2] text-[12px] leading-[16px] tracking-[0.2px]">Google</p>
                    <p className="text-[12px] font-normal leading-[16px] text-[#737373] tracking-[0.2px]">Trending</p>
                    <p className="text-[12px]  leading-[16px] text-[#737373] font-normal tracking-[0.2px]">New</p>
                </div>
                 <h1 className="text-[20px]  leading-[30px] text-[#252B42] font-normal tracking-[0.2px]">Loudest à la Madison #1 (L&apos;integral)</h1>
                 <p className="text-[14px]  leading-[20px] text-[#737373] font-normal tracking-[0.2px]">We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
                 <div className="flex flex-row justify-between pt-[15px] pb-[15px]">
                       <div className="text-[12px]  leading-[16px] text-[#737373] font-normal tracking-[0.2px]">22 April 2021</div>
                       <div className="text-[12px]  leading-[16px] text-[#737373] font-normal tracking-[0.2px]">10 comments</div>
                 </div>
                 <div className="flex flex-row gap-[10px]">
                 <p className="text-[14px]  leading-[24px] text-[#737373] font-bold tracking-[0.2px]">Learn More </p>
                 <PiGreaterThanThin color="blue" className="mt-[4px]" />
                 </div>

            </div>

        </div>
    )
}
export default Card2
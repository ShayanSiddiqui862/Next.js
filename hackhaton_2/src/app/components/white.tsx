import Image from "next/image"
import couple from "../images/asian-woman-man-with-winter-clothes 1.png"
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})
export default function White (){

    return(
        <div className={`${montserrat.className} h-[682px] flex flex-col sm:flex-row gap-[30px] w-full  items-center`}>
            <div className="sm:ml-[100px] sm:mr-[58px] order-2 sm:order-1">
                <Image src={couple} alt = 'couple.png'/>
            </div>
            <div className="flex flex-col gap-[30px] order-1 sm:pr-[200px] sm:order-2 ">
                <h1 className="text-[16px] font-bold leading-[24px] tracking-[0.1px] text-[#BDBDBD]">SUMMER 2020</h1>
                <h2 className="text-[40px] font-bold leading-[50px] tracking-[0.2px] w-[400px] h-[100px] text-[#252B42]">Part of the Neural Universe</h2>
                <p className="text-[20px] font-normal leading-[30px] tracking-[0.2px] w-[376px] h-[60px] text-[#737373]">We know how large objects will act, but things on a small scale.</p>
                <div className="flex flex-row gap-[10px]">
                    <button className="bg-[#2DC071] w-[156px] h-[52px] text-white font-bold text-[14px] leading-[22px] tracking-[0.2px] rounded-[5px]" >BUY NOW</button>
                    <button className="text-[#2DC071] w-[173px] h-[72px] font-bold text-[14px] leading-[22px] tracking-[0.2px] border-[#2DC071] rounded-[5px]">READ MORE</button>

                </div>
            </div>

        </div>
    )
}
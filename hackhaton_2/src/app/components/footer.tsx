import { Montserrat } from "next/font/google"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})
export default function Footer(){
    return(
        <div className={`${montserrat.className}  flex flex-col w-full sm:h-[488px] `}>
            <div className="flex flex-row pl-[145px] pr-[145px] w-full h-[142px] pt-[53px] bg-[#FAFAFA] justify-between">
                <h1 className="font-bold text-[#252B42] text-[24px] leading-[32px] tracking-[0.1px]">Bandage</h1>
                 <div className="flex flex-row gap-[20px]">
                 <FaFacebook color="#23A6F0" className="w-[23px] h-[23px]"/>
                 <FaInstagram color="#23A6F0" className="w-[23px] h-[23px]"/>
                 <FaTwitter color="#23A6F0" className="w-[23px] h-[23px]" />

                 </div>

            </div>
            <div className="w-full h-[272px]">

            </div>
            <div className="w-full h-[74px] bg-[#FAFAFA] pt-[25px] pl-[145px]">
                <p className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Made With Love By Finland All Right Reserved </p>

            </div>

        </div>
    )
}
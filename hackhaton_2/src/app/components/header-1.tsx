import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})
export default function Header(){
    return(
        <div className={ `${montserrat.className} hidden sm:flex sm:flex-row w-full  sm7:w-full h-[58px] bg-[#252B42] justify-between sm:7px-[145px] px-0 text-white`}>
            <div className = "flex flex-row gap-[10px] w-[435px] h-[46px] pb-4 pt-4 ">
                <div className="flex flex-row gap-[5px]">
                     <MdOutlinePhone/>
                     <p className="text-[14px] leading-[24px] tracking-[0.2px]">(225) 555-0118</p>
                </div>
                <div className="flex flex-row gap-[5px]"> 
                    <MdOutlineEmail />
                    <p className="text-[14px] leading-[24px] tracking-[0.2px]">michelle.rivera@example.com</p>
                </div>
            </div>
            <div className="pb-4 pt-4">
                <p className="text-[14px] leading-[24px] tracking-[0.2px]">Follow us and get us a chance to win 80% off</p>
            </div>
            <div className="flex flex-row gap-[10px]  mr-[10px]">
                <div className="pb-4 pt-4">
                    <p className="text-[14px] leading-[24px] tracking-[0.2px]">Follow Us:</p>
                </div>
                <div className="flex flex-row gap-[5px] pt-4 pb-5 ">
                    <FaFacebook/>
                    <FaYoutube />
                    <FaInstagram />
                    <FaTwitter />
                </div>

            </div>

        </div>
    )
}

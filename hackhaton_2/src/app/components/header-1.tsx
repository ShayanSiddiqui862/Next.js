import phone from "../images/icn settings icn-xs.png"
import email from "../images/icn settings icn-xs (1).png"
import instagram from "../images/icn settings icn-xs (2).png"
import youtube from "../images/icn settings icn-xs (3).png"
import facebook from "../images/icn settings icn-xs (4).png"
import twitter from "../images/icn settings icn-xs (5).png"
import Image from "next/image"
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})
export default function Header(){
    return(
        <div className={ ` ${montserrat.className} hidden sm:flex sm:flex-row w-full h-[58px] bg-[#252B42] justify-between  text-white`}>
            <div className = "flex flex-row gap-[10px] w-[435px] h-[46px] pb-4 pt-4 ml-[38px]">
                <div className="flex flex-row gap-[5px]">
                     <Image src={phone} alt="phone.png" height={16} width={16}/>
                     <p className="text-[14px] leading-[24px] tracking-[0.2px]">(225) 555-0118</p>
                </div>
                <div className="flex flex-row gap-[5px]"> 
                    <Image src={email} alt="email.png" width={16} height={16}/>
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
                    <Image src={instagram} alt="instagram.png" width={16} height={16}/>
                    <Image src={youtube} alt="youtube.png"/>
                    <Image src={facebook} alt="facebook.png"/>
                    <Image src={twitter} alt = "twitter.png"/>
                </div>

            </div>

        </div>
    )
}

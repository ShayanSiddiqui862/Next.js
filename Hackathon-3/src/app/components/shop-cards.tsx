import { Montserrat } from "next/font/google"
import Link from "next/link"
import { PiGreaterThanThin } from "react-icons/pi";
import Card1 from "../images/card-item.png"
import Card2 from "../images/card-item (1).png"
import Card3 from "../images/card-item (2).png"
import Card4 from "../images/card-item (3).png"
import Card5 from "../images/card-item (4).png"
import Image from "next/image";
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})
export default function Shopcards(){
    return(
        <div className={`${montserrat.className} w-full sm:w-full flex flex-col sm:flex-col h-auto bg-[#FAFAFA]`}>
            <div className="flex sm:flex-row flex-col h-auto justify-between py-[48px] px-[145px] sm:px-[145px] sm:gap-0 gap-[20px]" >
                <p className="font-bold text-[#252B42] leading-[32px] tracking-[0.1] text-[24px] ">Shop</p>
                <div className="flex flex-row gap-[15px]">
                    <Link href="./" className="font-bold text-[14px] leading-[24px] tracking-[0.2px] text-[#252B42]">Home</Link>
                    <PiGreaterThanThin className="mt-1"/>
                    <Link href="../Shop" className="font-bold text-[#737373] leading-[24px] tracking-[0.2] text-[14px]">Shop</Link>
                </div>


            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-[15px] px-[100px] sm:px-[145px] pb-[48px] items-center">
             <Image src={Card1} alt="card.png"/>
             <Image src={Card2} alt="card.png"/>
             <Image src={Card3} alt="card.png"/>
             <Image src={Card4} alt="card.png"/>
             <Image src={Card5} alt="card.png"/>
            </div>
         
        </div>
    )
}
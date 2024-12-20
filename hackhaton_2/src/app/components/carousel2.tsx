import Image from "next/image"
import men from "../images/shop-hero-2-png-picture-1.png"
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})
export default function Carousel2(){
    return(
        <div className={` ${montserrat.className} w-full h-[1165px] sm:h-[709px] bg-[#23856D] text-white`}>
            <div className="flex flex-col sm:flex-row gap-[80px]  sm:pl-[209px] sm:pr-[209px]">
                <div className="flex flex-col gap-[30px] sm:pt-[260px]">
                  <p className="font-normal text-[20px] leading-[30px] tracking-[0.2px]">SUMMER 2020</p>
                  <h1 className="w-[509px] h-[160px] text-[58px] font-bold leading-[80px] tracking-[0.2px]">VITA CLASSIC PRODUCTS</h1>
                  <p className="text-[14px] leading-[20px] tracking-[0.2px] font-normal w-[341px]">We know how large objects will act, We know how are objects will act, We know</p>
                  <div className="flex flex-row gap-[34px]">
                    <p className="font-bold text-[24px] leading-[32px] tracking-[0.1px] pt-2">$16.48</p>
                    <button className="bg-[#2DC071] text-[14px] leading-[22px] tracking-[0.2px] w-[184px] h-[52px] text-white" >ADD TO CART</button>
                  </div>
                </div>
                <div className="sm:pt-[249px]">
                    <Image src={men} alt = 'men.png'  height={711}/>
                </div>
            </div>
        </div>
    )
}
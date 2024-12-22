import Image from "next/image"
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})
export default function Carousel(){
    return(
        <div className= {`${montserrat.className} bg-blend-screen sm:pr-0  bg-[url('/women.jpg')] bg-cover bg-center  sm1:w-full sm2:w-full sm3:w-full sm4:w-full sm5:w-full sm6:w-full sm7:w-full sm:mt-0 sm:h-auto text-white w-full sm:w-full`}>
            <div className="w-full h-auto sm:h-auto pt-[100px] sm:pt-[208px] pb-[208px] flex sm:flex-col flex-col gap-[30px]  pl-[20px]  sm:pl-[145px]">
               <h2 className="font-bold text-[16px] leading-[24px] tracking-[0.1px]">SUMMER 2020</h2>
               <h3 className="text-[58px] leading-[80px] tracking-[0.2px] font-bold h-auto">NEW COLLECTION</h3>
               <p className="w-[376px] h-[60px] text-[20px] leading-[30px] tracking-[0.2px]">We know how large object will act,but things on a small scale</p>
               <button className="w-[221px] h-[62px] bg-[#2DC071] rounded-[5px] text-white">
                <p className="text-[24px] font-bold leading-[32px] tracking-[0.1px] ">SHOP NOW</p>

               </button>
            </div>
         
        </div>
    )
}
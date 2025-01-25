
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})
export default function Carousel(){
    return(
        <div className= {`${montserrat.className} sm:pr-0  bg-[url('/women.jpg')] bg-contain bg-no-repeat bg-left sm:bg-center  sm1:w-full sm2:w-full sm3:w-full sm4:w-full sm5:w-full sm6:w-full sm7:w-full sm:mt-0 sm:h-auto text-white w-full sm:w-full`}>
            <div className="w-full h-auto sm:h-auto pt-[100px] sm:pt-[208px] pb-[100px] sm:pb-[208px] flex sm:flex-col flex-col sm:items-start items-center text-center sm:text-left gap-[5px] sm:gap-[30px]  pl-[40px]  sm:pl-[145px]">
               <h2 className="font-bold text-[16px] leading-[24px] tracking-[0.1px]">SUMMER 2025</h2>
               <h3 className="text-[26px] sm:text-[58px] leading-[80px] tracking-[0.2px] font-bold h-auto">NEW COLLECTION</h3>
               <p className="w-full h-[60px] text-[14px] sm:text-[20px] leading-[30px] tracking-[0.2px]">We know how large object will act,but things on a small scale</p>
               <button className="w-[221px] h-[31px] sm:h-[62px] bg-[#2DC071] rounded-[5px] text-white">
                <p className="sm:text-[24px] text-[14px] font-bold leading-[32px] tracking-[0.1px] ">SHOP NOW</p>

               </button>
            </div>
         
        </div>
    )
}
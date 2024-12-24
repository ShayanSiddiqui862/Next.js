import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})
export default function Editors(){
    return(
        <div className={`${montserrat.className} flex flex-col sm:pl-[195px]  w-full sm:w-full sm1:w-full sm2:w-full sm3:w-full sm4:w-full sm5:w-full sm6:w-full sm7:w-full flex-grow flex-wrap sm:pr-[195px] pr-0 pt-[80px] pb-[80px] gap-[48px] items-center bg-[#FAFAFA] `}>
           <div className="flex flex-col gap-[10px] items-center">
              <h4 className=" text-[24px] font-bold leading-[32px] tracking-[0.2px]">EDITOR&apos;S PICK</h4>
              <p className="text-[14px] font-normal  leading-[20px] tracking-[0.2]">Problems trying to resolve the conflict between</p>
           </div>
           <div className="flex flex-col sm:flex-row gap-[30px]">
            <div className="bg-[url('/filter.png')] bg-cover h-[500px]  w-full sm:w-[510px] bg-opacity-25 ">
              <button className="mt-[426px] ml-[31px] w-[170px] h-[48px] bg-white text-[#252B42] text-[14px] font-bold leading-[24px] tracking-[0.1px]">Men</button>
            </div>
            <div className="bg-[url('/filter1.png')] bg-cover h-[500px] w-full sm:w-[240px]">
            <button className="mt-[426px] ml-[31px] w-[136px] h-[48px] bg-white text-[#252B42] text-[14px] font-bold leading-[24px] tracking-[0.1px]">Women</button>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div className="bg-[url('/women3.png')] bg-cover full sm:w-[240px] h-[240px]">
                <button className="mt-[171px] ml-[14px] w-[170px] h-[48px] bg-white text-[#252B42] text-[16px] font-bold leading-[24px] tracking-[0.1px]">Accessories</button>
                </div>
                <div className="bg-[url('/men2.png')] bg-cover w-[325px] sm:w-[240px] h-[242px]">
                <button className="mt-[171px] ml-[14px] w-[120px] h-[48px] bg-white text-[#252B42] text-[16px] font-bold leading-[24px] tracking-[0.1px]">Kids</button>
                 </div>

            </div>

           </div>
        </div>
    )
}
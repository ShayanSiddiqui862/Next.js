import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})
export default function Main(){
    return(
        <div className={` ${montserrat.className} bg-[url('/cover.png')] bg-cover bg-no-repeat bg-right sm:bg-center w-full h-[612px] flex flex-col gap-[35px] sm:pl-[145px]  px-[40px] py-[112px]`} >
            <h1 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">ABOUT COMPANY</h1>
            <h2 className="font-bold text-[58px] leading-[80px] tracking-[0.1px] text-[#252B42]" >ABOUT US</h2>
            <p className="font-normal text-[20px] leading-[30px] tracking-[0.2px] text-[#737373] w-[376px] ">We know how large objects will act, but things on a small scale</p>
            <button className="w-[221px] h-[31px] sm:h-[62px] bg-[#23A6F0] rounded-[5px] text-white">
                <p className="sm:text-[24px] text-[14px] font-bold leading-[22px] tracking-[0.2px] ">Get Quote Now</p>

               </button>
            

        </div>
    )
}
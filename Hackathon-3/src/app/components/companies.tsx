import brand1 from '../images/fa-brands-1.png'
import brand2 from '../images/fa-brands-2.png'
import brand3 from '../images/fa-brands-3.png'
import brand4 from '../images/fa-brands-4.png'
import brand5 from '../images/fa-brands-5.png'
import brand6 from '../images/fa-brands-6.png'
import Image from 'next/image'
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})

export default function Companies(){
    return(
        <div className={`${montserrat.className} flex flex-col w-full gap-[24px] py-[80px]  bg-[#FAFAFA] h-auto`}>
            <div className="flex flex-col w-full gap-[30px] items-center pl-0 sm:pl-[40px]">
                <h1 className="text-[40px] font-bold leading-[50px] tracking-[0.2px] text-[#252B42] ">Big Companies Are Here</h1>
                <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px] text-[#737373]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>

            </div>
            <div className="flex flex-col sm:flex-row pl-[145px] gap-[30px] py-[50px]">
                <Image src={brand1} alt=''  className='h-[34px] w-[150px]'/>
                <Image src={brand2} alt='' className='h-[59px] w-[150px]'/>
                <Image src={brand3} alt='' className='h-[75px] w-[150px]'/>
                <Image src={brand4} alt=''className='w-[150px] h-[42px]'/>
                <Image src={brand5} alt='' className='w-[150px] h-[62px]'/>
                <Image src={brand6} alt='' className='w-[150px] h-[72px]'/>



            </div>

        </div>
    )
}
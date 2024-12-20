import { Montserrat } from "next/font/google"
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})
export default function Footer(){
    return(
        <div className={`${montserrat.className}  flex flex-col w-full h-[1342px] sm:h-[488px] pt-[1500px] pl-[46px] sm:pl-0 sm:pt-0`}>
            <div className="flex flex-col pb-[53px] sm:pt-[0] sm:flex-row sm:pl-[145px] sm:pr-[145px] w-full h-[142px] pt-[53px] bg-[#FAFAFA] justify-between">
                <h1 className="font-bold text-[#252B42] text-[24px] leading-[32px] tracking-[0.1px]">Bandage</h1>
                 <div className="flex flex-row gap-[20px]">
                 <FaFacebook color="#23A6F0" className="w-[23px] h-[23px]"/>
                 <FaInstagram color="#23A6F0" className="w-[23px] h-[23px]"/>
                 <FaTwitter color="#23A6F0" className="w-[23px] h-[23px]" />

                 </div>

            </div>
            <div className="w-full h-[272px] grid sm:grid-cols-6 grid-row-6  sm:pl-[145px] pt-[50px] gap-[30px]">
                <div className="flex flex-col gap-[20px]">
                    <h1 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Company Info</h1>
                    <Link href="./About" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">About Us</Link>
                    <Link href="./" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Carrer</Link>
                    <Link href="./" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">We are hiring</Link>
                    <Link href="./Blog" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Blog</Link>
                    
                  
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h1 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Legal</h1>
                    <Link href="./About" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">About Us</Link>
                    <Link href="./" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Carrer</Link>
                    <Link href="./" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">We are hiring</Link>
                    <Link href="./Blog" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Blog</Link>
                    
                  
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h1 className="font-bold text-[16px] leading-[24px] tracking-[0.1px] text-[#252B42]">Features</h1>
                    <Link href="./About" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Bussines Marketing</Link>
                    <Link href="./" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">User Analytic</Link>
                    <Link href="./" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Live Chat</Link>
                    <Link href="./Blog" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Unlimited Support</Link>
                    
                  
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h1 className="font-bold text-[16px] leading-[24px] tracking-[0.1px]  text-[#252B42]">Resources</h1>
                    <Link href="./About" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">IOS Android</Link>
                    <Link href="./" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Watch a Demo</Link>
                    <Link href="./" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Customers</Link>
                    <Link href="./Blog" className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">API</Link>
                    
                  
                </div>
                <div className="flex flex-col gap-[20px]">
                    <h1 className="font-bold text-[16px] leading-[24px] tracking-[0.1px]  text-[#252B42]">Get In Touch</h1>
                    <div className="flex flex-row">
                        <input type="text" placeholder="Your email" className="bg-[#E6E6E6] w-[321px] h-[58px] pl-[20px] rounded-[5px]"/>
                        <button className="w-[117px] h-[58px] bg-[#23A6F0] text-white text-[14px] rounded-[5px] leading-[28px] tracking-[0.2px]">Subscribe</button>
                    </div>
                    <p className="text-[12px] leading-[28px] tracking-[0.2px] text-[#737373]">Lorem ipsum dolor sit amet </p>
                </div>

                

            </div>
            <div className="w-full h-[74px] bg-[#FAFAFA] pt-[25px] mt-[850px] sm:mt-0 sm:pl-[145px]">
                <p className="font-bold text-[#737373] text-[14px] leading-[24px] tracking-[0.2px]">Made With Love By Finland All Right Reserved.  </p>

            </div>

        </div>
    )
}
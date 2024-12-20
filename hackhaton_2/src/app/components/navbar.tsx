import Link from "next/link"
import { BsCart2 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})
export default function Navbar(){
    return(
        <div className={`${montserrat.className} flex sm:flex-row w-full h-[40px] mt-[14px] mb-[14px]  `}>
            <div className="pl-[38px] w-[187px] items-start">
                <h1 className="leading-[32px] tracking-[0.1px] text-[24px] font-bold">Bandage</h1>
            </div>
            <div className="w-screen flex flex-col sm:flex-row pl-[50px] justify-between ">
                <div className="flex flex-col mt-[68px] sm:mt-0 sm:flex sm:flex-row w-[361px] text-[14px] font-semibold leading-[24px] tracking[0.2px] gap-[15px] pt-1 ">
                   <Link href="./">Home</Link>
                   <Link href="./Shop">Shop</Link>
                   <Link href="./About">About</Link>
                   <Link href="./Blog">Blog</Link>
                   <Link href="./Contact">Contact</Link>
                   <Link href="./">Pages</Link>
                </div>
                <div className="w-[321px] text-[#23A6F0] flex flex-col sm:flex-row">
                    <div className="w-[166px]">
                        <p className="">Login / Register</p>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-1" >
                        <div className="w-[46px]">
                        <IoIosSearch />
                        </div>
                        <div className="w-[46px]">
                        <BsCart2 />
                        </div>
                        <div className="w-[46px]">
                        <CiHeart />
                        </div>
                     </div>
                </div>

            </div>

        </div>
    )
}
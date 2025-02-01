"use client"
import Link from "next/link"
import { BsCart2 } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { Montserrat } from "next/font/google"
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/clerk-react";

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})
export default function Navbar(){
    return(
        <div className={`${montserrat.className} flex sm:flex-row  h-auto w-full sm:w-full sm:h-[40px] mt-[14px] mb-[14px] px-0 sm:px-[145px]  `}>
            <div className=" w-[187px] items-start">
                <h1 className="leading-[32px] tracking-[0.1px] text-[24px] font-bold">FAME</h1>
            </div>
            <div className="w-full flex flex-col sm:flex-row pl-[50px] justify-between gap-[10px] sm:gap-0 ">
                <div className="flex flex-col mt-[68px] sm:mt-0 sm:flex sm:flex-row w-[361px] text-[14px] font-bold leading-[24px] tracking[0.2px] text-[#737373] gap-[15px] pt-1 ">
                   <Link href="/" >Home</Link>
                   <Link href="/Shop">Shop</Link>
                   <Link href="/About">About</Link>
                   <Link href="/Pricing">Pricing</Link>
                   <Link href="/Contact">Contact</Link>
                   <Link href="/">Pages</Link>
                </div>
                <div className=" text-[#23A6F0] flex flex-col sm:flex-row ml-0 sm:ml-[40px] gap-[10px] sm:gap-[46px] ">
                    <div className="">
                    <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
          <UserButton />
            
            
        
          </SignedIn>
                    </div>
                    <div className="flex flex-col sm:flex-row mt-1 gap-[10px] sm:gap-[46px] " >
                        <div className="">
                        <IoIosSearch />
                        </div>
                        <div className="">
                        
                        <Link href="/Cart"><BsCart2 /></Link>
                        </div>
                        <div className="">
                        <CiHeart />
                        </div>
                     </div>
                </div>

            </div>
            

        </div>
    )
}
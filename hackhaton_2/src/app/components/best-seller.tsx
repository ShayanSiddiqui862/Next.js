import React from "react";
import Card from "./Card";
import pic1 from "../images/product-cover-8.png"
import pic2 from "../images/product-cover-5 (1).png"
import pic3 from "../images/product-cover-5 (2).png"
import pic4 from "../images/product-cover-5 (3).png"
import pic5 from "../images/product-cover-5 (4).png"
import pic6 from "../images/product-cover-5 (5).png"
import pic7 from "../images/product-cover-5 (6).png"
import pic8 from "../images/product-cover-5 (7).png"
import { Montserrat } from "next/font/google"
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})

export default function Best(){
    return(
        <div className={`flex flex-col ${montserrat.className}`}>
            <div className="items-center w-full gap-[10px] flex flex-col flex-wrap pt-[80px] ">
        <p className="text-[20px] font-normal leading-[30px] tracking-[0.2px] ">Featured Products</p>
        <h1 className="font-bold text-[24px] leading-[32px] tracking-[0.1px]">BESTSELLER PRODUCTS</h1>
        <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px]">Problems trying to resolve the conflict between</p>
          </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-4  px-[43px] sm:pl-[195px] sm:pr-[195px] py-[80px] gap-[30px]">
          
            <Card  image={pic1}/>
            <Card  image={pic2}/>
            <Card  image={pic3}/>
            <Card  image={pic4}/>
            
            <Card  image={pic5}/>
            <Card  image={pic6}/>
            <Card  image={pic7}/>
            <Card  image={pic8}/> 
            

        
        
       
    </div>
    </div>
    )
}
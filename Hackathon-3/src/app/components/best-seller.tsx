import React from "react";
import Card from "./Card";
import Link from "next/link";
import { Montserrat } from "next/font/google"
import { client } from "@/sanity/lib/client";
const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ["400", "700"]

})

export default async function Best(){
    const data = await client.fetch(`*[_type == 'product' && isNew ]{
     title,
     _id,
      price,
     'imageURL': productImage.asset -> url,
     isNew,
     "slug": slug.current
}`);
//console.log(data);
    return(
        <div className={`flex flex-col ${montserrat.className} w-full sm:w-full`}>
            <div className="items-center w-full gap-[10px] flex flex-col flex-wrap pt-[80px] ">
        <p className="text-[20px] font-normal leading-[30px] tracking-[0.2px] ">Featured Products</p>
        <h1 className="font-bold text-[24px] leading-[32px] tracking-[0.1px]">BESTSELLER PRODUCTS</h1>
        <p className="font-normal text-[14px] leading-[20px] tracking-[0.2px]">Problems trying to resolve the conflict between</p>
          </div>
      
        <div className="grid grid-cols-1 sm:grid-cols-4  px-[100px] sm:px-[195px]  py-[80px] gap-[30px]">
          
            {data.map((elem:any)=>{
                return <Link key={elem._id} href={`products/${elem.slug}`}>
                <Card image = {elem.imageURL}  title={elem.title} price={elem.price}/></Link>
            })}

        
        
       
    </div>
    </div>
    )
}
"use client"
import Header from "../components/header-2"
import Navbar from "../components/navbar"
import Cart from "../components/xart"
import { useState } from "react";
import CheckOut from "../components/check";
export default function Carts (){
    const [isCartOpen, setIsCartOpen] = useState(false);
    return(
        <div>
            <Header/>
            <Navbar/>
            <div className="ml-[600px] mt-12">
            <button onClick={() => setIsCartOpen(true)} className="w-40 h-12 pl-7  inline-flex items-center rounded-md bg-indigo-600  py-2 text-sm font-semibold text-white shadow-sm hover:bg-white hover:text-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" >View Your Cart</button>
            <Cart open={isCartOpen} setOpen={setIsCartOpen} />
            </div>
            <CheckOut />
        </div>
    )
}
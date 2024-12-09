import Image from "next/image";
import greenman from "@/images/shop-hero-2-png-picture-1.png";

export default function GreenDiv() {
  return (
    <div className="w-screen bg-[#23856D] mt-[-130px] top-[3100px] rounded-md border  absolute ">
      <div className="max-w-screen-xl mx-auto flex items-center py-[112px] gap-[80px]">
        {/* Left Content */}
        <div className="flex flex-col gap-[30px] w-[509px]">
          <h4 className="font-Montserrat font-normal text-[20px] text-white">
            SUMMER 2020
          </h4>
          <h1 className="font-Montserrat font-bold text-[58px] leading-[80px] text-white">
            Vita Classic Product
          </h1>
          <p className="font-Montserrat font-medium text-[14px] text-white">
            We know how large objects will act, We know how objects will act, We know
          </p>
          <div className="flex gap-[34px]">
            <h3 className="font-Montserrat font-bold text-[24px] text-white">$16.48</h3>
            <button className="w-[184px] h-[52px] rounded-[5px] bg-[#2DC071] py-[15px] flex items-center justify-center">
              <h1 className="font-Montserrat text-[14px] text-white">ADD TO CART</h1>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-[510px]">
          <Image src={greenman} alt="Vita Classic Product" />
        </div>
      </div>
    </div>
  );
}

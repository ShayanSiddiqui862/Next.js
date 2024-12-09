import Image from "next/image";
import colours from "@/images/product-colors.png";
export default function CardText() {
  return (
    <div className="w-[239px] h-[188px] py-6 px-6 flex flex-col items-center gap-2.5">
      
      {/* Title Section */}
      <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-center text-[#252B42]">
        Graphic Design
      </h5>
      <p className="font-Montserrat font-bold text-[14px] leading-[24px] text-center text-[#737373]">
        English Department
      </p>
      
      {/* Pricing Section */}
      <div className="flex justify-center gap-1">
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#BDBDBD] line-through">
          $16.48
        </h5>
        <h5 className="font-Montserrat font-bold text-[16px] leading-[24px] text-[#23856D]">
          $6.48
        </h5>
      </div>
      
      {/* Colour Options */}
      <div className="w-20 h-4 flex justify-center">
        <Image src={colours} alt="Colour options" layout="fixed" width={82.2} height={16} />
      </div>
      
    </div>
  );
}

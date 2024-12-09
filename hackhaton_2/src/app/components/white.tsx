import Image from "next/image";
import couples from "@/images/asian-woman-man-with-winter-clothes 1.png";

export default function Whitediv() {
  return (
    <div className="w-full bg-white py-12 mt-[3500px]"> {/* Adjusted margin-top to ensure no overlap */}
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 px-4 lg:px-0">
        {/* Image Section */}
        <div className="w-full lg:w-[707px] h-[400px] lg:h-[682px] flex justify-center">
          <Image
            src={couples}
            alt="couple"
            className="object-contain"
            layout="intrinsic"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[573px] flex flex-col gap-6 justify-center items-center lg:items-start text-center lg:text-left mt-6 lg:mt-0">
          <h5 className="text-[14px] lg:text-[16px] font-Montserrat font-bold leading-[24px] text-[#BDBDBD]">
            SUMMER 2020
          </h5>
          <h2 className="text-[24px] lg:text-[40px] font-Montserrat font-bold leading-[32px] lg:leading-[50px] text-[#252B42]">
            Part of the Neural Universe
          </h2>
          <h4 className="text-[16px] lg:text-[20px] font-Montserrat font-normal leading-[24px] lg:leading-[30px] text-[#737373]">
            We know how large objects will act, but things on a small scale.
          </h4>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] bg-[#2DC071] flex justify-center items-center">
              <h1 className="text-[14px] font-Montserrat font-bold text-white">
                BUY NOW
              </h1>
            </button>
            <button className="w-[140px] lg:w-[156px] h-[52px] rounded-[5px] py-[12px] px-[20px] lg:px-[40px] border border-[#2DC071] flex justify-center items-center">
              <h1 className="text-[14px] font-Montserrat font-bold whitespace-nowrap text-[#2DC071]">
                READ MORE
              </h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

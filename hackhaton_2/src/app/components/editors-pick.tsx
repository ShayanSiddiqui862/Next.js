import Image from "next/image";
import Men from "@/images/filter.png";
import women from "@/images/filter (1).png";
import div1 from "@/images/filter (2).png";
import div2 from "@/images/filter (3).png";


export default function Editors() {
  return (
    <div className="absolute top-[850px] w-full bg-[#f5f5f5] py-2.5 flex justify-center">
      
      {/* Container */}
      <div className="w-[1050px] bg-[#FAFAFA] p-10 flex flex-col gap-7.5">
        
        {/* Title Section */}
        <div className="text-center space-y-2.5">
          <h3 className="font-Montserrat font-semibold text-2xl leading-8">
            EDITOR’S PICK
          </h3>
          <p className="font-Montserrat font-normal text-sm leading-5 text-[#737373] max-w-[347px] mx-auto">
            Problems trying to resolve the conflict between
          </p>
        </div>

        {/* Images Section */}
        <div className="flex gap-7.5">
          
          {/* Men Image */}
          <div className="relative w-[510px] h-[500px]">
            <Image
              src={Men}
              alt="Men's Collection"
              className="w-full h-full object-cover rounded-md"
            />
            <button className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-12 py-2.5 shadow-md font-Montserrat font-bold text-[#252B42] text-base leading-6 hover:bg-gray-100">
              MEN
            </button>
          </div>
          
          {/* Women Image */}
          <div className="relative w-[240px] h-[500px]">
            <Image
              src={women}
              alt="Women's Collection"
              className="w-full h-full object-cover"
            />
            <button className="absolute bottom-8 left-4 bg-white shadow-md px-12 py-3 flex items-center justify-center">
              <h2 className="font-Montserrat font-bold text-base leading-6 text-[#252B42]">
                WOMEN
              </h2>
            </button>
          </div>
          
          {/* Accessories and Kids */}
          <div className="w-[240px] flex flex-col gap-7.5">
            
            {/* Accessories Image */}
            <div className="relative w-full h-[242px]">
              <Image
                src={div1}
                alt="Accessories Collection"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-8 left-4 bg-white shadow-md px-6 py-3 flex items-center justify-center">
                <h2 className="font-Montserrat font-bold text-base leading-6 text-[#252B42]">
                  ACCESSORIES
                </h2>
              </button>
            </div>
            
            {/* Kids Image */}
            <div className="relative w-full h-[242px]">
              <Image
                src={div2}
                alt="Kids Collection"
                className="w-full h-full object-cover"
              />
              <button className="absolute bottom-8 left-4 bg-white shadow-md px-6 py-3 flex items-center justify-center">
                <h2 className="font-Montserrat font-bold text-base leading-6 text-[#252B42]">
                  KIDS
                </h2>
              </button>
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}

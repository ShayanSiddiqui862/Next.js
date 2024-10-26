import { Montserrat } from "next/font/google";
import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";
const montserrat = Montserrat({
  weight: ["100", "700"],
  subsets: ["latin"],
});
export default function Homes() {
  return (
    <div className={montserrat.className}>
      <div className="flex flex-col items-center gap-[80px] pt-[80px] pb-[80px] w-[1046px] h-[1026px] top-[104px] ml-[136px]">
        <div className="flex flex-col items-center py-[40px] gap-[40px] w-[699] h-[496] ">
          <div className="w-[77px] h-[74] items-center flex-none order-1">
            <h5 className="font-bold text-[16px] tracking-[0.1px] leading-[24px] text-[#23A6F0]">
              Welcome
            </h5>
          </div>
          <div className=" h-[160px] flex-none order-2 ">
            <p className="font-bold text-[58px]  text-center text-white tracking-[0.2px] leading-[80px] ">
              Selling on the
            </p>
            <p className="font-bold text-[58px]  text-center text-white tracking-[0.2px] leading-[80px]">
              internet like a pro
            </p>
          </div>
          <div className="w-[536] h-[50]  flex-none order-3 ">
            <p className="font-semibold text-[20px]  text-center text-white tracking-[0.2px] leading-[30px]">
              We know how large objects will act, but things on a small scale
              just do not act that way.
            </p>
          </div>
          <div className=" flex flex-row order-4 gap-[10px] w-[365px] h-[52px] ">
            <button className="flex flex-col items-center w-[193px] h-[52px] bg-[#23A6F0] pt-[15px] pb-[15px] px-[40px] rounded-[5px] ">
                <p className="text-white font-bold w-[113px] h-[22px] text-center text-[14px] leading-[22px] tracking-[0.1px]">Get Quote now</p>
            </button>
            <button className="box-border flex flex-col items-center px-[40px] py-[15px] gap-2 w-[162px] h-[52px] border border-[#23A6F0] rounded-[5px] order-1">
                <p className="font-bold text-[14px] leading-[22px] text-center tracking-[0.01px] w-[88px] h-[22px] text-[#23A6F0]">Learn More</p>
            </button>

          </div>
          </div>
          <div className="flex flex-row flex-wrap md:flex-row items-center gap-[30] w-[1046px] h-[292px]">
           <Card1 />
           <Card2 />
           <Card3 />
      </div>
      

      </div>
    </div>
  );
}

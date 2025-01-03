import Card2 from "./Card2";
import post1 from "../images/post1.png"
import post2 from "../images/post2.png"
import post3 from "../images/post3.png"

export default function Featured(){
    return(
        <div className="h-auto flex flex-col  w-full sm:w-full sm1:w-full sm2:w-full sm3:w-full sm4:w-full sm5:w-full sm6:w-full sm7:w-full sm:pl-[145px] sm:pb-[112px] sm:pt-[112px] pt-[40px] sm:pr-[145px] gap-[80px] px-[40px]" >
            <div className="flex flex-col gap-[10px] items-center order-1">
                <h1 className="font-bold text-[#23A6F0] leading-[24px] tracking-[0.2px] text-[14px] ">Practice Advice</h1>
                <h2 className="font-bold text-[40px] leading-[50px] tracking-[0.2px] text-[#252B42]">Featured Posts</h2>
                <div className="flex flex-col items-center ">
                <p className="  text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] font-normal ">Problems trying to resolve the conflict between </p>
                <p className="text-[14px] leading-[20px] tracking-[0.2px] text-[#737373] font-normal">the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 order-2 gap-[10px] sm:gap-[15px] ">
                <Card2 image={post1} />
                <Card2 image={post2} />
                <Card2 image={post3} /> 

            </div>

        </div>
    )
}
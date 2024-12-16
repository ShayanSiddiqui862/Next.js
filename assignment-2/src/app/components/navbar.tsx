
import { Montserrat } from "next/font/google";

import Link from "next/link";

const montserrat = Montserrat({
  weight: ["100", "700"],
  subsets: ["latin"],
});

export default function Navbar() {
  return (
    <div className={montserrat.className}>
      <nav className="bg-[#252B42] sticky flex flex-wrap">
        <div className="h-[91px] w-full flex flex-row flex-wrap">
          <div className=" left-[136px] h-[58px] w-[187px] top-[31px] relative">
            <h3 className="text-white font-bold  h-[32px] w-[152px] ">
              Brand Name
            </h3>
          </div>

          <div className=" flex flex-row flex-wrap w-[830px] h-[58px] top-[16px] left-[364px] absolute gap-[351px]">
            <div className="flex flex-row flex-wrap items-center top-[17px] gap-[21px] text-center">
              <Link
                href="/"
                className="text-white font-bold hover:text-gray-300 w-[45px] h-[24px] text-[14px] tracking-[0.2px] text-center flex-none order-1"
              >
                Home
              </Link>
              <Link
                href="/pricing"
                className="text-white font-bold hover:text-gray-300 w-[59px] h-[24px] text-[14px] tracking-[0.2px] text-center flex-none order-2"
              >
                Pricing
              </Link>
              <Link
                href="/product"
                className="text-white font-bold hover:text-gray-300 w-[60px] h-[24px] text-[14px] tracking-[0.2px] text-center flex-none order-3 "
              >
                Product
              </Link>
              <Link
                href="/contact"
                className="text-white font-bold hover:text-gray-300 w-[60px] h-[24px] text-[14px] tracking-[0.2px] text-center flex-none order-4"
              >
                Contact
              </Link>
            </div>

            <div className="flex flex-row flex-grow-0 order-0 items-center left-[626px] gap-[45px] h-[52px] w-[189px] top-1/2-translate-y-[26px] right-0  ">
              <Link
                href="/login"
                className="text-white font-bold w-[41px] h-[22px] text-right left-1/2"
              >
                Login
              </Link>
              <div className="flex-none order-1 w-[214px] h-[52px] ">
                <button className="flex flex-row flex-grow-0 order-1 items-center w-[110px] h-[52px] px-[25px] py-[15px]  text-center gap-[15px] bg-[#23A6F0] rounded-[5px]">
                  <p className="w-[62px] h-[22px] text-[14px] tracking-[0.1px]  text-white font-bold ">
                    {" "}
                    JOIN US
                  </p>
                </button>
              </div>
            </div>
          </div>

         
        </div>
      </nav>
    </div>
  );
}

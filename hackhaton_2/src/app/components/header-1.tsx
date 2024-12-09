import Image from "next/image"
import phone from "@/images/icn settings icn-xs.png"
import mail from "@/images/icn settings icn-xs (1).png";
import insta from "@/images/icn settings icn-xs (2).png";
import yout from "@/images/icn settings icn-xs (3).png";
import fb from "@/images/icn settings icn-xs (4).png";
import twit from "@/images/icn settings icn-xs (5).png";



const socialIcons = [
  { src: insta, alt: "Instagram" },
  { src: yout, alt: "YouTube" },
  { src: fb, alt: "Facebook" },
  { src: twit, alt: "Twitter" },
];

const contactInfo = [
  { src: phone, alt: "Phone", text: "(225) 555-0118" },
  { src: mail, alt: "Mail", text: "michelle.rivera@example.com" },
];

export default function BlueHeader() {
  return (
    <div className="lg:block hidden w-full h-[58px] bg-[#252B42]">
      <div className="flex justify-between items-center w-full h-full px-[24px]">

        {/* Left Section: Contact Info */}
        <div className="flex gap-[10px]">
          {contactInfo.map((item, index) => (
            <button key={index} className="flex items-center gap-[5px] p-[10px] text-white">
              <Image src={item.src} alt={item.alt} width={16} height={16} />
              <span className="font-Montserrat font-semibold text-[14px]">{item.text}</span>
            </button>
          ))}
        </div>

        {/* Center Section: Follow Us */}
        <h6 className="font-Montserrat font-semibold text-[14px] text-white">
          Follow Us and get a chance to win 80% off
        </h6>

        {/* Right Section: Social Icons */}
        <div className="flex items-center gap-[10px]">
          <h6 className="font-Montserrat text-[14px] text-white">Follow Us:</h6>
          <div className="flex gap-[10px]">
            {socialIcons.map((icon, index) => (
              <Image key={index} src={icon.src} alt={icon.alt} width={16} height={16} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

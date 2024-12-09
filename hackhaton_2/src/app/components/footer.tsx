import Image from "next/image";
import fb from "@/images/facebook.png";
import instagram from "@/images/ant-design_instagram-outlined.png";
import twitter from "@/images/ant-design_twitter-outlined.png";

export default function Footer() {
  return (
    <footer className="bg-white absolute top-[5100px] left-[100px]">
      {/* Top Section */}
      <section className="py-10">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <h1 className="text-[#252b42] text-2xl font-bold">Bandage</h1>
          <div className="flex gap-6">
            <Image src={fb} alt="Facebook" className="w-6 h-6" />
            <Image src={instagram} alt="Instagram" className="w-6 h-6" />
            <Image src={twitter} alt="Twitter" className="w-6 h-6" />
          </div>
        </div>
      </section>

      {/* Divider */}
      <hr className="border-t border-[#e6e6e6]" />

      {/* Main Footer Content */}
      <section className="py-12">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h2 className="text-[#252b42] text-base font-bold">
                {section.title}
              </h2>
              <nav className="flex flex-col gap-2.5 mt-3">
                {section.links.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="text-[#727272] text-sm font-bold"
                  >
                    {link.text}
                  </a>
                ))}
              </nav>
            </div>
          ))}

          {/* Get in Touch */}
          <div>
            <h2 className="text-[#252b42] text-base font-bold">Get In Touch</h2>
            <div className="mt-3">
              <div className="relative mb-4">
                <input
                  type="email"
                  className="w-full h-12 px-4 border border-[#e6e6e6] rounded-lg bg-[#f8f8f8] text-[#727272] text-sm"
                  placeholder="Your Email"
                />
                <button className="absolute right-0 top-0 h-12 px-4 bg-[#23a6f0] text-white text-sm rounded-r-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-[#727272] text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bg-[#FAFAFA] py-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <p className="text-[#727272] text-sm font-bold">
            Made with love by Finland. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}

const footerLinks = [
  {
    title: "Company Info",
    links: [
      { text: "About Us", href: "#" },
      { text: "Careers", href: "#" },
      { text: "We Are Hiring", href: "#" },
      { text: "Blog", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { text: "Terms of Service", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Cookies", href: "#" },
      { text: "Refund Policy", href: "#" },
    ],
  },
  {
    title: "Features",
    links: [
      { text: "Business Marketing", href: "#" },
      { text: "User Analytics", href: "#" },
      { text: "Live Chat", href: "#" },
      { text: "Unlimited Support", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { text: "iOS & Android", href: "#" },
      { text: "Watch a Demo", href: "#" },
      { text: "Customers", href: "#" },
      { text: "API", href: "#" },
    ],
  },
];

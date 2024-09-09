import logo from "@/assets/logosaas.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] py-10 text-center">
      <div className="container">
        <div className="inline-flex relative">
          <div
            className="absolute inset-0 h-full w-full before:blur"
            style={{
              background:
                "linear-gradient(to right, #F87BFF, #FB92CF, #FFDD9B, #C2F0B1, #2FD8FE)",
            }}
          ></div>
          <Image
            src={logo}
            height={40}
            alt="SaaS logo"
            className="relative z-10"
          />
        </div>

        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Customers</a>
          <a href="">Pricings</a>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>
      </div>

      <div className="flex justify-center gap-6 mt-6 ">
        <SocialX />
        <SocialInsta />
        <SocialPin />
        <SocialLinkedIn />
        <SocialYoutube />
      </div>
      <p className="mt-6">&copy; 2024 All rights reserved.</p>
    </footer>
  );
};

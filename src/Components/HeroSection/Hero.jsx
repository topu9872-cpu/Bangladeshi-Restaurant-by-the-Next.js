import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdArrowOutward } from "react-icons/md";
import heroImage from "../../../public/assets/Image.png";
const Hero = () => {
  return (
    <div className="mx-auto">
      <div
        className="relative mt-17  w-full h-100 md:h-160 lg:h-300 rounded-sm overflow-hidden shadow-xl"
      >
        <Image
          src={heroImage}
          alt="Hero Food Image"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <Link href={"allCards"}>
            <button className="btn flex items-center px-2 py-1 text-sm font-bold rounded-full bg-[#fa3d3b] text-white border-none shadow-lg hover:bg-white hover:text-[#fa3d3b] transition-all duration-300">
              more <MdArrowOutward size={16} />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

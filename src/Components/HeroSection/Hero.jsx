import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div className="mx-auto w-11/12 mt-4">
      <div className="relative w-full h-100 md:h-160 lg:h-300 rounded-3xl overflow-hidden shadow-xl">
        <Image
          src="/image.png"
          alt="Hero Food Image"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute bottom-6 flex mx-auto justify-center left-2/5 lg:left-1/9 md:bottom-12 md:right-12">
          <button className="btn flex items-center gap-2 px-6 py-3 text-lg font-bold rounded-full bg-[#fa3d3b] text-white border-none shadow-lg hover:bg-white hover:text-[#fa3d3b] transition-all duration-300">
            More <MdArrowOutward size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

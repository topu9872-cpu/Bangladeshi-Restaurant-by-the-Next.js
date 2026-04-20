import Image from "next/image";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Hero = () => {
  return (
    <div>
      <div className=" mx-auto flex justify-center mt-1 w-11/12 relative">
        <Image src="/image.png" width={1280} height={600} alt="Iamge"></Image>
      </div>
      <span className="absolute -bottom-60 translate-x-160">
        <button className="btn flex items-center px-4 text-lg font-semibold rounded-full bg-orange-400 text-white hover:bg-white hover:text-orange-400 ">
          Find <MdArrowOutward />
        </button>
      </span>
    </div>
  );
};

export default Hero;

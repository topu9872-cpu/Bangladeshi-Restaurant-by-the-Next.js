"use client";
import React, { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const Ratting = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex items-center hover:scale-90 transition  cursor-pointer ">
      {active ? (
        <IoHeart
          className="text-[#fa3d3b] text-4xl border-2  shadow-[0_0_10px_#fa3d3b] rounded-full p-1 bg-white"
          onClick={() => setActive(false)}
        />
      ) : (
        <IoHeartOutline
          className=" text-4xl border-2 border-white shadow-[0_0_10px] rounded-full p-1 text-black bg-white"
          onClick={() => setActive(true)}
        />
      )}
    </div>
  );
};

export default Ratting;

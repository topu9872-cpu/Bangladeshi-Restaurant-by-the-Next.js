"use client";
import React, { useState } from "react";
import { IoHeart, IoHeartOutline } from "react-icons/io5";

const Ratting = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="flex items-center cursor-pointer ">
      {active ? (
        <IoHeart
          className="text-[#fa3d3b] text-3xl border-2 shadow-md rounded-full p-1 bg-white"
          onClick={() => setActive(false)}
        />
      ) : (
        <IoHeartOutline
          className=" text-3xl border-2 border-white shadow-md rounded-full p-1 bg-white"
          onClick={() => setActive(true)}
        />
      )}
    </div>
  );
};

export default Ratting;

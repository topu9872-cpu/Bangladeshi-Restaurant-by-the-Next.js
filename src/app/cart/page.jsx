"use client";
import BackOneByOne from "@/Components/BackOneByOne/BackOneByOne";
import { Context } from "@/Components/ContextProvider/ContextProvider";

import Image from "next/image";

import React, { useContext } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { toast } from "react-toastify";

const Cart = () => {
  const { cart, setCart } = useContext(Context);
  const AllDelete = () => {
    setCart([]);
    toast.error("All items are deleted");
  };
  const handleDelete = (i) => {
    const deleteCard = cart.filter((item) => item.id !== i.id);

    setCart(deleteCard);

    toast.error(`${i.name} item is deleted`);
  };
const total = cart.reduce((prev, item) => {
  const price = Number(item.price.replace("$", ""));
  return prev + (price || 0);
}, 0);

  return (
    <div>
     <div className="flex justify-between">
       <BackOneByOne />
       <h2 className="mt-20 text-2xl mr-12 items-center lg:mr-20 font-bold">{`Total: $${total}`}</h2>
     </div>

      <div className="mt-6 space-y-5">
        {cart.length === 0 && (
          <div className="card mt-10 mx-20 h-70 shadow-[0_0_30px_10px] shadow-sky-500 flex items-center text-2xl md:text-5xl text-center">
            <h1 className="flex items-center my-auto  text-center mx-auto ">
              This item is not Found
            </h1>
          </div>
        )}

     {cart.map((i, ind) => (
  <div key={ind} className="px-4 mb-4">
    <div className="flex flex-col sm:flex-row border  p-4 border-gray-300 shadow-[0_0_10px] shadow-sky-500 mx-auto max-w-7xl min-h-25 rounded-xl overflow-hidden">
      
      
      <div className="relative w-full  sm:w-40 h-40 sm:h-auto">
        <Image
          src={i.image}
          fill
          alt={i.name}
          className="object-cover rounded-xl"
        />
      </div>

     
      <div className="flex flex-1 items-center justify-between p-4 sm:pl-8">
        <div>
          <h1 className="text-lg sm:text-xl font-medium line-clamp-1">{i.name}</h1>
          <p className="text-gray-600 font-semibold">{i.price}</p>
          
         
          <div className="flex items-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <span
                key={index}
                className={`text-base sm:text-lg ${
                  index < Math.round(i.rating) ? "text-yellow-500" : "text-gray-300"
                }`}
              >
                ★
              </span>
            ))}
          </div>
        </div>

     
        <div className="flex items-center">
          <button
            onClick={() => handleDelete(i)}
            className="p-2 hover:bg-red-50 rounded-full transition-colors text-red-500 text-xl cursor-pointer"
            aria-label="Delete item"
          >
            <RiDeleteBin6Line />
          </button>
        </div>
      </div>

    </div>
  </div>
))}
        <button
          onClick={() => AllDelete()}
          className="flex justify-center cursor-pointer mx-auto bg-[#fa3d3b] hover:bg-white hover:text-[#fa3d3b] text-white w-full md: max-w-7xl h-10 rounded-full items-center text-xl font-bold my-10"
        >
          All Delete
        </button>
      </div>
    </div>
  );
};

export default Cart;

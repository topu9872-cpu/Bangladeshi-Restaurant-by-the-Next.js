"use client";
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
  const handleDalete = (i) => {
    const deleteCard = cart.filter((item) => item.id !== i.id);

    setCart(deleteCard);

    toast.error(`${i.name} item is deleted`);
  };
  return (
    <div className="mt-6 space-y-5">
      {cart.length === 0 && (
        <div className="card  mx-auto h-70 shadow-md flex items-center text-5xl text-center">
          <h1 className="flex items-center mt-30"> No Cards</h1>
        </div>
      )}
      {cart.map((i, ind) => (
        <div key={ind}>
          <div className="flex border border-gray-300 shadow-md object-cover  h-26 rounded-xl">
            <Image
              src={i.image}
              width={150}
              height={100}
              alt={i.name}
              className="object-cover rounded-l-xl "
            />
            <div className="ml-8 my-auto">
              <h1 className="text-xl font-medium">{i.name}</h1>
              <p>{i.price}</p>
              {Array.from({ length: 5 }).map((_, index) => (
                <span
                  key={index}
                  className={`text-lg ${
                    index < Math.round(i.rating)
                      ? "text-yellow-500"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <div className="flex justify-end ml-100">
              <button
                onClick={() => handleDalete(i)}
                className=" items-center text-red-500 text-xl cursor-pointer"
              >
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => AllDelete()}
        className="flex justify-center mx-auto bg-[#fa3d3b] hover:bg-white hover:text-[#fa3d3b] text-white w-full h-10 rounded-full items-center text-xl font-bold mt-10"
      >
        All Delete
      </button>
    </div>
  );
};

export default Cart;

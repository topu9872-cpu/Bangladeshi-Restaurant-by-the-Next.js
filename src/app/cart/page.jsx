"use client";
import { Context } from "@/Components/ContextProvider/ContextProvider";
import { handleBuildComplete } from "next/dist/build/adapter/build-complete";
import Image from "next/image";
import React, { useContext } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {
  const { cart, setCart } = useContext(Context);
  const handleDalete=({id})=>{
const deleteCard=cart.find(item=> item.id !== id)
setCart(deleteCard)
  }
  return (
    <div className="mt-6 space-y-5">
      {cart.map((i, ind) => (
        <div key={ind}>
          <div className="flex border border-gray-300 shadow-md  h-26 rounded-xl">
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
             
              <button onClick={()=>handleDalete(i.id)} className=" items-center text-red-500 text-xl cursor-pointer">
                <RiDeleteBin6Line />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;

// "id": 119,
//     "name": "Waffle Works",
//     "category": "Breakfast",
//     "price": "$12.50",
//     "time": "20 mins",
//     "rating": 4.6,
//     "desc": "Buttermilk waffles topped with crispy fried chicken and spicy maple syrup.",
//     "image": "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800",
//     "platesLeft": 18

'use client'

import { useContext } from "react";
import { Context } from "./ContextProvider";
import { toast } from "react-toastify";
import DashBoardPage from "@/app/dashboard/page";

 const ContextButton = ({data}) => {
    const {cart,
    setCart,}=useContext(Context)
  const handelAddToCart = () => {
   setCart([...cart,data])
   toast.success(`${data.name} is add to cart`)
   
  };

  return (
    <div>
      <button
        onClick={handelAddToCart}
        className="px-3 py-2 cursor-pointer  text-xs font-bold rounded-full bg-[#fa3d3b] text-white border-none shadow-md hover:bg-white hover:text-[#fa3d3b] transition-colors"
      >
        Add to Cart
      </button>
      
    </div>
    
  );
};

export default ContextButton;

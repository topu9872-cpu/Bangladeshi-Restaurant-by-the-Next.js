'use client'
import { toast } from 'react-toastify';

const HandleBuy = ({data}) => {
     const handleBuy=()=>{
    toast.success(`${data.name} order is Successfull`)
  }  
  return (
    <div>
      <button onClick={()=>handleBuy()} className="px-3 py-2 text-xs cursor-pointer  font-bold rounded-full bg-[#fa3d3b] text-white border-none shadow-md hover:bg-white hover:text-[#fa3d3b] transition-colors">
                    Buy Now
                  </button>
    </div>
  );
};

export default HandleBuy;
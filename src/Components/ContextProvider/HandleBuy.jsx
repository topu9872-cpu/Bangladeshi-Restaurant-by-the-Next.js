'use client';

import { useContext } from 'react';
import { toast } from 'react-toastify';
import { Context } from '@/Components/ContextProvider/ContextProvider';

const HandleBuy = ({ data }) => {
  const { setSelectedItem } = useContext(Context);

  const handleBuy = () => {
    toast.success(`${data.name} is Processed`);

    setSelectedItem(data); 
  };

  return (
    <button
      onClick={handleBuy}
      className="px-3 py-2 text-xs font-bold rounded-full bg-[#fa3d3b] text-white"
    >
      Order Now
    </button>
  );
};

export default HandleBuy;
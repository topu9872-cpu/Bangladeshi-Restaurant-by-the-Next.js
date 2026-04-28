import { getScrollCardsData } from '@/Components/JsonData/data';
import Ratting from '@/Components/ratting/Ratting';
import Image from 'next/image';
import React from 'react';
import { IoMdTime } from 'react-icons/io';

const AllCards =async () => {
    const datas=await getScrollCardsData()
  return (
    <div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center w-11/12 ">
        {datas.map((data) => (
          <div key={data.id} className="hover-3d my-0">
            <div className="rounded-xl shadow-lg  w-60 h-fit bg-[#faf0e6] pb-4 overflow-hidden hover:shadow-[#00ffff] transition-shadow">
              <figure className="relative h-40 w-full">
                <Image
                  src={data.image}
                  fill
                  alt={data.name}
                  className="object-cover"
                />
                <div className="absolute text-sm text-black top-2 right-2  rounded-full  shadow-sm">
                  <Ratting />
                </div>
              </figure>

              <div className="p-4">
                <h2 className="text-lg flex justify-between font-serif text-black text-nowrap italic font-bold">
                  {data.name}
                  <span className="items-center flex gap-1 font-normal text-xs text-gray-600">
                    <IoMdTime />
                    {data.time}
                  </span>
                </h2>

                <p className="text-xs text-gray-500 line-clamp-2 mt-1">
                  {data.desc}
                </p>

                <p className="font-bold text-xl text-[#fa3d3b] mt-2">
                  {data.price}
                </p>

                <div className="flex justify-between mt-4 gap-2">
                  <button className="px-3 py-2 text-xs font-bold rounded-full bg-[#fa3d3b] text-white border-none shadow-md hover:bg-white hover:text-[#fa3d3b] transition-colors">
                    Add to Cart
                  </button>
                  <button className="px-3 py-2 text-xs font-bold rounded-full bg-[#fa3d3b] text-white border-none shadow-md hover:bg-white hover:text-[#fa3d3b] transition-colors">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCards;
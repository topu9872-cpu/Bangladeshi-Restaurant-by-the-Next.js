import Image from "next/image";
import { IoMdTime } from "react-icons/io";

import Link from "next/link";
import Ratting from "@/Components/ratting/Ratting";
import ContextButton from "@/Components/ContextProvider/ContextButton";

import HandleBuy from "@/Components/ContextProvider/HandleBuy";

import CardCalclutation from "@/Components/CardCalclutation/CardCalclutation";

const Cards = ({ data }) => {
  return (
    <div>
      <div className="rounded-xl shadow-2xl card w-80 h-auto bg-[#faf0e6] pb-4 overflow-hidden hover:shadow-[0_0_30px_10px_#00ffff] transition-shadow">
        <figure className="relative h-40 ">
          <Image
            src={data.image}
            fill
            alt={data.name}
            className="object-cover"
          />
          <div className="absolute  top-2 cursor-pointer flex right-2 ">
            <Link href={`/cards/${data.id}`}>
              <button className="text-[#f6f6f6] font-bold  px-2 items-center">
                Details
              </button>
            </Link>
            <Ratting className="text-black left-7 rounded-full right-20 shadow-sm text-sm" />
          </div>
        </figure>

        <div className="p-4 ">
          <h2 className="text-lg flex justify-between font-serif text-black text-nowrap pr-2 italic font-bold">
            {data.name}
            <span className="items-center flex gap-1 font-normal pl-2 text-xs text-gray-600">
              <IoMdTime />
              {data.time}
            </span>
          </h2>

          <p className="text-xs text-gray-500 line-clamp-2 mt-1">{data.desc}</p>

          <div className="flex justify-between">
            <p className="font-bold text-xl text-[#fa3d3b] mt-2">
              {data.price}
            </p>
            <CardCalclutation />
          </div>
          <div className="flex justify-between mt-4 gap-2">
            <ContextButton data={data} />
            <HandleBuy data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

import Image from "next/image";
import { GetAllData } from "../ScrollCards/GetAllData";
import { IoMdTime } from "react-icons/io";
import Ratting from "../ratting/Ratting";

const FoodsOrderCards = async () => {
  const datas = await GetAllData();

  return (
    <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center w-11/12 py-10 ">
      {datas.slice(0, 3).map((data) => (
        <div key={data.id} className="hover-3d ">
          <div className="card w-full max-w-[384px] h-full rounded-xl shadow-lg hover:shadow-[#00ffff] bg-[#faf0e6]  transition-all duration-300 pb-6 ">
            <figure className="relative h-64 w-full ">
              <Image
                className="object-cover"
                src={data.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={data.name}
              />
            </figure>
            <div className=" absolute text-xl top-2 right-2"><Ratting/> </div>
            <div className="card-body  ">
              <h2 className="card-title text-xl flex justify-between font-serif italic">
                {data.name}
                <p className="items-center flex justify-end gap-1 font-normal text-sm">
                  <IoMdTime />
                  {data.time}
                </p>
              </h2>
              <p className="text-gray-500 line-clamp-2">{data.desc}</p>
              <p className="font-bold text-2xl text-[#fa3d3b]">{data.price}</p>
              <div className="flex justify-between mt-6">
                <button className="btn font-bold rounded-full bg-[#fa3d3b] text-white border-none shadow-lg hover:bg-white hover:text-[#fa3d3b]">
                  {" "}
                  Add to Cart
                </button>
                <button className="btn font-bold rounded-full bg-[#fa3d3b] text-white border-none shadow-lg hover:bg-white hover:text-[#fa3d3b]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FoodsOrderCards;

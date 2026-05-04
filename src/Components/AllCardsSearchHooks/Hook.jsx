"use client";
import { useState } from "react";
import { IoSearch, IoClose } from "react-icons/io5";

import Cards from "@/app/cards/Cards";

const Hook = ({ datas }) => {
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [search, setSearch] = useState("");

  const filterData = datas.filter((item) => {
    return item.name.toLowerCase().trim().includes(search.toLowerCase().trim());
  });

  if (!filterData) {
    return <div>This Item is not found</div>;
  }

  return (
    <div>
      <div className="flex justify-between container mt-20 mx-auto items-center">
        <div className="text-2xl  font-extrabold">All Items</div>
        <div>
          <div className="flex items-center">
            {isSearchActive ? (
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-2 border border-gray-200 animate-in fade-in zoom-in duration-200">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  value={search}
                  type="text"
                  placeholder="Search..."
                  className="input input-sm bg-transparent border-none focus:outline-none text-black w-24 md:w-48"
                  autoFocus
                />
                <IoClose
                  className="cursor-pointer text-xl text-gray-500 hover:text-[#fa3d3b]"
                  onClick={() => {
                    setIsSearchActive(false);
                    setSearch("");
                  }}
                />
              </div>
            ) : (
              <button
                className="btn btn-ghost btn-circle block sm:flex  hover:bg-orange-100"
                onClick={() => setIsSearchActive(true)}
              >
                <IoSearch className="text-xl" />
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto grid grid-cols-1 mt-7 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ">
        {filterData.map((card, ind) => (
          <Cards key={ind} data={card} />
        ))}
      </div>
    </div>
  );
};

export default Hook;

"use client";
import { useState } from "react";

import Cards from "@/app/cards/Cards";
import Search from "./Search";

const Hook = ({ datas }) => {
  const [search, setSearch] = useState("");

  const filterData = datas.filter((item) => {
    return item.name.toLowerCase().trim().includes(search.toLowerCase().trim());
  });

  return (
    <div>
      <Search search={search} setSearch={setSearch} />

      {filterData.length === 0 ? (
        <div className="card mt-10 mx-20 h-70 shadow-[0_0_30px_10px] shadow-sky-500 flex items-center text-2xl md:text-5xl text-center">
          <h1 className="flex items-center my-auto  text-center mx-auto ">
            This item is not Found
          </h1>
        </div>
      ) : (
        <div>
          <div className="mx-auto grid grid-cols-1 mt-7 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ">
            {filterData.map((card, ind) => (
              <Cards key={ind} data={card} />
            ))}
          </div>
        </div>
      )}
      <div />
    </div>
  );
};

export default Hook;

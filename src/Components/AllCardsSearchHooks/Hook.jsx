"use client";
import { useEffect, useState } from "react";

import Cards from "@/app/cards/Cards";
import Search from "./Search";

const Hook = ({ datas }) => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    setCurrentPage(1);
  }, [search]);

  const filterData = datas.filter((item) => {
    return item.name.toLowerCase().trim().includes(search.toLowerCase().trim());
  });

  const totalPages = Math.ceil(filterData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = filterData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <Search search={search} setSearch={setSearch} />

      {paginatedData.length === 0 ? (
        <div className="card mt-10 mx-20 h-70 shadow-[0_0_30px_10px] shadow-sky-500 flex items-center text-2xl md:text-5xl text-center">
          <h1 className="flex items-center my-auto  text-center mx-auto ">
            This item is not Found
          </h1>
        </div>
      ) : (
        <div>
          <div className="mx-auto grid grid-cols-1 mt-7 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 container justify-items-center ">
            {paginatedData.map((card, ind) => (
              <Cards key={ind} data={card} />
            ))}
          </div>
        </div>
      )}
      <div />
      <div className="flex justify-center my-20">
        <buttotn
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => p - 1)}
          className="px-4 py-2 bg-orange-500 text-white rounded disabled:poacity-50"
        >
          prev
        </buttotn>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 rounded ${
              currentPage === i + 1 ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((p) => p + 1)}
          className="px-4 py-2 bg-orange-500 text-white rounded disabled::opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Hook;

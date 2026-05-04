import React from "react";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { getScrollCardsData } from "@/lib/JsonData/data";

const ScrollCards = async () => {
  const cards = await getScrollCardsData();
  return (
    <div className="   mx-auto  flex justify-center  mt-10 ">
      <Marquee speed={30} pauseOnHover={true}>
        <div className="flex gap-5 justify-center h-70 mx-auto">
          {cards.map((card) => (
            <div key={card.id} className="w-40 h-46 text-center flex-col ">
              <Image
                className="size-20 rounded-full object-cover mx-auto"
                src={card.image}
                width={500}
                height={300}
                alt={card.name}
              />
              <div className="flex items-center gap-1 mt-2 justify-center">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span
                    key={index}
                    className={`text-lg ${
                      index < Math.round(card.rating)
                        ? "text-yellow-500"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <h1 className="text-lg font-semibold mt-3">{card.name}</h1>

              <p className="text-sm text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ScrollCards;

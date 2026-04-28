
import { getScrollCardsData } from "../JsonData/data";
import { CiLocationArrow1 } from "react-icons/ci";
import Link from "next/link";
import Cards from "../../app/cards/Cards";

const FoodsOrderCards = async () => {
  const datas = await getScrollCardsData();

  return (
    <div>
      <div className="mx-94">
        <Link href={"/allCards"}>
          <button className="text-center text-xs text-gray-500 flex items-center p-2 rounded-full shadow-md shadow-olive-400">
            All Foods <CiLocationArrow1 />
          </button>
        </Link>
        <h1 className="text-3xl text-center flex justify-center font-black py-6 font-serif text-nowrap">
          Khaas Vyanian
        </h1>
      </div>
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-items-center w-11/12 ">
        {datas.slice(0, 3).map((data) => (
          <div key={data.id} className="hover-3d my-0">
            <Cards data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodsOrderCards;

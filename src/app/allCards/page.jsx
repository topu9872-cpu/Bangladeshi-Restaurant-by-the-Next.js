import Cards from "@/app/cards/Cards";
import Hook from "@/Components/AllCardsSearchHooks/Hook";
import BackOneByOne from "@/Components/BackOneByOne/BackOneByOne";

import { getScrollCardsData } from "@/lib/JsonData/data";

const AllCards = async () => {
  const datas = await getScrollCardsData();
  return (
    <div >
 
      <BackOneByOne/>
      <Hook datas={datas}/>
    </div>
  );
};

export default AllCards;

import Cards from "@/app/cards/Cards";
import Hook from "@/Components/AllCardsSearchHooks/Hook";
import { getScrollCardsData } from "@/Components/JsonData/data";

const AllCards = async () => {
  const datas = await getScrollCardsData();
  return (
    <div >
   
       
      <Hook datas={datas}/>
      
      <div className="mx-auto grid grid-cols-1 mt-7 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center ">
        {datas.map((data) => (
          <div key={data.id} className="hover-3d my-0">
            <Cards data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCards;

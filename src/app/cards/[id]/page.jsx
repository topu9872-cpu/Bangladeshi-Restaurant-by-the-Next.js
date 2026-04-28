import { getScrollCardsData } from "@/Components/JsonData/data";
import { Card } from "@heroui/react";
import Image from "next/image";

const DetailsPage = async({params}) => {
    const {id}=await params;
    const data=await getScrollCardsData()
    const details =data.find(i=>i.id==id)
  return (
    <div>
      <Card className="border border-gray-300 p-4 container mx-auto mt-6 shadow-lg">
        <Image src={details.image} fill alt={details.name} className="object-cover max-w-50 rounded-l-md items-center">

        </Image>
    <div className="ml-60">
       <h1 className="text-2xl font-semibold"> {details.name}</h1>
     <p className="text-xl">{details.category}</p>
     <p className="text-sm text-gray-500">{details.desc}</p>
    </div>
     </Card>
    </div>
  )
};

export default DetailsPage;
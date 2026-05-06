import { getScrollCardsData } from "@/lib/JsonData/data";

import Image from "next/image";
import { Card, CloseButton } from "@heroui/react";
import BackOneByOne from "@/Components/BackOneByOne/BackOneByOne";
const DetailsPage = async ({ params }) => {
  const { id } = await params;
  const data = await getScrollCardsData();
  const details = data.find((i) => i.id == id);
  return (
    <div className="mt-20 ">
    <BackOneByOne/>
    <Card className="max-w-300 mx-auto items-stretch md:flex-row mt-10 shadow-[0_0_30px] shadow-sky-500">
      <div className="relative h-35 w-full shrink-0 overflow-hidden rounded-2xl sm:h-30 sm:w-30">
        <Image
          fill
          alt={details.name}
          className="pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none"
          loading="lazy"
          src={details.image}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="pr-8 text-3xl font-bold">
            {details.name}
          </Card.Title>
          <span className="text-lg font-medium text-foreground">
            {details.category}
          </span>
          <Card.Description>{details.desc}</Card.Description>
        </Card.Header>
      </div>
    </Card>
    </div>
  );
};

export default DetailsPage;

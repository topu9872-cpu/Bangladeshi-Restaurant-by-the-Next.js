"use client";

import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import { useContext } from "react";
import { Context } from "@/Components/ContextProvider/ContextProvider";
import BackOneByOne from "@/Components/BackOneByOne/BackOneByOne";

const DashBoardPage = () => {
  const { cart, selectedItem } = useContext(Context);

  const colors = ["#fa3d3b", "#def301"];

  const data = [
    { name: "Add to cart", value: cart?.length || 0 },
    { name: "Processed", value: selectedItem ? 1 : 0 },
  ];

  return (
    <div >
      <BackOneByOne />
      <div className="mt-6 space-y-5">
        {cart.length === 0 && (
          <div className="card mt-10 mx-20 h-70 shadow-[0_0_30px_10px] shadow-sky-500 flex items-center text-2xl md:text-5xl text-center">
          <h1 className="flex items-center my-auto  text-center mx-auto ">
            This item is not Found
          </h1>
        </div>
        )}
      </div>
      <div className="w-full h-80 flex mt-20  shadow-md">
        <div className="flex-1 border-none">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ bottom: 20 }}>
              <Pie
                data={data}
                innerRadius="80%"
                outerRadius="100%"
                cornerRadius="100%"
                paddingAngle={5}
                dataKey="value"
                fill="#8884d8"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={index} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />

              <Legend verticalAlign="bottom" align="center" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashBoardPage;

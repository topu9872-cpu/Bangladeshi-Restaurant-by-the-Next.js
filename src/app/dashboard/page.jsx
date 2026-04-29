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

const DashBoardPage = () => {
  const { cart, selectedItem } = useContext(Context);

  const colors = ["#fa3d3b", "#def301"];

  const data = [
    { name: "Add to cart", value: cart?.length || 0 },
    { name: "Processed", value: selectedItem ? 1 : 0 },
  ];

  if (!cart?.length && !selectedItem) {
    return (
      <div className="card mt-1 mx-auto h-70 shadow-md flex items-center justify-center text-3xl">
        No Cards
      </div>
    );
  }

  return (
    <div className="w-full h-80 flex mt-10  shadow-md">
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
  );
};

export default DashBoardPage;

'use client'
import { FaMinus, FaPlus } from "react-icons/fa";
import { useReducer } from "react";



const Calclutation = { qty: 1 };

const handleCalclutation = (state, action) => {
  switch (action.type) {
    case "inc":
      return { ...state, qty: state.qty + 1 };
    case "dec":
      return { ...state, qty: state.qty - 1 >1 ? state.qty -1:1};
    default:
      return state;
  }
};

const CardCalclutation = () => {
     const [state, dispatch] = useReducer(handleCalclutation, Calclutation);
  return (
    <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch({ type: "inc" })}
                className="text-lg border-2 border-white shadow-md text-black rounded-full p-1 "
              >
                <FaPlus />
              </button>
              <h1 className="text-black font-bold">{state.qty}</h1>
              <button
                onClick={() => dispatch({ type: "dec" })}
                className="text-lg border-2 border-white shadow-md rounded-full p-1 text-black"
              >
                <FaMinus />
              </button>
            </div>
  );
};

export default CardCalclutation;
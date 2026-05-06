'use client'
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
const BackOneByOne = () => {
    const router = useRouter();
  return (
    <div className="ml-4 md:ml-8 mt-20 ">
       <button
        onClick={() => router.back()}
        className=" flex items-center text-xl  font-bold"
      >
        <FaArrowLeft /> Back
      </button>
    </div>
  );
};

export default BackOneByOne;
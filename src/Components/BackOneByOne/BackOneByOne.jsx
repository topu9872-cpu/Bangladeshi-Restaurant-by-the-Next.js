'use client'
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa6";
const BackOneByOne = () => {
    const router = useRouter();
  return (
    <div>
       <button
        onClick={() => router.back()}
        className=" flex items-center font-bold"
      >
        <FaArrowLeft /> Back
      </button>
    </div>
  );
};

export default BackOneByOne;
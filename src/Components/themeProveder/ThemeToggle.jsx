"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
useEffect(()=>{
  setMounted(true)
},[])
if(!mounted){
return <div className="w-10 h-5"></div>
}
  const isDark = theme === "dark";
  return (
    <div>
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
          isDark ? "bg-blue-600" : "bg-cyan-600"
        }`}
      >
        <div
          className={`w-3 h-3 bg-white rounded-full flex items-center justify-center transition ${
            isDark && "translate-x-5"
          }`}
        >
          {isDark ? (
            <Sun className="w-3 h-3 text-yellow-600" />
          ) : (
            <Moon className="w-3 h-3 text-cyan-600" />
          )}
        </div>
      </button>
    </div>
  );
};

export default ThemeToggle;


"use client";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <div>
      <ThemeProvider attribute="data-theme" defaultTheme="light">
        {children}
      </ThemeProvider>
    </div>
  );
};

export default Providers;

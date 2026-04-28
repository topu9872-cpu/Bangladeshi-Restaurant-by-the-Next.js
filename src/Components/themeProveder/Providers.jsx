"use client";
import { ThemeProvider } from "next-themes";
import ContextProvider from "../ContextProvider/ContextProvider";

const Providers = ({ children }) => {
  return (
    <div>
      <ContextProvider>
        <ThemeProvider attribute="data-theme" defaultTheme="light">
        {children}
      </ThemeProvider>
      </ContextProvider>
    </div>
  );
};

export default Providers;

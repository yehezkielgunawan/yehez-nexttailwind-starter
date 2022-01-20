import clsx from "clsx";
import { useTheme } from "next-themes";
import React from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const HeaderComponent = () => {
  const { theme, setTheme } = useTheme();

  const handleChangeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className="fixed top-0 z-50 dark:bg-gray-800 w-full p-0.5 opacity-90">
      <div
        className={clsx(
          "layout flex justify-between items-center",
          "h-14 max-w-4xl mx-auto px-2 md:px-1"
        )}
      >
        <h5 className="font-bold text-black dark:text-white">yehezgun.com</h5>
        <button
          className={clsx(
            "p-2.5 rounded-md focus:outline-none",
            "bg-slate-200 dark:bg-slate-500",
            "hover:border-black hover:border dark:hover:border-gray-200"
          )}
          onClick={() => handleChangeTheme()}
        >
          {theme === "light" ? <BiSun size={20} /> : <BiMoon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;

import clsx from "clsx";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

const HeaderComponent = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  const handleChangeTheme = () => {
    return setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="fixed top-0 z-50 w-full bg-white p-0.5 opacity-90 dark:bg-gray-800">
      <div
        className={clsx(
          "layout flex items-center justify-between",
          "mx-auto h-14 max-w-4xl px-2 md:px-1"
        )}
      >
        <h5 className="font-bold text-black dark:text-white">yehezgun.com</h5>
        <button
          className={clsx(
            "rounded-md p-2.5 focus:outline-none",
            "bg-slate-200 dark:bg-slate-500",
            "hover:border hover:border-black dark:hover:border-gray-200"
          )}
          onClick={() => handleChangeTheme()}
        >
          {resolvedTheme === "light" ? (
            <BiMoon size={20} />
          ) : (
            <BiSun size={20} />
          )}
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;

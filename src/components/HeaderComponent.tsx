import clsx from "clsx";
import React from "react";
import { BiSun } from "react-icons/bi";

const HeaderComponent = () => {
  return (
    <header className="fixed top-0 z-50 bg-gray-200 w-full sm:p-1 md:p-2 opacity-90">
      <div className="layout flex justify-between items-center h-14 max-w-4xl mx-auto px-2 md:px-1">
        <h5 className="font-bold">yehezgun.com</h5>
        <button
          className={clsx(
            "p-2.5 rounded-md focus:outline-none",
            "border dark:border-gray-600",
            "dark:hover:border-primary-300 dark:hover:text-primary-300 hover:text-primary-300 hover:border-primary-300",
            "dark:focus-visible:border-primary-300 dark:focus-visible:text-primary-300 focus-visible:text-primary-300 focus-visible:border-primary-300"
          )}
        >
          <BiSun size={20} />
        </button>
      </div>
    </header>
  );
};

export default HeaderComponent;

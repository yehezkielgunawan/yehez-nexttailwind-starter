import React from "react";

const HeaderComponent = () => {
  return (
    <header className="fixed top-0 z-50 bg-gray-200 w-full sm:p-1 md:p-2">
      <div className="layout flex justify-between items-center h-14 max-w-4xl mx-auto px-2 md:px-1">
        <h5 className="font-bold">yehezgun.com</h5>
        <h5>HAI</h5>
      </div>
    </header>
  );
};

export default HeaderComponent;

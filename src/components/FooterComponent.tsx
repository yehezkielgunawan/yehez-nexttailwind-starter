import React from "react";

const FooterComponent = () => {
  return (
    <footer className="bottom-0 text-center py-16">
      <a
        href="https://yehezgun.com"
        target="_blank"
        className="font-semibold hover:underline hover:cursor-ne-resize"
        rel="noreferrer"
      >
        {new Date().getFullYear()} | Yehezkiel Gunawan
      </a>
    </footer>
  );
};

export default FooterComponent;

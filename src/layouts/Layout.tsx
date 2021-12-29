import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="layout-container">{children}</div>
    </section>
  );
};

export default Layout;

import React from "react";

const ContainerWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section>
      <div className="layout-container">{children}</div>
    </section>
  );
};

export default ContainerWrapper;

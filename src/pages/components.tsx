import React from "react";

import RegularLink from "@/components/links/RegularLink";
import Layout from "@/layouts/Layout";

const Components = () => {
  return (
    <Layout>
      <main className="flex flex-col gap-3">
        <h1>Reusable Components</h1>
        <h3>Regular Link</h3>
        <div className="flex flex-row gap-3">
          <RegularLink href="/">Internal Link</RegularLink>
          <RegularLink href="https://yehezgun.com">External Link</RegularLink>
        </div>
      </main>
    </Layout>
  );
};

export default Components;

import React from "react";

import UnstyledLink from "@/components/links/UnstyledLink";
import Layout from "@/layouts/Layout";

const Components = () => {
  return (
    <Layout>
      <main className="flex flex-col gap-3">
        <h1>Reusable Components</h1>
        <h3>Regular Link</h3>
        <div className="flex flex-row gap-3">
          <UnstyledLink href="/">Internal Link</UnstyledLink>
          <UnstyledLink href="https://yehezgun.com">External Link</UnstyledLink>
        </div>
      </main>
    </Layout>
  );
};

export default Components;

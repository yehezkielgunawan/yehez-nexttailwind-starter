import React from "react";

import UnstyledLink from "@/components/links/UnstyledLink";
import Layout from "@/layouts/Layout";

const Components = () => {
  return (
    <Layout>
      <main className="min-h-screen py-10">
        <h1>Reusable Components</h1>
        <ol className="mt-8 space-y-4">
          <li className="space-y-1">
            <h3>Regular Link</h3>
            <div className="flex flex-wrap gap-2">
              <UnstyledLink href="/">Internal Link</UnstyledLink>
              <UnstyledLink href="https://yehezgun.com">
                External Link
              </UnstyledLink>
            </div>
          </li>
        </ol>
      </main>
    </Layout>
  );
};

export default Components;

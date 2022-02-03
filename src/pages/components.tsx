import React from "react";

import ArrowLink from "@/components/links/ArrowLink";
import PrimaryLink from "@/components/links/PrimaryLink";
import UnderlineLink from "@/components/links/UnderlineLink";
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
          <li className="space-y-1">
            <h3>Primary Link</h3>
            <div className="flex flex-wrap gap-2">
              <PrimaryLink href="/">Regular link</PrimaryLink>
              <PrimaryLink href="https://yehezgun.com">
                External link
              </PrimaryLink>
            </div>
          </li>
          <li className="space-y-1">
            <h3>Underline Link</h3>
            <div className="flex flex-wrap gap-2">
              <UnderlineLink href="/">Internal Link</UnderlineLink>
              <UnderlineLink href="https://yehezgun.com">
                External Link
              </UnderlineLink>
            </div>
          </li>
          <li className="space-y-1">
            <h3>Arrow Link</h3>
            <div className="flex flex-wrap gap-2">
              <ArrowLink href="https://yehezgun.com" direction="left">
                Direction Left
              </ArrowLink>
              <ArrowLink href="https://yehezgun.com" direction="right">
                Direction Right
              </ArrowLink>
              <ArrowLink
                href="https://yehezgun.com"
                direction="right"
                as={UnstyledLink}
                className="inline-flex items-center"
              >
                Polymorphism
              </ArrowLink>
            </div>
          </li>
        </ol>
      </main>
    </Layout>
  );
};

export default Components;

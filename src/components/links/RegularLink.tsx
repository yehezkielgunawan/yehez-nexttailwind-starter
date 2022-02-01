import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import React from "react";

type RegularLinkProps = {
  href: string;
  children: React.ReactNode;
  isOpenNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, "href">;
} & React.ComponentPropsWithRef<"a">;

const RegularLink = ({
  href,
  children,
  isOpenNewTab,
  className,
  nextLinkProps,
}: RegularLinkProps) => {
  const isNewTab =
    isOpenNewTab !== undefined
      ? (isOpenNewTab = true)
      : href && !href.startsWith("/") && !href.startsWith("#");
  if (isNewTab) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx("cursor-newtab", className)}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} {...nextLinkProps}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default RegularLink;

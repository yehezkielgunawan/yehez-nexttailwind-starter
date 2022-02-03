import React from "react";

import UnstyledLink, { UnstyledLinkProps } from "./UnstyledLink";

import clsxm from "@/lib/helpers/clsxm";

const UnderlineLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, className, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          "border-b border-dotted",
          "border-dark hover:border-black/0 dark:border-white dark:hover:border-white/0",
          "inline-flex items-center hover:border-2 hover:border-solid hover:border-b-primary-500 dark:hover:border-b-primary-400",
          "focus-visible:dashed focus:outline-none focus-visible:ring focus-visible:ring-primary-500 focus-visible:ring-offset-2",
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default UnderlineLink;

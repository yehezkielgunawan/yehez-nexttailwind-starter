import React from "react";

import clsxm from "@/lib/helpers/clsxm";

export type UnstyledTextAreaProps = {
  className?: string;
  labelName?: string;
} & React.ComponentPropsWithRef<"textarea">;

const UnstyledTextArea = React.forwardRef<
  HTMLTextAreaElement,
  UnstyledTextAreaProps
>(({ labelName, className, ...rest }, ref) => {
  if (labelName) {
    return (
      <label className="block">
        <span className="text-gray-700 dark:text-gray-100">{labelName}</span>
        <textarea
          ref={ref}
          className={clsxm("mt-1 block w-full dark:bg-slate-600", className)}
          rows={3}
          {...rest}
        ></textarea>
      </label>
    );
  }
  return (
    <textarea
      ref={ref}
      className={clsxm("mt-1 block w-full", className)}
      rows={3}
      {...rest}
    ></textarea>
  );
});

export default UnstyledTextArea;

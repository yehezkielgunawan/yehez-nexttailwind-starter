import React from "react";

import clsxm from "@/lib/helpers/clsxm";

export type UnstyledInputProps = {
  className?: string;
  labelName?: string;
} & React.ComponentPropsWithRef<"input">;

const UnstyledInput = React.forwardRef<HTMLInputElement, UnstyledInputProps>(
  ({ labelName, className, ...rest }, ref) => {
    if (labelName) {
      if (rest.type === "checkbox") {
        return (
          <label className="inline-flex items-center">
            <input
              ref={ref}
              className={clsxm(className)}
              type="checkbox"
              {...rest}
            />
            <span className="ml-2">{labelName}</span>
          </label>
        );
      }
      return (
        <label className="block">
          <span className="text-gray-700 dark:text-gray-100">{labelName}</span>
          <input
            ref={ref}
            className={clsxm("mt-1 block w-full dark:bg-slate-600 dark:placeholder:text-gray-400", className)}
            {...rest}
          />
        </label>
      );
    }
    return (
      <input
        ref={ref}
        className={clsxm("mt-1 block w-full", className)}
        {...rest}
      />
    );
  }
);

export default UnstyledInput;

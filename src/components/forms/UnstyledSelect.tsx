import React from "react";

import clsxm from "@/lib/helpers/clsxm";

export type UnstyledSelectProps = {
  className?: string;
  labelName?: string;
  defaultValue?: string;
  optionList: Array<string>;
} & React.ComponentPropsWithRef<"select">;

const UnstyledSelect = React.forwardRef<HTMLSelectElement, UnstyledSelectProps>(
  ({ className, labelName, defaultValue, optionList, ...rest }, ref) => {
    if (labelName) {
      return (
        <label className="block">
          <span className="text-gray-700 dark:text-gray-100">{labelName}</span>
          <select
            ref={ref}
            className={clsxm("mt-1 block w-full dark:bg-slate-600",className)}
            {...rest}
          >
            {!defaultValue && (
              <option value="">--Please Choose an Option--</option>
            )}
            {optionList.map((singleOption, index) => {
              return (
                <option key={index} value={singleOption}>
                  {singleOption}
                </option>
              );
            })}
          </select>
        </label>
      );
    }
    return (
      <select
        ref={ref}
        className={clsxm("mt-1 block w-full", className)}
        {...rest}
      >
        {optionList.map((singleOption, index) => {
          return (
            <option key={index} value={singleOption}>
              {singleOption}
            </option>
          );
        })}
      </select>
    );
  }
);

export default UnstyledSelect;

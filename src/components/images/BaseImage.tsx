import React, { useState } from "react";

import clsxm from "@/lib/helpers/clsxm";

type BaseImageProps = {
  useSkeleton?: boolean;
  className?: string;
  imgClassName?: string;
} & React.ComponentPropsWithRef<"img">;

const BaseImage = React.forwardRef<HTMLImageElement, BaseImageProps>(
  ({ useSkeleton = false, className, imgClassName, ...rest }, ref) => {
    const [status, setStatus] = useState<string>(
      useSkeleton ? "loading" : "complete"
    );
    return (
      <figure ref={ref} className={clsxm(className)}>
        <img
          src={clsxm(imgClassName, status === "loading" && "animate-pulse")}
          alt={rest.alt}
          onLoad={() => setStatus("complete")}
          {...rest}
        />
      </figure>
    );
  }
);

export default BaseImage;

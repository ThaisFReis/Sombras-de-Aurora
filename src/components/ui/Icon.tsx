import type { MouseEventHandler } from "react";
import { Icon as Iconify } from "@iconify/react";

type Props = {
  id?: string;
  src?: string;
  icon?: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLImageElement | SVGSVGElement>;
};

export const Icon = ({
  id,
  icon,
  width,
  height,
  className,
  alt,
  onClick,
  src,
}: Props) => {
  if (icon) {
    return (
      <Iconify
        icon={icon}
        width={width ?? 24}
        height={height ?? 24}
        className={className}
        onClick={onClick}
      />
    );
  }

  return (
    <img
      id={id}
      src={src}
      alt={alt}
      width={width ?? 24}
      height={height ?? 24}
      className={className}
      onClick={onClick}
    />
  );
};

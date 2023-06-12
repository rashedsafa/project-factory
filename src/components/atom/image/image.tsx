import React, { ImgHTMLAttributes } from "react";
import "./image.scss";

type InheritedProps = Pick<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt" | "width" | "height"
>;
interface ImageProps extends InheritedProps {
  radius?: number;
}

export const Image = ({ radius, alt, ...rest }: ImageProps) => {
  return (
    <div className="a-image" style={{ borderRadius: `${radius}px` }}>
      <img alt={alt} {...rest} />
    </div>
  );
};

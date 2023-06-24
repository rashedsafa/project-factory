import { ImgHTMLAttributes } from "react";

type InheritedProps = Pick<
  ImgHTMLAttributes<HTMLImageElement>,
  "src" | "alt" | "width" | "height"
>;
interface ImageProps extends InheritedProps {
  radius?: 10 | 25;
}

export const Image = ({ radius, alt, ...rest }: ImageProps) => {
  return (
    <div
      className={["a-image", `${radius ? `a-image--${radius}` : ""}`].join(" ")}
    >
      <img alt={alt} {...rest} />
    </div>
  );
};

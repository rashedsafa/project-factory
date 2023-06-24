import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  level: "h1" | "h2" | "h3" | "h4";
  size?: number;
  background?: string;
  className?: string;
}

export const Heading: (props: HeadingProps) => JSX.Element = ({
  children,
  level: HTMLTag = "h2",
  size,
  background,
  className,
}) => {
  return (
    <HTMLTag
      className={[
        "a-heading",
        `${size ? `a-heading--${size}` : ""}`,
        `${background ? "a-heading--withBg" : ""}`,
        `${className ? className : ""}`,
      ].join(" ")}
      data-background-text={background}
    >
      {children}
    </HTMLTag>
  );
};

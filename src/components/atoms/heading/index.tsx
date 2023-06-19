import React from "react";

interface HeadingProps {
  children: React.ReactNode;
  level: "h1" | "h2" | "h3";
  size?: number;
  background?: string;
}

export const Heading: (props: HeadingProps) => JSX.Element = ({
  children,
  level: HTMLTag = "h2",
  size,
  background,
}) => {
  return (
    <HTMLTag
      className={[
        "a-heading",
        `${size ? `a-heading--${size}` : ""}`,
        `${background ? "a-heading--withBg" : ""}`,
      ].join(" ")}
      data-background-text={background}
    >
      {children}
    </HTMLTag>
  );
};

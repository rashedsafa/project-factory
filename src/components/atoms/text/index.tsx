import React from "react";

interface TextProps {
  children: React.ReactNode;
  size?: number;
  lineHeight?: number;
}

export const Text: (props: TextProps) => JSX.Element = ({
  children,
  size = 16,
  lineHeight,
}) => {
  return (
    <div
      className={["a-text", `a-text--${size}`].join(" ")}
      style={{ lineHeight: lineHeight }}
    >
      {children}
    </div>
  );
};

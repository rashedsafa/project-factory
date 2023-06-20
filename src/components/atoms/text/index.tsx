import React from "react";

interface TextProps {
  children: React.ReactNode;
  size?: number;
}

export const Text: (props: TextProps) => JSX.Element = ({ children, size }) => {
  return (
    <div className={["a-text", `${size ? `a-text--${size}` : ""}`].join(" ")}>
      {children}
    </div>
  );
};

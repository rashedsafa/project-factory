import React from "react";

interface TextProps {
  children: React.ReactNode;
  size?: number;
  className?: string;
}

export const Text: (props: TextProps) => JSX.Element = ({
  className,
  size,
  children,
}) => {
  return (
    <div
      className={[
        "a-text",
        `${size ? `a-text--${size}` : ""}`,
        `${className ? className : ""}`,
      ].join(" ")}
    >
      {children}
    </div>
  );
};

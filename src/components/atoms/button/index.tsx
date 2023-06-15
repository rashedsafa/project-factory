import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  mode?: "primary" | "secondary";
  icon?: boolean;
  size?: "small" | "large" | "medium";
  onClick?: () => void;
}

export const Button: (props: ButtonProps) => JSX.Element = ({
  children,
  mode,
  icon = false,
  size,
  ...props
}) => {
  return (
    <button
      type="button"
      className={[
        "a-button",
        `${icon ? "a-button--icon" : ""}`,
        `${size ? "a-button--" + size : ""}`,
        `${mode ? "a-button--" + mode : ""}`,
      ].join(" ")}
      {...props}
    >
      {children}
    </button>
  );
};

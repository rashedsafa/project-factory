import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: (props: CardProps) => JSX.Element = ({
  children,
  className,
}) => {
  return (
    <div className={["m-card", `${className ? className : ""}`].join(" ")}>
      {children}
    </div>
  );
};

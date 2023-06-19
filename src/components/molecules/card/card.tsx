import React from "react";

interface CardProps {
  children: React.ReactNode;
}

export const Card: (props: CardProps) => JSX.Element = ({ children }) => {
  return <div className="m-card">{children}</div>;
};

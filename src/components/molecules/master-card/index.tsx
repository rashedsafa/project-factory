import React from "react";

interface MasterCardProps {
  children: React.ReactNode;
}

export const MasterCard: (props: MasterCardProps) => JSX.Element = ({
  children,
}) => {
  return <div className="m-masterCard">{children}</div>;
};

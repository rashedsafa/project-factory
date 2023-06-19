import React from "react";
import { Icon } from "../../atoms/icon";

interface ListProps {
  children: React.ReactNode[];
}

export const List: (props: ListProps) => JSX.Element = ({ children }) => {
  return (
    <ul className="m-list">
      {children.map((item, index) => (
        <li className="m-list__item" key={index}>
          <Icon icon="tick" />
          {item}
        </li>
      ))}
    </ul>
  );
};

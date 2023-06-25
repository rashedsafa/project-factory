import { SessionCard, SessionCardProps } from "../../molecules/session-card";

interface SessionListProps {
  sessionArray: SessionCardProps[];
}

export const SessionList: (props: SessionListProps) => JSX.Element = ({
  sessionArray,
}) => {
  return (
    <ul className="o-sessionList">
      {sessionArray.map((session, index) => (
        <li className="o-sessionList__item" key={index}>
          <SessionCard {...session} />
        </li>
      ))}
    </ul>
  );
};

import { Icon } from "../../atoms/icon";

export interface SessionStripProps {
  session: string;
  duration: string;
  date: string;
  videoLink: string;
}

export const SessionStrip: (props: SessionStripProps) => JSX.Element = ({
  session,
  duration,
  date,
  videoLink,
}) => {
  return (
    <div className="m-sessionStrip">
      <div className="m-sessionStrip__inner">
        <div className="m-sessionStrip__session">{session}</div>
        <div className="m-sessionStrip__details">
          <div className="m-sessionStrip__detailsItem">
            <Icon icon="clock" />
            <span>{`Duration: ${duration}`}</span>
          </div>
          <div className="m-sessionStrip__detailsItem">
            <Icon icon="calendar" />
            <span>{`Date: ${date}`}</span>
          </div>
          <a href={videoLink} className="m-sessionStrip__detailsItem">
            <Icon icon="play" />
            <span>Play Video</span>
          </a>
        </div>
      </div>
    </div>
  );
};
